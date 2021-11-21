document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');

  const clickHandler = () => {
    alert('Butonul a fost apasat.');
  };

  const toggleEvents = () => {
    if (window.innerWidth > 650) {
      button.addEventListener('click', clickHandler);
    } else {
      button.removeEventListener('click', clickHandler);
    }
  };

  button.addEventListener('click', toggleEvents);
});

// nu stiu daca am facut corect DOMContentLoaded
// nu stiu cum sa il pun in functiune in acest exercitiu
