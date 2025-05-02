let contatos = [
    { nome: "João Silva", telefone: "(11) 91234-5678", email: "joao@email.com" },
    { nome: "Maria Oliveira", telefone: "(21) 99876-5432", email: "maria@email.com" },
    { nome: "Carlos Souza", telefone: "(31) 98765-4321", email: "carlos@email.com" }
];

function renderLista() {
    const lista = document.getElementById("contactList");
    lista.innerHTML = "";
    contatos.forEach((contato, index) => {
        const div = document.createElement("div");
        div.className = "contact";
        div.innerHTML = `
          <div class="contact-info">
            <strong>${contato.nome}</strong><br>
            ${contato.telefone}<br>
            ${contato.email}
          </div>
          <div class="button-group">
            <button class="edit-btn" onclick="editarContato(${index})">Editar</button>
            <button class="delete-btn" onclick="excluirContato(${index})">Excluir</button>
          </div>
        `;
        lista.appendChild(div);
    });
}

function editarContato(index) {
    const contato = contatos[index];
    document.getElementById("editNome").value = contato.nome;
    document.getElementById("editTelefone").value = contato.telefone;
    document.getElementById("editEmail").value = contato.email;
    document.getElementById("editIndex").value = index;
    document.getElementById("editForm").style.display = "block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function excluirContato(index) {
    if (confirm("Tem certeza que deseja excluir este contato?")) {
        contatos.splice(index, 1);
        renderLista();
        document.getElementById("editForm").style.display = "none";
    }
}

document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const index = document.getElementById("editIndex").value;
    contatos[index] = {
        nome: document.getElementById("editNome").value,
        telefone: document.getElementById("editTelefone").value,
        email: document.getElementById("editEmail").value
    };
    renderLista();
    document.getElementById("editForm").style.display = "none";
    alert("Contato atualizado com sucesso!");
});

renderLista();
