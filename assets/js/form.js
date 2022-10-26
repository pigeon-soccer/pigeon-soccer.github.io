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

window.addEventListener("load", function () {
  window.dataLayer = window.dataLayer || [];
  (function () {

    function inputChange(event){
      const value = event.currentTarget.value;
      window.dataLayer.push({
        event: 'selectFormThema',
        selectFormThema: value
      });
      if (value =='保護者') {
        document.querySelector('[id=agerange]').hidden = false;
      } else {
        document.querySelector('[id=agerange]').hidden = true;
      }
      if (value == '取材・資金援助') {
        document.querySelector('[id=about]').hidden = true;
        document.querySelector('[id=about]').value = "質問";
      } else {
        document.querySelector('[id=about]').hidden = false;
      }
    }
    const text = document.getElementById('type');
    text.addEventListener('change', inputChange);
  })()
})
