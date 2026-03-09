// Inicializar todos los dropdowns
function initDropdowns() {

  const navbar = document.querySelector('.navbar');
  const dropdowns = document.querySelectorAll('.dropdown');
  const rightSide = document.querySelector('.navbar .right-side');
  const burgerDropdown = document.querySelector('.dropdown.dropdown-burger');
  const burgerMenu = burgerDropdown?.querySelector('.dropdown-menu-burger');
  const burgerIcon = burgerDropdown?.querySelector('.dropdown-toggle span');
  const profileDropdown = document.querySelector('.navbar .right-side > .dropdown:first-of-type');
  const profileMenu = profileDropdown?.querySelector('.dropdown-menu');
  const profileIcon = profileDropdown?.querySelector('.dropdown-toggle span');
  const mobileMq = window.matchMedia('(max-width: 30rem)');
  const languageDropdowns = document.querySelectorAll('.dropdown');

  // Si no existe la estructura principal del header, no inicializar nada.
  if (!navbar || !rightSide || dropdowns.length === 0) {
    return;
  }
  let isPageScrollLocked = false;

  const preventScrollWhileLocked = (event) => {
    if (!isPageScrollLocked) return;
    event.preventDefault();
  };

  const setPageScrollLock = (shouldLock) => {
    isPageScrollLocked = shouldLock;
    const overflowValue = shouldLock ? 'hidden' : '';
    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;
  };

  const getDirectChildByClass = (element, className) => Array.from(element.children).find(
    (child) => child.classList && child.classList.contains(className),
  );

  // Función para actualizar la selección de idioma en todos los dropdowns
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

  // Actualiza iconos y clases del header en base al estado real de los dropdowns
  const updateHeaderDropdownUI = () => {
    const isMobileView = mobileMq.matches;
    const isBurgerMenuOpen = burgerMenu?.classList.contains('active') ?? false;
    const isProfileMenuOpen = profileMenu?.classList.contains('active') ?? false;
    const isAnyDropdownOpen = Array.from(dropdowns).some((dropdown) => (
      Boolean(dropdown.querySelector('.dropdown-menu.active, .dropdown-menu-language.active, .dropdown-menu-burger.active'))
    ));
    const isBurgerLanguageMenuOpen = Boolean(
      burgerMenu?.querySelector('.burger-language-dropdown > .dropdown-menu-language.active'),
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

  // Función para cerrar todos los dropdowns excepto el especificado
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

  // Configurar eventos para cada dropdown
  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu, .dropdown-menu-language, .dropdown-menu-burger');

    if (!toggleBtn || !menu) return;

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

    menu.addEventListener('click', (e) => {
      const selectedItem = e.target.closest('.dropdown-item');
      if (!selectedItem) return;
      const ownerMenu = selectedItem.closest('.dropdown-menu, .dropdown-menu-language, .dropdown-menu-burger');
      if (ownerMenu !== menu) return;

      e.stopPropagation();
      menu.classList.remove('active');
      updateHeaderDropdownUI();

      if (menu.classList.contains('dropdown-menu-language')) {
        const selectedLanguage = selectedItem.textContent.trim();
        setLanguageSelection(selectedLanguage);
      }
    });
  });

  document.addEventListener('click', () => {
    closeAllDropdowns();
  });
  document.addEventListener('wheel', preventScrollWhileLocked, { passive: false });
  document.addEventListener('touchmove', preventScrollWhileLocked, { passive: false });

  const initialLanguage = (
    document.querySelector('.navbar .right-side > .dropdown:nth-of-type(2) .dropdown-toggle .button-text')?.textContent
    || 'Español'
  ).trim();
  setLanguageSelection(initialLanguage);
  mobileMq.addEventListener('change', updateHeaderDropdownUI);
  updateHeaderDropdownUI();
}

document.addEventListener('DOMContentLoaded', initDropdowns);
