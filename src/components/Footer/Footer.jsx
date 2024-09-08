import React from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className='py-28 bg-[#f7f7f7]'>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                    {/* first section */}
                    <div className='space-y-4 max-w-[300px]'>
                        <h1 className='text-2xl font-bold'>EducaNet Academy</h1>
                        <p>
                            Somos una institución educativa comprometida con brindar acceso a la educación de calidad a través de nuestra plataforma e-learning. Con una amplia oferta de cursos, carreras y diplomados, estamos aquí para acompañarte en tu crecimiento profesional, sin importar dónde te encuentres.
                        </p>
                    </div>
                    {/* second section */}
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='space-y-4'>
                            <h1 className='text-2xl font-bold'>Cursos</h1>
                            <div className='text-dark2'>
                                <ul className='space-y-2 text-lg'>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Educación a Distancia</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Carreras Universitarias</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Diplomados Especializados</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Certificaciones Profesionales</li>
                                </ul>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-2xl font-bold'>Links</h1>
                            <div className='text-dark2'>
                                <ul className='space-y-2 text-lg'>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Inicio</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Servicios</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Sobre Nosotros</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Nuestro equipo</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Contactanos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* third section */}
                    <div className='space-y-4 max-w-[300px]'>
                        <h1 className='text-2xl font-bold'>Ponte en contacto</h1>
                        <div className='flex items-center'>
                            <input type="text" placeholder='Ingresa tu correo electrónico' className='p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2' />
                            <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl'>Ir</button>
                        </div>
                        {/* social icons */}
                        <div className='flex space-x-6 py-3'>
                            <a href="https://www.whatsapp.com/?lang=es_LA">
                                <FaWhatsapp className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                            </a>
                            <a href="https://www.instagram.com">
                                <FaInstagram className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                            </a>
                            <a href="https://dev.to/gigo_dev/start-your-coding-journey-1egp">
                                <TbWorldWww className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                            </a>
                            <a href="https://www.youtube.com">
                                <FaYoutube className='cursor-pointer hover:text-primary hover:scale-105 duration-200' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer