export function Ex08() {
alert("Exercício 8");

let oitavo_vetor = [];
for (let a = 0; a < 6; a++) {
    oitavo_vetor.push(parseInt(prompt(`Digite o ${a+1}º número:`)));
}
// slice() é uma função do Javascript que "corta" uma array original, mas não altera ela, e cria uma nova array com os valores cortados
let oitavo_vetor_B = oitavo_vetor.slice(0, oitavo_vetor.length / 2);
alert(`Original: ${oitavo_vetor}`);
alert(`Metade: ${oitavo_vetor_B}`);
}
