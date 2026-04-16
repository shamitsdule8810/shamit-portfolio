import React from 'react'
import { useNavigate } from 'react-router-dom';
import deloitee from "../../assets/deloitee.pdf"
import deloitte from "../../assets/deloittee.png"
import javau from "../../assets/javau.pdf"
import react from "../../assets/reactc.pdf"
import nptelc from "../../assets/nptelc.pdf"
import nptel from "../../assets/nptel.jpg"

const certificate = () => {
   const navigate = useNavigate();
  return (
    <div className="page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h1 className="page-title">My Certificates</h1>

      <div className="wrapper">
        <div className="container">

          {/* Certificate 1 */}
          <div className="card">
            <img src={deloitte} alt="certificate" />
            <h3>Deloitte</h3>
            <p>Technology Job Simulation</p>

            <div className="btn-group">
              <button onClick={() => window.open(deloitee)}>
                View
              </button>

              <a href={deloitee} download>
                <button>Download</button>
              </a>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" />
            <h3>Java</h3>
            <p>Java Complete Course Using
Visual Studio Code</p>

            <div className="btn-group">
              <button onClick={() => window.open(javau)}>
                View
              </button>

              <a href={javau} download>
                <button>Download</button>
              </a>
            </div>
          </div>

                    {/* Certificate 3 */}
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="" />
            <h3>React</h3>
            <p>React Certification</p>

            <div className="btn-group">
              <button onClick={() => window.open(react)}>
                View
              </button>

              <a href={react} download>
                <button>Download</button>
              </a>
            </div>
          </div>

                    {/* Certificate 4 */}
          <div className="card">
            <img src={nptel} alt="" />
            <h3>NPTEL</h3>
            <p>Design Of Power Electronics And Inverter</p>

            <div className="btn-group">
              <button onClick={() => window.open(nptelc)}>
                View
              </button>

              <a href={nptelc} download>
                <button>Download</button>
              </a>
            </div>
          </div>

                    {/* Certificate 5 */}
  
        </div>
      </div>

    </div>
  )
}

export default certificate