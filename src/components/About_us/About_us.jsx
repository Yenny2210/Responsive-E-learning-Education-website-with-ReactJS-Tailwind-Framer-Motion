import React from 'react';
import { FaRegLightbulb, FaChalkboardTeacher, FaMedal, FaHandHoldingHeart } from 'react-icons/fa'; // Ejemplos de íconos

const About_Us = () => {
    return (
        <div className="bg-gray-100 py-10 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
            <div className="max-w-4xl mx-auto">
                {/* Nuestra Historia */}
                <section className="mb-8 bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <FaRegLightbulb className="text-yellow-500 mr-2" /> Nuestra Historia
                    </h3>
                    <p>Fundada en 2021, nuestra institución educativa ha crecido desde sus humildes comienzos en Medellin/Colombia. Nos enfocamos en ofrecer educación a distancia de calidad, expandiéndonos progresivamente en el mundo digital para alcanzar una mayor cobertura nacional. Hoy, nuestra plataforma e-learning permite que miles de estudiantes gestionen su propio aprendizaje y accedan a una amplia oferta académica que incluye cursos, carreras y diplomados especializados.</p>
                </section>

                {/* Misión y Visión */}
                <section className="mb-8 bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <FaChalkboardTeacher className="text-blue-500 mr-2" /> Nuestra Misión y Visión
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <p><strong>Misión:</strong> Brindar educación accesible y de calidad a estudiantes de todo el país a través de una plataforma digital innovadora, permitiendo la autogestión de su formación académica.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <p><strong>Visión:</strong> Convertirnos en la principal institución educativa a nivel nacional, liderando el sector de educación a distancia y ofreciendo una propuesta educativa que se adapte a las necesidades del mundo digital.</p>
                        </div>
                    </div>
                </section>

                {/* Nuestros Valores */}
                <section className="mb-8 bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <FaMedal className="text-green-500 mr-2" /> Nuestros Valores
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-semibold mb-2">Inclusión</h4>
                            <p>Brindamos acceso a educación de calidad para estudiantes en todo el territorio nacional, sin importar su ubicación geográfica.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-semibold mb-2">Innovación</h4>
                            <p>Utilizamos tecnología de vanguardia para facilitar una experiencia de aprendizaje flexible y autogestionada.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                            <h4 className="font-semibold mb-2">Compromiso</h4>
                            <p>Nos comprometemos con la excelencia académica y el desarrollo continuo de nuestros estudiantes y profesionales.</p>
                        </div>
                    </div>
                </section>

                {/* Nuestros Servicios */}
                <section className="mb-8 bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <FaHandHoldingHeart className="text-red-500 mr-2" /> Nuestros Servicios
                    </h3>
                    <p>Ofrecemos una amplia gama de cursos, carreras y diplomados especializados a través de nuestra plataforma e-learning. Nuestro objetivo es proporcionar una educación accesible, de calidad y completamente autogestionada, permitiendo a los usuarios avanzar en su formación a su propio ritmo y según sus intereses.</p>
                </section>

                {/* Cultura Corporativa */}
                <section className="mb-8 bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Cultura Corporativa</h3>
                    <p>Creemos en la transformación digital de la educación como una herramienta para generar oportunidades en todo el país. Fomentamos un ambiente de trabajo colaborativo, donde la innovación y la mejora continua son los pilares de nuestro crecimiento.</p>
                </section>
            </div>
        </div>
    );
};

export default About_Us;