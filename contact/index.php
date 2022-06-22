<html lang="ja">
<head>
<meta charset="utf-8">
<title>相談・体験の連絡 | 障がい児のサッカースクール NPO法人ピジョン</title>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link rel="icon" sizes="16x16 32x32 48x48 64x64" href="/common/images/logo/favicon_pigeon.ico"/>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBJJ9KL');</script>
<!-- End Google Tag Manager -->
<script src="/common/js/main.js"></script>
<script src="https://pigeon.smktg.jp/static/js/embedded_form.js" charset="utf-8"></script>
<link rel="stylesheet" href="/common/css/reset.css">
<link rel="stylesheet" href="/common/css/main.css">
</head>
<body id="top">
<div class="wrap">
<header id="header" class="header-logoOnly">
</header>
<main id="contact">
	<div id="mainContent">
		<section class="commonSection">
			<div class="commonInner sectionContent">
				<div class="sectionContent-header">
					<h1>相談・体験する</h1>
					<p>私たちピジョンはいつでもご相談・ご質問をお待ちしております。<br class="sp_display">ご質問だけの場合、SNSでの気軽なやりとりも可能です。</p>
				</div>

				<ul class="tab">
					<li class="tab__label">保護者用フォーム</li>
					<li class="tab__label">協力者用フォーム</li>
					<li class="tab__label">SNSでやりとり</li>
				</ul>

				<!--タブを切り替えて表示するコンテンツ-->
				<ul class="tabContent">
					<li class="tabContent__box">
						<p class='formDescription formDescription-student'>～お子さんのクラブ活動に関するお問い合わせ～</p>
						<script src="https://pigeon.smktg.jp/static/js/embedded_form.js" charset="utf-8"></script>
                        <link rel="stylesheet" href="/common/css/smp_form.css">
						<div id="emb3554ffa6-efc5-4c8e-9344-d27543ad2baa" class="smpForm"></div>
						<script>
							(function(){
								const formOpt = {
									submitWord: "連絡する",
									showPolicy: true,
									policyText: "attribute1",
								};
								const callbackOpt = {
									executionTiming: "onCompleted",
									callbackFunc: function () {
										dataLayer.push({
											event: 'form_completed',
											contact_type: 'student'
										});
										document.querySelector('formDescription-student').style.display = 'none';
									}
								};
								smpform.loadForm('emb3554ffa6-efc5-4c8e-9344-d27543ad2baa', 'https://pigeon.smktg.jp', formOpt, callbackOpt);
							}())

						</script>
                        <div class="loadingWrap">
                            <span class="loadingWrap__text">読み込み中です。<span class="spNone">数秒お待ちください</span><span></span></span>
                        </div>
					</li>
					<li class="tabContent__box">
						<p class='formDescription formDescription-support'>～ボランティアや情報交換、寄付に関するお問い合わせ～</p>
						<div id="emb420252c2-ce34-4147-bdcf-07e183bf4925" class="smpForm"></div>
						<script>
							(function(){
								const formOpt = {
										submitWord: "連絡する",
										showPolicy: true,
										policyText: "attribute1",
									};
								const callbackOpt = {
									executionTiming: "onCompleted",
									callbackFunc: function() {
										dataLayer.push({
											event: 'form_completed',
											contact_type: 'support'
										});
										document.querySelector('formDescription-support').style.display = 'none';
									}
								};
								smpform.loadForm('emb420252c2-ce34-4147-bdcf-07e183bf4925', 'https://pigeon.smktg.jp', formOpt, callbackOpt);
							}())
						</script>
						<div class="loadingWrap">
							<span class="loadingWrap__text">読み込み中です。<span class="spNone">数秒お待ちください</span><span></span></span>
						</div>
					</li>
					<li class="tabContent__box contactSns">
						<p><span class="tabContent__box__tw">Twitter</span><span class="tabContent__box__fb">Facebook</span></p>
						<p>DMによるご質問を受け付けております。</p>
						<div class="snsWrapper">
						    <ul class="snsWrapper__btn">
									<li class="snsBtn__tw"><a href="https://twitter.com/PigeonSoccerNPO"></a></li>
									<li class="snsBtn__fb"><a href="https://www.facebook.com/pigeon.soccer/"></a></li>
						    </ul>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</main><!-- /main -->
