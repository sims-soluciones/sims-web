import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="SIMS"
            className="h-16"
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              SIMS
            </h1>

            <p className="text-sm text-gray-600">
              Soluciones Industriales MS
            </p>
          </div>

        </div>

        {/* Menú escritorio */}
        <nav>
          <ul className="hidden md:flex gap-8 font-semibold">

            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>

            <li>
              <NavLink to="/nosotros">Nosotros</NavLink>
            </li>

            
            <li>
              <NavLink to="/catalogo">Catálogo</NavLink>
            </li>

            <li>
              <NavLink to="/proyectos">Proyectos</NavLink>
            </li>


            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>

          </ul>
        </nav>

        {/* Botón móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">

          <NavLink
            to="/"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/nosotros"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/servicios"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
           
            Catálogo
          </NavLink>

          <NavLink
            to="/proyectos"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/contacto"
            className="block p-4"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </NavLink>

        </div>
      )}

    </header>
  );
}

export default Navbar;