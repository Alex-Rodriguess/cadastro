function validar(frm) {
  var produto = document.getElementById("input-prod").value;
  var codigo = document.getElementById("input-cod").value;
  var quantidade = document.getElementById("input-qtd").value;
  var valor = document.getElementById("input-val").value;

  if (produto.value = "") {
    document.querySelector("input-prod").focus;
  }
}

if (frm.codigo.value == "") || codigo.value == null{
  alert("Insira um código válido!");
}

