import Masonry from "react-masonry-css";

import epoxico1 from "../assets/proyectos/epoxicos/epoxico1.png";
import epoxico2 from "../assets/proyectos/epoxicos/epoxico2.png";
import epoxico3 from "../assets/proyectos/epoxicos/epoxico3.png";
import epoxico4 from "../assets/proyectos/epoxicos/epoxico4.png";
import epoxico5 from "../assets/proyectos/epoxicos/epoxico5.png";
import epoxico6 from "../assets/proyectos/epoxicos/epoxico6.png";

function GaleriaEpoxicos() {
  const imagenes = [
    epoxico1,
    epoxico2,
    epoxico3,
    epoxico4,
    epoxico5,
    epoxico6,
  ];

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">
          Pisos Epóxicos
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Algunos de nuestros trabajos realizados.
        </p>

        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`Proyecto ${index + 1}`}
              className="rounded-2xl shadow-xl hover:scale-105 transition duration-500 w-full"
            />
          ))}
        </Masonry>

      </div>

    </div>
  );
}

export default GaleriaEpoxicos;