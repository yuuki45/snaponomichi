"use strict";

// ハンバーガー＆ドロワーメニュー
document.addEventListener('DOMContentLoaded', function () {
  var headerBtn = document.querySelector('#js_header_button');
  var drawer = document.querySelector('.drawer');
  var drawerBg = document.querySelector('.drawer_bg');
  var drawerLinks = document.querySelectorAll('.drawer a');
  function toggleDrawer() {
    headerBtn.classList.toggle('active');
    drawer.classList.toggle('active');
    drawerBg.classList.toggle('active');
  }
  headerBtn.addEventListener('click', toggleDrawer);
  drawerLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleDrawer();
    });
  });
});