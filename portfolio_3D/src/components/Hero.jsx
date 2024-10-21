import React, { Suspense, useEffect } from 'react'
import { styles } from '../styles'
import DynamicText from './DynamicText'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import Laptop from '../models/Laptop'
import Loader from '../utils/Loader'


const Hero = () => {

  useEffect(() => {
    const handleScroll = () => {
      const myElement = document.getElementById('heroModel');
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) { // Adjust the scroll value as needed
        myElement.style.opacity = '0';
      } else {
        myElement.style.opacity = '1';
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
    <div className='max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className={`${styles.paddingX} absolute top-[120px]`}>
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
    </div>
      
    <span className='lg:w-1/3 w-full lg:h-full h-[500px] fixed z-1 lg:mr-20 right-0 lg:top-0 top-2/4 transition-opacity duration-700' id='heroModel'>
        {/* Canvas */}
      <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}        
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Laptop 
              position={[-0.1, -1.8, -0.35]}
              rotation={[12.629, -0.5, 0]}
              scale={[1.4, 1.4, 1.4]}
              fov={[24]}
            />
          </Suspense>
        </Canvas>
    </span>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    
    </section>
  )
}

export default Hero