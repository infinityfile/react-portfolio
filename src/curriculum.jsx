import React from "react";
import "./curriculum.css";

function Curriculum() {
  return (
    <div className="container-curriculum">
      <div className="cv-text">
        <h1>Here you can find my CV</h1>
      </div>
      <div className="cv-link">
        <a href="https://drive.google.com/file/d/1eAKD4t4ieZAcdugmCQQtvMZUENH0kAFW/view?usp=sharing" className="cv-link">
          https://drive.google.com/file/d/1eAKD4t4ieZAcdugmCQQtvMZUENH0kAFW/view?usp=sharing
        </a>
      </div>
        <img src="https://bayifoundation.org/wp-content/uploads/2020/07/service_default_avatar_182956.png" alt="curriculum" className="curriculum-img"></img>
    </div>
  );
}

export default Curriculum;
