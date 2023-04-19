var num1 = "";
var num2 = "";
var operacion = "";
var resultado = "";

  function añadirNumero(numero) {
    if (resultado !== "") {
      num1 = "";
      num2 = "";
      operacion = "";
      resultado = "";
      actualizarPantalla("");
    }
    
    if (operacion === "") {
      num1 += numero;
      actualizarPantalla(num1);
    } else {
      num2 += numero;
      actualizarPantalla(num2);
       }
  }

  function seleccionarOperacion(op) {
    if (num1 !== "" && num2 !== "") {
      calcular();
    }
    operacion = op;
    }

  function calcular() {
    var n1 = parseFloat(num1);
    var n2 = parseFloat(num2);
  
    switch (operacion) {
      case "+":
        resultado = n1 + n2;
        break;
      case "-":
        resultado = n1 - n2;
        break;
      case "*":
        resultado = n1 * n2;
        break;
      case "/":
        resultado = n1 / n2;
        break;
    }
    actualizarPantalla(resultado);
    num1 = resultado.toString();
    num2 = "";
    operacion = "";
  }

  function actualizarPantalla(valor) {
    document.getElementById("pantalla").value = valor;
  }

  function limpiar() {
    num1 = "";
    num2 = "";
    operacion = "";
    resultado = "";
    actualizarPantalla("");
  }