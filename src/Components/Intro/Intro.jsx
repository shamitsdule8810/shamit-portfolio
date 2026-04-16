import React from 'react';
import './intro.css';
import bg from '../../assets/shamit.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import resume from "../../assets/resume.pdf"

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Shamit</span> <br />Electronics Engineer</span>
                <p className="introPara">passion for coding and software architecture.<br /> Seeking a challenging position <br /> where I can utilize my analytical rigor and coding expertise <br /> to contribute to high-impact engineering solutions</p>
                <Link><button className="btn" onClick={() => window.open(resume)}><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;