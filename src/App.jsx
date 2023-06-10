import React, { useState } from "react";
import "./App.css";
import Contato from "./contato.jsx";
import Curriculo from "./curriculum.jsx";
import ReloadingPage from "./ReloadingPage.jsx";

function App() {
  const [isReloading, setIsReloading] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const handleClick1 = () => {
    if (activePage !== "home") {
      setIsReloading(true);
      setTimeout(() => {
        setIsReloading(false);
        setActivePage("home");
      }, 1500);
    }
  };

  const handleClick2 = () => {
    if (activePage !== "contato") {
      setIsReloading(true);
      setTimeout(() => {
        setIsReloading(false);
        setActivePage("contato");
      }, 1500);
    }
  };

  const handleClick3 = () => {
    if (activePage !== "curriculum") {
      setIsReloading(true);
      setTimeout(() => {
        setIsReloading(false);
        setActivePage("curriculum");
      }, 1500);
    }
  };

  const animateButton = (event) => {
    const button = event.currentTarget;
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 200);
  };

  return (
    <div className={`container ${isReloading ? "hidden" : ""}`}>
      {isReloading ? (
        <ReloadingPage />
      ) : (
        <>
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

            <div className="curriculum">
              <h2>
                <a href="#" className="home-link" onClick={handleClick3}>
                  Curriculum
                </a>
              </h2>
            </div>
          </nav>

          {activePage === "home" ? (

            <div className="principal">
              <h1>Welcome!</h1>
              <p className="principal-p">
                As a future Full Stack Developer, I have skills in various programming languages, including HTML, CSS, JavaScript, React.js, React Native, and PHP.
                <br/>
                <br/>
                In summary, my skills encompass a wide range of technologies, allowing me to develop comprehensive solutions for both front-end and back-end. I am constantly updating my knowledge and adapting to new industry trends in order to provide the best possible solutions to the projects I work on.
              </p>



              <div className="buttons">
                <button className="button" onClick={animateButton}>
                  <a href="https://github.com/DiegoCPJPKR/cybersecurityproject/tree/main/CyberSecurity" className="project">
                    Project 1
                  </a>
                </button>

                <button className="button" onClick={animateButton}>
                  <a href="https://github.com/DiegoCPJPKR/react-portfolio" className="project">
                    Project 2
                  </a>
                </button>

                <button className="button" onClick={animateButton}>
                  <a href="https://github.com/DiegoCPJPKR/aluraproject" className="project">
                    Project 3
                  </a>
                </button>
              </div>


            <div className="background-png">
              <img
                src="https://community.coreldraw.com/resized-image.ashx/__size/680x1000/__key/CommunityServer.Discussions.Components.Files/543/4530.Dotted-line.png"
                alt="caminho"
                className="caminho"
              ></img>
              <img src="https://cdn-icons-png.flaticon.com/512/35/35472.png" alt='square' className="square"></img>
              <img src="https://cdn.icon-icons.com/icons2/935/PNG/512/play-triangle-outline_icon-icons.com_73185.png" alt='triangle' className="triangle"></img>
              <img src="https://cdn-icons-png.flaticon.com/512/57/57581.png" alt='cube' className="cube"></img>
            </div>
            </div>
          ) : activePage === "contato" ? (
            <Contato />
          ) : (
            <Curriculo />
          )}
        </>
      )}
    </div>
  );
}

export default App;
