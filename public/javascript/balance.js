$(document).ready(() => {
  $.post(
    "http://127.0.0.1:8080/api/user",
    { bankCardNumber: localStorage.getItem("logedUser") },
    (data) => {
      if (data.error) {
        alert(data.error);
      } else {
        $('#balance').html("<small>您的账户余额为" + data.user.balance + "元</small>");
      }
    }
  );
  $('#return').click(() => {
    window.location.href = "http://127.0.0.1:8080/main";
  });
});
