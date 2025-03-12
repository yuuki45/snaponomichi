"use strict";

// ハンバーガー＆ドロワーメニュー
document.addEventListener('DOMContentLoaded', function () {
  var headerBtn = document.querySelector('#js_header_button');
  var menu = document.querySelector('.menu');
  var menuNav = document.querySelector('.menu_nav');
  var breakpoint = 900; // ブレークポイント（画面幅）

  function toggleMenu() {
    headerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    updateMenuState();
  }
  function updateMenuState() {
    // メニュー画面が表示されているかどうか
    if (menu.classList.contains('active')) {
      // 画面幅がブレークポイント以上かどうか
      if (window.innerWidth >= breakpoint) {
        menu.style.display = 'none';
        document.body.classList.remove('fixed-scroll');
        document.documentElement.classList.remove('fixed-scroll');
      } else {
        menu.style.display = 'block';
        document.body.classList.add('fixed-scroll');
        document.documentElement.classList.add('fixed-scroll');
      }
    } else {
      menu.style.display = ''; // デフォルトの表示に戻す
      document.body.classList.remove('fixed-scroll');
      document.documentElement.classList.remove('fixed-scroll');
    }
  }
  headerBtn.addEventListener('click', toggleMenu);
  menuNav.addEventListener('click', function (event) {
    if (event.target.classList.contains('menu_nav_item')) {
      toggleMenu();
    }
  });

  // 画面サイズ変更時にもメニューの状態を更新
  window.addEventListener('resize', updateMenuState);
});

// swiper(about)
var swiper = new Swiper(".swiper", {
  loop: true,
  loopedSlides: 10,
  width: 100,
  spaceBetween: 10,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  speed: 6000,
  allowTouchMove: false,
  breakpoints: {
    900: {
      spaceBetween: 20,
      width: 200
    }
  }
});

// swiper(spot)
var swiper_spot = new Swiper(".swiper_spot", {
  loop: true,
  loopedSlides: 10,
  slidesPerView: 1.5273,
  spaceBetween: 16,
  centeredSlides: true,
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    700: {
      slidesPerView: 1,
      width: 320
    },
    900: {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 32,
      width: 344
    }
  }
});

// モーダル
$(function () {
  var isModalOpen = false; // モーダルが開いているかどうかのフラグ

  $('.js_modal_open').on('click', function () {
    if (isModalOpen) {
      return false; // 既にモーダルが開いている場合は、新しいモーダルを開かない
    }
    var target = $(this).data('target');
    $('#' + target).fadeIn();
    // モーダルが開いている状態にする
    isModalOpen = true;
    // 背景のスクロールを禁止
    $('body').css('overflow', 'hidden');
    return false; // デフォルトの挙動を防ぐ
  });

  // モーダルを閉じるイベントを一括で処理
  $('.js_modal_close').on('click', function () {
    $('.js_modal').fadeOut();
    // モーダルが閉じたことをフラグで示す
    isModalOpen = false;
    // 背景のスクロールを再度有効化
    $('body').css('overflow', 'auto');
    return false; // デフォルトの挙動を防ぐ
  });
});

// アコーディオン
$(function () {
  // １つ目のアコーディオンのみ開いておく
  $(".accordion_list:first-child .accordion_box").css("display", "block");
  $(".accordion_list:first-child .accordion_toggle").addClass("close");
  $(".accordion_area").on("click", function () {
    var accordion = $(this).next(".accordion_box");
    var toggle = $(this).find(".accordion_toggle");
    $(accordion).slideToggle();
    if ($(toggle).hasClass("close")) {
      $(toggle).removeClass("close");
    } else {
      $(toggle).addClass("close");
    }
  });
});

// フォームバリデーション //
$(function () {
  var form = jQuery("#js_form");
  var inputElements = form.find(".js_input");
  form.on("submit", function (e) {
    e.preventDefault();
    inputElements.removeClass("is_error");
    var isValid = form[0].checkValidity();
    if (isValid) {
      alert("送信完了");
      form[0].reset();
    }
  });
  inputElements.on("invalid", function () {
    jQuery(this).addClass("is_error");
  });
  inputElements.on("input", function () {
    if (this.checkValidity()) {
      jQuery(this).removeClass("is_error");
    }
  });
});