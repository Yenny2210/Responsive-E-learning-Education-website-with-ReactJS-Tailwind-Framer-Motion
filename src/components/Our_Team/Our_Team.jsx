import React from 'react';
import Mujer1 from '../../assets/mujer (1).jpg';
import Mujer2 from '../../assets/mujer (2).jpg';
import Mujer3 from '../../assets/mujer (3).jpg';
import Mujer4 from '../../assets/mujer (4).jpg';
import Mujer5 from '../../assets/mujer (5).jpg';
import Hombre1 from '../../assets/hombre (1).jpg';
import Hombre2 from '../../assets/hombre (2).jpg';
import Hombre3 from '../../assets/hombre (3).jpg';
import Hombre4 from '../../assets/hombre (4).jpg';

const teamMembers = [
    {
        name: 'Laura Sanchez',
        role: 'Especialista en Marketing Digital',
        image: Mujer1,
        description: 'Laura tiene más de 8 años de experiencia en estrategias de marketing digital, incluyendo SEO, SEM y gestión de redes sociales.',
    },
    {
        name: 'Andres Silva',
        role: 'Analista de Datos para Marketing',
        image: Hombre1,
        description: 'Andrés se enfoca en la optimización de campañas a través del análisis de datos y métricas, ayudando a mejorar el rendimiento de las estrategias de marketing digital.',
    },
    {
        name: 'Camila Torres',
        role: 'Diseñadora Gráfica',
        image: Mujer2,
        description: 'Camila cuenta con más de 10 años en diseño de branding, ilustración y creación de piezas gráficas tanto para medios digitales como impresos.'
    },
    {
        name: 'Ricardo Montalvo',
        role: 'Diseñador Multimedial',
        image: Hombre2,
        description: 'Ricardo es un experto en el uso de herramientas como Adobe After Effects y Premiere, creando contenido multimedia para campañas publicitarias.',
    },
    {
        name: 'Patricia Rivas',
        image: Mujer3,
        role: 'Consultora de Negocios',
        description: 'Patricia es especialista en la creación de planes de negocio y estrategias de crecimiento para startups y pequeñas empresas.'
    },
    {
        name: 'Tomás Villanueva',
        image: Hombre3,
        role: 'Mentor de Emprendimiento',
        description: 'Tomás ha apoyado a más de 100 emprendedores a través de su experiencia en financiamiento, gestión y desarrollo de ideas innovadoras.'
    },
    {
        name: 'Valentina Castro',
        image: Mujer4,
        role: 'Experta en Ciberseguridad',
        description: 'Valentina ha trabajado con empresas internacionales protegiendo sus sistemas de posibles ciberataques y formando a profesionales en la seguridad de la información.'
    },
    {
        name: 'Diego Hernández',
        image: Hombre4,
        role: 'Ingeniero de Seguridad de Redes',
        description: 'Diego es responsable de la protección y el mantenimiento seguro de infraestructuras de redes empresariales, con un enfoque en protocolos y configuraciones seguras.'
    },
    {
        name: 'Ana Martínez',
        image: Mujer5,
        role: 'Desarrolladora Full - Stack',
        description: 'Ana tiene una amplia experiencia en la creación de aplicaciones web escalables utilizando tecnologías como React, Node.js y MongoDB.'
    }
];

const Our_Team = () => {
    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-8">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
};


const TeamCard = ({ member }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-auto hover:scale-105 transition transform duration-300 ease-in-out">
            <img className="w-full h-48 object-cover" src={member.image} alt={`${member.name}`} />
            <div className="p-6">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-gray-700 mt-4">{member.description}</p>
            </div>
        </div>
    );
};

export default Our_Team;
