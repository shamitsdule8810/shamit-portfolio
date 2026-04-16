import React from 'react'
import { Link } from 'react-router-dom'
import "./CardGrid.css"
import resume from "../../assets/resume.pdf"

const CardGrid = () => {
  return (
 <div className="container" id='category'>

      <div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="" />
        <h2>Projects</h2>
        <p>View my development projects</p>
        <Link to="/projects"><button>View</button></Link>
      </div>

      <div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        <h2>Certificates</h2>
        <p>My certifications</p>
        <Link to="/certificate"><button>View</button></Link>
      </div>

      <div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="" />
        <h2>Internships</h2>
        <p>My experience</p>
        <Link to="/internships"><button>View</button></Link>
      </div>

      <div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="" />
        <h2>Resume</h2>
        <p>Download resume</p>
        <div className="btn-group">
                      <button onClick={() => window.open(resume)}>
                        View
                      </button>
        
                      <a href={resume} download>
                        <button>Download</button>
                      </a>
                    </div>
      </div>

    </div>
  )
}

export default CardGrid