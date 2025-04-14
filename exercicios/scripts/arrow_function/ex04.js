// Define e exporta a função Ex4
export function Ex04() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 4");

    // Solicita a idade do usuário e converte para número inteiro
    let idade = parseInt(prompt("Qual a sua idade?"));
    
    // Define a função que verifica se a pessoa pode tirar carteira de motorista
    const podeTirarCarteira = (integer) => {
        
        // Armazena o valor da idade em uma variável local
        let validacao = integer;
    
        // Usa uma expressão ternária para verificar se a idade é maior ou igual a 18
        // Retorna uma mensagem indicando se pode ou não tirar carteira
        return `${validacao >= 18 ? "pode tirar carta" : "Não pode tirar carta"}`;
        
        // Código comentado: alternativa usando if/else para a mesma lógica
        // if (validacao >= 18){
        //     return "Pode tirar Carta";
        // }
        // else{
        //     return "Não pode tirar carta";
        // }
    }
    
    // Exibe o resultado da verificação no console
    alert(podeTirarCarteira(idade));

}