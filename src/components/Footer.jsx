import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Empresa */}
          <div>
            <h2 className="text-3xl font-bold mb-4">SIMS</h2>
            <p className="text-gray-400">
              Soluciones Industriales MS.
              Especialistas en construcción,
              mantenimiento industrial y
              recubrimientos epóxicos.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold text-xl mb-4">Navegación</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              
              <li><Link to="/catalogo" className="hover:text-white transition-colors">Catálogo</Link></li>
              <li><Link to="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+524423696198" className="hover:text-white transition-colors">
                  📞 (+52) 4423696198
                </a>
              </li>
              <li>
                <a href="mailto:sims250726@gmail.com" className="hover:text-white transition-colors">
                  ✉️ sims250726@gmail.com
                </a>
              </li>
              <li>📍 México</li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-bold text-xl mb-4">Redes Sociales</h3>
            <ul className="space-y-2 text-gray-400">
              {/* Cambia # por la URL real de tus perfiles */}
              <li><a href="https://www.facebook.com/share/19AjirZBqw/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/sims250726?igsh=MTE3cTh1YXN1cWRtMA==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-center text-gray-500">
          © 2026 SIMS - Soluciones Industriales MS
        </div>
      </div>
    </footer>
  );
}

export default Footer;