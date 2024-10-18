// Crie um programa que pergunte ao usuário um número de 1 a 7 e exiba o dia da
// semana correspondente.

let numero = Number(prompt("Digite um número de 1 a 7:"));

switch (numero) {
    case 1:
        alert("Domingo");
        break;
    case 2:
        alert("Segunda");
        break;
    case 3:
        alert("Terça");
        break;
    case 4:
        alert("Quarta");
        break;
    case 5:
        alert("Quinta");
        break;
    case 6:
        alert("Sexta");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Número inválido! Por favor, digite um número entre 1 e 7.");
}
