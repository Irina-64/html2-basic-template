const range = document.querySelector('[data-range]');

const initRange = () => {
  if (!range || typeof noUiSlider === 'undefined') {
    return;
  }

  // noUiSlider подключается отдельно в source/vendor при реализации блока каталога.
};

export { initRange };
