import {init, start, fullscreen} from 'https://cdn.jsdelivr.net/gh/Xen-alpha/hl-engine-js@main/lib/hl-engine.js';

var xashgamename = "valve"
var xashfullscreen = false;

document.getElementById('start').onclick = () => {
  const reader = new FileReader();
  reader.onload = function(){
    const params = {
      mod: document.getElementById('mod').value,
      map: document.getElementById('map').value,
      filesystem: "RAM",
      fullscreen: xashfullscreen,
      zip: reader.result,
      args: [
        "+volume",
        "0.5",
      ],
    };
    start(params);
  }
  reader.readAsArrayBuffer(document.getElementById('zip').files[0]);
}

document.getElementById('xash-fullscreen').onclick = fullscreen;

function setStatus(text) {
  document.getElementById('xash-status').innerHTML = text;
}

init({
  canvas: document.getElementById('xash-canvas'),
  location: 'https://cdn.jsdelivr.net/gh/Xen-alpha/hl-engine-js@main/lib',
  setStatus: setStatus,
});
