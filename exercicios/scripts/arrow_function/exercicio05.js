// // Exercício 1
// alert("Exercício 1");

// const Calculadora = (a,b,metodo) => {

//     if (metodo == "+"){
//         return a + b;
//     }
//     else if (metodo == "-"){
//         return a - b;
//     }
//     else if (metodo == "*"){
//         return a * b;
//     }
//     else if (metodo == "/"){
//         return a / b;
//     }
//     else{
//         return "Valor inesperado!";
//     }
// }

// console.log(Calculadora(5,10,"+"));

// Exercício 2
alert("Exercício 2");
let texto = prompt("Digite uma palavra")
const InverterString = (string) => {
    // split -> transforma string em array, reverse coloca ela de trás para frente, join deleta todos os espaços.

    let textoInvertido = texto.split("").reverse().join("");
    return textoInvertido;
}

console.log(InverterString(texto));

// // Exercício 3
// alert("Exercício 3");

// let palavra = prompt("Digite algo")
// const textoEmArray = (string) =>{
//     return string.split("");
// }

// console.log(textoEmArray(palavra));

// alert("Exercício 4");

// let idade = parseInt(prompt("Qual a sua idade?"))

// const podeTirarCarteira = (integer) =>{
    
//     let validacao = integer;

//     // Isso aqui é chamado função ternária, simplifica todo o bloco de código das linhas 58 a 63
//     return `${validacao >= 18  ? `pode tirar carta` : "Não pode tirar carta"}`;
    
//     // if (validacao >= 18){
//     //     return "Pode tirar Carta";
//     // }
//     // else{
//     //     return "Não pode tirar carta";
//     // }

// }

// console.log(podeTirarCarteira(idade));


// alert("Exercício 5");

// const maiorNumero = () =>{
//     let numeros = [];

//     for (let a = 0; a < 3; a++){
//         num = parseInt(prompt("Digite um número: "))
//         numeros.push(num);
//     }

//     prompt(`números não ordenados: ${numeros}`);

//     numeros.sort();

//     prompt(`números ordenados: ${numeros}`);

// }
// maiorNumero();

// alert("Exercício 6");

// let horas = parseInt(prompt("Que horas são agora? (Apenas hora)"));

// const transformarHoraMinuto = (horas) => {

//     return `O tempo em minutos agora é: ${horas * 60} minutos`;

// }

// console.log(transformarHoraMinuto(horas));

// alert("Exercício 7");

// let valor = parseInt(prompt("Digite um valor inteiro qualquer: "));

// const cedulasNecessarias = (valor) =>{

//     let cedula_200 = 200;
//     let cedula_100 = 100;
//     let cedula_50 = 50;
//     let cedula_20 = 20;
//     let cedula_10 = 10;
//     let cedula_5 = 5;
//     let cedula_1 = 1;

// // Explicando a lógica que vou utilizar:
// // O programa vai verificar se o valor do usuário é maior ou igual às cédulas, de maneira decrescente.
// // Caso seja, o valor é decrementado pela cédula e o número de cédulas é incrementado em 1.
// // Isso vai ser feito até o valor do usuário ser menor que a cédula, e assim o programa vai para a próxima cédula.

// // Colocando em prática

// // Criando variáveis de quantidade de cada cédula, para printar no final
// let quantidade_200 = 0;
// let quantidade_100 = 0;
// let quantidade_50 = 0;
// let quantidade_20 = 0;
// let quantidade_10 = 0;
// let quantidade_5 = 0;
// let quantidade_1 = 0;

// // Realizando as operações

//     while (valor >= cedula_200){
//         valor -= cedula_200;
//         quantidade_200++;
//     }

//     while (valor >= cedula_100){
//         valor -= cedula_100;
//         quantidade_100++;
//     }

//     while (valor >= cedula_50){
//         valor -= cedula_50;
//         quantidade_50++;
//     }

//     while (valor >= cedula_20){
//         valor -= cedula_20;
//         quantidade_20++;
//     }

//     while (valor >= cedula_10){
//         valor -= cedula_10;
//         quantidade_10++;
//     }

//     while (valor >= cedula_5){
//         valor -= cedula_5;
//         quantidade_5++;
//     }

//     while (valor >= cedula_1){
//         valor -= cedula_1;
//         quantidade_1++;
//     }

