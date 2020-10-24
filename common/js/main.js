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

// 以下はJQueryのライブラリの問題で上手く動作せず
// $(function(){
// //    /*test
//     console.log("function loaded")
//     if (typeof jQuery == 'undefined') {
//       console.log('jQuery not loaded');
//     } else {
//       console.log('jQuery loaded');
//     }
//     if($('.globalNav__btn')) {console.log("dom loaded")}
//    */
//     $(".globalNav__btn").on("click", function(){
//         console.log("fired on-click") //test
//         // ハンバーガーメニューの位置を設定
//         var rightVal = 0;
//         if($(this).hasClass("open")) {
//             // 位置を移動させメニューを開いた状態にする
//             rightVal = -700;
//             // メニューを開いたら次回クリック時は閉じた状態になるよう設定
//             $(this).removeClass("open");
//         } else {
//             // メニューを開いたら次回クリック時は閉じた状態になるよう設定
//             $(this).addClass("open");
//         }

//         $(".globalNav").stop().animate({
//             right: rightVal
//         }, 200);
//     });
// });


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


// //-----SMP form-----
// if(document.location.pathname=="/contact/"){
//     //SMPフォームの読み込みを判別
//     var timer = setInterval(function(){
//         //SMPフォームの読み込みが終わったときの処理
//         if(document.querySelector(".smpForm form td input")){
//             //Loading非表示
//             document.querySelector(".loadingWrap").style.display = "none";
//             //フォームのレイアウト修正
//             //「非表示」とつく入力項目を非表示にする
//             //直接IDを指定してCSSで非表示にする方針と比較可
//             var elms = document.querySelectorAll(".ss_form_title")
//             for(var i=0; i<elms.length; i++){
//                 if( elms[i].innerText.match(/非表示/) ){
//                     elms[i].parentNode.style.display = "none";
//                 }
//             }
//             //フォームカテゴリの修正
//             var categoryName_address = "ご連絡先"
//             var categoryName_detail = "お問い合わせ内容"
//             var targetElm_selector_address = "#ss_name"
//             var targetElm_selector_detail = "#ss_VisitorData\\.attribute34"
//             var categoryClassName_address = "formCategory_address"
//             var categoryClassName_detail = "formCategory_delail"
//             function categoryTitleElement(categoryName, targetElm_selector,categoryClassName){
//                 //フォームカテゴリ名の要素の作成
//                 var p_elm = document.createElement('p');
//                 p_elm.textContent = categoryName
//                 p_elm.className = categoryClassName
//                 $(p_elm).insertBefore(targetElm_selector);
//                 //フォームカテゴリ名のスタイル
//                 var categoryTitleStyle = document.querySelector("p."+categoryClassName).style;
//                 categoryTitleStyle.textAlign = "center";
//                 categoryTitleStyle.fontWeight = "bold";
//                 categoryTitleStyle.fontSize = "2rem";
//                 categoryTitleStyle.padding = "30px 0";
//             }
//             categoryTitleElement(categoryName_address, targetElm_selector_address, categoryClassName_address);
//             categoryTitleElement(categoryName_detail, targetElm_selector_detail, categoryClassName_detail);

//             //フォーム項目の修正実行
//             document.querySelector("[name='Public::EmbeddedApplication::User_D__P__D_email']").placeholder = "例 - sample@pigeon.com"
//             document.querySelector("[name='Public::EmbeddedApplication::User_D__P__D_name1']").placeholder = "例 - 山田"
//             document.querySelector("[name='Public::EmbeddedApplication::User_D__P__D_VisitorData.attribute36']").placeholder = "ご入力ください"

//             //CSSを適用しやすくするために選択肢テキストを<label>タグで囲む
//             function setLebelTag(selector_text){
//                 var old_nodes = document.querySelectorAll(selector_text)
//                 var old_node = [];
//                 var new_node = [];
//                 var target_node = [];
//                 for(var i=0; i<old_nodes.length; i++){
//                     //テキストをlabelタグで囲んだ要素を準備する
//                     old_node[i] = old_nodes[i].parentNode.childNodes[1];
//                     new_node[i] = document.createElement('label');
//                     new_node[i].textContent = old_node[i].textContent
//                     //いま見ているinputタグに「ID属性+識別子」を付与し、nameと同様の値を振る + labelには同じ値を持つfor属性を付与する
//                     var input_elm = old_nodes[i].parentNode.childNodes[0]
//                     var id = input_elm.name + "_" + i;
//                     input_elm.setAttribute( 'id', id );
//                     new_node[i].htmlFor = id
//                     //HTMLで指定のテキスト要素をlabelタグで囲まれた要素に更新する
//                     target_node[i] = old_node[i].parentNode;
//                     target_node[i].replaceChild(new_node[i],old_node[i]);
//                 }
//             }
//             setLebelTag("td input[type='radio']")
//             setLebelTag("td input[type='checkbox']")

//             //ボタンの文言の修正
//             document.getElementsByName("smpSubmit")[0].value = "連絡する"

//             //フォームの読み込み終了フラグ
//             dataLayer.push({'event': 'smpFormLoaded'});

//             //<--フォームのレイアウト修正
//             //ループの解除
//             clearInterval(timer);


//         }
//     }, 300);
//     //<--ループ


}
