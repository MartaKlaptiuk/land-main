//copy to clipboard in cabinet ICO
var button = document.querySelector(".copy");
button.addEventListener("click", function(event) {
  var text = document.querySelector(".text");
  text.select();
  document.execCommand("copy");
});

var button_referal = document.querySelector(".copy-referal");
button_referal.addEventListener("click", function(event) {
  var text = document.querySelector(".text-referal");
  text.select();
  document.execCommand("copy");
});
