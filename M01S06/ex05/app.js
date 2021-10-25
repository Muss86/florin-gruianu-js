(function () {
  //hoisting
  const showAlert = () => {
    alert('Butonul a fost reparat');
  };

  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButton = document.querySelector('#removeButton');
    const messageElement = document.createElement('p');
    const showParagraphMessage = 'Alerta nu va fi afisata';
    const hideParagraphMessage = 'Alerta va fi afisata';

    showButton.addEventListener('click', showAlert);
    messageElement.innerText = hideParagraphMessage;
    let eventBound = true;

    document.body.append(messageElement);

    toggleEventButton.addEventListener('click', function () {
      const toggleEventButton = this;
      const showMessage = 'Porneste afisarea';
      const hideMessage = 'Opreste afisarea';

      let message = '';
      let paragraphMessage = '';

      if (eventBound === true) {
        //remove event listener
        showButton.removeEventListener('click', showAlert);
        message = showMessage;
        paragraphMessage = showParagraphMessage;
        eventBound = false;
      } else {
        //add event listener
        showButton.addEventListener('click', showAlert);
        message = hideMessage;
        paragraphMessage = hideParagraphMessage;
        eventBound = true;
      }

      //refactor
      toggleEventButton.innerText = message;
      messageElement.innerText = paragraphMessage;
    });

    removeButton.addEventListener('click', () => {
      const canRemove = confirm('Remove buttons?');

      if (canRemove === false) {
        return;
      }

      showButton.remove();
      toggleEventButton.remove();
    });
  });
})();
