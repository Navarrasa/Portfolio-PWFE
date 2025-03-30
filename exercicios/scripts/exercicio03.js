console.log("Exercício 1")

let primeiro_vetor = [10,20,30,40,50];

for(let iterador of primeiro_vetor){
    let iterador_dobrado = iterador;
    console.log("Valor dobrado: " + iterador_dobrado * 2);
}

// Exercício 2
console.log("Exercício 2")

let segundo_vetor = [10,20,30,40,50,60,70,80,90];
let soma_total = 0;

for(let iterador of segundo_vetor){
    soma_total += iterador;
}

console.log("A média aritmética dos valores é: " + soma_total / segundo_vetor.length);

// Exercício 3
console.log("Exercício 3")

let terceiro_vetor = [];
// Ler valores -> input usuário
for(let a = 1; a <= 3; a++){
    let idade = prompt("Digite uma idade " + a);
    terceiro_vetor.push(parseInt(idade)); // Converter para número inteiro
    // idades colocadas dentro do vetor
}
console.log(terceiro_vetor);

// Agora vamos apresentar somente aquelas acima da média
let total_idades = 0;
for(let a of terceiro_vetor){
    total_idades += a;
    console.log(a);
}

// obtendo a média
let media_idades = total_idades / terceiro_vetor.length;
console.log(media_idades);

// mostrando as idades acima da média
for(let a of terceiro_vetor){
    if(a >= media_idades){
        console.log("Esta é uma idade acima da média! " + a);
    }
}

// Exercício 4
console.log("Exercício 4")

// Criando um array para armazenar os 10 números
let quarto_vetor = [];
let pares = [];

// Lendo 10 números (usando prompt para entrada do usuário)
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    quarto_vetor.push(numero);
    
    // Verificando se o número é par
    if (numero % 2 === 0) {
        pares.push(numero);
    }
}

// Exibindo os resultados
if (pares.length > 0) {
    console.log("Números pares encontrados:");
    console.log(pares);
} else {
    console.log("Todos os números são ímpares");
}

console.log("Exercício 5")

let quinto_vetor = [];

for (let a = 0; a <= 8; a++){
    alert("Digite números entre 100 e 200!");
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    if (numero < 100 || numero > 200){
        alert("Valor inválido!");
    }
    else{
        quinto_vetor.push(numero);
    }
}
console.log(`Esses sao os valores armazenados: ${quinto_vetor}`);

console.log("Exercício 6")

let sexto_vetor = ["Gustavo","Bruno","Leticia","Nicolas","Adrian","Luana","Gabriela","Kauan","Francisca","Yngrid"];

let nome_procurado = prompt("Digite um nome e vamos ver se ele está na lista!");

for (let a = 0; a <= sexto_vetor.length; a++){
    if (nome_procurado == sexto_vetor[a]){
        alert(`Nome encontrado! Ele está na posição ${a}`);
    }
    else{
        alert("Nome não encontrado!");
    }
}

console.log("Exercício 7")

let setimo_vetor = [];

