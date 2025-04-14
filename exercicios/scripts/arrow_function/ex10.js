// Define e exporta a função Ex10
export function Ex10() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 10");

    // Solicita o salário do usuário e converte para número decimal
    let salario = parseFloat(prompt("Digite o seu salário: "));
    
    // Inicializa a variável imposto com valor 0
    let imposto = 0;

    // Define a função que calcula o imposto de renda com base no salário
    const calculoImpostoRenda = (salario, imposto) => {
        // Verifica se o salário está na faixa de isenção (até R$ 2259,20)
        if (salario <= 2259.20) {
            return `Isento de imposto de renda!`;
        // Verifica se o salário está na faixa de 7,5% (até R$ 2826,65)
        } else if (salario <= 2826.65) {
            imposto = salario * 0.075;
            return `O valor do imposto de renda é: ${imposto}`;
        // Verifica se o salário está na faixa de 15% (até R$ 3751,05)
        } else if (salario <= 3751.05) {
            imposto = salario * 0.15;
            return `O valor do imposto de renda é: ${imposto}`;
        // Verifica se o salário está na faixa de 22,5% (até R$ 4664,68)
        } else if (salario <= 4664.68) {
            imposto = salario * 0.225;
            return `O valor do imposto de renda é: ${imposto}`;
        // Aplica a alíquota de 27,5% para salários acima de R$ 4664,68
        } else {
            imposto = salario * 0.275;
            return `O valor do imposto de renda é: ${imposto}`;
        }
    };
    
    // Exibe o resultado do cálculo do imposto de renda
    alert(calculoImpostoRenda(salario, imposto));

}