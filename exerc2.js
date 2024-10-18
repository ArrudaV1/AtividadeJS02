// Faça um programa que teste a idade do usuário. Se a idade digitada for maior ou
// igual a 18, exiba a mensagem "Você pode dirigir". Caso contrário, exiba a mensagem
// "Você ainda não pode dirigir". 

let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    alert("Você pode dirigir.");
} else if (idade > 0 && idade < 18) {
    alert("Você ainda não pode dirigir.");
} else {
    alert("Esta idade é inválida.");
}
