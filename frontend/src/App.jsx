import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './hero';
import About from "./about";  // Import About Page Component
import Contact from "./contact";  // Import Contact Page Component
import Community from "./community";  // Import Community Page Component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;