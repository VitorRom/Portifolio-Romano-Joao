import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import DarkTheme from '../DarkTheme/DarkTheme';

const Header = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const preventDefaultClick = (e) => {
    e.preventDefault();
    scrollToTop();
  }

  return (
    <header>
      <nav>
        <ul id="menu">
          <DarkTheme></DarkTheme>
          <a href="#" onClick={preventDefaultClick}>
            <p id="meu-nome">João Romano</p>
          </a>
          <li>
            <a href="#" onClick={preventDefaultClick}> 
              Home
            </a>
            <div className="linha-nav-nome"></div>
          </li>
          <li>
            <Link to="sobre"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={800}>
              Sobre
            </Link>
            <div className="linha-nav-nome"></div>
          </li>
          <li>
            <Link to="projetos"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={800}>
              Projetos
            </Link>
            <div className="linha-nav-nome"></div>
          </li>
          <li>
            <Link to="contato"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={800}>
              Contato
            </Link>
            <div className="linha-nav-nome"></div>
          </li>
          <button id="nav-btn">&#9776;</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
