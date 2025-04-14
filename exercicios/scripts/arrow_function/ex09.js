// Define e exporta a função Ex09
export function Ex09() {

    // Exibe uma mensagem inicial para o usuário
    alert("Exercício 9");

    // Seleciona os campos do formulário pelo atributo 'name'
    const nome = document.querySelector("input[name='nome']");
    const endereco = document.querySelector("input[name='endereco']");
    const sexo = document.querySelector("input[name='sexo']");
    const telefone = document.querySelector("input[name='telefone']");
    const celular = document.querySelector("input[name='celular']");
    const email = document.querySelector("input[name='email']");

    // Define a função que valida se os campos do formulário estão preenchidos
    const validarCamposFormulario = () => {
        // Verifica se o campo nome está vazio
        if (nome.value == "") {
            alert("Campo nome não pode ser vazio!");
            return false;
        }
        // Verifica se o campo endereço está vazio
        else if (endereco.value == "") {
            alert("Campo endereço não pode ser vazio!");
            return false;
        }
        // Verifica se o campo sexo está vazio
        else if (sexo.value == "") {
            alert("Campo sexo não pode ser vazio!");
            return false;
        }
        // Verifica se o campo telefone está vazio
        else if (telefone.value == "") {
            alert("Campo telefone não pode ser vazio!");
            return false;
        }
        // Verifica se o campo celular está vazio
        else if (celular.value == "") {
            alert("Campo celular não pode ser vazio!");
            return false;
        }
        // Verifica se o campo email está vazio
        else if (email.value == "") {
            alert("Campo email não pode ser vazio!");
            return false;
        }
        // Caso todos os campos estejam preenchidos, exibe mensagem de sucesso
        else {
            alert("Todos os campos estão preenchidos!");
            return true;
        }
    }

}