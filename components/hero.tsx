import React from 'react'
import Button from './button'

const Hero = () => {
    return (
        <section className='bg-hero-section-img bg-cover bg-center w-full'>
            <div className='w-full min-h-[460px] md:h-[75vh] mx-auto bg-foreground/70 flex items-center justify-center py-12 md:py-0'>
                <div className='w-full container px-4 sm:px-6 md:px-8 mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8'>
                    
                    <span className='text-white text-[11px] sm:text-[18px]  tracking-wider uppercase bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm'>
                        What We Do
                    </span>

                    <h1 className='font-nunito text-[26px] sm:text-[34px] md:text-[46px] lg:text-[56px] text-white font-bold text-center leading-tight max-w-4xl'>
                        Training and Development
                    </h1>
                    
                    <p className='text-white/90 text-[13px] sm:text-[15px] md:text-[18px] text-center max-w-2xl leading-relaxed px-2'>
                        Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
                    </p>
                    
                    <Button 
                        text='Book a Consultation' 
                        className='text-white bg-primary h-[44px] md:h-[48px] px-6 sm:px-8 text-sm md:text-base font-semibold rounded-md flex items-center justify-center hover:bg-primary/85 shadow-md mt-2' 
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
