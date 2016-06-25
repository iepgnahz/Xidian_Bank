'use strict'
$(document).ready(() => {
  setCacheUserIdAction();
  setLoginBtnAction();
});

function setCacheUserIdAction() {
  $('#bankCardNumber').bind('input propertychange', () => {
    localStorage.setItem('logedUser', $('#bankCardNumber').val());
  });
}

function setLoginBtnAction() {
  $('#loginBtn').click(() => {
    let cardNumber = $('#bankCardNumber').val();
    let password = $('#password').val();
    $.post(
      "http://127.0.0.1:8080/api/login",
      { bankCardNumber: cardNumber, password: password },
      (data) => {
        if (data.error) {
          alert(data.error);
        } else {
          window.location.href = "http://127.0.0.1:8080/main";
        }
      }
    )
  });
}
