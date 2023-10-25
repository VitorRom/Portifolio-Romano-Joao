import React, { useState, useEffect } from 'react';
import './Footer.css';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // You can use useEffect to set the year in a React way
        const dt = new Date();
        setYear(dt.getFullYear());
    }, []);

    return (
        <footer>
            <div className="icones-rodape">
                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-gon%C3%A7alves-romano-044597212/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className='fa-brands-footer' />
                </a>
                <a href="https://github.com/VitorRom?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='fa-brands-footer' />
                </a>
                <a href="https://wa.me/11996489793" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className='fa-brands-footer' />
                </a>
            </div>
            <ul className="lista-footer">
                <li className="home">
                    <a href="#inicio">Home</a>
                </li>
                <li>
                    <a href="#sobre-mim">Sobre mim</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
            <p>João Romano - <span>{year}</span></p>
        </footer>
    );
};

export default Footer;
