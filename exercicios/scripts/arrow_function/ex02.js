// Define e exporta a função Ex2
export function Ex02() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 2");
    
    // Solicita uma palavra do usuário
    let texto = prompt("Digite uma palavra");
    
    // Define a função que inverte uma string
    const InverterString = (string) => {
        // Divide a string em um array de caracteres, inverte a ordem e junta novamente em uma string
        let textoInvertido = texto.split("").reverse().join("");
        return textoInvertido;
    }

    // Exibe a string invertida no console
    alert(InverterString(texto));

}