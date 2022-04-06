
// Navigation bar Javascript
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Accordion Javascript
var acc = document.getElementsByClassName("accordion");
var i;

let myName = "Om os";
let firstlink = document
.getElementsByTagName("a")[0];
firstlink.innerHTML = myName;
 
let title = document
.getElementsByTagName("title")[0];
title.innerHTML = "Sataniske kults officielle hjemmeside";

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}