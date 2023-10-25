import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contato" id='contato'>
      <h2>Entre em contato</h2>
      <form className="portfolio-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input placeholder="Digite o seu nome" type="text" className="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input placeholder="Digite o seu telefone" type="tel" className="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input placeholder="Digite o seu e-mail" type="email" className="email" name="email" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
