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
      <div className="curriculum-img">
        <img src="https://cdn-icons-png.flaticon.com/512/942/942807.png" alt="curriculum"></img>
      </div>
    </div>
  );
}

export default Curriculum;
