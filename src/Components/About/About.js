import './About.css'

const About = () =>{
    return(
        <section className="container-sobre-mim" id='sobre'>
    <div className="sobre-mim">
      <div className='container-sections sobre-mim'>
        <div className="espaco-fantasma"></div>
        <h1>João Romano</h1>
        <p className="txt-sobre-mim">Olá &#x1F44B;, meu nome é João Romano, sou estudante de Análise e Desenvolvimento de
          Sistemas no ENIAC, com
          previsão
          de conclusão para outubro de 2024. Durante minha trajetória acadêmica, tive a oportunidade de estudar lógica
          de
          programação, sistemas e algoritmos simples, bem como HTML, CSS e JavaScript, onde descobri minha maior paixão.
          Desde então, venho me aprimorando no desenvolvimento web e estudando frameworks como React e Angular JS,
          com o objetivo de me tornar um profissional completo e preparado para os desafios do mercado de trabalho.</p>
        <h2>Tecnologias</h2>
        <ul className="logo-tecnologias">
          <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" rel="noopener noreferrer">
            <li title="logo-html"><img className="logo-html" alt="Logo HTML" src="assets\logo-html.png"/></li>
          </a>
          <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" rel="noopener noreferrer">
            <li><img className="logo-css" src="assets\logo-css.png" alt='Logo CSS'/></li>
          </a>
          <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" rel="noopener noreferrer">
            <li className="logo-javascript"><img src="assets\logo-javascript.png" alt='Java Script'/></li>
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-sclassNamee_JavaScript_frameworks/React_getting_started">
            <li className="logo-react"><img src="assets\logo-react.png" alt='Logo Java Script'/></li>
          </a>
        </ul>
        <ul className="logo-tecnologias">
          <a target="_blank" rel="noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-sclassNamee_JavaScript_frameworks/Angular_getting_started">
            <li className="logo-angular"><img src="assets\logo-angular.png" alt='Logo Angular'/></li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.devmedia.com.br/introducao-ao-mysql/27799">
            <li className="logo-mysql"><img src="assets\logo-mysql.png" alt='Logo MySQL'/></li>
          </a>
        </ul>
      </div>
    </div>
  </section>
    )
}

export default About