const $body = $('body');
const $p = $('<p>', {
  text: 'Textul paragrafului',
  id: 'myParagraph',
  class: 'clase de css',
});

const $paragraph = $('<p>', {
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});

$p.appendTo($body);

$body.append($paragraph);
setTimeout(() => {
  $paragraph.addClass('error');
}, 1000 * 3);

$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

const $span = $('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($paragraph);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($('.container'));

const $navigation = $('<div>', {
  class: 'navigation',
  text: 'Nav goes here',
});

const $container = $('.container');
$container.after($navigation);

const $navLink = $('<a>', {
  class: 'nav-link',
  text: 'Primul Link',
  href: '',
  title: 'Primul Link',
}).appendTo($navigation);

const $beforeNavLink = $('<h2>', {
  text: 'Navigatie',
});

$navLink.before($beforeNavLink);

const $supOne = $('<sup>', {
  text: '1',
});

$navLink.prepend($supOne);

const $beforeContainer = $('<h1>', {
  text: 'Invat jQuery.',
});

$container.before($beforeContainer);

const $documentation = $('<p>', {
  text: 'Documentatia jquery poate fi gasita ',
});

$p.before($documentation);

$('<a>', {
  text: 'aici',
  href: 'https://learn.jquery.com/',
  target: 'blank',
  title: 'jQuery',
}).appendTo($documentation);
