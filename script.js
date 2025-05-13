function suma() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}

function resta() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}

function multiplicar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}

function division() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resultado = parseInt(num1) / parseInt(num2);
    if (num2 == 0) {
        document.getElementById("resultado").innerHTML = "Error: División por cero no permitida";
    } else {
        document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
    }
}

