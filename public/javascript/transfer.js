'use strict'
$(document).ready(() => {
  $('#confirm').click(() => {
    $.post(
      "http://127.0.0.1:8080/api/transfer",
      { from: localStorage.getItem("logedUser"), amount: $('#amount').val(), to: $('#bankcard').val() },
      (data) => {
        if (data.error) {
          alert(data.error);
        } else {
          let record = {
            type: "转账",
            amount: $('#amount').val(),
            from: localStorage.getItem("logedUser"),
            to: $('#bankcard').val(),
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
