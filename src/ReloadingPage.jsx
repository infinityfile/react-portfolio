import React from "react";
import ReloadingPage from "./ReloadingPage.css";

function ReloadPage() {
  return (
    <div className="reload-page">
      <div className="circle-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="loading">
      <h2>Loading...</h2>
      </div>
    </div>
  );
}

export default ReloadPage;
