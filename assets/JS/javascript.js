function enviarDados() {
  var produto = document.getElementById("produto").value;
  var codigo = document.getElementById("codigo").value;
  var quantidade = document.getElementById("quantidade").value;
  var valor = document.getElementById("valor").value;
  var imagem = document.getElementById("imagem").value;

  if (produto.length < 3 || produto.length > 30)
    alert("Tamanho do nome do produto invalido");
}

function readImage() {
  if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}
document
  .getElementById("img-input")
  .addEventListener("change", readImage, false);

var btn = document.querySelector("#show-or-hide");
var container = document.querySelector(".container");

btn.addEventListener("click", function () {
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
});
