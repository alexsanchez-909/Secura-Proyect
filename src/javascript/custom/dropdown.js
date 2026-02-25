// Inicializar todos los dropdowns
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!toggleBtn || !menu) return;

    // Abrir/cerrar dropdown al hacer clic en el botón
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Cerrar otros dropdowns
      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          const otherMenu = otherDropdown.querySelector('.dropdown-menu');
          if (otherMenu) {
            otherMenu.classList.remove('active');
          }
        }
      });

      // Toggle del dropdown actual
      menu.classList.toggle('active');
    });

    // Cerrar dropdown al hacer clic en un elemento del menú
    const menuItems = menu.querySelectorAll('.dropdown-element, .dropdown-item, .dropdown-element-language');
    menuItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.remove('active');

        // Funcionalidad para dropdown-language
        if (dropdown.classList.contains('dropdown-language') || menu.classList.contains('dropdown-language-menu')) {
          const selected = item.querySelector('.dropdown-item');
          if (selected) {
            const btnText = toggleBtn.querySelector('.button-text');
            if (btnText) {
              btnText.textContent = selected.textContent;
            }
          }
        }
      });
    });
  });

  // Cerrar todos los dropdowns al hacer clic fuera
  document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      const menu = dropdown.querySelector('.dropdown-menu');
      const toggleBtn = dropdown.querySelector('.dropdown-toggle');
      
      if (menu && toggleBtn && !dropdown.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  });
});