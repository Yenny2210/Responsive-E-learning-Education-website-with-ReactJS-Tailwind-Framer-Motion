import React from 'react'

const Hero = () => {
    return (
        <section className='bg-light dark:bg-black overflow-hidden relative'>
            <Navbar />
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                {/* Brand Info */}
                <div>
                    <h1 className='text-3xl lg:text-5xl font-bold !leading-snug'>
                        Let's Learn to build a {" "}
                        <span>Website</span> for your business
                    </h1>
                    <div className='flex justify-center md:justify-start'>
                        <button className='primary-btn flex items-center gap-2 group'>
                            <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                            Get Started
                        </button>
                    </div>
                </div>
                {/* Hero Image */}
            </div>
        </section>
    )
}

export default Hero