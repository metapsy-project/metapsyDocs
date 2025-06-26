---
title: "Refresh Zenodo Data"
url: "/refresh/"
draft: false
sitemap:
  priority: 0.0
  changefreq: "never"
  filename: "none"
robots: "noindex, nofollow"
---

<button id="refresh-btn" class="btn btn-primary">Refresh Zenodo Data</button>
<p id="status-msg"></p>


<br></br>

<script>
document.getElementById("refresh-btn").addEventListener("click", async () => {
  const res = await fetch("/.netlify/functions/refresh-zenodo");
  const msg = await res.json();
  document.getElementById("status-msg").innerText = msg.message || msg.error;
});
</script>
