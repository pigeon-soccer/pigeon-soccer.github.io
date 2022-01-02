$(function(){
 	$("#header").load("/header.html");
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


$(document).on('click','.globalNav__btn', function() {
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


$(function () {
    //流入別のタブ切り替え
    const url = location.search;
    const contact_type_map = ['student', 'support', 'sns'];
    function visibleForm(i){
        $('.tabContent__box').css('display', 'none'); //すべてのコンテンツを非表示にする
        $('.tab > li.tab__label').removeClass('select'); 
        $('.tabContent__box').eq(i).css('display', 'block');
        $(".tab > li:nth-child("+(i+1)+")").addClass('select')
    }
    function contact_visible(i){
        visibleForm(i);
        dataLayer.push({ event: 'form_page_view', contact_type: contact_type_map[i] });
    }
    function tab_visible_switch_by_click(){
        $('.tab > li.tab__label').click(function() {
            var clicked_tab_index = $('.tab > li.tab__label').index(this);
            contact_visible(clicked_tab_index);
        });
    }
    function tab_visible_switch_by_url_query(){
        if (url.match(/type=school/)) contact_visible(0);
        else if (url.match(/type=support/)) contact_visible(1);
        else if (url.match(/type=sns/)) contact_visible(2);
        else if (document.location.pathname.match(/\/contact\//)) contact_visible(0);
    }
    tab_visible_switch_by_url_query();
    tab_visible_switch_by_click();
});
