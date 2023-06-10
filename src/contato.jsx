import React from "react";
import "./contato.css";


function Contato() {
  return (
    <div className="container-contact">
      <h1 className="texto-p-contato">Feel free to contact me through the following means:</h1>
      <ul className="elementos-contato">
        <li className="elementos-contato-texto">Email: diego05.pimentel@gmail.com</li>
        <li className="elementos-contato-texto">Phone number: +55 (21) 970309593</li>
        <li className="elementos-contato-texto">Address: Rua Ernestina 73, Rio de Janeiro/RJ, Brasil</li>
      </ul>
      <div className="phone-img">
        <img src="https://i.pinimg.com/originals/5a/d5/54/5ad55495f978d89dc9c4fbab26f6e288.png" alt="phone"></img>
      </div>
    </div>
  );
}

export default Contato;
