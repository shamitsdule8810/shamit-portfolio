import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardGrid from "./Components/Card/CardGrid";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

import Projects from "./Pages/Projects/Projects";
import Internships from "./Pages/Internships/Internships";
import Certi from "./Pages/Certificates/Certi";


function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <CardGrid />
      <Contact />
    </>
  );
}

function App() {
  return (
    
      <div className="App">
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/certificate" element={<Certi/>}/>
          <Route path="/internships" element={<Internships/>}/>
        </Routes>

        <Footer />
      </div>
   
  );
}

export default App;