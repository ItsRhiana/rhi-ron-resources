document.addEventListener("DOMContentLoaded", function () {
  const tabGroups = document.querySelectorAll(".style-tabs");

  tabGroups.forEach(function (group) {
    const buttons = group.querySelectorAll(".style-tab-button");
    const panels = group.querySelectorAll(".style-tab-panel");

    function activateTab(tabName, updateHash = true) {
      const button = group.querySelector(
        `.style-tab-button[data-tab="${tabName}"]`
      );

      const panel = group.querySelector(
        `.style-tab-panel[data-panel="${tabName}"]`
      );

      if (!button || !panel) {
        return;
      }

      buttons.forEach(function (item) {
        item.classList.remove("active");
      });

      panels.forEach(function (item) {
        item.classList.remove("active");
      });

      button.classList.add("active");
      panel.classList.add("active");

      if (updateHash) {
        history.replaceState(
          null,
          "",
          `#${tabName}`
        );
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activateTab(button.dataset.tab);
      });
    });

    const initialTab = window.location.hash.replace("#", "");

    if (initialTab) {
      activateTab(initialTab, false);
    }
  });
});