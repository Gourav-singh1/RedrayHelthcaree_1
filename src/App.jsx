import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import "primereact/resources/themes/saga-blue/theme.css"; // or primeflex theme
import "primeflex/primeflex.css";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import ContactPage from "./page/ContactPage";
import Services from "./page/Services";
import ProductPage from "./page/ProductPage";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // agar products dynamically update hote ho
  useEffect(() => {
    AOS.refresh(); // refresh after dynamic content
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
