function Mantenimiento() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="bg-slate-900 text-white py-24 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Mantenimiento Industrial
        </h1>

        <p className="text-xl text-gray-300">
          Conservación y mejora de instalaciones industriales.
        </p>

      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Nuestros Servicios
        </h2>

        <p className="text-lg text-gray-700">
          Realizamos mantenimiento preventivo y correctivo para
          instalaciones industriales y comerciales.
        </p>

      </section>

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Especialidades
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-100 p-8 rounded-2xl">
              Mantenimiento Preventivo
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl">
              Reparaciones
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl">
              Adecuaciones Industriales
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Mantenimiento;