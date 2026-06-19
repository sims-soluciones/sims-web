import { Link } from "react-router-dom";

function Catalogo() {
  
    const servicios = [
  {
    nombre: "Piso Epóxico Industrial",
    categoria: "Recubrimientos",
    descripcion:
      "Recubrimiento de alta resistencia para áreas industriales.",
    imagen:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    ruta: "/catalogo/pisos-epoxicos",
  },

  {
    nombre: "Construcción Industrial",
    categoria: "Construcción",
    descripcion:
      "Desarrollo de proyectos industriales y comerciales.",
    imagen:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    ruta: "/construccion-industrial",
  },

  {
    nombre: "Impermeabilización",
    categoria: "Mantenimiento",
    descripcion:
      "Protección de techos y estructuras.",
    imagen:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    ruta: "/impermeabilizacion",
  },

  {
    nombre: "Pintura Industrial",
    categoria: "Recubrimientos",
    descripcion:
      "Aplicación de pintura especializada.",
    imagen:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    ruta: "/mantenimiento-industrial",
  },
];
  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-6">
            Catálogo de Servicios
          </h1>

          <p className="text-xl text-gray-300">
            Conoce nuestras soluciones industriales.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={servicio.imagen}
                alt={servicio.nombre}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <span className="text-blue-800 font-semibold">
                  {servicio.categoria}
                </span>

                <h2 className="text-2xl font-bold mt-2">
                  {servicio.nombre}
                </h2>

                <p className="text-gray-600 mt-4">
                  {servicio.descripcion}
                </p>

                <Link
  to={servicio.ruta}
  className="mt-6 inline-block bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
>
  Ver Detalles
</Link>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Catalogo;