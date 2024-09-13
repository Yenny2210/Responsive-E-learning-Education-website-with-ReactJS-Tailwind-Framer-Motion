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
import Our_Team from "./components/Our_Team/Our_Team";
import About_Us from "./components/About_us/About_us";
import Login from "./components/Login/Login"; 

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

        {/* Página Sobre Nosotros */}
        <Route
          path="/about_us"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <About_Us />
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

        {/* Página de Nuestro Equipo */}
        <Route
          path="/team"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Our_Team />
              <Footer />
            </main>
          }
        />

        {/* Página de Login */}
        <Route
          path="/login"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Login /> 
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
