document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.code-tab-button');
  const tabPanels = document.querySelectorAll('.code-tab-panel');


  tabButtons.forEach(button => {
    button.addEventListener('click', () => {


      const tabWrapper = button.closest('.code-tab-wrapper');
      const currentTabButtons = tabWrapper.querySelectorAll('.code-tab-button');
      const currentTabPanels = tabWrapper.querySelectorAll('.code-tab-panel');

      currentTabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const tab = button.getAttribute('data-tab');
      currentTabPanels.forEach(panel => {
        if (panel.getAttribute('data-tab') === tab) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
});