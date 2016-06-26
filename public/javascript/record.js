$(document).ready(() => {
  let record = JSON.parse(localStorage.getItem('currentRecord'));
  setupUI(record);
  setupBtnsAction();
});

function setupUI(record) {
  let dateparts = record.date.split(' ');
  record.date = dateparts[0] + " " + dateparts[1] + " " + dateparts[2] + " " + dateparts[3] + " " + dateparts[4];
  let html = "<small>类型：" + record.type + "<br>" +
             (record.type === "转账" ? ("本人账户：" + record.from + "<br>" + "收款账户：" + record.to + "<br>") : ("账户：" + record.cardNumber + "<br>")) +
             "金额：￥" + record.amount + "<br>" +
             "----------------------------------" +
             "<small class='text-right'><small>" + record.date + "</small></small><br></small>";
  $('#record').html(html);
}

function setupBtnsAction() {
  $('#return').click(() => { window.location.href = "http://127.0.0.1:8080/main" });
  $('#print').click(() => { window.location.href = "http://127.0.0.1:8080/main" });
}