<script>
  // SMPフォームの表示を検知。コールバック関数が用意されていないかつ処理タイミングが難しいためここに記述する。
  (function () {
    const target_elm = document.querySelector(".smpForm");
    const mo = new MutationObserver(function () {
      dataLayer.push({ event: 'form_view' });
      customizeSMPFormHTML();
    });
    const config = {
      childList: true
    };
    mo.observe(target_elm, config);

    function customizeSMPFormHTML() {
      hideUselessElms(selector=".loadingWrap");
      setInputLabel();
      displaySampleInput();
      displaySendingMessage();
    }

    function hideUselessElms(selector){
      const loading_elm_list = Array.from(document.querySelectorAll(selector));
      loading_elm_list.map(function (elm) { return elm.style.display = "none"; });
    }

    class InputLabel {
      constructor(target_tag, index) {
        this.new_tag = document.createElement('label');
        this.tag = target_tag;
        this.index = index;
          
      }
      __setNewTagId(parent_tag) {
        //inputタグのID属性とlabelタグのfor属性に値を付与。値にはinputタグのname属性の値に加え、選択肢を識別するためにindexも使う
        let input_tag = parent_tag.childNodes[0];
        let label_id = input_tag.name + "_" + this.index;
        input_tag.setAttribute('id', label_id);
        return label_id;
      }
      setInputLebelTag() {
        //inputタグのテキストをlabelタグで囲んだ要素を準備する
        let parent_tag = this.tag.parentNode;
        let label_id = this.__setNewTagId(parent_tag);
        let text_content = parent_tag.childNodes[1]; //inputタグ内のテキスト情報を取得
    
        this.new_tag.htmlFor = label_id;
        this.new_tag.textContent = text_content.textContent; //"text_content"だけでは[object Text]が返るので中身を取り出してからlabelで囲う
    
        //実際のHTMLで指定のテキスト要素をlabelタグで囲まれた要素に更新する
        let target_tag = text_content.parentNode;
        target_tag.replaceChild(this.new_tag, text_content);
      }
    }
    function setInputLebelTagsAll(selector_text) {
      const target_tags = document.querySelectorAll(selector_text);
      Array.from(target_tags).map(function (tag, index) {
          let input = new InputLabel(tag, index);
          input.setInputLebelTag();
      });
    }
    function setInputLabel(){
      /*元々のソースコードは、inputタグの選択肢のテキストに<label>タグがないため、特定のCSSが適用しにくい状態。
        そのため、全てのinputタグの選択肢のテキストを<label>タグで囲う処理を行う */
      setInputLebelTagsAll("input[type='radio']");
      setInputLebelTagsAll("input[type='checkbox']");
    }
    function displaySampleInput(){
      sampleInput("[name='Public::EmbeddedApplication::User_D__P__D_email']", "例 - sample@pigeon.com");
      sampleInput("[name='Public::EmbeddedApplication::User_D__P__D_name1']", "例 - 山田");
      sampleInput("[name='Public::EmbeddedApplication::User_D__P__D_name2']", "例 - 太郎");
      sampleInput("[name='Public::EmbeddedApplication::User_D__P__D_VisitorData.attribute36']", "ご入力ください");
      function sampleInput(selector, text) {
        const elms = document.querySelectorAll(selector);
        Array.from(elms).map(function (elm) { return elm.placeholder = text });
      }
    }
    function displaySendingMessage(){
      const form_complete_buttons = document.querySelectorAll('input[name=smpSubmit]');
      Array.from(form_complete_buttons).forEach(function (elm) {
        elm.addEventListener('click', function () {
          elm.value = '送信中...少々お待ちください。';
        });
      });
    }
	}())
</script>
<footer id="footer">
</footer><!-- /footer -->
</div>
</body>
</html>
