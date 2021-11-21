document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');
  const mediaQueryList = matchMedia('(min-width: 650px)');

  const clickHandler = () => {
    alert('Butonul a fost apasat.');
  };

  const toggleEvents = () => {
    if (mediaQueryList.matches) {
      button.addEventListener('click', clickHandler);
    } else {
      button.removeEventListener('click', clickHandler);
    }
  };

  mediaQueryList.addEventListener('change', () => {
    toggleEvents();
  });

  toggleEvents();
});
