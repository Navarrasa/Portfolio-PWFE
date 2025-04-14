// Define e exporta a função Ex06
export function Ex06() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 6");

    // Solicita a hora atual (apenas a parte inteira) e converte para número inteiro
    let horas = parseInt(prompt("Que horas são agora? (Apenas hora)"));
        
    // Define a função que converte horas em minutos
    const transformarHoraMinuto = (horas) => {
        
        // Retorna uma string com o resultado da conversão de horas para minutos
        return `O tempo em minutos agora é: ${horas * 60} minutos`;
        
    }
        
    // Exibe o resultado da conversão no console
    alert(transformarHoraMinuto(horas));

}