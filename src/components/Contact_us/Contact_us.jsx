import React from 'react'

const Contact_us = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6 mt-5 mb-5"> {/* Añadido mt-16 */}
        <h2 className="text-2xl font-bold text-center text-dark">Contáctanos</h2>

        <div>
          <label htmlFor="nombre" className="block text-lg font-medium text-gray-700">Nombre completo:</label>
          <input type="text" id="nombre" placeholder="Nombre completo"
            className="p-3 rounded-xl bg-white w-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300" />
        </div>

        <div>
          <label htmlFor="correo" className="block text-lg font-medium text-gray-700">Correo electrónico:</label>
          <input type="email" id="correo" placeholder="Correo electrónico"
            className="p-3 rounded-xl bg-white w-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300" />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-lg font-medium text-gray-700">Teléfono (opcional):</label>
          <input type="number" id="telefono" placeholder="Teléfono de contacto"
            className="p-3 rounded-xl bg-white w-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300" />
        </div>

        <div>
          <label htmlFor="asunto" className="block text-lg font-medium text-gray-700">Asunto:</label>
          <input type="text" id="asunto" placeholder="Asunto"
            className="p-3 rounded-xl bg-white w-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300" />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-lg font-medium text-gray-700">Mensaje:</label>
          <textarea id="mensaje" rows="5" placeholder="Escribe tu mensaje"
            className="p-3 rounded-xl bg-white w-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"></textarea>
        </div>

        <button type="submit" className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-secondary transition duration-300">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Contact_us;
