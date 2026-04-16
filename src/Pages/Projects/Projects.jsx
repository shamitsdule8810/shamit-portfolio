import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css"
import vite from "../../assets/vite.jpg"
function Projects() {
  const navigate = useNavigate();

  return (
    <div className="page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h1 className="page-title">My Projects</h1>

<div className="wrapper">
      <div className="container">

        <div className="card">
          <img src={vite} alt="" />
          <h3>Portfolio Website</h3>
          <p>Modern React portfolio website</p>
          <div className="btn-group">
        <button onClick={() => window.open("https://github.com")}>GitHub</button>
        <button onClick={() => window.open("https://yourlive.com")}>Live</button>
      </div>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="" />
          <h3>Suraksha Band</h3>
          <p>Women safety IoT + Web project</p>
        <div className="btn-group">
        <button onClick={() => window.open("https://github.com")}>GitHub</button>
        <button onClick={() => window.open("https://yourlive.com")}>Live</button>
      </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Projects;