import { useEffect } from 'react'; // Don't forget to import useEffect
import Typed from 'typed.js';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  useEffect(() => {
    var typingEffect = new Typed(".multiText", {
      strings: ['Cloud Engineer', 'DevOps Engineer', 'S/W Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    });

    // Clean up the Typed.js instance on component unmount
    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <div className='bg-primary/60 h-full'>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className='text-center flex flex-col justify-center xl:pt40 xl:text-left h-full container mx-auto'>
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className='h1'>
            Hi, I'm <span className="text-accent">Shin</span> <br /> 
            <span className="h1">
              I'm a {' '}
            </span> 
            <span className="multiText" style={{fontWeight: 'bold', color: 'skyblue'}}>
            </span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <div className="bg-none xl:bg-explotion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          <ParticlesContainer />
          <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration: 1, ease: 'easeInOut'}} className="w-full h-full max-w-[737px] max-h-[800px] absolute -bottom-32 lg:bottom-[15%] lg:right-[2%]">
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;