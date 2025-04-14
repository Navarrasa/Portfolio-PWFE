// Define e exporta a função Ex5
export function Ex05() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 5");

    // Define a função que coleta, exibe e ordena números
    const maiorNumero = () => {
        // Cria um array vazio para armazenar os números
        let numeros = [];
        
        // Loop para coletar 3 números do usuário
        for (let a = 0; a < 3; a++) {
            // Solicita um número, converte para inteiro e armazena no array
            num = parseInt(prompt("Digite um número: "));
            numeros.push(num);
        }
        
        // Exibe os números não ordenados em uma caixa de diálogo
        prompt(`números não ordenados: ${numeros}`);
        
        // Ordena o array em ordem crescente
        numeros.sort();
        
        // Exibe os números ordenados em uma caixa de diálogo
        prompt(`números ordenados: ${numeros}`);
    }
    
    // Chama a função maiorNumero para executar o processo
    maiorNumero();

}