export function Ex07() {
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
}
