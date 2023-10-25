import React from 'react'; // Asegúrese de importar React
import './Home.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {
    return (
        <section id='home'>
            <div className="container-pai"> {/* Use className en lugar de class */}
                <div className="container"> {/* Use className en lugar de class */}
                    <p >Olá,</p>
                    <h1>Eu sou </h1>
                    <h1>um desenvolvedor Web</h1>
                    <p>Seja bem vindo ao website do meu portfólio </p>
                    <div className="botoes"> {/* Use className en lugar de class */}
                        <a href="#sobre-mim" className="btn btn1">Mais sobre mim</a> {/* Use className en lugar de class */}
                        <a href="#projetos" className="btn btn2">projetos</a> {/* Use className en lugar de class */}
                    </div>
                    <div className="icones"> {/* Use className en lugar de class */}
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-gon%C3%A7alves-romano-044597212/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='fa-brands'/>
                        </a>
                        <a href="https://github.com/VitorRom?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='fa-brands'/>
                        </a>
                        <a href="https://wa.me/11996489793" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className='fa-brands' /> 
                        </a>
                    </div>
                </div>
                <div className="imagem-container"> 
                    <img src="assets/imagem-estudando.png" alt="Imagem Estudante" /> 
                </div>
            </div>
        </section>
    );
}

export default Home;