//     // Printando o resultado
//     return `O valor total é: ${valor} \n
//     Cédulas de 200: ${quantidade_200} \n
//     Cédulas de 100: ${quantidade_100} \n
//     Cédulas de 50: ${quantidade_50} \n
//     Cédulas de 20: ${quantidade_20} \n
//     Cédulas de 10: ${quantidade_10} \n
//     Cédulas de 5: ${quantidade_5} \n
//     Cédulas de 1: ${quantidade_1}`;
// }
// alert(cedulasNecessarias(valor));
// // console.log(cedulasNecessarias(valor));


// alert("Exercício 8");

// let valor = parseInt(prompt("Digite um valor inteiro qualquer: "));

// const transformarRaizQuadrada = (valor) =>{
//     return `A raiz quadrada de ${valor} é: ${Math.sqrt(valor)}`;
// }

// alert(transformarRaizQuadrada(valor));
// // console.log(transformarRaizQuadrada(valor));


// alert("Exercício 9");

// const nome = document.querySelector("input[name='nome']");
// const endereco = document.querySelector("input[name='endereco']");
// const sexo = document.querySelector("input[name='sexo']");
// const telefone = document.querySelector("input[name='telefone']");
// const celular = document.querySelector("input[name='celular']");
// const email = document.querySelector("input[name='email']");

// const validarCamposFormulario = () => {
//     if (nome.value == ""){
//         alert("Campo nome não pode ser vazio!");
//         return false;
//     }
//     else if (endereco.value == ""){
//         alert("Campo endereço não pode ser vazio!");
//         return false;
//     }
//     else if (sexo.value == ""){
//         alert("Campo sexo não pode ser vazio!");
//         return false;
//     }
//     else if (telefone.value == ""){
//         alert("Campo telefone não pode ser vazio!");
//         return false;
//     }
//     else if (celular.value == ""){
//         alert("Campo celular não pode ser vazio!");
//         return false;
//     }
//     else if (email.value == ""){
//         alert("Campo email não pode ser vazio!");
//         return false;
//     }
//     else{
//         alert("Todos os campos estão preenchidos!");
//         return true;
//     }
// }

// alert("Exercício 10");

// let salario = parseFloat(prompt("Digite o seu salário: "));
// let imposto = 0;

// const calculoImpostoRenda = (salario, imposto) => {
//     if (salario <= 2259.20) {
//         return `Isento de imposto de renda!`;
//     } else if (salario <= 2826.65) {
//         imposto = salario * 0.075;
//         return `O valor do imposto de renda é: ${imposto}`;
//     } else if (salario <= 3751.05) {
//         imposto = salario * 0.15;
//         return `O valor do imposto de renda é: ${imposto}`;
//     } else if (salario <= 4664.68) {
//         imposto = salario * 0.225;
//         return `O valor do imposto de renda é: ${imposto}`;
//     } else {
//         imposto = salario * 0.275;
//         return `O valor do imposto de renda é: ${imposto}`;
//     }
// };

// alert(calculoImpostoRenda(salario, imposto));

alert("Exercício 11");

const calcularINSS = () => {
    let salario = parseFloat(prompt("Digite o seu salário: "));
    let aliquota = 0;

    if (salario <= 1302) {
        aliquota = 0.075;
    } else if (salario <= 2571.29) {
        aliquota = 0.09;
    } else if (salario <= 3856.94) {
        aliquota = 0.12;
    } else if (salario <= 7507.49) {
        aliquota = 0.14;
    } else {
        alert("Salário acima do teto do INSS!");
        return;
    }

    let desconto = salario * aliquota;
    alert(`O valor do desconto do INSS é: ${desconto}`);
}
calcularINSS();

alert("Exercício 12");
const calcularJurosCompostos = () => {
    let capital = parseFloat(prompt("Digite o valor do capital: "));
    let taxa = parseFloat(prompt("Digite a taxa de juros: "));
    let tempo = parseInt(prompt("Digite o tempo em meses: "));

    let montante = capital * Math.pow((1 + taxa / 100), tempo);
    alert(`O montante após ${tempo} meses é: ${montante}`);
}
calcularJurosCompostos();

alert("Exercício 13");
const simularFinanciamento = () => {
    let valorImovel = parseFloat(prompt("Digite o valor do imóvel: "));
    let entrada = parseFloat(prompt("Digite o valor da entrada: "));
    let taxaJuros = parseFloat(prompt("Digite a taxa de juros: "));
    let prazo = parseInt(prompt("Digite o prazo em meses: "));

    let valorFinanciado = valorImovel - entrada;
    let montante = valorFinanciado * Math.pow((1 + taxaJuros / 100), prazo);
    let prestacaoMensal = montante / prazo;

    alert(`O valor da prestação mensal é: ${prestacaoMensal}`);
}
simularFinanciamento();