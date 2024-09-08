import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Importamos Link

// Componente de menú hamburguesa
function MenuHamburguesa({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div>
      {/* Icono del menú hamburguesa para móviles */}
      <div className="lg:hidden">
        {isMenuOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdClose className="text-4xl" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdMenu className="text-4xl" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </motion.div>
        )}
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="menu-dropdown"
        >
          <ul className="flex flex-col gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path} className="inline-block py-2 px-3 hover:text-secondary">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

// Menú de navegación
const NavbarMenu = [
  {
    id: 1,
    title: 'Inicio',
    path: '/',
  },
  {
    id: 2,
    title: 'Servicios',
    path: '/services',
  },
  {
    id: 3,
    title: 'Sobre Nosotros',
    path: '/about',
  },
  {
    id: 4,
    title: 'Nuestro Equipo',
    path: '/team',
  },
  {
    id: 5,
    title: 'Contáctanos',
    path: '/contact',
  },
];

// Navbar principal
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Sección de logo */}
        <div>
          <h1 className="font-bold text-2xl">EducaNet Academy</h1>
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path} className="inline-block py-2 px-3 hover:text-secondary relative group">
                  <div
                    className="w-2 h-2 bg-secondary absolute mr-2 left-1/2 -translate-x-1/2 top-full group-hover:block hidden"
                    style={{ transform: 'translateY(-50%)' }}
                  ></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className="primary-btn">Iniciar Sesión</button>
          </ul>
        </div>

        {/* Menú hamburguesa para móviles */}
        <MenuHamburguesa isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
