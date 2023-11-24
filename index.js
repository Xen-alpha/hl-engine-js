import {init, start, fullscreen} from 'https://cdn.jsdelivr.net/gh/Xen-alpha/hl-engine-js@main/lib/hl-engine.js';

var xashgamename = document.getElementById("xash3d-lg-gamename");
// var xashfullscreen = false;

document.getElementById('start').onclick = () => {
  const reader = new FileReader();
  reader.onload = function(){
    const params = {
      mod: xashgamename,
      map: "",
      filesystem: "LocalStorage",
      fullscreen: false,
      zip: reader.result,
      args: [
        "+volume",
        "0.5",
      ],
    };
    document.getElementById("start").style.display = "none";
    document.getElementById("zip").style.display = "none";
    document.getElementById("xash-filedescription").style.display = "none";
    start(params);
  }
  reader.readAsArrayBuffer(document.getElementById('zip').files[0]);
}

// document.getElementById('xash-fullscreen').onclick = fullscreen;

function setStatus(text) {
  document.getElementById('xash-status').innerHTML = text;
  if (text === "Scripts downloaded!") document.getElementById('xash-status').style["background-color"] = "#FEFECA";
  else if (text === "Running...") document.getElementById("xash-status").style["background-color"] = "#C3FEC3";
  else if (text.substring(0, 11) === "Script Error") document.getElementById("xash-status").style["background-color"] = "#FE8E8E";
}

init({
  canvas: document.getElementById('xash-canvas'),
  location: "https://libertyga.me/wiki/"+xashgamename,
  setStatus: setStatus,
});
