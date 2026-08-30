/**
 * モバイル用グローバルナビゲーション（フルスクリーン・オーバーレイ）の開閉
 *
 * 本体サイト (/, /about/, /activity/) と /join/ で共用する。
 * 本体サイトのヘッダーは jQuery の load() で後から差し込まれるため、
 * 要素を直接探して bind するのではなく document への委譲で処理する。
 * そうしないとヘッダーの到着前にスクリプトが走って何も bind されない。
 *
 * jQuery には依存しない。/join/ 側は jQuery を使っていないため。
 */
(function () {
  'use strict';

  var OPEN = 'is-open';
  var BODY_OPEN = 'is-navOpen';
  var LABEL_OPEN = 'メニューを開く';
  var LABEL_CLOSE = 'メニューを閉じる';

  /** 開閉対象のナビ要素を、トグルの aria-controls から引く */
  function panelOf(toggle) {
    var id = toggle.getAttribute('aria-controls');
    return id ? document.getElementById(id) : null;
  }

  function currentToggle() {
    return document.querySelector('.navToggle.' + OPEN);
  }

  function focusables(panel) {
    return Array.prototype.filter.call(
      panel.querySelectorAll('a[href], button:not([disabled])'),
      function (el) { return el.offsetParent !== null; }
    );
  }

  function open(toggle, panel) {
    toggle.classList.add(OPEN);
    panel.classList.add(OPEN);
    document.body.classList.add(BODY_OPEN);
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', LABEL_CLOSE);

    // 開いた直後は最初のリンクに移動させる。キーボードと支援技術の利用者が
    // ヘッダーの外まで tab で辿らなくて済むようにするため。
    // ただしこの時点ではまだ visibility:hidden が解けておらず、不可視要素は
    // フォーカスを受け取れない。スタイルが適用され描画されるまで2フレーム待つ
    // (1フレームでは間に合わずトグルにフォーカスが残ることを実測で確認)。
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var items = focusables(panel);
        if (items.length) {
          items[0].focus();
        }
      });
    });
  }

  function close(toggle, panel, returnFocus) {
    toggle.classList.remove(OPEN);
    panel.classList.remove(OPEN);
    document.body.classList.remove(BODY_OPEN);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', LABEL_OPEN);
    if (returnFocus) {
      toggle.focus();
    }
  }

  document.addEventListener('click', function (e) {
    var toggle = e.target.closest ? e.target.closest('.navToggle') : null;

    if (toggle) {
      var panel = panelOf(toggle);
      if (!panel) return;
      e.preventDefault();
      if (toggle.classList.contains(OPEN)) {
        close(toggle, panel, true);
      } else {
        open(toggle, panel);
      }
      return;
    }

    // メニュー内のリンクを踏んだら閉じる。ページ内アンカーの場合、
    // 閉じないとオーバーレイが移動先を覆ったままになる。
    var openToggle = currentToggle();
    if (!openToggle) return;
    var openPanel = panelOf(openToggle);
    if (!openPanel) return;

    var link = e.target.closest ? e.target.closest('a[href]') : null;
    if (link && openPanel.contains(link)) {
      close(openToggle, openPanel, false);
    }
  });

  document.addEventListener('keydown', function (e) {
    var openToggle = currentToggle();
    if (!openToggle) return;
    var panel = panelOf(openToggle);
    if (!panel) return;

    if (e.key === 'Escape') {
      close(openToggle, panel, true);
      return;
    }

    // フォーカスをオーバーレイの中に留める。開いている間、背面のリンクは
    // 見えていないのに tab で到達できてしまうため。
    if (e.key !== 'Tab') return;
    var items = focusables(panel);
    if (!items.length) return;
    items.push(openToggle);

    var first = items[0];
    var last = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // 992px以上へリサイズしたらオーバーレイは不要になる。開いたままだと
  // 横並びナビの上に暗幕が残る。
  window.addEventListener('resize', function () {
    if (window.innerWidth < 992) return;
    var openToggle = currentToggle();
    if (!openToggle) return;
    var panel = panelOf(openToggle);
    if (panel) close(openToggle, panel, false);
  });
})();
