
import "./Style/main.css"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import Contacts from "./Pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";




function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/> }/>
          <Route path="/project/:id" element={<Project/> }/>
          <Route path="/contacts" element={<Contacts/> }/>
        </Routes>

        
      
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
