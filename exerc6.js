// Escreva um programa que classifique a idade de uma pessoa em diferentes
// categorias: criança, adolescente, adulto e idoso.

let idade = parseInt(prompt("Digite a sua idade:"));

switch (true) {
    case (idade >= 0 && idade <= 12):
        alert("Você é uma criança.");
        break;
    case (idade >= 13 && idade <= 17):
        alert("Você é um adolescente.");
        break;
    case (idade >= 18 && idade <= 59):
        alert("Você é um adulto.");
        break;
    case (idade >= 60):
        alert("Você é um idoso.");
        break;
    default:
        alert("Idade inválida.");
}
