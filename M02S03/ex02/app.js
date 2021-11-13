const $body = $('body');

const $message = $('<p>', {
  class: 'msg',
  text: 'Acesta este un mesaj de eroare',
});

const $supSup = $('<sup>', {
  text: '1',
});

$message.appendTo($body).prepend($supSup);
