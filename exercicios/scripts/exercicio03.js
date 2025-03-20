// Exercício 1

let primeiro_vetor = [10,20,30,40,50];

for(let iterador of primeiro_vetor){
    let iterador_dobrado = iterador;
    console.log("Valor dobrado: " + iterador_dobrado * 2);
}

// Exercício 2

let segundo_vetor = [10,20,30,40,50,60,70,80,90];
let soma_total = 0;

for(let iterador of segundo_vetor){
    soma_total += iterador;
}

console.log("A média aritmética dos valores é: " + soma_total / segundo_vetor.length);

// Exercício 3

let terceiro_vetor = [];
// Ler valores -> input usuário
for(let a = 1; a <= 20; a++){
    let idade = prompt("Digite uma idade " + a);
    terceiro_vetor.push(idade)
    // idades colocadas dentro do vetor
}
console.log(terceiro_vetor);
// Agora vamos apresentar somente aquelas acima da média
let total_idades = 0;
for(let a of terceiro_vetor){
    total_idades += a;
    console.log(a)
}
// obtendo a média
media_idades = total_idades / terceiro_vetor.length;
console.log(media_idades)

// mostrando as idades acima da média
for(let a of terceiro_vetor){
    if(a >= media_idades){
        console.log("Esta é uma idade acima da média! " + a)
    }
}

