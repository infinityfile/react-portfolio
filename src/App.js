import React, { useState } from "react";
import "./App.css";
import Contato from "./contato.jsx";

function App() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const handleClick1 = () => {
    if (activePage !== "home") {
      setIsClicked1(true);
      setTimeout(() => {
        setIsClicked1(false);
      }, 200);
      setActivePage("home");
    }
  };

  const handleClick2 = () => {
    if (activePage !== "contato") {
      setIsClicked2(true);
      setTimeout(() => {
        setIsClicked2(false);
      }, 200);
      setActivePage("contato");
    }
  };

  return (
    <div className="container">
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
              Contact
            </a>
          </h2>
        </div>
      </nav>

      {activePage === "home" ? (
        <div className="principal">
          <h1>Welcome!</h1>
          <p className="principal-p">
            As a future Full Stack Developer, I have skills in various programming languages, including HTML, CSS, JavaScript, React.js, React Native, and PHP.
            <br />
            <br />
            In summary, my skills encompass a wide range of technologies, allowing me to develop comprehensive solutions for both front-end and back-end. I am constantly updating my knowledge and adapting to new industry trends in order to provide the best possible solutions to the projects I work on.
          </p>

          <div className={`button ${isClicked1 ? "clicked" : ""}`} onClick={handleClick1}>
            <h1>
              <a href="https://github.com/DiegoCPJPKR/cybersecurityproject/tree/main/CyberSecurity" className="project-1">
                <span>Project 1</span>
              </a>
            </h1>
          </div>

          <div className={`button-2 ${isClicked2 ? "clicked" : ""}`} onClick={handleClick2}>
            <h1>
              <a href="https://github.com/DiegoCPJPKR/react-portfolio" className="project-2">
                <span>Project 2</span>
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
