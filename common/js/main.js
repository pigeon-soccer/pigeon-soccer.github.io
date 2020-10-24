$(function(){
 	$("#header").load("https://pigeon-soccer.github.io/header.html");
 	$("#footer").load("https://pigeon-soccer.github.io/footer.html");
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
$(document).on('click','.globalNav__btn', function() {
    console.log("fired on-click") //test
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


//SMP Form 関連
//フォームURLの場合、SMPフォームの読み込みを待ってからデザインの修正処理をする
if (document.location.pathname == "/contact/"){
        var set_interval_id = setInterval(SMPFormTrigger, 1000);
        function SMPFormTrigger() {
            var smp_form = document.querySelector(".smpForm");
            if (smp_form) {
                clearInterval(set_interval_id);
                window.dataLayer.push({ "event": "find_smpForm" });
                customizeSMPFormHTML();
            }
        }
}

//SMPの埋め込みFormのHTMLを上書きするための関数
function customizeSMPFormHTML(){
    //読み込み中の文言を非表示化、および非表示というワードが含まれる項目を非表示化する
    var loading_elm_list = Array.from(document.querySelectorAll(".loadingWrap"));
    var display_none_elm_list = Array.from(document.querySelectorAll(".ss_form_title")).filter(function (elm) { return elm.innerText.match(/非表示/) });
    loading_elm_list.map(function (elm) { return elm.style.display = "none"; });
    display_none_elm_list.map(function (elm) { return elm.parentNode.style.display = "none"; });

    /*元々のソースコードは、inputタグの選択肢のテキストに<label>タグがないため、特定のCSSが適用しにくい状態。
      そのため、全てのinputタグの選択肢のテキストを<label>タグで囲う処理を行う */
    setInputLebelTag("td input[type='radio']");
    setInputLebelTag("td input[type='checkbox']");
    function setInputLebelTag(selector_text) {
        var old_input_nodes = document.querySelectorAll(selector_text);
        Array.from(old_input_nodes).map(function (old_input_node, index) {
            //inputタグのテキストをlabelタグで囲んだ要素を準備する
            var td_tag_elm = old_input_node.parentNode;
            var input_tag_text = td_tag_elm.childNodes[1]; //inputタグ内のテキスト情報を取得
            var new_input_node = document.createElement('label')
            new_input_node.textContent = input_tag_text.textContent //"input_tag_text"だけでは[object Text]が返るので中身を取り出してからlabelで囲う

            //inputタグのID属性とlabelタグのfor属性に値を付与。値にはinputタグのname属性の値に加え、選択肢を識別するためにindexも使う
            var input_tag = td_tag_elm.childNodes[0]
            var tag_label_id = input_tag.name + "_" + index;
            input_tag.setAttribute('id', tag_label_id);
            new_input_node.htmlFor = tag_label_id

            //実際のHTMLで指定のテキスト要素をlabelタグで囲まれた要素に更新する
            var target_node = input_tag_text.parentNode;
            target_node.replaceChild(new_input_node, input_tag_text);
        });
    }

    //フォームの入力サンプルを表示
    sampleInput("[name='Public::EmbeddedApplication::User_D__P__D_email']", "例 - sample@pigeon.com");
    sampleInput("[name='Public::EmbeddedApplication::User_D__P__D_name1']", "例 - 山田");
    sampleInput("[name='Public::EmbeddedApplication::User_D__P__D_VisitorData.attribute36']", "ご入力ください");
    function sampleInput(selector, text) {
        var elms = document.querySelectorAll(selector);
        Array.from(elms).map(function (elm) { return elm.placeholder = text });
    }

    //ボタン文言の修正
    Array.from(document.getElementsByName("smpSubmit")).map(function (elm) { elm.value = "連絡する" })
}