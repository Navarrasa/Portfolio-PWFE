export function Ex12() {

    alert("Exercício 12");
    // Função para calcular juros compostos
    // O montante é calculado com base no capital, taxa de juros e tempo
    // O montante é o valor final após aplicar os juros compostos
    // Fórmula: M = C * (1 + i)^n
    // Onde:
    // M = montante
    // C = capital (valor inicial)
    // i = taxa de juros
    // n = número de meses
    // O capital é o valor inicial que será aplicado
    // A taxa de juros é a porcentagem que será aplicada ao capital
    // O tempo é o número de meses que o capital será aplicado
    // O montante é o valor final após aplicar os juros compostos
    // O resultado é exibido em um alerta
    const calcularJurosCompostos = () => {
        let capital = parseFloat(prompt("Digite o valor do capital: "));
        let taxa = parseFloat(prompt("Digite a taxa de juros: "));
        let tempo = parseInt(prompt("Digite o tempo em meses: "));
    
        let montante = capital * Math.pow((1 + taxa / 100), tempo);
        alert(`O montante após ${tempo} meses é: ${montante}`);
    }
    // Chama a função para calcular os juros compostos
    calcularJurosCompostos();

}