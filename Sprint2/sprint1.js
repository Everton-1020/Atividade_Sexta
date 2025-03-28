function validarFormulario() {
    // Pegando os valores dos campos
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    
    // Validação básica
    if (nome === "" || telefone === "" || email === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    // Validação de telefone 
    var regexTelefone =  /\(\d{2}\) \d{5}-\d{4}/;
    if (!regexTelefone.test(telefone)) {
        alert("O número de telefone deve estar no formato (XX) XXXXX-XXXX.");
        return false;
    }

    // Validação de e-mail
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert("E-mail inválido!");
        return false;
    }

    // Caso todas as validações passem
    alert("Formulário enviado com sucesso!");
    return true;
}
        // Definindo a variável que vai pegar o botão
        var botao = document.getElementById('Redirect');

        // Adicionando o evento de clique no botão
        botao.addEventListener('click', function() {
            // Redirecionando para outra página HTML
            window.location.href = 'sprint2.html'; // Substitua 'pagina2.html' pelo nome do arquivo para o qual você deseja redirecionar
        });
