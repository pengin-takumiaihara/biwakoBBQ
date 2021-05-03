$(function () {
  // ***************************
  // ページ内スムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  var btn = $('.ly_scrollBtn');
  $(window).on('load scroll', function () {
    if ($(this).scrollTop() > 100) {
      btn.addClass('is_scrollBtn');
    } else {
      btn.removeClass('is_scrollBtn');
    }
  });

  // ***************************
  // ハンバーガーメニュー
  $('.js_headerBtn , .el_header_list > a , .ly_header_inner').on('click', function () {
    $('.ly_header_inner , .el_headerBtn_line , .js_headerBtn , .el_header_list').toggleClass('is_open');
    $('body').toggleClass('is_noScroll');
    $('.el_logo').toggle();
  })


  // ***************************
  // スライダー
  $('.js_slide_img').on('click', function () {
    $(this).addClass('is_click');
  })

  // ***************************
  // アコーディオン
  $('.bl_accordion_innerMenu').css("display", "none");
  $('.js_accordion_btn').on('click', function () {
    // プラスアイコン制御
    $(this).children().toggleClass('is_open');
    $('.el_accordion_icon').not($(this).children()).removeClass('is_open');
    // メニューのスライド
    $(this).parent().next().slideToggle(300);
    $('.bl_accordion_menu').not($(this).parent()).next().slideUp();
  });


  // ***************************
  // モーダル
  $('.js_modalOpen').click(function () {
    $("body").addClass("is_noScroll");
    var id = $(this).data('id');
    $('.js_overlay , .is_open_modal[data-id="modal' + id + '"]').fadeIn();
    // 背景固定時
    $('body').css('padding-right', '15px');
  });

  $('.js_close , .js_overlay').click(function () {
    $("body").removeClass("is_noScroll");
    $('.js_overlay, .is_open_modal').fadeOut();
    // 背景固定解除時
    $('body').css('padding-right', '0');
  });
});