export function Ex01() {
alert("Exercício 1");

let primeiro_vetor = [10,20,30,40,50]; // Array inicial com 5 números

// Itera sobre cada elemento do array
for(let iterador of primeiro_vetor){
    alert(`Dobrando o valor ${iterador}: ${iterador * 2}`);
 }
}