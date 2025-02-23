import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './landing';
import About from "./about";  // Import About Page Component
import Contact from "./contact";  // Import Contact Page Component
import Community from "./community";  // Import Community Page Component
import Footer from "./footer";  // Import Footer Component
import Navbar from "./navbar";  // Import Navbar Component
// import Chat from "./chat";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
      {/* <Chat /> */}

    </Router>
  );
}

export default App;