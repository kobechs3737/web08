'use strict';

$(function() {
  const $username  = $('#username');
  const $password  = $('#password');
  const $agreement = $('#agreement');
  const $submit    = $('#submit');


  function isFormValid() {
    const isValid = $username.val().trim()
      && $password.val().trim()
      && $agreement.prop('checked');

    $submit.attr("disabled", !isValid);
  }

  isFormValid();

  $('input').on('keyup change', function() {
    isFormValid();
  });

  
  $('form').on('submit', (e) => {
    e.preventDefault();
    
    alert('登録しました。');
  });
});