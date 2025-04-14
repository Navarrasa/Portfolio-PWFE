// Define e exporta a função Ex01
export function Ex01() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 1");

    // Define a função Calculadora que realiza operações matemáticas básicas
    const Calculadora = (a, b, metodo) => {
        // Verifica se o método é adição e retorna a soma
        if (metodo == "+") {
            return a + b;
        }
        // Verifica se o método é subtração e retorna a diferença
        else if (metodo == "-") {
            return a - b;
        }
        // Verifica se o método é multiplicação e retorna o produto
        else if (metodo == "*") {
            return a * b;
        }
        // Verifica se o método é divisão e retorna o quociente
        else if (metodo == "/") {
            return a / b;
        }
        // Retorna uma mensagem de erro para métodos inválidos
        else {
            return "Valor inesperado!";
        }
    }

    // Exibe o resultado da calculadora com a operação de soma (5 + 10) no console
    alert(Calculadora(5, 10, "+"));

}