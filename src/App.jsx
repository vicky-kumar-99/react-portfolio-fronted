import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
function App() {
   return (
      <>
          <BrowserRouter>
          <Navbar />
            <Routes>
              
                <Route path="/" element={<Home />}/>  
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />}/>  
                <Route path="/projects" element={<Projects />}/>  
                <Route path="/contact" element={<Contact />}/>  
                
            </Routes>
          <Footer />
          </BrowserRouter>
      </>
   )
}

export default App
