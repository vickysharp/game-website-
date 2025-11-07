// Save title and description to localStorage
const saveBtn = document.getElementById("saveBtn");
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const title = document.getElementById("titleInput").value;
    const desc = document.getElementById("descInput").value;

    localStorage.setItem("siteTitle", title);
    localStorage.setItem("siteDesc", desc);

    alert("Changes saved! Refresh the homepage to see updates.");
  });
}

// Load saved title/description on index.html
if (document.getElementById("siteTitle")) {
  const savedTitle = localStorage.getItem("siteTitle");
  const savedDesc = localStorage.getItem("siteDesc");

  if (savedTitle) document.getElementById("siteTitle").innerText = savedTitle;
  if (savedDesc) document.getElementById("siteDesc").innerText = savedDesc;
}

// Simulate file uploads (for preview only)
const fileUpload = document.getElementById("fileUpload");
if (fileUpload) {
  fileUpload.addEventListener("change", () => {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";

    Array.from(fileUpload.files).forEach(file => {
      const li = document.createElement("div");
      li.textContent = "📁 " + file.name;
      fileList.appendChild(li);
    });
  });
}
