"use strict";
let lightness;
let hue;

document.addEventListener("mousemove", changeBackground);

function changeBackground(e) {
  lightness = Math.round((e.clientX / window.innerWidth) * 100);
  hue = Math.round((e.clientY / window.innerHeight) * 360);

  let hsl = `hsl(${hue}, 50%, ${lightness}%)`;

  document.querySelector("#hsl").textContent = `background color is: ${hsl}`;

  document.querySelector("body").style.backgroundColor = hsl;

  if (lightness < 50) {
    document.querySelector("#hsl").style.color = "white";
  } else {
    document.querySelector("#hsl").style.color = "black";
  }
}
