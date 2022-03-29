"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu_item");

  const active = () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  }

  hamburger.addEventListener("click", () => {
    active();
  });

  menuItem.forEach(el => {
    el.addEventListener("click", () => {
      active();
    });
  });
});
