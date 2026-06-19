function Services() {
  const servicios = [
    {
      titulo: "Construcción Industrial",
      descripcion:
        "Desarrollo de proyectos industriales y comerciales."
    },
    {
      titulo: "Recubrimientos Epóxicos",
      descripcion:
        "Pisos resistentes para alto tráfico."
    },
    {
      titulo: "Impermeabilización",
      descripcion:
        "Protección para techos y estructuras."
    },
    {
      titulo: "Mantenimiento Industrial",
      descripcion:
        "Servicios integrales de mantenimiento."
    }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold mb-4">
                {servicio.titulo}
              </h3>

              <p className="text-gray-600">
                {servicio.descripcion}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;