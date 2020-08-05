import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/53796153?s=460&u=5fb4f4f34f78ee55148b7a69c269339105d68408&v=4" alt="Júlia Stefanoni"/>
        <div>
          <strong> Júlia Stefanoni </strong>
          <span> Química </span>
        </div>
      </header>
    
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões
      </p>
      
      <footer>
        <p>
          Preço/hora
          <strong> R$ 20,00 </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
    );
  }
  
  export default TeacherItem;