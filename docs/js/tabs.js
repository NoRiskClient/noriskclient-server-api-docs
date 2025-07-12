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

  const endpointTabButtons = document.querySelectorAll('.endpoint-tab-button');
  const endpointTabPanels = document.querySelectorAll('.endpoint-tab-panel');

  endpointTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabWrapper = button.closest('.endpoint-tab-wrapper');
      const currentTabButtons = tabWrapper.querySelectorAll('.endpoint-tab-button');
      const currentTabPanels = tabWrapper.querySelectorAll('.endpoint-tab-panel');

      currentTabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const endpoint = button.getAttribute('data-endpoint');
      currentTabPanels.forEach(panel => {
        if (panel.getAttribute('data-endpoint') === endpoint) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  const languageTabButtons = document.querySelectorAll('.language-tab-button');
  const languageTabPanels = document.querySelectorAll('.language-tab-panel');

  languageTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabWrapper = button.closest('.language-tab-wrapper');
      const currentTabButtons = tabWrapper.querySelectorAll('.language-tab-button');
      const currentTabPanels = tabWrapper.querySelectorAll('.language-tab-panel');

      currentTabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const language = button.getAttribute('data-language');
      currentTabPanels.forEach(panel => {
        if (panel.getAttribute('data-language') === language) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
});