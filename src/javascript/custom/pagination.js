function initUpcomingRenovationsPagination() {
  const renovationsRoot = document.querySelector('[data-upcoming-renovations]');
  const listContainer = document.querySelector('[data-renovations-list]');
  const pageSizeSelect = document.querySelector('[data-pagination-size]');
  const sortSelect = document.querySelector('[data-sort-select]');
  const paginationStatus = document.querySelector('[data-pagination-status]');
  const firstButton = document.querySelector('[data-pagination-first]');
  const prevButton = document.querySelector('[data-pagination-prev]');
  const nextButton = document.querySelector('[data-pagination-next]');
  const lastButton = document.querySelector('[data-pagination-last]');

  if ( !renovationsRoot || !listContainer || !pageSizeSelect || !sortSelect || !paginationStatus || !firstButton || !prevButton || !nextButton || !lastButton ) {
    return;
  }

  if (!Array.isArray(policiesData) || policiesData.length === 0) {
    paginationStatus.textContent = '0 de 0';
    listContainer.innerHTML = '';
    console.error('No hay datos de pólizas disponibles ');
    return;
  }

  // Definir el comportamiento visual de cada estado de póliza para reutilizar las clases existentes.
  const statusConfigByPolicyState = {
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

  // Construir el estado interno necesario para combinar ordenación y paginación.
  const paginationState = {
    currentPage: 1,
    rowsPerPage: Number(pageSizeSelect.value) || 10,
    sortOrder: sortSelect.value,
  };

  // Agrupar los nodos de la paginación para pasarlos a las funciones sin depender del scope exterior.
  const paginationControls = {
    listContainer,
    pageSizeSelect,
    sortSelect,
    paginationStatus,
    firstButton,
    prevButton,
    nextButton,
    lastButton,
  };

  // Actualizar la disponibilidad visual y funcional de los botones según la página y el total disponible.
  function updatePaginationButtonsAvailability(controls, currentPage, totalPages) {
    controls.firstButton.disabled = currentPage === 1;
    controls.prevButton.disabled = currentPage === 1;
    controls.nextButton.disabled = currentPage === totalPages;
    controls.lastButton.disabled = currentPage === totalPages;
  }

  // Construir el HTML de una fila de renovación respetando la estructura actual del componente.
  function buildUpcomingRenovationCardMarkup(policyItem) {
    const policyStateConfig = statusConfigByPolicyState[policyItem.status] || statusConfigByPolicyState.Pendiente;

    return `
      <div class="home-renovations__card">
        <p class="home-renovations__cell home-renovations__cell--policy" data-label="No. de póliza">${escapeHtml(policyItem.policyNumber)}</p>
        <p class="home-renovations__cell home-renovations__cell--risk" data-label="Nombre del riesgo">${escapeHtml(policyItem.riskName)}</p>
        <p class="home-renovations__cell home-renovations__cell--contract-date" data-label="Fecha de contrato">${escapeHtml(policyItem.contractDate)}</p>
        <p class="home-renovations__cell home-renovations__cell--expiry-date" data-label="Fecha de vencimiento">${escapeHtml(policyItem.expiryDate)}</p>
        <p class="home-renovations__cell home-renovations__cell--amount" data-label="Importe">${escapeHtml(policyItem.amount)}</p>
        <div class="home-renovations__cell home-renovations__cell--state" data-label="Estado de póliza">
          <div class="state">
            <div class="${policyStateConfig.className}">
              <div class="state-policy">
                <span class="icon-${policyStateConfig.icon}"></span>
                <span class="state-policy__text">${escapeHtml(policyStateConfig.text)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Ordenar la colección de pólizas según la opción activa del select "Ordenarlo por".
  function getSortedPoliciesData(policyCollection, sortOrder) {
    const sortablePolicies = [...policyCollection];

    sortablePolicies.sort((currentPolicy, nextPolicy) => {
      if (sortOrder === 'Mayor importe') {
        return parsePolicyAmountToNumber(nextPolicy.amount) - parsePolicyAmountToNumber(currentPolicy.amount);
      }

      if (sortOrder === 'Menos importe') {
        return parsePolicyAmountToNumber(currentPolicy.amount) - parsePolicyAmountToNumber(nextPolicy.amount);
      }

      if (sortOrder === 'Más recientes') {
        return parsePolicyDateToTimestamp(nextPolicy.contractDate) - parsePolicyDateToTimestamp(currentPolicy.contractDate);
      }

      return parsePolicyDateToTimestamp(currentPolicy.contractDate) - parsePolicyDateToTimestamp(nextPolicy.contractDate);
    });

    return sortablePolicies;
  }

  // Obtener solo las pólizas que pertenecen a la página actual según el número de filas elegido.
  function getPoliciesDataForCurrentPage(policyCollection, currentPage, rowsPerPage) {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return policyCollection.slice(startIndex, endIndex);
  }

  // Calcular el total de páginas para una colección concreta y el límite de filas activo.
  function getTotalPagesForPolicies(policyCollection, rowsPerPage) {
    return Math.max(1, Math.ceil(policyCollection.length / rowsPerPage));
  }

  // Renderizar la página visible aplicando antes la ordenación y después la paginación.
  function renderUpcomingRenovationsPage(policyCollection, state, controls) {
    const sortedPolicies = getSortedPoliciesData(policyCollection, state.sortOrder);
    const totalPages = getTotalPagesForPolicies(sortedPolicies, state.rowsPerPage);

    state.currentPage = Math.min(state.currentPage, totalPages);

    const currentPagePolicies = getPoliciesDataForCurrentPage(
      sortedPolicies,
      state.currentPage,
      state.rowsPerPage,
    );

    controls.listContainer.innerHTML = currentPagePolicies.map(buildUpcomingRenovationCardMarkup).join('');
    controls.paginationStatus.textContent = `${state.currentPage} de ${totalPages}`;
    updatePaginationButtonsAvailability(controls, state.currentPage, totalPages);
  }

  // Reiniciar el paginado cuando cambian criterios que alteran el conjunto mostrado.
  function resetPaginationToFirstPage(state) {
    state.currentPage = 1;
  }

  // Aplicar la nueva cantidad de filas por página elegida en el selector.
  function handleRowsPerPageSelectionChange() {
    paginationState.rowsPerPage = Number(paginationControls.pageSizeSelect.value) || 10;
    resetPaginationToFirstPage(paginationState);
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  // Aplicar la nueva ordenación seleccionada en el filtro de "Ordenarlo por".
  function handlePoliciesSortSelectionChange() {
    paginationState.sortOrder = paginationControls.sortSelect.value;
    resetPaginationToFirstPage(paginationState);
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  // Navegar directamente a la primera página disponible.
  function handleGoToFirstPageClick() {
    if (paginationState.currentPage === 1) return;
    paginationState.currentPage = 1;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }


  // Retroceder una página cuando todavía existen páginas anteriores.
  function handleGoToPreviousPageClick() {
    if (paginationState.currentPage === 1) return;
    paginationState.currentPage -= 1;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  // Avanzar una página cuando todavía existen páginas posteriores.
  function handleGoToNextPageClick() {
    const totalPages = getTotalPagesForPolicies(policiesData, paginationState.rowsPerPage);
    if (paginationState.currentPage === totalPages) return;
    paginationState.currentPage += 1;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  // Saltar a la última página calculada con el tamaño de página actual.
  function handleGoToLastPageClick() {
    const totalPages = getTotalPagesForPolicies(policiesData, paginationState.rowsPerPage);
    if (paginationState.currentPage === totalPages) return;
    paginationState.currentPage = totalPages;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  pageSizeSelect.addEventListener('change', handleRowsPerPageSelectionChange);
  sortSelect.addEventListener('change', handlePoliciesSortSelectionChange);
  firstButton.addEventListener('click', handleGoToFirstPageClick);
  prevButton.addEventListener('click', handleGoToPreviousPageClick);
  nextButton.addEventListener('click', handleGoToNextPageClick);
  lastButton.addEventListener('click', handleGoToLastPageClick);

  renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
}

// Iniciar la paginación de próximas renovaciones cuando el DOM ya esté disponible.
document.addEventListener('DOMContentLoaded', initUpcomingRenovationsPagination);
