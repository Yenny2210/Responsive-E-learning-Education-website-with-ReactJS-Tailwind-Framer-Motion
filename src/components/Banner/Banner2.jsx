import React from 'react'
import DiplomaPng from "../../assets/diploma.png"
import { motion } from 'framer-motion'

const Banner2 = () => {
    return <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            {/* banner text */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <h1 className='text-4xl font-bold !leading-snug'>Visite nuestra comunidad para comenzar su viaje</h1>
                    <p className='text-dark2'>Forma parte de una comunidad de aprendizaje sin fronteras. Accede a contenidos de calidad, certificados y diseñados para ayudarte a alcanzar tus metas profesionales.</p>
                    <a href="" className='primary-btn !mt-8'>Únete ahora</a>
                </div>
            </motion.div>
            {/* banner image */}
            <div className='flex justify-center items-center'>
                <motion.img initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} src={DiplomaPng} alt="" className='w-[350px] md:max-w-[450px] object-cover drop-shadow' />
            </div>

        </div>
    </section>
}

export default Banner2;