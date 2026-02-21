import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Careers from "./pages/Careers";
import WhyUs from "./pages/WhyUs";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="careers" element={<Careers/>}/>
        <Route path="whyus" element={<WhyUs/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
