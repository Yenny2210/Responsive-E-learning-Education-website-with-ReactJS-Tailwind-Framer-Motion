import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Contact_us from "./components/Contact_us/Contact_us";

const App = () => {
  return (
    <Router>
      {/* Navbar estará presente en todas las páginas */}
      <Navbar />
      {/* Configura las rutas */}
      <Routes>
        {/* Página de Inicio */}
        <Route
          path="/"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Hero />
              <Services />
              <Banner />
              <Subscribe />
              <Banner2 />
              <Footer />
            </main>
          }
        />

        {/* Página de Servicios */}
        <Route
          path="/services"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Services />
              <Footer />
            </main>
          }
        />

        {/* Página de Suscripción */}
        <Route
          path="/subscribe"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Subscribe />
              <Footer />
            </main>
          }
        />

        {/* Página de Contacto */}
        <Route
          path="/contact"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Contact_us />
              <Footer />
            </main>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;