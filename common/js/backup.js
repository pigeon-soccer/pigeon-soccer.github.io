// function customizeSMPFormHTML() {
    //...
    // //読み込み中の文言を非表示化、および＊＊＊というワードが含まれる項目を非表示化する
    // var loading_elm_list = Array.from(document.querySelectorAll(".loadingWrap"));
    // var display_none_elm_list = Array.from(document.querySelectorAll(".ss_form_title")).filter(function (elm) { return elm.innerText.match(/非表示/) });
    // loading_elm_list.map(function (elm) { return elm.style.display = "none"; });
    // display_none_elm_list.map(function (elm) { return elm.parentNode.style.display = "none"; });
    //...
                // 削除予定 経過観察中
                // if (SMPFormIsCustomized()){
                //     window.dataLayer.push({ "event": "find_smpForm" });
                //     clearInterval(set_interval_id);
                // }
    //...
// function SMPFormIsCustomized() {
//     /*念のため処理タイミングのズレにより未処理のものがないか（非表示扱いの項目がまだ表示されていないか）をチェックし、
//     完了していればtrue、そうでなければfalseを返す*/
//     var display_none_target_elms = Array.from(document.querySelectorAll(".ss_form_title")).filter(function (elm) { return elm.innerText.match(/＊＊＊/) });
//     var display_none_elms = display_none_target_elms.filter(function (elm) { return elm.parentNode.style.display == "none"; });
//     return Boolean(display_none_target_elms.length == display_none_elms.length)
// }


