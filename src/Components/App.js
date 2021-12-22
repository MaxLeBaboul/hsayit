import Home from "../Pages/Home";
import Community from "../Pages/Community";
import Library from "../Pages/Library";
import CharitableAid from "../Pages/CharitableAid";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer'
import SuperNav from "./SuperNav";

function App() {
  return (
    <div className="App">
        
        <Router> 
            <SuperNav />      
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/community" element={<Community />} />
              <Route path="/library" element={<Library />} />
              <Route path="/charitableaid" element={<CharitableAid />} />
              <Route path="/contact" element={<Contact />} />
              <Route  path="/about" element={<About />} />
           </Routes>
           <Footer />
      </Router>
    
    </div>
  );
}

export default App;
