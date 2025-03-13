// Exercício 1
// DOM -> garante que o script só será carregado após o carregamento total da página
document.addEventListener("DOMContentLoaded", function () {
    // Setando variáveis a partir dos seletores nome das tags
    const number1 = document.querySelector("input[name='primeiro_numero_subtrair']");
    const number2 = document.querySelector("input[name='segundo_numero_subtrair']");
    const total = document.querySelector("input[name='total_subtracao']");
    // Iniciando uma função
    function calcularDiferenca() {
        // Transformando os valores obtidos em floats
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
        // Realizando o cálculo e dando o valor para a variável
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
        const num1 = parseInt(number1.value);
        const num2 = parseInt(number2.value);

        // Verifica se ambos os campos foram preenchidos
        if (number1.value === "" || number2.value === "") {
            total.value = "";
            return;
        }

        // Verifica se o primeiro número é múltiplo do segundo
        if (num1 % num2 === 0) {
            total.value = "É Múltiplo";
        } else {
            total.value = "Não é Múltiplo.";
        }
    }

    number1.addEventListener("input", VerificadorMultiplos);
    number2.addEventListener("input", VerificadorMultiplos);
});

// Exercício 4

// DOM -> garante que o script só será carregado após o carregamento total da página
document.addEventListener("DOMContentLoaded", function () {
    // Setando variáveis a partir dos seletores nome das tags
    const number1 = document.querySelector("input[name='primeiro_celsius']");
    const total = document.querySelector("input[name='total_farenheit']");
    // Iniciando uma função
    function calcularGrausFarenheit() {
        // Transformando os valores obtidos em inteiros
        const valor1 = parseFloat(number1.value) || 0;
        // Realizando o cálculo e dando o valor para a variável
        total.value = (valor1*9/5) + 32;
    }
    // Toda vez que ocorre uma ação com a tag input, a função é chamada
    number1.addEventListener("input", calcularGrausFarenheit);
});

// Exercício 5

document.addEventListener("DOMContentLoaded", function () {

    const number1 = document.querySelector("input[name='base_001']");
    const number2 = document.querySelector("input[name='area_001']");
    const total = document.querySelector("input[name='total_area']");
    // Iniciando uma função
    function calcularAreaRetangulo() {

        const num1 = parseFloat(number1.value);
        const num2 = parseFloat(number2.value);

        // Verifica se ambos os campos foram preenchidos
        if (number1.value === "" || number2.value === "") {
            total.value = "";
            return;
        }
        else{
        // Realizando o cálculo e dando o valor para a variável
        total.value = num1 * num2;
        }
    }

    number1.addEventListener("input", calcularAreaRetangulo);
    number2.addEventListener("input", calcularAreaRetangulo);

});

// Exercício 6

document.addEventListener("DOMContentLoaded", function () {

    const number1 = document.querySelector("input[name='nota_media_par_impar']");
    const number2 = document.querySelector("input[name='nota_media_par_impar2']");
    const total = document.querySelector("input[name='total_media_par_impar']");
    const total2 = document.querySelector("input[name='total_par_impar']");
    // Iniciando uma função
    function calcularMedia() {

        const num1 = parseInt(number1.value);
        const num2 = parseInt(number2.value);

        // Verifica se ambos os campos foram preenchidos
        if (number1.value === "" || number2.value === "") {
            total.value = ""; 
            total2.value = "";
            return;
        }

        if ((num1 + num2)/2 >= 80){
            total.value = "Acima da Média"
        }

        if (total.value % 2 === 0) {
            total2.value = "Número Par!"
        }
        else{
            total2.value = "Número Ímpar!"
        }
    }

    number1.addEventListener("input", calcularMedia);
    number2.addEventListener("input", calcularMedia);

});

// Exercício 7

document.addEventListener("DOMContentLoaded", function () {

    const number1 = document.querySelector("input[name='numero_peso_imc']");
    const number2 = document.querySelector("input[name='numero_altura_imc']");
    const total = document.querySelector("input[name='resultado_imc']");
    const total2 = document.querySelector("input[name='resultado_numero_imc']");
    // Iniciando uma função
    function calcularIMC() {

        const peso = parseFloat(number1.value);
        const altura = parseFloat(number2.value);

        const IMC = (peso / altura**2);

        if (IMC < 18.5){
            total.value = "Abaixo do peso";
            total2.value = IMC;
        }
        else if (IMC > 18.5 && IMC < 24.9){
            total.value = "Peso normal";
            total2.value = IMC;
        }
        else if (IMC > 24.9 && IMC < 29.9){
            total.value = "Sobrepeso";
            total2.value = IMC;
        }
        else if (IMC > 30 && IMC < 34.9){
            total.value = "Obesidade classe 1";
            total2.value = IMC;
        }
        else if (IMC > 35 && IMC < 39.9){
            total.value = "Obesidade classe 2 (severa)";
            total2.value = IMC;
        }
        else{
            total.value = "Obesidade classe 3 (mórbida)";
            total2.value = IMC;
        }
    }

    number1.addEventListener("input", calcularIMC);
    number2.addEventListener("input", calcularIMC);

});

// Exercício 8
document.addEventListener("DOMContentLoaded", function () {

    const ano = document.querySelector("input[name='ano']");
    const bissexto = document.querySelector("input[name='ano_bissexto']");

    function verificarAnoBissexto(){

        const ano_bissextoo = parseInt(ano.value);

        if (ano.value === "") {
            bissexto.value = ""; 
            return;
        }
        // console.log(ano_bissextoo)
    
        if (ano_bissextoo % 400 == 0 || ano_bissextoo % 4 == 0 && ano_bissextoo % 100 != 0){
            bissexto.value = "É ano bissexto!";
        }
        else{
            bissexto.value = "não é ano bissexto!";
        }

    }

    ano.addEventListener("input", verificarAnoBissexto);

});

// Exercício 9


document.addEventListener("DOMContentLoaded", function () {

    const cambio = document.querySelector("input[name='cambio']");
    const dinheiro = document.querySelector("input[name='dinheiro']");
    const retorno = document.querySelector("input[name='retorno']");


    function taxaDeCambio(){

        const cambio_value = parseFloat(cambio.value);
        const dinheiro_value = parseFloat(dinheiro.value);

        if (cambio.value === 0 || dinheiro.value === 0){
            retorno.value = "";
            return;
        }

        retorno.value = cambio_value * dinheiro_value;

    }

    cambio.addEventListener("input", taxaDeCambio);
    dinheiro.addEventListener("input", taxaDeCambio);

});

// Exercício 10

// document.addEventListener("DOMContentLoaded", function () {

//     const numero = document.querySelector("input[name='numero_tabuada']");
//     const tabuada = document.querySelector("input[name='tabuada']");

//     function tabuada(){

//         console.log(numero.value);


//     }

//     numero.addEventListener("input", tabuada);

// });