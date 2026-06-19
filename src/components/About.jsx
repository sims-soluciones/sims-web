function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl font-bold text-blue-900 mb-8">
              Nosotros
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              En SIMS (Soluciones Industriales MS) nos especializamos
              en construcción, mantenimiento industrial y aplicación
              de recubrimientos epóxicos de alto desempeño.
            </p>

            <p className="text-gray-700 text-lg mb-6">
              Nuestro compromiso es entregar proyectos con altos
              estándares de calidad, seguridad y durabilidad para
              satisfacer las necesidades de nuestros clientes.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h3 className="font-bold text-xl text-blue-900">
                  Misión
                </h3>

                <p className="text-gray-600 mt-2">
                  Ofrecer soluciones industriales confiables y de calidad.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-blue-900">
                  Visión
                </h3>

                <p className="text-gray-600 mt-2">
                  Ser líderes en construcción y pisos epóxicos.
                </p>
              </div>

            </div>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt="Construcción"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;