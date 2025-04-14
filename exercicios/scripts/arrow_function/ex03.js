// Define e exporta a função Ex3
export function Ex03() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 3");

    // Solicita uma entrada de texto do usuário
    let palavra = prompt("Digite algo");
    
    // Define a função que converte uma string em um array de caracteres
    const textoEmArray = (string) => {
        // Divide a string em um array, separando cada caractere
        return string.split("");
    }

    // Exibe o array de caracteres no console
    alert(textoEmArray(palavra));

}