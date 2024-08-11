function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
  
    var txtCifrado = texto.replace(/e/gim, "enter");
    var txtCifrado = txtCifrado.replace(/o/gim, "ober");
    var txtCifrado = txtCifrado.replace(/i/gim, "imes");
    var txtCifrado = txtCifrado.replace(/a/gim, "ai");
    var txtCifrado = txtCifrado.replace(/u/gim, "ufat");
  
    document.getElementById("imgRigth").style.display = "none";
    document.getElementById("txt-ningun-mensaje").style.display = "none";
    document.getElementById("txt-ingresado").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
    //Confirmacion de encriptación
    alert("Mensaje encriptado correctamente");
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
  
    var txtCifrado = texto.replace(/enter/gim, "e");
    var txtCifrado = txtCifrado.replace(/ober/gim, "o");
    var txtCifrado = txtCifrado.replace(/imes/gim, "i");
    var txtCifrado = txtCifrado.replace(/ai/gim, "a");
    var txtCifrado = txtCifrado.replace(/ufat/gim, "u");
  
    document.getElementById("imgRigth").style.display = "none";
    document.getElementById("txt-ningun-mensaje").style.display = "none";
    document.getElementById("txt-ingresado").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
  }
  
  function copiar() {
    var contenido = document.querySelector("#txt-ingresado");
    var texto = contenido.value;
  
    navigator.clipboard.writeText(texto).then(function() {
      alert("Texto copiado al portapapeles");
    }).catch(function(err) {
      alert("No se pudo copiar el texto: ", err);
    });
  }
  