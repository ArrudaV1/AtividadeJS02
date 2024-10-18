// Atividades relacionais: crie um programa que solicite ao usuário que digite a sua
// altura em metros e o seu peso em quilogramas. Em seguida, o programa deve
// calcular o índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso /
// altura*2 e verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O
// programa deve imprimir na tela se o IMC está dentro do intervalo saudável ou não. 
// Solicita a altura e o peso do usuário

let altura = parseFloat(prompt("Digite sua altura em metros:"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));

let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
    alert(`Seu IMC é ${imc.toFixed(2)}. Está dentro do intervalo saudável.`);
} else {
    alert(`Seu IMC é ${imc.toFixed(2)}. Não está dentro do intervalo saudável.`);
}
