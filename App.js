import React, { useState } from "react";
import "./App.css";
import Contato from "./contato.jsx";

function App() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const handleClick1 = () => {
    setIsClicked1(true);
    setTimeout(() => {
      setIsClicked1(false);
    }, 200);
    setActivePage("home");
  };

  const handleClick2 = () => {
    setIsClicked2(true);
    setTimeout(() => {
      setIsClicked2(false);
    }, 200);
    setActivePage("contato");
  };

  return (
    <div>
      <nav className="nav-bar">
        <div className="home">
          <h2>
            <a href="#" className="home-link" onClick={handleClick1}>
              Home
            </a>
          </h2>
        </div>
        <div className="contato">
          <h2>
            <a href="#" className="home-link" onClick={handleClick2}>
              Contato
            </a>
          </h2>
        </div>
      </nav>

      {activePage === "home" ? (
        <div className="principal">
          <h1>Seja bem-vindo!</h1>
          <p className="principal-p">
            Como um futuro Desenvolvedor Full Stack, tenho competências em várias
            linguagens de programação, incluindo HTML, CSS, JavaScript, React.js,
            React Native e PHP.
            <br />
            <br />
            Em resumo, minhas habilidades abrangem uma ampla gama de tecnologias,
            permitindo-me desenvolver soluções completas tanto para o front-end
            quanto para o back-end. Estou constantemente atualizando meu
            conhecimento e me adaptando às novas tendências do setor, a fim de
            fornecer as melhores soluções possíveis aos projetos em que trabalho.
          </p>

          <div className={`button ${isClicked1 ? "clicked" : ""}`} onClick={handleClick1}>
            <h1>
              <a href="https://www.youtube.com/" className="project-1">
                Projeto 1
              </a>
            </h1>
          </div>

          <div className={`button-2 ${isClicked2 ? "clicked" : ""}`} onClick={handleClick2}>
            <h1>
              <a href="https://www.youtube.com/" className="project-2">
                Projeto 2
              </a>
            </h1>
          </div>
          <img
            src="https://community.coreldraw.com/resized-image.ashx/__size/680x1000/__key/CommunityServer.Discussions.Components.Files/543/4530.Dotted-line.png"
            alt="caminho"
            className="caminho"
          ></img>
        </div>
      ) : (
        <Contato />
      )}
    </div>
  );
}

export default App;