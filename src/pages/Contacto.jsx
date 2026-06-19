import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    correo: "",
    servicio: "Pisos Epóxicos",
    descripcion: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_2m524yn",
        "template_bfp60is",
        {
          nombre: formulario.nombre,
          empresa: formulario.empresa,
          telefono: formulario.telefono,
          correo: formulario.correo,
          servicio: formulario.servicio,
          descripcion: formulario.descripcion,
        },
        "SrP0dImIAoiPr90oe"
      );

      const mensaje = `
*SOLICITUD DE COTIZACIÓN SIMS*

Nombre: ${formulario.nombre}
Empresa: ${formulario.empresa}
Teléfono: ${formulario.telefono}
Correo: ${formulario.correo}
Servicio: ${formulario.servicio}

Descripción:
${formulario.descripcion}
      `;

      window.open(
        `https://wa.me/524423696198?text=${encodeURIComponent(mensaje)}`,
        "_blank"
      );

      setEnviado(true);

      setFormulario({
        nombre: "",
        empresa: "",
        telefono: "",
        correo: "",
        servicio: "Pisos Epóxicos",
        descripcion: "",
      });

    } catch (error) {
  console.error("ERROR EMAILJS:", error);

  alert(
    `Error: ${error?.text || error?.message || JSON.stringify(error)}`
  );
}
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contacto y Cotizaciones
        </h1>

        <p className="text-xl text-gray-300">
          Solicita información o una cotización sin compromiso.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-2xl shadow-xl">

            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Solicitar Cotización
            </h2>

            {enviado && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                Cotización enviada correctamente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full border rounded-lg p-4"
                required
              />

              <input
                type="text"
                name="empresa"
                value={formulario.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="tel"
                name="telefono"
                value={formulario.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="w-full border rounded-lg p-4"
                required
              />

              <input
                type="email"
                name="correo"
                value={formulario.correo}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full border rounded-lg p-4"
                required
              />

              <select
                name="servicio"
                value={formulario.servicio}
                onChange={handleChange}
                className="w-full border rounded-lg p-4"
              >
                <option>Pisos Epóxicos</option>
                <option>Construcción Industrial</option>
                <option>Impermeabilización</option>
                <option>Mantenimiento Industrial</option>
              </select>

              <textarea
                name="descripcion"
                value={formulario.descripcion}
                onChange={handleChange}
                rows="5"
                placeholder="Describe tu proyecto..."
                className="w-full border rounded-lg p-4"
              />

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold"
              >
                Solicitar Cotización
              </button>

            </form>

          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">

            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Información de Contacto
            </h2>

            <div className="space-y-6 text-lg">

              <div>
                <strong>📞 Teléfono:</strong>
                <br />
                442 369 6198
              </div>

              <div>
                <strong>✉️ Correo:</strong>
                <br />
                sims250726@gmail.com
              </div>

              <div>
                <strong>📍 Ubicación:</strong>
                <br />
                México
              </div>

              <div>
                <strong>🕒 Horario:</strong>
                <br />
                Lunes a Viernes
                <br />
                08:00 a 20:00 hrs
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contacto;