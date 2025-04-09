// Funções!
// É um bloco de código que tme como preocupação a reutilização deste.

// A ideia principal, é fazer valer a modularidade e a simplicidade das características de um algoritmo.
// function NomeFunção (atributos) {} script que será utilizado.

// CleanCode: código limpo - Não repetir códigos/ as variáveis e funções devem ter nomes apropriados para uso/ os espaçamentos devem seguir as boas práticas/ e trazer
// a documentação necessária para ser manutenível.

function saudar(){
    alert("Olá mundo! O dia está maravilhoso hoje!");
}

// Função com parâmetros
function soma (a, b){
    return a + b;
}

// Função com vários parâmetros
function somarVarios(a = 0,b = 0,c = 0,d = 0){
    return a + b + c + d;
}

// Função com retorno
function converterMaiusculo(texto){
    return texto.toUpperCase();
}

// Função para contar os caracteres
function qtdeCaractere(texto){
    return texto.length;
}

// função para limpar os eapaços de um texto
function limparEspacos(){
    return frase.trim();
}

// executando a função (chamando a função)
saudar();

// Chamando a função soma com parâmetros
let resultado = soma(10, 20);
document.write(`<p>${resultado} </p>`);

// Chamando a função somarVarios com parâmetros
let resultado_varios = somarVarios(10, 20, 30, 40);
document.write(`<p> Soma! ${resultado_varios} </p>`);

// Chamando a função converterMaiusculo com parâmetros
let frase = prompt("Informe uma frase: ");
let fraseGrande = converterMaiusculo(frase);
document.write(`<p> Frase Grande! ${fraseGrande} </p>`);

// lendo a quantidade de caracteres da frase
let qtdeCaracteres = qtdeCaractere(frase);
document.write(`<p> Quantidade de caracteres: ${qtdeCaracteres} </p>`);

// retirando os espaços em branco de uma frase
let limpo = limparEspacos(frase);
document.write(`<p> Frase limpa! ${limpo} </p>`);


let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color = 'white';

let corpo = window.document.body;
corpo.style.background = 'white';

// Mudar a cor de uma Div
function mudarCor(){
    let div = document.getElementById("MinhaDiv");

    if(div.style.backgroundColor == "red"){
        div.style.backgroundColor = "green";
    }else{
        div.style.backgroundColor = "red";
    }
}

