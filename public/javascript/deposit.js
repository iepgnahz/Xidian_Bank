'use strict'
$(document).ready(() => {
  $('#confirm').click(() => {
    $.post(
      "http://127.0.0.1:8080/api/deposit",
      { bankCardNumber: localStorage.getItem("logedUser"), amount: $('#amount').val() },
      (data) => {
        if (data.error) {
          alert(data.error);
        } else {
          let record = {
            type: "存款",
            amount: $('#amount').val(),
            cardNumber: localStorage.getItem("logedUser"),
            date: Date()
          };
          localStorage.setItem('currentRecord', JSON.stringify(record));
          window.location.href = "http://127.0.0.1:8080/record";
        }
      }
    )
  });
  $('#return').click(() => {
    window.location.href = "http://127.0.0.1:8080/main";
  });
});
