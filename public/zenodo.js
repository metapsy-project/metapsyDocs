// If nothing cached in this tab yet, fetch the static snapshot
if (sessionStorage.getItem("apiResponse") === null) {
  async function fetchData() {
    const res = await fetch("/data/zenodo.json", { cache: "force-cache" });
    if (!res.ok) throw new Error(`Failed to load /data/zenodo.json: ${res.status}`);
    return await res.json();
  }

  async function saveApiResponse() {
    try {
      const data = await fetchData();
      sessionStorage.setItem("apiResponse", JSON.stringify(data));
      sessionStorage.setItem("dataSaved", "true");
    } catch (err) {
      console.error(err);
      sessionStorage.setItem("dataSaved", "false");
    }
  }

  saveApiResponse();
}

// random id generator function (unchanged)
function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// check if data is loaded function (unchanged)
function isDataSaved() {
  return sessionStorage.getItem("dataSaved") === "true";
}

// (nice to have) quick accessor for the cached data
function getApiResponse() {
  const raw = sessionStorage.getItem("apiResponse");
  return raw ? JSON.parse(raw) : null;
}

function refreshZenodoSnapshot() {
  sessionStorage.removeItem("apiResponse");
  sessionStorage.setItem("dataSaved", "false");
  // then re-run saveApiResponse() or reload the page
}
