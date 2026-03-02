// Inicializar todos los dropdowns
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  const rightSide = document.querySelector('.navbar .right-side');
  const burgerDropdown = document.querySelector('.dropdown.dropdown-burger');
  const burgerMenu = burgerDropdown?.querySelector('.dropdown-menu-burger');
  const burgerIcon = burgerDropdown?.querySelector('.dropdown-toggle span');
  const profileDropdown = document.querySelector('.navbar .right-side > .dropdown:first-of-type');
  const profileMenu = profileDropdown?.querySelector('.dropdown-menu');
  const profileIcon = profileDropdown?.querySelector('.dropdown-toggle span');
  const languageDropdowns = document.querySelectorAll('.dropdown');

  const getDirectChildByClass = (element, className) => Array.from(element.children).find(
    (child) => child.classList && child.classList.contains(className),
  );

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

  const syncBurgerUI = () => {
    const isBurgerOpen = Boolean(burgerMenu && burgerMenu.classList.contains('active'));
    const isProfileOpen = Boolean(profileMenu && profileMenu.classList.contains('active'));
    const isBurgerLanguageOpen = Boolean(
      burgerMenu && burgerMenu.querySelector('.burger-language-dropdown > .dropdown-menu-language.active'),
    );

    if (burgerIcon) {
      burgerIcon.classList.toggle('icon-burger_menu', !isBurgerOpen);
      burgerIcon.classList.toggle('icon-close', isBurgerOpen);
    }
    if (profileIcon) {
      profileIcon.classList.toggle('icon-user', !isProfileOpen);
      profileIcon.classList.toggle('icon-close', isProfileOpen);
    }

    if (rightSide) {
      rightSide.classList.toggle('burger-menu-open', isBurgerOpen);
      rightSide.classList.toggle('profile-menu-open', isProfileOpen);
    }
    if (burgerMenu) {
      burgerMenu.classList.toggle('language-menu-open', isBurgerOpen && isBurgerLanguageOpen);
    }
  };

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
    syncBurgerUI();
  };

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
      syncBurgerUI();
    });

    menu.addEventListener('click', (e) => {
      const selectedItem = e.target.closest('.dropdown-item');
      if (!selectedItem) return;
      const ownerMenu = selectedItem.closest('.dropdown-menu, .dropdown-menu-language, .dropdown-menu-burger');
      if (ownerMenu !== menu) return;

      e.stopPropagation();
      menu.classList.remove('active');
      syncBurgerUI();

      if (menu.classList.contains('dropdown-menu-language')) {
        const selectedLanguage = selectedItem.textContent.trim();
        setLanguageSelection(selectedLanguage);
      }
    });
  });

  document.addEventListener('click', () => {
    closeAllDropdowns();
  });

  const initialLanguage = (
    document.querySelector('.navbar .right-side > .dropdown:nth-of-type(2) .dropdown-toggle .button-text')?.textContent
    || 'Español'
  ).trim();
  setLanguageSelection(initialLanguage);
  syncBurgerUI();
});
