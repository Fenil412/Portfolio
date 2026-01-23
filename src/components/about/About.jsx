import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { services } from '../../constants'
import { me } from '../../assets'
import { fadeIn, textVariant, staggerContainer } from '../../utils/motion'
import { SectionWrapper } from '../../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.05}
      transitionSpeed={450}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="#ffffff"
      glarePosition="bottom"
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card group relative"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-pink-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10 rounded-[20px]" />

        <div className="bg-tertiary/80 backdrop-blur-md rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-white/5 group-hover:bg-tertiary/60 transition-[background] duration-300">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain drop-shadow-lg"
          />
          <h3 className="text-white text-[20px] font-bold text-center group-hover:text-[#915eff] transition-colors duration-300">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className='flex flex-col xl:flex-row gap-10 mt-12 items-center'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
          className='w-full xl:w-[40%] flex justify-center items-center relative'
        >
          {/* Profile Picture Container with Glow */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#915eff] to-[#00cea8] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src={me}
              alt='My Profile'
              className='relative profile-picture border-2 border-white/20 shadow-2xl z-10'
            />
          </div>
        </motion.div>

        <div className='w-full xl:w-[60%] flex flex-col justify-center'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} relative inline-block`}>
              Overview<span className="text-[#915eff]">.</span>
              <span className="absolute bottom-2 right-0 w-full h-1 bg-gradient-to-r from-[#915eff] to-transparent opacity-50" />
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a final-year Computer Science student at Nirma University (CGPA: 8.63) with a strong foundation in Data Structures & Algorithms. I have experience as a Web Developer Intern at Zidio Development, where I built scalable applications using the MERN stack. My expertise spans Full-Stack Development, Machine Learning, and Competitive Programming (Knight on LeetCode). I'm passionate about building fast, user-centric web apps and exploring AI-driven solutions.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer(0.2, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 flex flex-wrap gap-10 justify-center"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, 'about')