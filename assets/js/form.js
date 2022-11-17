
window.addEventListener("load", function () {
  if ($) {
    $(function(){
      $("#attribute_botblock").load("../components/attribute_botblock.html");
      $("#attribute_agerange").load("../components/attribute_agerange.html");
      $("#attribute_type").load("../components/attribute_type.html");
      $("#attribute_name").load("../components/attribute_name.html");
      $("#attribute_email").load("../components/attribute_email.html");
      $("#attribute_detail").load("../components/attribute_detail.html");
      $("#attribute_about").load("../components/attribute_about.html");
      $("#attribute_symptom").load("../components/attribute_symptom.html");
      $("#attribute_privacy").load("../components/attribute_privacy.html");
      $("#attribute_submit").load("../components/attribute_submit.html");
    });
  }

  window.dataLayer = window.dataLayer || [];
  (function () {

    function setCookie(cookie_name, cookie_value, days) {
      const cookie_path = "path=/;"
      const nowdate = new Date();
      nowdate.setTime(nowdate.getTime() + days * 24 * 60 * 60 * 1000); //日付データ
      const limit_date = nowdate.toGMTString(); //GMT形式に変換.
      const cookie_expires = "expires=" + limit_date + "; ";
      document.cookie = cookie_name + "=" + cookie_value + ";" +
        cookie_expires + cookie_path;
    }

    function getCookieValue(cookie_name) {
      const cookies = `; ${document.cookie}`
      const values_string = cookies.split(`; ${cookie_name}=`);
      if (values_string.length > 1) return values_string.pop().split(';')[0];

    }

    function storeFormSelect(){
      const inputChange = (event) => {
        const value = event.currentTarget.value;
        if (value == '保護者') {
          document.querySelector('[id=agerange]').hidden = false;
          storeFormInfo('student', 'view', 0);
        } else {
          document.querySelector('[id=agerange]').hidden = true;
          storeFormInfo('volunteer', 'view', 0);
        }
        if (value == '取材・資金援助') {
          document.querySelector('[id=about]').hidden = true;
          document.querySelector('[id=about]').value = "質問";
          storeFormInfo('inquiry', 'view', 0);
        } else {
          document.querySelector('[id=about]').hidden = false;
        }
      }

      const text = document.getElementById('type');
      text.addEventListener('change', inputChange);

    }

    function isMatchPath(path){
      return document.location.pathname.indexOf(path) != -1;
    }

    function storeFormInfo(contact_type, contact_step, value, is_integrated_form = false){
      window.dataLayer.push({
        event: 'generate_lead',
        contact_type,
        contact_step,
        value,
        is_integrated_form
      });
      setCookie('contact_type', contact_type, 30);
      setCookie('is_integrated_form', is_integrated_form, 30);
    }

    function storeFormComplete() {
      const contactType = getCookieValue('contact_type');
      const isIntegratedForm = getCookieValue('is_integrated_form');
      if (contactType){
        storeFormInfo(contactType, 'complete', 1, isIntegratedForm);
      }
    }

    if (isMatchPath('/join')) {
      storeFormInfo('volunteer', 'view', 0, true);
    }
    else if (isMatchPath('/contact/student')) {
      storeFormInfo('student', 'view', 0);
    }
    else if (isMatchPath('/contact/volunteer')) {
      storeFormInfo('volunteer', 'view', 0);
    }
    else if (isMatchPath('/contact/inquiry')) {
      storeFormInfo('inquiry', 'view', 0);
    }
    else if(isMatchPath('/contact/common')) {
      storeFormSelect();
    }
    else if (isMatchPath('/contact/thanks')) {
      storeFormComplete();
    }

  })()
})

