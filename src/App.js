import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
