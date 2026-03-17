function initUpcomingRenovations() {
  const renovationsRoot = document.querySelector('[data-upcoming-renovations]');
  const listContainer = document.querySelector('[data-renovations-list]');
  const pageSizeSelect = document.querySelector('[data-pagination-size]');
  const paginationStatus = document.querySelector('[data-pagination-status]');
  const firstButton = document.querySelector('[data-pagination-first]');
  const prevButton = document.querySelector('[data-pagination-prev]');
  const nextButton = document.querySelector('[data-pagination-next]');
  const lastButton = document.querySelector('[data-pagination-last]');

  if ( !renovationsRoot || !listContainer || !pageSizeSelect || !paginationStatus || !firstButton || !prevButton || !nextButton || !lastButton ) {
    return;
  }

  // Definir la configuración visual de cada estado para reutilizar clases e iconos existentes.
  const statusConfig = {
    Pendiente: {
      icon: 'clock',
      className: 'state__warning',
      text: 'Pendiente',
    },
    Pagada: {
      icon: 'check',
      className: 'state__success',
      text: 'Pagada',
    },
    Vencido: {
      icon: 'close',
      className: 'state__error',
      text: 'Vencido',
    },
  };

  // Convertir caracteres especiales en texto seguro para que el navegador no los interprete como HTML.
  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // Construir el HTML de una tarjeta de renovación respetando la estructura actual del diseño.
  const buildRenovationCard = (renovation) => {
    const state = statusConfig[renovation.status] || statusConfig.Pendiente;

    return `
      <div class="home-renovations__card">
        <p class="home-renovations__cell home-renovations__cell--policy" data-label="No. de póliza">${escapeHtml(renovation.policyNumber)}</p>
        <p class="home-renovations__cell home-renovations__cell--risk" data-label="Nombre del riesgo">${escapeHtml(renovation.riskName)}</p>
        <p class="home-renovations__cell home-renovations__cell--contract-date" data-label="Fecha de contrato">${escapeHtml(renovation.contractDate)}</p>
        <p class="home-renovations__cell home-renovations__cell--expiry-date" data-label="Fecha de vencimiento">${escapeHtml(renovation.expiryDate)}</p>
        <p class="home-renovations__cell home-renovations__cell--amount" data-label="Importe">${escapeHtml(renovation.amount)}</p>
        <div class="home-renovations__cell home-renovations__cell--state" data-label="Estado de póliza">
          <div class="state">
            <div class="${state.className}">
              <div class="state-policy">
                <span class="icon-${state.icon}"></span>
                <span class="state-policy__text">${escapeHtml(state.text)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // Activar o desactivar botones de paginación según la página disponible.
  const setButtonState = (button, isDisabled) => {
    button.disabled = isDisabled;
    button.setAttribute('aria-disabled', String(isDisabled));
  };

  // Renderizar la página actual, recalcular el total de páginas y actualizar la navegación.
  const render = (renovations, state) => {
    const totalPages = Math.max(1, Math.ceil(renovations.length / state.pageSize));
    state.currentPage = Math.min(state.currentPage, totalPages);

    const startIndex = (state.currentPage - 1) * state.pageSize;
    const endIndex = startIndex + state.pageSize;
    const currentItems = renovations.slice(startIndex, endIndex);

    listContainer.innerHTML = currentItems.map(buildRenovationCard).join('');
    paginationStatus.textContent = `${state.currentPage} de ${totalPages}`;

    // Desactivar los botones de inicio o fin cuando ya no sea posible seguir navegando en esa dirección.
    setButtonState(firstButton, state.currentPage === 1);
    setButtonState(prevButton, state.currentPage === 1);
    setButtonState(nextButton, state.currentPage === totalPages);
    setButtonState(lastButton, state.currentPage === totalPages);
  };

  // Cargar el JSON de renovaciones y conectar la paginación cuando los datos estén disponibles.
  fetch('locale/upcoming-renovations.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar el JSON (${response.status})`);
      }

      return response.json();
    })
    .then((renovations) => {
      // Inicializar el estado de paginación con un tamaño fijo de 10 elementos por página.
      const state = {
        currentPage: 1,
        pageSize: 10,
      };

      pageSizeSelect.value = '10';
      render(renovations, state);

      // Mantener el selector sincronizado con el límite fijo de 10 elementos por página.
      pageSizeSelect.addEventListener('change', (event) => {
        state.pageSize = 10;
        state.currentPage = 1;
        pageSizeSelect.value = '10';
        render(renovations, state);
      });

      // Ir directamente a la primera página disponible.
      firstButton.addEventListener('click', () => {
        if (state.currentPage === 1) return;
        state.currentPage = 1;
        render(renovations, state);
      });

      // Retroceder una página si no estamos ya al inicio.
      prevButton.addEventListener('click', () => {
        if (state.currentPage === 1) return;
        state.currentPage -= 1;
        render(renovations, state);
      });

      // Avanzar una página si todavía quedan resultados por mostrar.
      nextButton.addEventListener('click', () => {
        const totalPages = Math.max(1, Math.ceil(renovations.length / state.pageSize));
        if (state.currentPage === totalPages) return;
        state.currentPage += 1;
        render(renovations, state);
      });

      // Saltar directamente a la última página calculada.
      lastButton.addEventListener('click', () => {
        const totalPages = Math.max(1, Math.ceil(renovations.length / state.pageSize));
        if (state.currentPage === totalPages) return;
        state.currentPage = totalPages;
        render(renovations, state);
      });
    })
    .catch((error) => {
      // Vaciar el listado y dejar trazabilidad en consola si falla la carga del JSON.
      paginationStatus.textContent = '0 de 0';
      listContainer.innerHTML = '';
      window.console.error('Error al cargar las próximas renovaciones:', error);
    });
}

// Inicializar la tabla dinámica de próximas renovaciones cuando el DOM esté listo.
document.addEventListener('DOMContentLoaded', initUpcomingRenovations);
