export function Ex06() {
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
}