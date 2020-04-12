// JavaScript Document

 // ▼共通パーツ（最終的に共通化する予定）
$(function(){
	$("#header").load("https://pigeon-soccer.github.io/header.html");
	$("#footer").load("https://pigeon-soccer.github.io/footer.html");
});


// ▼スマホでhover解除


// ▼スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


// ▼ハンバーガーメニュー
$(function(){
    $(".globalNav__btn").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -700;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }

        $(".globalNav").stop().animate({
            right: rightVal
        }, 200);
    });
});


$(function() {
    //クリックしたときのファンクションをまとめて指定
    $('.tab > li.tab__label').click(function() {
        //.index()を使いクリックされたタブが何番目かを調べ、
        //indexという変数に代入します。
        var index = $('.tab > li.tab__label').index(this);
        //コンテンツを一度すべて非表示にし、
        $('.tabContent__box').css('display','none');
        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.tabContent__box').eq(index).css('display','block');
 		//一度タブについているクラスselectを消し、
        $('.tab > li.tab__label').removeClass('select');
        //クリックされたタブのみにクラスselectをつけます。
        $(this).addClass('select')
    });
});
