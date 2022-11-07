function enviarDados() {
  var produto = document.getElementById("produto").value;
  var codigo = document.getElementById("codigo").value;
  var quantidade = document.getElementById("quantidade").value;
  var valor = document.getElementById("valor").value;

  if (produto.length < 3 || produto.length > 30)
    alert("Tamanho do nome do produto invalido");
}

function validar(){
var cod = document.getElementById("input-cod").value;
if (cod.value == ""){
  alert("Erro!");
}
}

