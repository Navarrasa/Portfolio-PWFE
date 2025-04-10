export function Ex02() {
alert("Exercício 2");

let segundo_vetor = [10,20,30,40,50,60,70,80,90];
let soma_total = 0;

// Calcula a soma de todos os elementos
for(let iterador of segundo_vetor){
    soma_total += iterador;
}
let media = soma_total / segundo_vetor.length;

alert(`A média aritmética dos valores é: ${media}`);
}