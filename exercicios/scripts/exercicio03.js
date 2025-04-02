// Mostra uma mensagem inicial ao usuário
alert("Dev, a seguir virá uma vasta lista de prompts para você inserir dados. Insira os, por gentileza, cada um faz parte de um exercício");
alert("Exercício 1");
console.log("Exercício 1")

let primeiro_vetor = [10,20,30,40,50]; // Array inicial com 5 números

// Itera sobre cada elemento do array
for(let iterador of primeiro_vetor){
    console.log(`Valor dobrado: ${iterador * 2}`);
}


// Exercício 2
alert("Exercício 2");
console.log("Exercício 2")

let segundo_vetor = [10,20,30,40,50,60,70,80,90];
let soma_total = 0;

// Calcula a soma de todos os elementos
for(let iterador of segundo_vetor){
    soma_total += iterador;
}

console.log("A média aritmética dos valores é: " + soma_total / segundo_vetor.length);

// Exercício 3
alert("Exercício 3");
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
alert("Exercício 4");
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

alert("Exercício 5");
console.log("Exercício 5")

let quinto_vetor = [];

for (let a = 0; a <= 8; a++){
    alert("Digite números entre 100 e 200!");
    let numero = parseInt(prompt(`Digite o ${a + 1}º número:`));
    if (numero < 100 || numero > 200){
        alert("Valor inválido!");
    }
    else{
        quinto_vetor.push(numero);
    }
}
console.log(`Esses sao os valores armazenados: ${quinto_vetor}`);

alert("Exercício 6");
console.log("Exercício 6")

let achou = false;

let sexto_vetor = ["Gustavo","Bruno","Leticia","Nicolas","Adrian","Luana","Gabriela","Kauan","Francisca","Yngrid"];

while (achou == false) {
    
    let nome_procurado = prompt("Digite um nome e vamos ver se ele está na lista!");
    console.log(nome_procurado);
    for (let a = 0; a <= sexto_vetor.length; a++){
        console.log(nome_procurado);
        if (nome_procurado == sexto_vetor[a]){
            alert(`Nome encontrado! Ele está na posição ${a}`);
            achou = true;
            break;
        }
    }
    if (!achou) {
        alert("Nome não encontrado!");
    }
}

alert("Exercício 7");
console.log("Exercício 7")
let achou_ = false;
let setimo_vetor = ["Gustavo","Bruno","Leticia","Nicolas","Adrian","Luana","Gabriela","Kauan","Francisca","Yngrid"];
let chances = 5;

for (let a = 0; a <= setimo_vetor.length; a++){
    let nome_procurado_ = prompt("Digite um nome e vamos ver se ele está na lista!");
    if (nome_procurado_ == setimo_vetor[a]){
        alert(`Nome encontrado! Ele está na posição ${a}. Você achou ele faltando ${chances} chances restantes.`);
    }
    if (!achou_){
        alert("Nome não encontrado!");
        chances -= 1;
        if (chances <= 0){
            alert("Acabou as suas chances!")
            break;
        }
    }
}

alert("Exercício 8");
console.log("Exercício 8")

let oitavo_vetor = [];

for (let a = 0; a <= 5; a++){
    let inteiros_positivos = prompt("Digite um número:");
    oitavo_vetor.push(inteiros_positivos);
}

let oitavo_vetor_B = [...oitavo_vetor];
let indice = oitavo_vetor.length / 2;
let quantidade = oitavo_vetor.length / 2;
oitavo_vetor_B.splice(indice, quantidade);

console.log(oitavo_vetor)
console.log(oitavo_vetor_B)

alert("Exercício 9");
console.log("Exercício 9");

let nono_vetor = [];
let nono_vetor_B = [];

for (let a = 0; a <= 5; a++){
    let numeros_A = parseInt(prompt("Digite um número positivo"));
    let numeros_B = parseInt(prompt("Digite um número positivo com o dobro do valor do anterior"));
    if (numeros_A > 0 && numeros_B > 0){
        nono_vetor.push(numeros_A);
        nono_vetor_B.push(numeros_B);
    }
    else{
        alert("Valores inválidos!");
    }
}

let vetor_C = [...nono_vetor, ...nono_vetor_B];

console.log(nono_vetor);
console.log(nono_vetor_B);
console.log(vetor_C);
