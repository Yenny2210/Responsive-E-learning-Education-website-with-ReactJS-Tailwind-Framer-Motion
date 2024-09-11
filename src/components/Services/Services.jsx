import { div, title } from 'framer-motion/client'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { CiCreditCard1 } from "react-icons/ci";
import { MdCastForEducation } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
import { motion } from 'framer-motion'


const ServicesData = [
    {
        id: 1,
        title: "Educación a Distancia",
        link: "#",
        icon: < MdCastForEducation />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Gestión de Plataforma Educativa",
        link: "#",
        icon: < MdManageHistory />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Membresías Educativas",
        link: "#",
        icon: < IoDiamondOutline />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Cursos y Programas Especializados",
        link: "#",
        icon: < SiCoursera />,
        delay: 0.5
    },
    {
        id: 5,
        title: "Plataforma de Pagos Segura",
        link: "#",
        icon: < CiCreditCard1 />,
        delay: 0.6
    },
    {
        id: 6,
        title: "Soporte Técnico y Académico 24/7",
        link: "#",
        icon: < BiSupport />,
        delay: 0.7
    },
]

const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}
const Services = () => {
    return (
        <section className='bg-white'>
            <div className="container pb-14 pt-16">
                <h1 className='text-4xl font-bold text-left pb-10'>Servicios que brindamos</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8'>
                    {ServicesData.map((service) => (
                        <motion.div variants={SlideLeft(service.delay)} initial="initial" whileInView={"animate"} viewport={{ once: true }} className='bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                            <div className='text-4xl mb-4'>{service.icon}</div>
                            <h1 className='text-lg font-semibold text-center px-3 '>{service.title}</h1>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Services