// Exercício 1
// DOM -> garante que o script só será carregado após o carregamento total da página
document.addEventListener("DOMContentLoaded", function () {
    // Setando variáveis a partir dos seletores nome das tags
    const number1 = document.querySelector("input[name='primeiro_numero_subtrair']");
    const number2 = document.querySelector("input[name='segundo_numero_subtrair']");
    const total = document.querySelector("input[name='total_subtracao']");
    // Iniciando uma função
    function calcularDiferenca() {
        // Transformando os valores obtidos em inteiros
        const valor1 = parseFloat(number1.value) || 0;
        const valor2 = parseFloat(number2.value) || 0;
        // Realizando o cálculo e dando o valor para a variável
        total.value = valor1 - valor2;
    }
    // Toda vez que ocorre uma ação com a tag input, a função é chamada
    number1.addEventListener("input", calcularDiferenca);
    number2.addEventListener("input", calcularDiferenca);
});

// Exercício 2

document.addEventListener("DOMContentLoaded", function () {
    const number1 = document.querySelector("input[name='verificar_par_impar']");
    const total = document.querySelector("input[name='verificador_par_impar']");

    function verificarParidade() {
        if (number1.value.trim() === "") {
            total.value = "";
            return;
        }
        const valor = parseInt(number1.value, 10);
        total.value = (valor % 2 === 0) ? "Par" : "Ímpar";
    }

    number1.addEventListener("input", verificarParidade);
});

// Exercício 3

document.addEventListener("DOMContentLoaded", function () {
    const number1 = document.querySelector("input[name='primeiro_multiplo']");
    const number2 = document.querySelector("input[name='segundo_multiplo']");
    const total = document.querySelector("input[name='total_verificador_multiplos']");

    function VerificadorMultiplos() {
        if (number1.value || number2.value == "") {
            total.value = "";
            return;
        }
        if (number1.value % number2.value == 0){
            total.value = "É Múltiplo";
        }
        else{
            total.value = "Não é Múltiplo.";
        }

    }
    number1.addEventListener("input", VerificadorMultiplos);
    number2.addEventListener("input", VerificadorMultiplos);
});