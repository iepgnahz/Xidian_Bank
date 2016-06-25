'use strict'
$(document).ready(() => {
  menuBtnsAction();
});

function menuBtnsAction() {
  $('#withdraw').click(() => { window.location.href = "http://127.0.0.1:8080/withdraw"; });
  $('#deposit').click(() => { window.location.href = "http://127.0.0.1:8080/deposit"; });
  $('#transfer').click(() => { window.location.href = "http://127.0.0.1:8080/transfer"; });
  $('#balance').click(() => { window.location.href = "http://127.0.0.1:8080/balance"; });
  $('#return').click(() => { window.location.href = "http://127.0.0.1:8080/login"; });
}
