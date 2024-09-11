import React from 'react';

const About_Us = () => {
    return (
        <div className="bg-gray-100 py-10 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
            <div className="max-w-4xl mx-auto">
                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Nuestra Historia</h3>
                    <p>Fundada en [Año], nuestra empresa ha crecido desde sus humildes comienzos en [Ciudad/País]. Comenzamos con la misión de [Breve Descripción de la Misión] y, desde entonces, hemos alcanzado [Hitos Importantes].</p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Nuestra Misión y Visión</h3>
                    <p><strong>Misión:</strong> [Descripción de la Misión].</p>
                    <p><strong>Visión:</strong> [Descripción de la Visión].</p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Nuestros Valores</h3>
                    <ul>
                        <li><strong>Valor 1:</strong> [Descripción del Valor].</li>
                        <li><strong>Valor 2:</strong> [Descripción del Valor].</li>
                        <li><strong>Valor 3:</strong> [Descripción del Valor].</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Nuestros Servicios</h3>
                    <p>Ofrecemos [Descripción de Servicios o Productos]. Nuestro objetivo es [Breve Descripción de Objetivos o Beneficios].</p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Cultura Corporativa</h3>
                    <p>Creemos en [Descripción de la Cultura Corporativa]. Fomentamos un ambiente de trabajo [Descripción del Ambiente].</p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Logros y Reconocimientos</h3>
                    <p>Hemos sido reconocidos por [Descripción de Logros y Reconocimientos].</p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Responsabilidad Social</h3>
                    <p>Estamos comprometidos con [Descripción de Iniciativas de Responsabilidad Social].</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
                    <p>Para más información, por favor contáctanos en [Información de Contacto].</p>
                </section>
            </div>
        </div>
    );
};

export default About_Us;
