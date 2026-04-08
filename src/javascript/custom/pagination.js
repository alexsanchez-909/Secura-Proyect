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
  const filtersPanel = document.querySelector('[data-filters-panel]');
  const openFiltersPanelButton = document.querySelector('[data-filters-panel-open]');
  const closeFiltersPanelButton = document.querySelector('[data-filters-panel-close]');
  const filtersForm = document.querySelector('#renovations-filter-panel-form');
  const policyNumberInput = document.querySelector('[data-filter-policy-number]');
  const policyNumberOptions = document.querySelector('[data-filter-policy-number-options]');
  const riskNameInput = document.querySelector('[data-filter-risk-name]');
  const startDateInput = document.querySelector('[data-filter-start-date]');
  const endDateInput = document.querySelector('[data-filter-end-date]');
  const amountMinInput = document.querySelector('[data-filter-amount-min]');
  const amountMaxInput = document.querySelector('[data-filter-amount-max]');
  const amountMinRangeInput = document.querySelector('[data-filter-amount-min-range]');
  const amountMaxRangeInput = document.querySelector('[data-filter-amount-max-range]');
  const amountRangeProgress = document.querySelector('[data-amount-range-progress]');
  const statusSelect = document.querySelector('[data-filter-status]');
  const clearFiltersButtons = document.querySelectorAll('[data-filters-clear], [data-filters-clear-panel]');
  const filtersToggleCount = document.querySelector('[data-filters-toggle-count]');
  const filtersResultsCount = document.querySelector('[data-filters-results-count]');
  const filtersAppliedCount = document.querySelector('[data-filters-applied-count]');
  const filtersSummarySeparator = document.querySelector('[data-filters-summary-separator]');
  const filtersChipsContainer = document.querySelector('[data-filters-chips]');

  if (!renovationsRoot || !listContainer || !pageSizeSelect || !sortSelect || !paginationStatus || !firstButton || !prevButton || !nextButton || !lastButton) {
    return;
  }

  if (!Array.isArray(policiesData) || policiesData.length === 0) {
    paginationStatus.textContent = '0 de 0';
    listContainer.innerHTML = '';
    console.error('No hay datos de polizas disponibles.');
    return;
  }

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

  const policyAmounts = policiesData.map((policyItem) => parsePolicyAmountToNumber(policyItem.amount));
  const amountRangeLimits = {
    min: Math.floor(Math.min(...policyAmounts)),
    max: Math.ceil(Math.max(...policyAmounts)),
  };

  const filtersInitialState = {
    policyNumber: '',
    riskName: '',
    startDate: '',
    endDate: '',
    amountMin: '',
    amountMax: '',
    status: '',
  };

  const paginationState = {
    currentPage: 1,
    rowsPerPage: Number(pageSizeSelect.value) || 10,
    sortOrder: sortSelect.value,
    filters: { ...filtersInitialState },
  };

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

  function isFiltersPanelOpen() {
    return filtersPanel?.classList.contains('is-open') ?? false;
  }

  function closeFiltersPanel() {
    if (!filtersPanel) return;
    filtersPanel.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function handleOpenFiltersPanelClick() {
    if (!filtersPanel) return;
    document.dispatchEvent(new CustomEvent('header-dropdowns:close'));
    filtersPanel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function handleCloseFiltersPanelClick() {
    closeFiltersPanel();
  }

  function updatePaginationButtonsAvailability(controls, currentPage, totalPages) {
    controls.firstButton.disabled = currentPage === 1;
    controls.prevButton.disabled = currentPage === 1;
    controls.nextButton.disabled = currentPage === totalPages;
    controls.lastButton.disabled = currentPage === totalPages;
  }

  function buildUpcomingRenovationCardMarkup(policyItem) {
    const policyStateConfig = statusConfigByPolicyState[policyItem.status] || statusConfigByPolicyState.Pendiente;

    return `
      <div class="home-renovations__card">
        <p class="home-renovations__cell home-renovations__cell--policy" data-label="No. de poliza">${escapeHtml(policyItem.policyNumber)}</p>
        <p class="home-renovations__cell home-renovations__cell--risk" data-label="Nombre del riesgo">${escapeHtml(policyItem.riskName)}</p>
        <p class="home-renovations__cell home-renovations__cell--contract-date" data-label="Fecha de contrato">${escapeHtml(policyItem.contractDate)}</p>
        <p class="home-renovations__cell home-renovations__cell--expiry-date" data-label="Fecha de vencimiento">${escapeHtml(policyItem.expiryDate)}</p>
        <p class="home-renovations__cell home-renovations__cell--amount" data-label="Importe">${escapeHtml(policyItem.amount)}</p>
        <div class="home-renovations__cell home-renovations__cell--state" data-label="Estado de poliza">
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

  function buildEmptyStateMarkup() {
    return `
      <div class="home-renovations__card">
        <p class="home-renovations__cell" style="grid-column: 1 / -1;">No hay polizas que coincidan con los filtros seleccionados.</p>
      </div>
    `;
  }

  function getSortedPoliciesData(policyCollection, sortOrder) {
    const sortablePolicies = [...policyCollection];

    sortablePolicies.sort((currentPolicy, nextPolicy) => {
      if (sortOrder === 'Mayor importe') {
        return parsePolicyAmountToNumber(nextPolicy.amount) - parsePolicyAmountToNumber(currentPolicy.amount);
      }

      if (sortOrder === 'Menos importe') {
        return parsePolicyAmountToNumber(currentPolicy.amount) - parsePolicyAmountToNumber(nextPolicy.amount);
      }

      if (sortOrder === 'Mas recientes' || sortOrder === 'Más recientes') {
        return parsePolicyDateToTimestamp(nextPolicy.contractDate) - parsePolicyDateToTimestamp(currentPolicy.contractDate);
      }

      return parsePolicyDateToTimestamp(currentPolicy.contractDate) - parsePolicyDateToTimestamp(nextPolicy.contractDate);
    });

    return sortablePolicies;
  }

  function getPoliciesDataForCurrentPage(policyCollection, currentPage, rowsPerPage) {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return policyCollection.slice(startIndex, endIndex);
  }

  function getTotalPagesForPolicies(policyCollection, rowsPerPage) {
    if (policyCollection.length === 0) return 1;
    return Math.ceil(policyCollection.length / rowsPerPage);
  }

  function normalizeText(value) {
    return String(value || '').trim().toLowerCase();
  }

  function normalizeDateInputValue(value) {
    const trimmedValue = String(value || '').trim();
    if (!trimmedValue) return '';
    const normalizedValue = trimmedValue.replace(/-/g, '/');
    const matches = normalizedValue.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

    if (!matches) return '';

    const [, day, month, year] = matches;
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  }

  function normalizeFilters(rawFilters) {
    return {
      policyNumber: normalizeText(rawFilters.policyNumber),
      riskName: normalizeText(rawFilters.riskName),
      startDate: normalizeDateInputValue(rawFilters.startDate),
      endDate: normalizeDateInputValue(rawFilters.endDate),
      amountMin: String(rawFilters.amountMin || '').trim(),
      amountMax: String(rawFilters.amountMax || '').trim(),
      status: normalizeText(rawFilters.status),
    };
  }

  // Mantener cualquier valor de importe dentro del rango real disponible en los datos.
  function clampAmountValue(value) {
    const numericValue = Number(value);

    if (!Number.isFinite(numericValue)) return null;

    return Math.min(amountRangeLimits.max, Math.max(amountRangeLimits.min, Math.round(numericValue)));
  }

  // Resolver el rango efectivo de importes aunque solo haya un extremo informado o estén invertidos.
  function getAmountRangeValuesFromFilters(filters) {
    const normalizedMin = clampAmountValue(filters.amountMin);
    const normalizedMax = clampAmountValue(filters.amountMax);

    let nextMinValue = normalizedMin ?? amountRangeLimits.min;
    let nextMaxValue = normalizedMax ?? amountRangeLimits.max;

    if (nextMinValue > nextMaxValue) {
      [nextMinValue, nextMaxValue] = [nextMaxValue, nextMinValue];
    }

    return {
      min: nextMinValue,
      max: nextMaxValue,
    };
  }

  function countAppliedFilters(filters) {
    return Object.values(filters).filter(Boolean).length;
  }

  // Traducir el estado actual de filtros a chips visibles y eliminables junto al botón principal.
  function getAppliedFiltersChips(filters) {
    const chips = [];

    if (filters.policyNumber) {
      chips.push({
        key: 'policyNumber',
        label: filters.policyNumber,
      });
    }

    if (filters.riskName) {
      chips.push({
        key: 'riskName',
        label: filters.riskName,
      });
    }

    if (filters.startDate || filters.endDate) {
      const startDateLabel = filters.startDate || 'Inicio';
      const endDateLabel = filters.endDate || 'Fin';

      chips.push({
        key: 'dateRange',
        label: `${startDateLabel} - ${endDateLabel}`,
      });
    }

    if (filters.amountMin || filters.amountMax) {
      const amountMinLabel = filters.amountMin || String(amountRangeLimits.min);
      const amountMaxLabel = filters.amountMax || String(amountRangeLimits.max);

      chips.push({
        key: 'amountRange',
        label: `${amountMinLabel}€ - ${amountMaxLabel}€`,
      });
    }

    if (filters.status) {
      chips.push({
        key: 'status',
        label: filters.status,
      });
    }

    return chips;
  }

  // Renderizar los chips activos y exponer la clave necesaria para eliminarlos desde la propia píldora.
  function renderAppliedFiltersChips(filters) {
    if (!filtersChipsContainer) return;

    const chips = getAppliedFiltersChips(filters);

    filtersChipsContainer.innerHTML = chips.map((chip) => `
      <button
        class="upcoming-renovations-filters__chip"
        type="button"
        data-filter-chip-remove="${escapeHtml(chip.key)}"
        aria-label="Eliminar filtro ${escapeHtml(chip.label)}"
      >
        <span class="upcoming-renovations-filters__chip-text">${escapeHtml(chip.label)}</span>
        <span class="upcoming-renovations-filters__chip-remove">×</span>
      </button>
    `).join('');

    filtersChipsContainer.hidden = chips.length === 0;
  }

  function updateFiltersSummary(filteredPolicies, activeFiltersCount) {
    const policiesLabel = filteredPolicies.length === 1 ? 'póliza' : 'pólizas';
    const filtersLabel = activeFiltersCount === 1 ? 'filtro aplicado' : 'filtros aplicados';

    if (filtersResultsCount) {
      filtersResultsCount.textContent = `${filteredPolicies.length} ${policiesLabel}`;
    }

    if (filtersAppliedCount) {
      filtersAppliedCount.textContent = `${activeFiltersCount} ${filtersLabel}`;
    }

    if (filtersToggleCount) {
      filtersToggleCount.textContent = String(activeFiltersCount);
    }

    if (filtersSummarySeparator) {
      filtersSummarySeparator.hidden = activeFiltersCount === 0;
    }

    if (filtersAppliedCount) {
      filtersAppliedCount.hidden = activeFiltersCount === 0;
    }

    renderAppliedFiltersChips(paginationState.filters);
  }

  function populateSelectOptions(selectElement, values, defaultLabel) {
    if (!selectElement) return;

    const selectedValue = selectElement.value;
    const normalizedValues = [...new Set(values.filter(Boolean))].sort((currentValue, nextValue) => currentValue.localeCompare(nextValue, 'es'));

    selectElement.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = defaultLabel;
    selectElement.append(defaultOption);

    normalizedValues.forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      selectElement.append(option);
    });

    selectElement.value = normalizedValues.includes(selectedValue) ? selectedValue : '';
  }

  function populateDatalistOptions(datalistElement, values) {
    if (!datalistElement) return;

    const normalizedValues = [...new Set(values.filter(Boolean))].sort((currentValue, nextValue) => currentValue.localeCompare(nextValue, 'es'));

    datalistElement.innerHTML = '';

    normalizedValues.forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      datalistElement.append(option);
    });
  }

  // Reflejar el estado activo en el formulario sin perder la sincronía con el slider de importes.
  function syncFiltersFormWithState(filters) {
    if (policyNumberInput) policyNumberInput.value = filters.policyNumber;
    if (riskNameInput) riskNameInput.value = filters.riskName;
    if (startDateInput) startDateInput.value = filters.startDate;
    if (endDateInput) endDateInput.value = filters.endDate;
    if (amountMinInput) amountMinInput.value = filters.amountMin;
    if (amountMaxInput) amountMaxInput.value = filters.amountMax;
    if (statusSelect) statusSelect.value = filters.status;
    syncAmountRangeControls(getAmountRangeValuesFromFilters(filters), false);
  }

  function getFiltersFromForm() {
    return normalizeFilters({
      policyNumber: policyNumberInput?.value,
      riskName: riskNameInput?.value,
      startDate: startDateInput?.value,
      endDate: endDateInput?.value,
      amountMin: amountMinInput?.value,
      amountMax: amountMaxInput?.value,
      status: statusSelect?.value,
    });
  }

  // Pintar visualmente el tramo activo entre el mínimo y el máximo seleccionados.
  function syncAmountRangeProgress(minValue, maxValue) {
    if (!amountRangeProgress) return;

    const totalRange = amountRangeLimits.max - amountRangeLimits.min || 1;
    const leftPercentage = ((minValue - amountRangeLimits.min) / totalRange) * 100;
    const rightPercentage = ((maxValue - amountRangeLimits.min) / totalRange) * 100;

    amountRangeProgress.style.left = `${leftPercentage}%`;
    amountRangeProgress.style.width = `${rightPercentage - leftPercentage}%`;
  }

  // Mantener alineados inputs y sliders cuando cambia cualquiera de los dos controles.
  function syncAmountRangeControls(amountRangeValues, syncTextInputs = true) {
    if (syncTextInputs && amountMinInput) amountMinInput.value = String(amountRangeValues.min);
    if (syncTextInputs && amountMaxInput) amountMaxInput.value = String(amountRangeValues.max);
    if (amountMinRangeInput) amountMinRangeInput.value = String(amountRangeValues.min);
    if (amountMaxRangeInput) amountMaxRangeInput.value = String(amountRangeValues.max);

    syncAmountRangeProgress(amountRangeValues.min, amountRangeValues.max);
  }

  // Inicializar los límites del doble slider con el rango real de importes existente.
  function initializeAmountRangeControls() {
    if (amountMinInput) {
      amountMinInput.min = String(amountRangeLimits.min);
      amountMinInput.max = String(amountRangeLimits.max);
      amountMinInput.placeholder = String(amountRangeLimits.min);
    }

    if (amountMaxInput) {
      amountMaxInput.min = String(amountRangeLimits.min);
      amountMaxInput.max = String(amountRangeLimits.max);
      amountMaxInput.placeholder = String(amountRangeLimits.max);
    }

    if (amountMinRangeInput) {
      amountMinRangeInput.min = String(amountRangeLimits.min);
      amountMinRangeInput.max = String(amountRangeLimits.max);
      amountMinRangeInput.value = String(amountRangeLimits.min);
    }

    if (amountMaxRangeInput) {
      amountMaxRangeInput.min = String(amountRangeLimits.min);
      amountMaxRangeInput.max = String(amountRangeLimits.max);
      amountMaxRangeInput.value = String(amountRangeLimits.max);
    }

    syncAmountRangeControls({
      min: amountRangeLimits.min,
      max: amountRangeLimits.max,
    }, false);
  }

  // Recalcular el rango cuando se mueve uno de los dos thumbs del slider.
  function handleAmountRangeInputChange(changedControl) {
    const currentMinValue = clampAmountValue(amountMinRangeInput?.value) ?? amountRangeLimits.min;
    const currentMaxValue = clampAmountValue(amountMaxRangeInput?.value) ?? amountRangeLimits.max;

    const normalizedValues = {
      min: changedControl === 'min' ? Math.min(currentMinValue, currentMaxValue) : Math.min(currentMinValue, currentMaxValue),
      max: changedControl === 'max' ? Math.max(currentMinValue, currentMaxValue) : Math.max(currentMinValue, currentMaxValue),
    };

    syncAmountRangeControls(normalizedValues);
  }

  // Recolocar el slider cuando el usuario modifica manualmente los importes mínimo o máximo.
  function handleAmountTextInputChange() {
    const normalizedValues = getAmountRangeValuesFromFilters({
      amountMin: amountMinInput?.value,
      amountMax: amountMaxInput?.value,
    });

    syncAmountRangeControls(normalizedValues);
  }

  function getFilteredPoliciesData(policyCollection, filters) {
    const minimumAmount = filters.amountMin ? Number(filters.amountMin) : null;
    const maximumAmount = filters.amountMax ? Number(filters.amountMax) : null;
    const startDateTimestamp = filters.startDate ? parsePolicyDateToTimestamp(filters.startDate) : null;
    const endDateTimestamp = filters.endDate ? parsePolicyDateToTimestamp(filters.endDate) : null;

    return policyCollection.filter((policyItem) => {
      const policyNumberMatches = !filters.policyNumber || normalizeText(policyItem.policyNumber).includes(filters.policyNumber);
      const riskNameMatches = !filters.riskName || normalizeText(policyItem.riskName).includes(filters.riskName);
      const statusMatches = !filters.status || normalizeText(policyItem.status) === filters.status;
      const policyAmount = parsePolicyAmountToNumber(policyItem.amount);
      const minimumAmountMatches = minimumAmount === null || policyAmount >= minimumAmount;
      const maximumAmountMatches = maximumAmount === null || policyAmount <= maximumAmount;

      const contractDateTimestamp = parsePolicyDateToTimestamp(policyItem.contractDate);
      const startDateMatches = startDateTimestamp === null || contractDateTimestamp >= startDateTimestamp;
      const endDateMatches = endDateTimestamp === null || contractDateTimestamp <= endDateTimestamp;

      return policyNumberMatches && riskNameMatches && statusMatches && minimumAmountMatches && maximumAmountMatches && startDateMatches && endDateMatches;
    });
  }

  function getCurrentPoliciesData() {
    return getFilteredPoliciesData(policiesData, paginationState.filters);
  }

  function renderUpcomingRenovationsPage(policyCollection, state, controls) {
    const filteredPolicies = getFilteredPoliciesData(policyCollection, state.filters);
    const sortedPolicies = getSortedPoliciesData(filteredPolicies, state.sortOrder);
    const totalPages = getTotalPagesForPolicies(sortedPolicies, state.rowsPerPage);
    const activeFiltersCount = countAppliedFilters(state.filters);

    state.currentPage = Math.min(state.currentPage, totalPages);

    const currentPagePolicies = getPoliciesDataForCurrentPage(
      sortedPolicies,
      state.currentPage,
      state.rowsPerPage,
    );

    controls.listContainer.innerHTML = currentPagePolicies.length > 0
      ? currentPagePolicies.map(buildUpcomingRenovationCardMarkup).join('')
      : buildEmptyStateMarkup();

    controls.paginationStatus.textContent = sortedPolicies.length === 0 ? '0 de 0' : `${state.currentPage} de ${totalPages}`;
    updatePaginationButtonsAvailability(controls, sortedPolicies.length === 0 ? 1 : state.currentPage, sortedPolicies.length === 0 ? 1 : totalPages);
    updateFiltersSummary(filteredPolicies, activeFiltersCount);
  }

  function resetPaginationToFirstPage(state) {
    state.currentPage = 1;
  }

  function applyFilters(nextFilters) {
    paginationState.filters = normalizeFilters(nextFilters);
    resetPaginationToFirstPage(paginationState);
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
    closeFiltersPanel();
  }

  function clearFilters() {
    paginationState.filters = { ...filtersInitialState };
    syncFiltersFormWithState(paginationState.filters);
    resetPaginationToFirstPage(paginationState);
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
    closeFiltersPanel();
  }

  // Eliminar un filtro concreto desde su chip y volver a sincronizar resultados y formulario.
  function removeSingleFilter(filterKey) {
    if (filterKey === 'dateRange') {
      paginationState.filters.startDate = '';
      paginationState.filters.endDate = '';
    } else if (filterKey === 'amountRange') {
      paginationState.filters.amountMin = '';
      paginationState.filters.amountMax = '';
    } else if (filterKey in paginationState.filters) {
      paginationState.filters[filterKey] = '';
    } else {
      return;
    }

    syncFiltersFormWithState(paginationState.filters);
    resetPaginationToFirstPage(paginationState);
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  function handleRowsPerPageSelectionChange() {
    paginationState.rowsPerPage = Number(paginationControls.pageSizeSelect.value) || 10;
    resetPaginationToFirstPage(paginationState);
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  function handlePoliciesSortSelectionChange() {
    paginationState.sortOrder = paginationControls.sortSelect.value;
    resetPaginationToFirstPage(paginationState);
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  function handleGoToFirstPageClick() {
    if (paginationState.currentPage === 1) return;
    paginationState.currentPage = 1;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  function handleGoToPreviousPageClick() {
    if (paginationState.currentPage === 1) return;
    paginationState.currentPage -= 1;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  function handleGoToNextPageClick() {
    const totalPages = getTotalPagesForPolicies(getCurrentPoliciesData(), paginationState.rowsPerPage);
    if (paginationState.currentPage === totalPages) return;
    paginationState.currentPage += 1;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  function handleGoToLastPageClick() {
    const totalPages = getTotalPagesForPolicies(getCurrentPoliciesData(), paginationState.rowsPerPage);
    if (paginationState.currentPage === totalPages) return;
    paginationState.currentPage = totalPages;
    renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
  }

  function handleFiltersSubmit(event) {
    event.preventDefault();
    applyFilters(getFiltersFromForm());
  }

  initializeAmountRangeControls();
  populateDatalistOptions(policyNumberOptions, policiesData.map((policyItem) => policyItem.policyNumber));
  populateSelectOptions(statusSelect, policiesData.map((policyItem) => policyItem.status), 'Todos los estados');
  syncFiltersFormWithState(paginationState.filters);

  pageSizeSelect.addEventListener('change', handleRowsPerPageSelectionChange);
  sortSelect.addEventListener('change', handlePoliciesSortSelectionChange);
  firstButton.addEventListener('click', handleGoToFirstPageClick);
  prevButton.addEventListener('click', handleGoToPreviousPageClick);
  nextButton.addEventListener('click', handleGoToNextPageClick);
  lastButton.addEventListener('click', handleGoToLastPageClick);

  if (filtersForm) {
    filtersForm.addEventListener('submit', handleFiltersSubmit);
  }

  if (amountMinRangeInput) {
    amountMinRangeInput.addEventListener('input', () => handleAmountRangeInputChange('min'));
  }

  if (amountMaxRangeInput) {
    amountMaxRangeInput.addEventListener('input', () => handleAmountRangeInputChange('max'));
  }

  if (amountMinInput) {
    amountMinInput.addEventListener('input', handleAmountTextInputChange);
  }

  if (amountMaxInput) {
    amountMaxInput.addEventListener('input', handleAmountTextInputChange);
  }

  clearFiltersButtons.forEach((buttonElement) => {
    buttonElement.addEventListener('click', clearFilters);
  });

  if (openFiltersPanelButton) {
    openFiltersPanelButton.addEventListener('click', handleOpenFiltersPanelClick);
  }

  if (closeFiltersPanelButton) {
    closeFiltersPanelButton.addEventListener('click', handleCloseFiltersPanelClick);
  }

  document.addEventListener('click', (event) => {
    const chipRemoveButton = event.target.closest('[data-filter-chip-remove]');

    if (chipRemoveButton) {
      removeSingleFilter(chipRemoveButton.dataset.filterChipRemove);
      return;
    }

    if (!isFiltersPanelOpen()) return;

    const clickTarget = event.target;
    const clickedInsidePanel = filtersPanel?.contains(clickTarget) ?? false;
    const clickedOpenButton = openFiltersPanelButton?.contains(clickTarget) ?? false;

    if (!clickedInsidePanel && !clickedOpenButton) {
      closeFiltersPanel();
    }
  });

  renderUpcomingRenovationsPage(policiesData, paginationState, paginationControls);
}

document.addEventListener('DOMContentLoaded', initUpcomingRenovationsPagination);
