// Zenodo data loader.
//
// The snapshot in /data/zenodo.json is several megabytes. It used to be cached
// in sessionStorage, but sessionStorage has a ~5 MB per-origin quota that Safari
// counts in UTF-16 (2 bytes/char), so the ~4.4M-character payload overflowed it.
// setItem() then threw QuotaExceededError, the catch set dataSaved="false", and
// every inject's `while (!isDataSaved())` loop span forever -> nothing rendered.
//
// Fix: keep the parsed data in an in-memory variable (the single source of truth
// for the page) and persist it to IndexedDB (no practical size limit) so repeat
// visits within the hour skip the network. sessionStorage is no longer used for
// the payload. Public API (makeid, isDataSaved, getApiResponse,
// refreshZenodoSnapshot) is unchanged so the existing injects keep working.

(function () {
  "use strict";

  var DATA_URL = "/data/zenodo.json";
  var DATA_MAX_AGE = 60 * 60 * 1000; // 1 hour
  var IDB_NAME = "metapsyZenodo";
  var IDB_STORE = "cache";
  var IDB_KEY = "apiResponse";
  var RETRY_DELAY = 5000;

  // In-memory cache: the authoritative copy for this page view.
  var _data = null;
  var _loading = null;

  // ---- IndexedDB helpers (best-effort; any failure falls back to network) ----
  function idbOpen() {
    return new Promise(function (resolve, reject) {
      var req;
      try {
        req = indexedDB.open(IDB_NAME, 1);
      } catch (e) {
        reject(e);
        return;
      }
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  function idbGet(key) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(IDB_STORE, "readonly");
        var req = tx.objectStore(IDB_STORE).get(key);
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror = function () { reject(req.error); };
      });
    }).catch(function () { return null; });
  }

  function idbSet(key, value) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(IDB_STORE, "readwrite");
        tx.objectStore(IDB_STORE).put(value, key);
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    }).catch(function () { /* persistence is optional */ });
  }

  function fetchData() {
    return fetch(DATA_URL, { cache: "no-cache" }).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load " + DATA_URL + ": " + res.status);
      }
      return res.json();
    });
  }

  function load() {
    var now = Date.now();
    // 1) Try a fresh IndexedDB cache.
    return idbGet(IDB_KEY).then(function (cached) {
      if (cached && cached.data &&
          typeof cached.savedAt === "number" &&
          (now - cached.savedAt) <= DATA_MAX_AGE) {
        _data = cached.data;
        return _data;
      }
      // 2) Fetch from the network; make data available in memory immediately
      //    so injects can render even if persistence later fails.
      return fetchData().then(function (data) {
        _data = data;
        idbSet(IDB_KEY, { data: data, savedAt: now }); // best-effort, async
        console.log("Zenodo data refreshed at:", new Date(now).toLocaleString());
        return data;
      });
    });
  }

  function startLoading() {
    if (_data) return;
    _loading = load().catch(function (err) {
      console.error(err);
      _loading = null;
      // Transient failure (offline, 5xx): retry so injects don't hang forever.
      setTimeout(startLoading, RETRY_DELAY);
    });
  }

  // ---- Public API (kept backward-compatible with the injects) ----
  window.isDataSaved = function () { return _data !== null; };

  window.getApiResponse = function () { return _data; };

  window.makeid = function (length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  window.refreshZenodoSnapshot = function () {
    _data = null;
    _loading = null;
    idbSet(IDB_KEY, { data: null, savedAt: 0 });
    startLoading();
  };

  // Kick off loading now; injects poll isDataSaved() until the data is ready.
  startLoading();
})();
