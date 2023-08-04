import "./App.css";
import "./styles/styles.css"

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";

// Importing from React Router DOM
import { Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "./helper/ScrollToTop";

function App() {
  let location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
