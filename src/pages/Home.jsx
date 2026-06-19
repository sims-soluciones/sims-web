import hero from "../assets/fondo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-7xl md:text-8xl font-black">
            SIMS
          </h1>

          <h2 className="text-3xl md:text-4xl mt-4 font-semibold">
            Soluciones Industriales MS
          </h2>

          <p className="mt-6 text-lg md:text-xl max-w-2xl">
            Especialistas en construcción industrial,
            mantenimiento, impermeabilización
            y recubrimientos epóxicos.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link
              to="/catalogo"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-center transition duration-300 shadow-lg"
            >
              Ver Catálogo
            </Link>

            <Link
              to="/proyectos"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-xl font-semibold text-center transition duration-300 shadow-lg"
            >
              Ver Proyectos
            </Link>

          </div>

        </div>
        <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-blue-900 mb-6">
      Especialistas en Soluciones Industriales
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed">
      En SIMS ofrecemos servicios de pisos epóxicos,
      construcción industrial, impermeabilización y
      mantenimiento industrial para empresas,
      almacenes, naves industriales y espacios comerciales.
    </p>

  </div>
</section>
      </div>

    </section>
    
  );
}

export default Home;