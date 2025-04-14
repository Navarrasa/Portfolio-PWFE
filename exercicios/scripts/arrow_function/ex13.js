export function Ex13() {

    alert("Exercício 13");
    // Função para simular o financiamento
    // O financiamento é calculado com base no valor do imóvel, entrada, taxa de juros e prazo
    const simularFinanciamento = () => {
        let valorImovel = parseFloat(prompt("Digite o valor do imóvel: "));
        let entrada = parseFloat(prompt("Digite o valor da entrada: "));
        let taxaJuros = parseFloat(prompt("Digite a taxa de juros: "));
        let prazo = parseInt(prompt("Digite o prazo em meses: "));
        // Cálculo do montante e da prestação mensal
        // Fórmula: M = C * (1 + i)^n
        // Onde:
        // M = montante
        // C = capital (valor financiado)
        // i = taxa de juros
        // n = número de meses
        // O valor financiado é o valor do imóvel menos a entrada
        // O montante é o valor financiado multiplicado pelo fator (1 + i)^n
        let valorFinanciado = valorImovel - entrada;
        let montante = valorFinanciado * Math.pow((1 + taxaJuros / 100), prazo);
        let prestacaoMensal = montante / prazo;
        

        alert(`O valor da prestação mensal é: ${prestacaoMensal}`);
    }
    // Chama a função para simular o financiamento
    simularFinanciamento();

}