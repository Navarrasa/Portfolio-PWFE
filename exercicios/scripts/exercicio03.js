// Mostra uma mensagem inicial ao usuário
alert("Dev, a seguir virá uma vasta lista de prompts para você inserir dados. Insira os, por gentileza, cada um faz parte de um exercício");
alert("Exercício 1");

let primeiro_vetor = [10,20,30,40,50]; // Array inicial com 5 números

// Itera sobre cada elemento do array
for(let iterador of primeiro_vetor){
    alert(`Valor dobrado: ${iterador * 2}`);
}

// Exercício 2
alert("Exercício 2");

let segundo_vetor = [10,20,30,40,50,60,70,80,90];
let soma_total = 0;

// Calcula a soma de todos os elementos
for(let iterador of segundo_vetor){
    soma_total += iterador;
}

alert(`A média aritmética dos valores é: ${media}`);


// Exercício 3
alert("Exercício 3");

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
        alert("Esta é uma idade acima da média! " + a);
    }
}

// Exercício 4
alert("Exercício 4");

// Criando um array para armazenar os 10 números
let quarto_vetor = [];
for (let i = 0; i < 10; i++) {
    // parseInt transforma o prompt, que traz uma String, em int
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    // Verifica se é realmente um número
    if(isNaN(numero)) {
        alert("Digite um número válido!");
        i--; // retorna à iteração anterior
        continue;
    }
    quarto_vetor.push(numero);
}
//  Filtro para encontrar os números pares
const pares = quarto_vetor.filter(num => num % 2 === 0);
// Operador ternário para demonstrar os números pares ou ímpares
console.log(pares.length > 0 ? `Pares: ${pares}` : "Todos são ímpares");

// Exercício 5
alert("Exercício 5");

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

// Exercício 6
alert("Exercício 6");

let sexto_vetor = ["Gustavo","Bruno","Leticia","Nicolas","Adrian","Luana","Gabriela","Kauan","Francisca","Yngrid"];

while (true) {
    let nome = prompt("Digite um nome para buscar:");
    // busca o nome direto pelo index no vetor
    let posicao = sexto_vetor.indexOf(nome);
    // verifica se o nome está na lista pela sua posição, retornará -1 caso não estiver
    if (posicao !== -1) {
        alert(`Nome encontrado na posição ${posicao}!`);
        break;
    }
    alert("Nome não encontrado!");
}

alert("Exercício 7");
let setimo_vetor = ["Gustavo","Bruno","Leticia","Nicolas","Adrian","Luana","Gabriela","Kauan","Francisca","Yngrid"];
let chances = 5;

while (chances > 0) {
    let nome = prompt("Digite um nome:");
    // busca o nome direto pelo index no vetor
    let posicao = setimo_vetor.indexOf(nome);
    // verifica se o nome está na lista pela sua posição, retornará -1 caso não estiver
    if (posicao !== -1) {
        alert(`Nome encontrado na posição ${posicao}! Restam ${chances} chances.`);
        break;
    }
    chances--;
    alert(`Nome não encontrado! Restam ${chances} chances.`);
}
if (chances === 0) alert("Suas chances acabaram!");


alert("Exercício 8");

let oitavo_vetor = [];
for (let a = 0; a < 6; a++) {
    oitavo_vetor.push(parseInt(prompt(`Digite o ${a+1}º número:`)));
}
// slice() é uma função do Javascript que "corta" uma array original, mas não altera ela, e cria uma nova array com os valores cortados
let oitavo_vetor_B = oitavo_vetor.slice(0, oitavo_vetor.length / 2);
alert(`Original: ${oitavo_vetor}`);
alert(`Metade: ${oitavo_vetor_B}`);


alert("Exercício 9");

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

alert(nono_vetor);
alert(nono_vetor_B);
alert(vetor_C);
