// Faça um programa que peça ao usuário para digitar um número inteiro. Se o número
// for positivo, exiba uma mensagem informando que o número é positivo. Se o
// número for negativo, exiba uma mensagem informando que o número é negativo.
// Se o número for igual a zero, exiba uma mensagem informando que o número é zero.
// (Aplicar no Console).

let numero;

do {
    numero = Number(prompt("Digite um número inteiro:")); //tentei várias vezes usar o "parseInt", mas não estava funcionando então tive que usar o do while para que ele só aceitasse números inteiros.
} while (!Number.isInteger(numero));

if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}
