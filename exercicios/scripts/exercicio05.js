// Exercício 1
console.log("Exercício 1")

const Calculadora = (a,b,metodo) => {

    if (metodo == "+"){
        return a + b;
    }
    else if (metodo == "-"){
        return a - b;
    }
    else if (metodo == "*"){
        return a * b;
    }
    else if (metodo == "/"){
        return a / b;
    }
    else{
        return "Valor inesperado!";
    }
}

console.log(Calculadora(5,10,"+"));

// Exercício 2
console.log("Exercício 2")


