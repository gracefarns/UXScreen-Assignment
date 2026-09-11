// --- Screen 1: time stepper ---
(function () {
  var display = document.getElementById("minutes-display");
  if (!display) return;

  var STORAGE_KEY = "gapfillMinutes";
  var minutes = parseInt(localStorage.getItem(STORAGE_KEY), 10);
  if (isNaN(minutes)) minutes = 45;

  var MIN = 5;
  var MAX = 180;
  var STEP = 5;

  function render() {
    display.textContent = minutes;
    localStorage.setItem(STORAGE_KEY, minutes);
  }
  render();

  document.getElementById("decrease").addEventListener("click", function () {
    minutes = Math.max(MIN, minutes - STEP);
    render();
  });

  document.getElementById("increase").addEventListener("click", function () {
    minutes = Math.min(MAX, minutes + STEP);
    render();
  });
})();

// --- Screen 3: plan headline, progress bar, task completion ---
(function () {
  var headline = document.getElementById("minutes-headline");
  if (!headline) return;

  var STORAGE_KEY = "gapfillMinutes";
  var available = parseInt(localStorage.getItem(STORAGE_KEY), 10);
  if (isNaN(available)) available = 45;

  headline.textContent = available + " minutes free";

  var circles = document.querySelectorAll(".task-circle");
  var plannedTotal = 0;
  circles.forEach(function (c) {
    plannedTotal += parseInt(c.getAttribute("data-minutes"), 10);
  });

  function updateProgress() {
    var pct = Math.max(0, Math.min(100, (plannedTotal / available) * 100));
    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-text").textContent =
      plannedTotal + " of " + available + " min planned";
  }
  updateProgress();

  circles.forEach(function (circle) {
    circle.addEventListener("click", function () {
      circle.classList.toggle("checked");
      var row = circle.closest(".task-row");
      var name = row.querySelector(".task-name");
      name.style.textDecoration = circle.classList.contains("checked")
        ? "line-through"
        : "none";
      name.style.color = circle.classList.contains("checked")
        ? "#9CA3AF"
        : "#1F2A37";
    });
  });
})();
