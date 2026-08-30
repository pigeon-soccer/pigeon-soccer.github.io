// 沿革リンクに出す「◯年の」の年数。ヘッダーは load() で非同期に読み込まれるため、
// #passedYeaer はコールバックの中でしか存在しない。
function calcPassedYear() {
  var date = new Date();
  return date.getFullYear() - 2011;
}

$(function(){
   $("#header").load("/header.html", function () {
     var el = document.querySelector("#passedYeaer");
     if (el) {
       el.innerText = calcPassedYear() + '年の';
     }
   });
   $("#footer").load("/footer.html");
});

$(function(){
    var startPos = 0,winScrollTop = 0;
    $(window).on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            $('#header').addClass('hide');
        } else {
            $('#header').removeClass('hide');
        }
        startPos = winScrollTop;
    });
});

$(function(){
  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


// ハンバーガーメニューの開閉は assets/js/nav-overlay.js が担当する。
// 旧実装は .globalNav の right を -700px から 0 へ animate する方式だったが、
// マークアップから .globalNav__btn を廃止したため削除した。
