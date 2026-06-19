function Projects() {
  const proyectos = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Proyectos Recientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {proyectos.map((imagen, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={imagen}
                alt="Proyecto"
                className="h-80 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;