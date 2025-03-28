// Lista de contatos cadastrados
const contatos = [
    { nome: "", telefone: "", email: "" },
    { nome: "", telefone: "", email: "" }
];

// Função para exibir lista de contatos
function exibirContatos() {
    // Ordenar contatos por nome
    const contatosOrdenados = contatos.sort((a, b) => a.nome.localeCompare(b.nome));

    // Selecionar o elemento onde a lista será exibida
    const listaElement = document.getElementById('contatos-lista');
    
    // Limpar lista existente
    listaElement.innerHTML = '';

    // Adicionar os contatos ordenados à lista
    contatosOrdenados.forEach(contato => {
        const item = document.createElement('li');
        item.textContent = `${contato.nome} - ${contato.telefone} - ${contato.email}`;
        listaElement.appendChild(item);
    });
}
// Definindo a variável que vai pegar o botão
var botao = document.getElementById('Return');

botao.addEventListener('click', function() {
    // Redirecionando para outra página HTML
    window.location.href = 'splint.html'; // Substitua 'pagina2.html' pelo nome do arquivo para o qual você deseja redirecionar
});

// Chama a função para exibir os contatos
exibirContatos();
