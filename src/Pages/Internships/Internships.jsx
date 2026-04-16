import React from 'react'
import itnet from "../../assets/itnet.png"
import kavin from "../../assets/kavin.png"

import itnet_certificate from "../../assets/itnet_certificate.pdf"
import itnet_complete from "../../assets/itnet_complete.pdf"
import itnet_lor from "../../assets/itnet_lor.pdf"
import itnet_confrim from "../../assets/itnet_confrim.pdf"

import kavin_certificate from "../../assets/kavin_certificate.pdf"
import kavin_complete from "../../assets/kavin_complete.pdf"
import kavin_lor from "../../assets/kavin_lor.pdf"
import kavin_confrim from "../../assets/kavin_confirm.pdf"
import { useNavigate } from 'react-router-dom'

const Internships = () => {
  const navigate=useNavigate();
  return (
    <div className="page">
    
          <button className="back-btn" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
    
          <h1 className="page-title">Internships</h1>
    
          <div className="wrapper">
            <div className="container">
    
              {/* Certificate 1 */}
              <div className="card">
                <img src={itnet} alt="certificate" />
                <h3>IT-NetworkZ</h3>
                <p>Confirmation Letter For IT Internship</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(itnet_confrim)}>
                    View
                  </button>
    
                  <a href={itnet_confrim} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>
    
              {/* Certificate 2 */}
              <div className="card">
                <img src={itnet} alt="" />
                <h3>IT-NetworkZ</h3>
                <p>Completion Letter of Intenship</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(itnet_complete)}>
                    View
                  </button>
    
                  <a href={itnet_complete} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>
    
                        {/* Certificate 3 */}
              <div className="card">
                <img src={itnet} alt="" />
                <h3>IT-NetworkZ</h3>
                <p>Letter Of Recommendation</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(itnet_lor)}>
                    View
                  </button>
    
                  <a href={itnet_lor} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>
    
                        {/* Certificate 4 */}
              <div className="card">
                <img src={itnet} alt="" />
                <h3>IT-NetworkZ</h3>
                <p>Certificate Of Achievement</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(itnet_certificate)}>
                    View
                  </button>
    
                  <a href={itnet_certificate} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>
    
                        {/* Certificate 6 */}

                        <div className="card">
                <img src={kavin} alt="certificate" />
                <h3>Kavin India</h3>
                <p>Confirmation Letter For IT Internship</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(kavin_confrim)}>
                    View
                  </button>
    
                  <a href={kavin_confrim} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>

               {/* Certificate 6 */}

                        <div className="card">
                <img src={kavin} alt="certificate" />
                <h3>Kavin India</h3>
                <p>Confirmation Letter For IT Internship</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(kavin_confrim)}>
                    View
                  </button>
    
                  <a href={kavin_confrim} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>

               {/* Certificate 7 */}

                        <div className="card">
                <img src={kavin} alt="certificate" />
                <h3>Kavin India</h3>
                <p>Confirmation Letter For IT Internship</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(kavin_confrim)}>
                    View
                  </button>
    
                  <a href={kavin_confrim} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>

               {/* Certificate 8 */}

                        <div className="card">
                <img src={kavin} alt="certificate" />
                <h3>Kavin India</h3>
                <p>Confirmation Letter For IT Internship</p>
    
                <div className="btn-group">
                  <button onClick={() => window.open(kavin_confrim)}>
                    View
                  </button>
    
                  <a href={kavin_confrim} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>
    
        
    
            </div>
          </div>
    
        </div>
  )
}

export default Internships