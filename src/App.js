import { Route, Routes } from "react-router-dom";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";
import HomePage from "./Components/HomePage/HomePage";
import Pricing from "./Components/Pricing/Pricing";
import Services from "./Components/ServicesPage/Services";
import Footer from "./Components/Shared/Footer/Footer";
import NavBarAutoParts from "./Components/Shared/NavBar/NavBarAutoParts";

function App() {
  return (
    <>
      <NavBarAutoParts />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
