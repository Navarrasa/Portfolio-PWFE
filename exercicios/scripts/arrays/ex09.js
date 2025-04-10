export function Ex09() {
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

alert(`Lista 1: ${nono_vetor}`);
alert(`Lista 2: ${nono_vetor_B}`);
alert(`Lista 3: ${vetor_C}`);
}   
