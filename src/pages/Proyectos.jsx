import { useState } from "react";

import epoxico1 from "../assets/proyectos/epoxicos/epoxico1.png";
import epoxico2 from "../assets/proyectos/epoxicos/epoxico2.png";
import epoxico3 from "../assets/proyectos/epoxicos/epoxico3.png";
import epoxico4 from "../assets/proyectos/epoxicos/epoxico4.png";
import epoxico5 from "../assets/proyectos/epoxicos/epoxico5.png";
import epoxico6 from "../assets/proyectos/epoxicos/epoxico6.png";

function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [imagenActiva, setImagenActiva] = useState(null);
  const [indiceActivo, setIndiceActivo] = useState(0);
  const siguienteImagen = () => {
  const siguiente =
    indiceActivo === galeriaEpoxicos.length - 1
      ? 0
      : indiceActivo + 1;

  setIndiceActivo(siguiente);
  setImagenActiva(galeriaEpoxicos[siguiente]);
};

const anteriorImagen = () => {
  const anterior =
    indiceActivo === 0
      ? galeriaEpoxicos.length - 1
      : indiceActivo - 1;

  setIndiceActivo(anterior);
  setImagenActiva(galeriaEpoxicos[anterior]);
};
  const galeriaEpoxicos = [
    epoxico1,
    epoxico2,
    epoxico3,
    epoxico4,
    epoxico5,
    epoxico6,
  ];

  const proyectos = [
    {
      titulo: "Pisos Epóxicos",
      descripcion:
        "Recubrimientos epóxicos industriales y comerciales de alta resistencia.",
      imagen: epoxico1,
      categoria: "epoxicos",
    },
    {
      titulo: "Construcción Industrial",
      descripcion:
        "Desarrollo y adecuación de espacios industriales.",
      imagen:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      categoria: "construccion",
    },
    {
      titulo: "Mantenimiento Industrial",
      descripcion:
        "Servicios de rehabilitación y mantenimiento especializado.",
      imagen:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      categoria: "mantenimiento",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Banner */}
      <section className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Nuestros Proyectos
        </h1>

        <p className="text-xl text-gray-300">
          Calidad, experiencia y compromiso en cada obra.
        </p>
      </section>

      {/* Tarjetas de categorías */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              onClick={() =>
                setCategoriaActiva(
                  categoriaActiva === proyecto.categoria
                    ? null
                    : proyecto.categoria
                )
              }
              className="group bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="overflow-hidden">

                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-3">
                  {proyecto.titulo}
                </h2>

                <p className="text-gray-600">
                  {proyecto.descripcion}
                </p>

                <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg">
                  Ver Proyectos
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Galería de Pisos Epóxicos */}
        {categoriaActiva === "epoxicos" && (

          <div className="mt-20">

            <div className="text-center mb-12">

              <h2 className="text-5xl font-bold text-blue-900 mb-4">
                Proyectos de Pisos Epóxicos
              </h2>

              <p className="text-gray-600 text-lg">
                Algunos trabajos realizados por SIMS.
              </p>

            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">

              {galeriaEpoxicos.map((imagen, index) => (
                <div
                  key={index}
                  className="mb-6 overflow-hidden rounded-2xl shadow-xl bg-white"
                >
                  <img
                    src={imagen}
                     alt={`Proyecto Epóxico ${index + 1}`}
                       onClick={() => {
                        setImagenActiva(imagen);
                        setIndiceActivo(index);
                  }}
                     className="w-full hover:scale-110 transition-all duration-500 cursor-pointer"
                />
                </div>
              ))}

            </div>

          </div>

        )}

      </section>
{imagenActiva && (
  <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

    <button
      onClick={() => setImagenActiva(null)}
      className="absolute top-6 right-8 text-white text-5xl z-50"
    >
      ×
    </button>

    <button
      onClick={anteriorImagen}
      className="absolute left-4 text-white text-6xl z-50 hover:scale-125 transition"
    >
      ‹
    </button>

    <img
      src={imagenActiva}
      alt="Vista ampliada"
      className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
    />

    <button
      onClick={siguienteImagen}
      className="absolute right-4 text-white text-6xl z-50 hover:scale-125 transition"
    >
      ›
    </button>

    <div className="absolute bottom-6 text-white text-lg bg-black/50 px-4 py-2 rounded-full">
      {indiceActivo + 1} / {galeriaEpoxicos.length}
    </div>

  </div>
)}
    </div>
  );
}


export default Proyectos;