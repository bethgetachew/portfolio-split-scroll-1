/* jshint esversion:6 */

const h1Tag = document.querySelector(".big-title");
const fixedNavTag = document.querySelector(".fixed");
const hiddenTextTag = document.querySelector(".hidden-text");
const navTag = document.querySelector("nav");

const fadeInTitle = function() {
  h1Tag.style.top = "50%";
};

window.onload = fadeInTitle();

document.addEventListener("scroll", function() {

  let distanceFromTop = window.scrollY;

  if (distanceFromTop > 3000) {
    h1Tag.style.opacity = "0";
    navTag.style.opacity = "0";
    hiddenTextTag.style.bottom = "35%";
  } else {
    h1Tag.style.opacity = "1";
    navTag.style.opacity = "1";
    hiddenTextTag.style.bottom = "-1000px";
  }

});