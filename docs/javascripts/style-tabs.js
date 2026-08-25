document.addEventListener("DOMContentLoaded", function () {
  const tabGroups = document.querySelectorAll(".style-tabs");

  tabGroups.forEach(function (group) {
    const buttons = group.querySelectorAll(".style-tab-button");
    const panels = group.querySelectorAll(".style-tab-panel");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const target = button.dataset.tab;

        buttons.forEach(function (item) {
          item.classList.remove("active");
        });

        panels.forEach(function (panel) {
          panel.classList.remove("active");
        });

        button.classList.add("active");

        const targetPanel = group.querySelector(
          `[data-panel="${target}"]`
        );

        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      });
    });
  });
});