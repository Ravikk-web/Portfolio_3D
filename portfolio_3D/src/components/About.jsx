import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'

import SectionWrapper from '../hoc'

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt>
      <motion.div>
        <div>
          <img />
          <h3></h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p 
            variants={fadeIn("","",0.1,1)}
        >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          spmega

        </div>
    </>
  )
}

export default SectionWrapper(About, 'about')