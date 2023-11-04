
// Tafsir View 001
const on__001 = document.querySelector(".on__001");
const tsr__001 = document.querySelector(".tsr__001");
const close__001 = document.querySelector(".close__001 .back_to");
const over__001 = document.querySelector(".over__001");

function ShowTsr001() {
  on__001.setAttribute("hidden", "");
  tsr__001.removeAttribute("hidden");
  over__001.removeAttribute("hidden");
};

function HideTsr001() {
  tsr__001.setAttribute("hidden", "");
  over__001.setAttribute("hidden", "");
  on__001.removeAttribute("hidden");
};

on__001.addEventListener("click", ShowTsr001);
close__001.addEventListener("click", HideTsr001);
over__001.addEventListener("click", HideTsr001);
  
// Tafsir View 002
const on__002 = document.querySelector(".on__002");
const tsr__002 = document.querySelector(".tsr__002");
const close__002 = document.querySelector(".close__002 .back_to");
const over__002 = document.querySelector(".over__002");

function ShowTsr002() {
  on__002.setAttribute("hidden", "");
  tsr__002.removeAttribute("hidden");
  over__002.removeAttribute("hidden");
};

function HideTsr002() {
  tsr__002.setAttribute("hidden", "");
  over__002.setAttribute("hidden", "");
  on__002.removeAttribute("hidden");
};

on__002.addEventListener("click", ShowTsr002);
close__002.addEventListener("click", HideTsr002);
over__002.addEventListener("click", HideTsr002);
  
// Tafsir View 003
const on__003 = document.querySelector(".on__003");
const tsr__003 = document.querySelector(".tsr__003");
const close__003 = document.querySelector(".close__003 .back_to");
const over__003 = document.querySelector(".over__003");

function ShowTsr003() {
  on__003.setAttribute("hidden", "");
  tsr__003.removeAttribute("hidden");
  over__003.removeAttribute("hidden");
};

function HideTsr003() {
  tsr__003.setAttribute("hidden", "");
  over__003.setAttribute("hidden", "");
  on__003.removeAttribute("hidden");
};

on__003.addEventListener("click", ShowTsr003);
close__003.addEventListener("click", HideTsr003);
over__003.addEventListener("click", HideTsr003);
  
  
  
  
  
  
// Main Input Quran Digital Js
const AT_001 = document.getElementById("AYT001");
const AT_002 = document.getElementById("AYT002");
const AT_002 = document.getElementById("AYT002");
 document.getElementById("TSR001").innerHTML= AT_001.innerHTML;
document.getElementById("TSR002").innerHTML= AT_002.innerHTML;
document.getElementById("TSR003").innerHTML= AT_003.innerHTML;
