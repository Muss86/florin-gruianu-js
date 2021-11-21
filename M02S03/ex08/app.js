$(function () {
  // code here (similar cu DOMContentLoaded)
  const $stageElement = $('.stage');
  const $body = $('body');
  let counter = 0;

  // bind event for mouseover
  $stageElement.on('mouseover', () => {
    $('.message2').remove();
    $('.message2b').remove();
    $('<p>', {
      text: 'Mouse-ul este pe scena',
      class: 'message1',
    }).appendTo($body);
    $('<p>', {
      text: `Mouse-ul a trecut de ${++counter} ori.`,
      class: 'message1a',
    }).appendTo($body);
  });

  $stageElement.on('mouseout', () => {
    $('.message1').remove();
    $('.message1a').remove();
    $('<p>', {
      text: 'Mouse-ul nu mai este pe scena',
      class: 'message2',
    }).appendTo($body);
    $('<p>', {
      text: `Mouse-ul a trecut de ${++counter} ori.`,
      class: 'message2b',
    }).appendTo($body);
  });
});
