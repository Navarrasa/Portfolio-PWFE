// Define e exporta a função Ex08
export function Ex08() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 8");

    // Solicita um valor inteiro do usuário e converte para número inteiro
    let valor = parseInt(prompt("Digite um valor inteiro qualquer: "));
    
    // Define a função que calcula e retorna a raiz quadrada do valor fornecido
    const transformarRaizQuadrada = (valor) => {
        return `A raiz quadrada de ${valor} é: ${Math.sqrt(valor)}`;
    }
    
    // Exibe o resultado da raiz quadrada em um alerta
    alert(transformarRaizQuadrada(valor));
    
    // Linha comentada que exibiria o resultado no console
    // console.log(transformarRaizQuadrada(valor));

}