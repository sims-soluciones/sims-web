function Hero() {
  return (
    <section
      className="relative h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-7xl font-black text-white">
            SIMS
          </h1>

          <h2 className="text-3xl text-gray-200 mt-4">
            Soluciones Industriales MS
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl text-lg">
            Especialistas en construcción,
            mantenimiento industrial y
            recubrimientos epóxicos de alta calidad.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;