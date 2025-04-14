export function Ex11() {

    alert("Exercício 11");
    // Função para calcular o desconto do INSS
    // O desconto é calculado com base no salário e na alíquota do INSS
    // A alíquota varia de acordo com a faixa salarial
    // Faixas de desconto:
    // - Até R$ 1.302,00: 7,5%
    // - De R$ 1.302,01 até R$ 2.571,29: 9%
    // - De R$ 2.571,30 até R$ 3.856,94: 12%
    // - De R$ 3.856,95 até R$ 7.507,49: 14%
    // - Acima de R$ 7.507,49: Salário acima do teto do INSS
    // O desconto é calculado multiplicando o salário pela alíquota correspondente
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
        // Cálculo do desconto
        let desconto = salario * aliquota;  
        alert(`O valor do desconto do INSS é: ${desconto}`);
    }
    // Chama a função para calcular o desconto do INSS
    calcularINSS();

}