// Inicializar todos los dropdowns
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  const closeAllDropdowns = (exceptDropdown = null) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown === exceptDropdown) return;
      const menu = dropdown.querySelector('.dropdown-menu, .dropdown-menu-language');
      if (menu) {
        menu.classList.remove('active');
      }
    });
  };

  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu, .dropdown-menu-language');

    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      const isOpen = menu.classList.contains('active');
      closeAllDropdowns();
      if (!isOpen) {
        menu.classList.add('active');
      }
    });

    menu.addEventListener('click', (e) => {
      const selectedItem = e.target.closest('.dropdown-item');
      if (!selectedItem) return;

      e.stopPropagation();
      menu.classList.remove('active');

      if (menu.classList.contains('dropdown-menu-language')) {
        const btnText = toggleBtn.querySelector('.button-text');
        if (btnText) {
          btnText.textContent = selectedItem.textContent.trim();
        }

        const allItems = menu.querySelectorAll('.dropdown-item');
        allItems.forEach((item) => {
          item.style.fontWeight = '400';
        });
        selectedItem.style.fontWeight = '700';
      }
    });
  });

  document.addEventListener('click', () => {
    closeAllDropdowns();
  });
});
