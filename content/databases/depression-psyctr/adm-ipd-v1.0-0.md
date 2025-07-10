---
title: References of studies excluded based on full-text screening
description: Documentation of the database release & versioning workflow
type: docs
hidden: true
exclude_topic: true
---
***

<style>
body > section > div > div > div.col-lg-3 {
    display: none !important;
}
</style>

- 📄 **Manuscript/Project:** "Modifiers in Effects of Combined Pharmacotherapy and Psychotherapy versus Pharmacotherapy Alone for Adult Depression: An Individual Participant Data Meta-Analysis".
- ⏰ **Upload Date (Version)**: 2025-07-10, 1.0-0
- 🔍 **Search Range**: 2024-09-01

---

<br>

<span id="references-box">
  <button
    type="button"
    class="btn btn-default dropdown-toggle expand-btn"
    data-toggle="collapse"
    href="#collapseReferences"
    role="button"
    aria-expanded="false"
  >
    Exclusions at full-text screening from the Metapsy Depression database<span class="caret"></span>
  </button>
  <div class="collapse" id="collapseReferences">
    <div class="card card-body p-3" style="max-height: 350px; overflow: scroll;">
      <a href="/uploads/excluded-db.json"><i class="bi bi-file-earmark-arrow-down-fill"></i> Download (JSON)</a>
      <span id="ph-references"></span>
    </div>
  </div>
  <br />
</span>

<span id="references-box-2">
  <button
    type="button"
    class="btn btn-default dropdown-toggle expand-btn"
    data-toggle="collapse"
    href="#collapseReferences2"
    role="button"
    aria-expanded="false"
  >
    Exclusions at full-text screening for the meta-analysis<span class="caret"></span>
  </button>
  <div class="collapse" id="collapseReferences2">
    <div class="card card-body p-3" style="max-height: 350px; overflow: scroll;">
      <a href="/uploads/excluded-db.json"><i class="bi bi-file-earmark-arrow-down-fill"></i> Download (JSON)</a>
      <span id="ph-references-2"></span>
    </div>
  </div>
  <br />
</span>

<br>

<script>
  fetch('/uploads/excluded-db.json')  // Update path if needed
    .then(response => response.json())
    .then(data => {
      const list = document.createElement('ol');
      list.style.fontSize = '10px';
      data.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.study.trim()} (${entry["reason for exclusion"].trim()})`;
        list.appendChild(li);
      });
      document.getElementById('ph-references').appendChild(list);
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
      document.getElementById('ph-references').textContent = 'Failed to load data.';
    });
  fetch('/uploads/excluded-ma.json')  // Update path if needed
    .then(response => response.json())
    .then(data => {
      const list = document.createElement('ol');
      list.style.fontSize = '10px';
      data.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.Study.trim()} (${entry["Reason for exclusion"].trim()})`;
        list.appendChild(li);
      });
      document.getElementById('ph-references-2').appendChild(list);
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
      document.getElementById('ph-references-2').textContent = 'Failed to load data.';
    });
</script>
