export function Ex04() {
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
alert(pares.length > 0 ? `Pares: ${pares}` : "Todos são ímpares");
}
