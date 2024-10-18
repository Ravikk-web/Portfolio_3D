import React from 'react'
import { styles } from '../styles'
import DynamicText from './DynamicText'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-prime' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
      </div>

      <div className='absolute top-[120px] sm:w-3/5 w-full flex flex-col justify-center items-start gap-2.5 px-14 py-9 sm:px-28 sm:py-14 h-[80v]'>
        <h2 className='text-prime text-[1.2rem] font-medium'>Web Designer</h2>
        <h1 className='sm:text-[4rem] sm:leading-[5rem] text-[2.5rem] leading-[3.2rem] font-medium'>
          Hello My Name is <span className='text-prime text-bold font-bold '><b><br />Ravi K.K.</b></span>
          <br />
          <div className=''>
            I'm a&nbsp;
            <DynamicText />
          </div>
        </h1>
        <p className='text-lg font-semibold'> I love to challenge my limitations and creativity in order
          to improve my skills further and this is just the
          starting.</p>
      </div>
      

    </section>
  )
}

export default Hero