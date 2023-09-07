"use strict";
let lightness = 40;

document.addEventListener("mousemove", changeBackground);

function changeBackground(e) {
  lightness = Math.round((e.clientX / window.innerWidth) * 100);
  let hsl = `hsl(290, 40%, ${lightness}%)`;
  document.querySelector(
    "#lightness"
  ).textContent = `background color is: ${hsl}`;
  document.querySelector("body").style.backgroundColor = hsl;

  if (lightness < 50) {
    document.querySelector("#lightness").style.color = "white";
  } else {
    document.querySelector("#lightness").style.color = "black";
  }
}
