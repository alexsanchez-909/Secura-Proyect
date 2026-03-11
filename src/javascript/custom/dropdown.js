// Inicializa toda la lógica de dropdowns del header:
// perfil, idioma principal, burger e idioma dentro del burger.
function initDropdowns() {

  const navbar = document.querySelector('.navbar');
  const dropdowns = document.querySelectorAll('.dropdown');
  const rightSide = document.querySelector('.navbar .right-side');
  const burgerDropdown = document.querySelector('.dropdown.dropdown-burger');
  const burgerMenu = burgerDropdown?.querySelector('.dropdown-menu-burger');
  const burgerLanguageDropdown = burgerMenu?.querySelector('.dropdown-menu-burger__language-dropdown');
  const burgerLanguageMenu = burgerLanguageDropdown?.querySelector('.dropdown-menu-language');
  const burgerIcon = burgerDropdown?.querySelector('.dropdown-toggle span');
  const profileDropdown = document.querySelector('.navbar .right-side > .dropdown:first-of-type');
  const profileMenu = profileDropdown?.querySelector('.dropdown-menu');
  const profileIcon = profileDropdown?.querySelector('.dropdown-toggle span');
  const mobileMq = window.matchMedia('(max-width: 30rem)');
  const languageDropdowns = document.querySelectorAll('.dropdown, .dropdown-menu-burger__language-dropdown');

  // Si no existe la estructura principal del header, no inicializar nada.
  if (!navbar || !rightSide || dropdowns.length === 0) {
    return;
  }
  let isPageScrollLocked = false;

  // Bloquea el scroll de rueda/táctil cuando la UI lo requiere (menús abiertos en móvil).
  const preventScrollWhileLocked = (event) => {
    if (!isPageScrollLocked) return;
    event.preventDefault();
  };

  // Activa o desactiva el bloqueo de scroll sobre document/body.
  const setPageScrollLock = (shouldLock) => {
    isPageScrollLocked = shouldLock;
    const overflowValue = shouldLock ? 'hidden' : '';
    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;
  };

  // Devuelve el hijo directo de un elemento que tenga la clase indicada.
  const getDirectChildByClass = (element, className) => Array.from(element.children).find(
    (child) => child.classList && child.classList.contains(className),
  );

  // Sincroniza idioma seleccionado (texto y peso de opción) en todos los selectores de idioma.
  const setLanguageSelection = (language) => {
    languageDropdowns.forEach((dropdown) => {
      const languageMenu = getDirectChildByClass(dropdown, 'dropdown-menu-language');
      if (!languageMenu) return;

      const toggleBtn = getDirectChildByClass(dropdown, 'dropdown-toggle');
      const btnText = toggleBtn?.querySelector('.button-text');
      if (btnText) {
        btnText.textContent = language;
      }

      const allItems = languageMenu.querySelectorAll('.dropdown-item');
      allItems.forEach((item) => {
        item.style.fontWeight = item.textContent.trim() === language ? '700' : '400';
      });
    });
  };

  // Recalcula y aplica estado visual de iconos/clases del header según menús abiertos/cerrados.
  const updateHeaderDropdownUI = () => {
    const isMobileView = mobileMq.matches;
    const isBurgerMenuOpen = burgerMenu?.classList.contains('active') ?? false;
    const isProfileMenuOpen = profileMenu?.classList.contains('active') ?? false;

    // Si se cierra el menú burger, forzar el cierre del submenú de idioma.
    if (!isBurgerMenuOpen && burgerLanguageMenu?.classList.contains('active')) {
      burgerLanguageMenu.classList.remove('active');
    }

    const isAnyDropdownOpen = Array.from(dropdowns).some((dropdown) => (
      Boolean(dropdown.querySelector('.dropdown-menu.active, .dropdown-menu-language.active, .dropdown-menu-burger.active'))
    ));
    const isBurgerLanguageMenuOpen = Boolean(
      burgerLanguageMenu?.classList.contains('active'),
    );

    const shouldShowProfileCloseIcon = isMobileView && isProfileMenuOpen;
    const shouldShowBurgerLanguageOpenClass = isBurgerMenuOpen && isBurgerLanguageMenuOpen;
    //Toggle para el icono burger/close
    if (burgerIcon) {
      burgerIcon.classList.toggle('icon-burger_menu', !isBurgerMenuOpen);
      burgerIcon.classList.toggle('icon-close', isBurgerMenuOpen);
    }
    //Toggle para el icono user/close
    if (profileIcon) {
      profileIcon.classList.toggle('icon-user', !shouldShowProfileCloseIcon);
      profileIcon.classList.toggle('icon-close', shouldShowProfileCloseIcon);
    }
    //Toggle para mostrar el menú burger abierto (con clase que muestra fondo oscuro y fija el scroll)
    if (rightSide) {
      rightSide.classList.toggle('burger-menu-open', isBurgerMenuOpen);
      rightSide.classList.toggle('profile-menu-open', isProfileMenuOpen);
    }
    //Toggle para mostrar el fondo oscuro y scroll fijo cuando el menú burger de idiomas está abierto
    if (burgerMenu) {
      burgerMenu.classList.toggle('language-menu-open', shouldShowBurgerLanguageOpenClass);
    }

    setPageScrollLock(isMobileView && isAnyDropdownOpen);
  };

  // Cierra todos los menús desplegables excepto uno opcional que deba mantenerse abierto.
  const closeAllDropdowns = (exceptDropdown = null) => {
    dropdowns.forEach((dropdown) => {
      const shouldKeepOpen = exceptDropdown && (
        dropdown === exceptDropdown
        || dropdown.contains(exceptDropdown)
        || exceptDropdown.contains(dropdown)
      );
      if (shouldKeepOpen) return;
      const menu = dropdown.querySelector('.dropdown-menu, .dropdown-menu-language, .dropdown-menu-burger');
      if (menu) {
        menu.classList.remove('active');
      }
    });
    updateHeaderDropdownUI();
  };

  // Registra comportamiento genérico de apertura/cierre para dropdowns estándar.
  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu, .dropdown-menu-language, .dropdown-menu-burger');

    if (!toggleBtn || !menu) return;

    // Handler de click en el botón del dropdown: abre/cierra y cierra el resto.
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      const isOpen = menu.classList.contains('active');
      closeAllDropdowns(dropdown);
      if (!isOpen) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
      updateHeaderDropdownUI();
    });

    // Handler de selección de ítems dentro del menú del dropdown.
    menu.addEventListener('click', (e) => {
      const selectedItem = e.target.closest('.dropdown-item');
      if (!selectedItem) return;
      const ownerMenu = selectedItem.closest('.dropdown-menu, .dropdown-menu-language, .dropdown-menu-burger');
      if (ownerMenu !== menu) return;

      e.stopPropagation();
      menu.classList.remove('active');
      updateHeaderDropdownUI();

      if (menu.classList.contains('dropdown-menu-language')) {
        e.preventDefault();
        const selectedLanguage = selectedItem.textContent.trim();
        setLanguageSelection(selectedLanguage);
      }
    });
  });

  // Registra comportamiento del selector de idioma dentro del menú burger (estructura especial).
  if (burgerLanguageDropdown) {
    const languageToggleBtn = burgerLanguageDropdown.querySelector('.dropdown-toggle');
    const languageMenu = burgerLanguageDropdown.querySelector('.dropdown-menu-language');

    if (languageToggleBtn && languageMenu) {
      // Handler del botón de idioma del burger: abre/cierra su submenú.
      languageToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        const isOpen = languageMenu.classList.contains('active');
        closeAllDropdowns(burgerLanguageDropdown);
        if (!isOpen) {
          languageMenu.classList.add('active');
        } else {
          languageMenu.classList.remove('active');
        }
        updateHeaderDropdownUI();
      });

      // Handler de selección de idioma dentro del submenú del burger.
      languageMenu.addEventListener('click', (e) => {
        const selectedItem = e.target.closest('.dropdown-item');
        if (!selectedItem) return;

        e.stopPropagation();
        e.preventDefault();
        languageMenu.classList.remove('active');
        updateHeaderDropdownUI();

        const selectedLanguage = selectedItem.textContent.trim();
        setLanguageSelection(selectedLanguage);
      });
    }
  }

  // Cierre global al clicar fuera de cualquier dropdown.
  document.addEventListener('click', () => {
    closeAllDropdowns();
  });
  // Bloqueo de scroll por rueda y táctil cuando hay menú móvil abierto.
  document.addEventListener('wheel', preventScrollWhileLocked, { passive: false });
  document.addEventListener('touchmove', preventScrollWhileLocked, { passive: false });

  // Idioma inicial por defecto tomado del selector principal.
  const initialLanguage = (
    document.querySelector('.navbar .right-side > .dropdown:nth-of-type(2) .dropdown-toggle .button-text')?.textContent
    || 'Español'
  ).trim();
  setLanguageSelection(initialLanguage);
  // Recalcula UI al cambiar entre móvil/desktop.
  mobileMq.addEventListener('change', updateHeaderDropdownUI);
  updateHeaderDropdownUI();
}

// Arranca la inicialización cuando el DOM está listo.
document.addEventListener('DOMContentLoaded', initDropdowns);
