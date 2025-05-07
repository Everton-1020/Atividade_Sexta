import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "./ContactContext"; // importa o hook
import './style.css'
import Nexus from '../../assets/nexus_code.jpeg'


const ContactForm = () => {
  const navigate = useNavigate();
  const { addContact } = useContacts(); // pega a função para adicionar contato

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validarFormulario = () => {
    const { nome, telefone, email } = formData;

    if (!nome || !telefone || !email) {
      alert("Todos os campos são obrigatórios!");
      return false;
    }

    const regexTelefone = /\(\d{2}\) \d{5}-\d{4}/;
    if (!regexTelefone.test(telefone)) {
      alert("Telefone inválido. Use o formato (XX) XXXXX-XXXX.");
      return false;
    }

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
      alert("E-mail inválido.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      addContact(formData); // salva o contato
      setFormData({ nome: "", telefone: "", email: "" }); // limpa o form
      alert("Contato adicionado!");
    }
  };

  const handleRedirect = () => {
    navigate("/contatos"); // redireciona para a lista
  };

  return (
    <div className="container">
      <h1 className="form">Formulário de Contato</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            name="telefone"
            placeholder="(XX) XXXXX-XXXX"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
        <br />
        <div className="pagina">
          <button type="button" onClick={handleRedirect}>
            Ir para Lista de Contatos
          </button>
        </div>
      </form>
      <img src={Nexus} />
    </div>
  );
};

export default ContactForm;
