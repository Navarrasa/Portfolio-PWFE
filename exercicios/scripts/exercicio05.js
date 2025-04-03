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

// // Exercício 2
// alert("Exercício 2");
// let texto = prompt("Digite uma palavra")
// const InverterString = (string) => {
//     // split -> transforma string em array, reverse coloca ela de trás para frente, join deleta todos os espaços.

//     let textoInvertido = texto.split("").reverse().join("");
//     return textoInvertido;
// }

// console.log(InverterString(texto));

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

alert("Exercício 7");

let valor = parseInt(prompt("Digite um valor inteiro qualquer: "));

const cedulasNecessarias = (valor) =>{

    let cedula_200 = 200;
    let cedula_100 = 100;
    let cedula_50 = 50;
    let cedula_20 = 20;
    let cedula_10 = 10;
    let cedula_5 = 5;
    let cedula_1 = 1;

    

}
