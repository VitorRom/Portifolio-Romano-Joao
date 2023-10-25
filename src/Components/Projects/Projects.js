import './Projects.css';

const Projects = () => {
    return (
        <section className="projetos-portfolio" id='projetos'>
            <h2>Projetos utilizando HTML CSS e JS</h2>

            <div className="container-sections projetos">
                <div className="card-container">
                    <h2>Clone Website Alura</h2>
                    <a href="https://vitorrom.github.io/Alura-Clone/" target="_blank" rel="noopener noreferrer">
                        <div className="card card-1">
                            <img src="assets\projeto-clone-alura.png" alt="Imagem do projeto" className="card-img" />
                        </div>
                    </a>
                    <div className="card-content">
                        <p>Estava assistindo um curso na Alura sobre front-end e pensei "Será possível recriar o front-end da Alura?" Logo em seguida comecei a trabalhar em um clone 100% fiel do Website.</p>
                    </div>
                    <a href="https://github.com/VitorRom/Alura-Clone" target="_blank" rel="noopener noreferrer" className="btn btn-projetos">Ver código</a>
                </div>

                <div className="card-container">
                    <h2>Marmitaria</h2>
                    <a href="https://vitorrom.github.io/Marmitaria/" target="_blank" rel="noreferrer">
                        <div className="card card-1">
                            <img src="assets\projeto-marmitaria.png" alt="Imagem do projeto" className="card-img" />
                        </div>
                    </a>
                    <div className="card-content">
                        <p>
                            Um parente meu decidiu começar a vender marmitas, sendo assim, decidi demonstrar meu apoio criando um website para ajudar na praticidade de suas vendas, porém, está faltando criar o back-end do projeto...
                        </p>
                    </div>
                    <a href="https://github.com/VitorRom/Marmitaria" target="_blank" rel="noreferrer" className="btn btn-projetos">Ver código</a>
                </div>

                <div className="card-container">
                    <h2>Clone Repositórios GitHub</h2>
                    <a href="https://vitorrom.github.io/GitHub-Repositories/" target="_blank" rel="noopener noreferrer">
                        <div className="card card-1">
                            <img src="assets\projeto-github.png" alt="Imagem do projeto" className="card-img" />
                        </div>
                    </a>
                    <div className="card-content">
                        <p>Aqui, mais uma vez decidi testar os meus conhecimentos em HTML e CSS, sendo assim tentei recriar o front-end da página de repositórios de um dos websites mais utilizados por nós desenvolvedores, o GitHub.</p>
                    </div>
                    <a href="https://github.com/VitorRom/Clone-login-udemy" target="_blank" rel="noopener noreferrer" className="btn btn-projetos">Ver código</a>
                </div>

                <h2 >Projetos utilizando o framework React </h2>
                <div className="container-sections projetos">
                    <div className="card-container">
                        <h2>Sol & Chuva</h2>
                        <a href="https://vitorrom.github.io/Previsao_React/" target="_blank" rel="noopener noreferrer">
                            <div className="card card-1">
                                <img src="assets\projeto-sol-&-chuva.png" alt="Imagem do projeto" className="card-img" />
                            </div>
                        </a>
                        <div className="card-content">
                            <p>Aqui, após entender como funcionam os conceitos de props e como reutilizar dados em React, decidi consumir uma API e fazer um projeto mais completo.</p>
                        </div>
                        <a href="https://github.com/VitorRom/Previsao_React" target="_blank" rel="noopener noreferrer" className="btn btn-projetos">Ver código</a>
                    </div>

                    <div className="card-container">
                        <h2>League Guide</h2>
                        <a href="https://vitorrom.github.io/League-Guide/" target="_blank" rel="noopener noreferrer">
                            <div className="card card-1">
                                <img src="assets\projeto-league-guide.png" alt="Imagem do projeto" className="card-img" />
                            </div>
                        </a>
                        <div className="card-content">
                            <p>Aqui, decidi testar os meus conhecimentos em React e junto a isso consumir alguma API para entender como funcionam os conceitos.</p>
                        </div>
                        <a href="https://github.com/VitorRom/League-Guide" target="_blank" rel="noopener noreferrer" className="btn btn-projetos">Ver código</a>
                    </div>
                </div>

                <h2 >Mais projetos utilizando HTML CSS e JS</h2>
                <div className="container-sections projetos">
                    <div className="card-container">
                        <h2>Clone Login Udemy</h2>
                        <a href="https://vitorrom.github.io/Clone-login-udemy/" target="_blank" rel="noopener noreferrer">
                            <div className="card card-1">
                                <img src="assets\projeto-clone-udemy.png" alt="Imagem do projeto" className="card-img" />
                            </div>
                        </a>
                        <div className="card-content">
                            <p>Durante o começo dos meus estudos decidi fazer diversos clones para consolidar meus estudos em HTML CSS e JS, aqui tem mais um clone, dessa vez, da página de login da Udemy.</p>
                        </div>
                        <a href="https://github.com/VitorRom/Alura-Clone" target="_blank" rel="noopener noreferrer" className="btn btn-projetos">Ver código</a>
                    </div>

                    <div className="card-container">
                        <h2>Clone portal Eniac</h2>
                        <a href="https://vitorrom.github.io/Clone-portal-Eniac/" target="_blank" rel="noopener noreferrer">
                            <div className="card card-1">
                                <img src="assets\projeto-clone-eniac.png" alt="Imagem do projeto" className="card-img" />
                            </div>
                        </a>
                        <div className="card-content">
                            <p>Mais um clone desenvolvido em HTML CSS e JS, este clone foi feito usando como base o portal academico da minha universidade, o Eniac.</p>
                        </div>
                        <a href="https://github.com/VitorRom/civil_engineering" target="_blank" rel="noopener noreferrer" className="btn btn-projetos">Ver código</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
