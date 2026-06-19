function Nosotros() {
  return (
    <div className="bg-gray-50">

      {/* Encabezado */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-6">
            Nosotros
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Somos una empresa comprometida con la excelencia en
            construcción industrial, mantenimiento y recubrimientos
            especializados.
          </p>

        </div>
      </section>

      {/* Historia */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Nuestra Historia
            </h2>

            <p className="text-gray-700 leading-8">
              SIMS (Soluciones Industriales MS) nace con el objetivo de
              ofrecer servicios profesionales para la industria y la
              construcción, garantizando calidad, seguridad y compromiso
              en cada proyecto.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              Nuestro equipo trabaja bajo estándares exigentes para
              brindar soluciones duraderas y eficientes a nuestros clientes.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Construcción"
            className="rounded-2xl shadow-xl"
          />

        </div>

      </section>

      {/* Misión, Visión y Valores */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Misión
              </h3>

              <p className="text-gray-600">
                Proporcionar soluciones industriales y de construcción
                que superen las expectativas de nuestros clientes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Visión
              </h3>

              <p className="text-gray-600">
                Consolidarnos como una empresa líder en servicios
                industriales y recubrimientos especializados.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Valores
              </h3>

              <p className="text-gray-600">
                Calidad, honestidad, compromiso, innovación y trabajo
                en equipo.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Estadísticas */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold">100+</h2>
              <p>Proyectos</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">50+</h2>
              <p>Clientes</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">10+</h2>
              <p>Años de experiencia</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">100%</h2>
              <p>Compromiso</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Nosotros;