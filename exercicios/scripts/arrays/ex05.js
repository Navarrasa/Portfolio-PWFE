export function Ex05() {
alert("Exercício 5");

let quinto_vetor = [];

alert("Digite números entre 100 e 200!");
for (let a = 0; a <= 8; a++){
    let numero = parseInt(prompt(`Digite o ${a + 1}º número:`));
    if (numero < 100 || numero > 200){
        alert("Valor inválido!");
    }
    else{
        quinto_vetor.push(numero);
    }
}
alert(`Esses sao os valores armazenados: ${quinto_vetor}`);
}
