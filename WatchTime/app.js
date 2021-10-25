function watch() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';

  if (hh === 0) {
    hh = 12;
  } else if (hh > 12) {
    hh -= 12;
    session = 'PM';
  }

  hh = hh < 10 ? '0' + hh : hh;
  mm = mm < 10 ? '0' + mm : mm;
  ss = ss < 10 ? '0' + ss : ss;

  return hh + ':' + mm + ':' + ss + ' ' + session;
}

const paragraph = document.getElementById('watch');
paragraph.innerText = paragraph;
document.body.append(paragraph);
setInterval(function () {
  paragraph.innerText = watch();
}, 1000 * 1);
