var num1 = parseFloat(prompt("digite o primeiro numero"))
var num2 = parseFloat(prompt("digite o segundo numero"))

var operacao = prompt("Digite 1 para divisão, 2 para multiplicação, 3 para soma, 4 para subtração ou 5 para potencia")

if (operacao == 1) {
  var resultado = num1 / num2
  document.write("<h2>" + num1 + " / " + num2 + " = " + resultado + "</h2>")
} else if (operacao == 2) {
  var resultado = num1 * num2
  document.write("<h2>" + num1 + " * " + num2 + " = " + resultado + "</h2>")
}else if (operacao == 3) {
  var resultado = num1 + num2
  document.write("<h2>" + num1 + " + " + num2 + " = " + resultado + "</h2>")
}else if (operacao == 4) {
  var resultado = num1 - num2
  document.write("<h2>" + num1 + " - " + num2 + " = " + resultado + "</h2>")
}else if (operacao == 5) {
  var resultado = num1 ^ num2
  document.write("<h2>" + num1 + " ^ " + num2 + " = " + resultado + "</h2>")
}else {
  document.write("<h2>Opção inválida</h2>")
}


