export function Ex03() {
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
}
