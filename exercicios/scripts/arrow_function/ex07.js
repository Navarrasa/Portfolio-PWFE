// Define e exporta a função Ex07
export function Ex07() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 7");

    // Solicita um valor inteiro do usuário e converte para número inteiro
    let valor = parseInt(prompt("Digite um valor inteiro qualquer: "));
    
    // Define a função que calcula a quantidade de cédulas necessárias para o valor informado
    const cedulasNecessarias = (valor) => {
    
        // Define os valores das cédulas disponíveis
        let cedula_200 = 200;
        let cedula_100 = 100;
        let cedula_50 = 50;
        let cedula_20 = 20;
        let cedula_10 = 10;
        let cedula_5 = 5;
        let cedula_1 = 1;
    
        /* 
         * Explicação da lógica:
         * O programa verifica, de forma decrescente, se o valor é maior ou igual ao valor de cada cédula.
         * Se for, subtrai o valor da cédula e incrementa a quantidade daquela cédula.
         * Repete até que o valor seja menor que a cédula atual, passando para a próxima cédula.
         */
    
        // Inicializa variáveis para contar a quantidade de cada cédula
        let quantidade_200 = 0;
        let quantidade_100 = 0;
        let quantidade_50 = 0;
        let quantidade_20 = 0;
        let quantidade_10 = 0;
        let quantidade_5 = 0;
        let quantidade_1 = 0;
    
        // Calcula a quantidade de cédulas de 200
        while (valor >= cedula_200) {
            valor -= cedula_200;
            quantidade_200++;
        }
    
        // Calcula a quantidade de cédulas de 100
        while (valor >= cedula_100) {
            valor -= cedula_100;
            quantidade_100++;
        }
    
        // Calcula a quantidade de cédulas de 50
        while (valor >= cedula_50) {
            valor -= cedula_50;
            quantidade_50++;
        }
    
        // Calcula a quantidade de cédulas de 20
        while (valor >= cedula_20) {
            valor -= cedula_20;
            quantidade_20++;
        }
    
        // Calcula a quantidade de cédulas de 10
        while (valor >= cedula_10) {
            valor -= cedula_10;
            quantidade_10++;
        }
    
        // Calcula a quantidade de cédulas de 5
        while (valor >= cedula_5) {
            valor -= cedula_5;
            quantidade_5++;
        }
    
        // Calcula a quantidade de cédulas de 1
        while (valor >= cedula_1) {
            valor -= cedula_1;
            quantidade_1++;
        }
    
        // Retorna uma string com o resultado formatado, indicando a quantidade de cada cédula
        return `O valor total é: ${valor} \n
        Cédulas de 200: ${quantidade_200} \n
        Cédulas de 100: ${quantidade_100} \n
        Cédulas de 50: ${quantidade_50} \n
        Cédulas de 20: ${quantidade_20} \n
        Cédulas de 10: ${quantidade_10} \n
        Cédulas de 5: ${quantidade_5} \n
        Cédulas de 1: ${quantidade_1}`;
    }
    
    // Exibe o resultado do cálculo em um alerta
    alert(cedulasNecessarias(valor));
    
    // Linha comentada que exibiria o resultado no console (não está ativa)
    // console.log(cedulasNecessarias(valor));

}