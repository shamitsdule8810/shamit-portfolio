import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Electronics Engineer with a passion for coding and software architecture. Possesses a strong academic record in core engineering subjects alongside practical, hands-on experience in software development and debugging. Skilled in Data Structures and System Design. Seeking a challenging position where I can utilize my analytical rigor and coding expertise to contribute to high-impact engineering solutions.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>FullStack Development</h2>
                        <p>Build scalable web applications using modern technologies like React,
    Node.js, and databases. Handle both frontend and backend efficiently.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p> Create responsive and visually appealing websites with modern UI/UX
      principles, ensuring a smooth user experience across all devices.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Application Design</h2>
                        <p>Design intuitive mobile and web applications with user-friendly
      interfaces, focusing on performance, usability, and modern design trends.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;