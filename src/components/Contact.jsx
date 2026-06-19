function Contact() {
  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Solicita una Cotización
        </h2>

        <form className="bg-white p-10 rounded-xl shadow-lg">

          <input
            type="text"
            placeholder="Nombre"
            className="w-full border p-4 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border p-4 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Teléfono"
            className="w-full border p-4 rounded mb-4"
          />

          <textarea
            rows="5"
            placeholder="Describe tu proyecto"
            className="w-full border p-4 rounded mb-4"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold"
          >
            Enviar Solicitud
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;