function selectGear(name, desc, targetView, element) {
  document.getElementById("item-name").innerText = name;
  document.getElementById("item-desc").innerText = desc;
  document.getElementById("empty-state").style.display = "none";
  document.getElementById("selection-content").style.display = "block";

  const btn = document.getElementById("view-details-btn");
  btn.style.display = "block";
  btn.dataset.target = targetView;

  document.querySelectorAll(".gear").forEach((el) => el.classList.remove("active"));
  element.classList.add("active");
}

function switchView(viewId) {
  document.querySelectorAll(".view-section").forEach((view) => {
    view.classList.remove("active");
  });

  const nextView = document.getElementById(viewId);

  if (nextView) {
    nextView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}