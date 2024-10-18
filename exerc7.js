// Implemente um programa que realiza operações matemáticas básicas (adição,
// subtração, multiplicação e divisão) com base na escolha do usuário.

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let operacao = prompt("Escolha uma operação: +, -, *, /");
let numero2 = parseFloat(prompt("Digite o segundo número:"));

switch (operacao) {
    case '+':
        alert(`Seu resultado é: ${(numero1 + numero2)}`);
        break;
    case '-':
        alert(`Seu resultado é: ${(numero1 - numero2)}`);
        break;
    case '*':
        alert(`Seu resultado é: ${(numero1 * numero2)}`);
        break;
    case '/':
        if (numero2 !== 0) {
            alert(`Seu resultado é: ${(numero1 / numero2)}`);
        } else {
            alert("Zero não pode ser dividido por ele mesmo!");
        }
        break;
    default:
        alert("Operação inválida. Escolha entre +, -, * ou /.");
}
