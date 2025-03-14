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
