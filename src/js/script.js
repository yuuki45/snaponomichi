// ハンバーガー＆ドロワーメニュー
document.addEventListener('DOMContentLoaded', function() {
  const headerBtn = document.querySelector('#js_header_button');
  const drawer = document.querySelector('.drawer');
  const drawerBg = document.querySelector('.drawer_bg');
  const drawerLinks = document.querySelectorAll('.drawer a');

  function toggleDrawer() {
    headerBtn.classList.toggle('active');
    drawer.classList.toggle('active');
    drawerBg.classList.toggle('active');
  }

  headerBtn.addEventListener('click', toggleDrawer);

  drawerLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      toggleDrawer();
    });
  });
});
