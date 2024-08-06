import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const OpenMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        animate={
          isMenuOpen
            ? { borderRadius: '20%', scale: 1.2, background: 'var(--myBlack)' }
            : { borderRadius: '20%', scale: 1, background: 'var(--myBlack)' }
        }
        className='z-40 fixed top-[20px] right-[20px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer'
      >
        <div className='flex flex-col items-center justify-between w-[30px] h-[19px]'>
          <motion.div
            animate={
              isMenuOpen
                ? { rotate: 45, y: 7, height: '5px', background: '#ff4545' }
                : { background: 'var(--text)' }
            }
            className='rounded-full w-full h-[3px] '
          ></motion.div>
          <motion.div
            animate={isMenuOpen ? { display: 'none' } : ''}
            className='rounded-full w-full h-[3px] bg-text'
          ></motion.div>
          <motion.div
            animate={
              isMenuOpen
                ? { rotate: 135, y: -7, height: '5px', background: '#ff4545' }
                : { background: 'var(--text)' }
            }
            className='rounded-full w-full h-[3px]'
          ></motion.div>
        </div>
      </motion.div>
      <div
        className={`z-30 bg-bg w-[300px] gap-10 top-0 bottom-0 flex items-center flex-col justify-center fixed shadow-2xl duration-300 ${
          isMenuOpen ? 'right-[0px]' : 'right-[-100%]'
        }`}
      >
        <ThemeToggle />
        <motion.a
          whileHover={{ scale: 1.1 }}
          className='text-text text-5xl  hover:shadow-[0px_0px_35px_-2px_#646cff]  duration-400 transition-all px-5 py-3 rounded-lg'
          href='#about'
          onClick={() => setIsMenuOpen(false)}
        >
          About me
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className='text-text text-5xl  hover:shadow-[0px_0px_35px_-2px_#646cff]  duration-400 transition-all px-5 py-3 rounded-lg'
          href='#projects'
          onClick={() => setIsMenuOpen(false)}
        >
          My works
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className='text-text text-5xl  hover:shadow-[0px_0px_35px_-2px_#646cff]  duration-400 transition-all px-5 py-3 rounded-lg'
          href='#contact'
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </motion.a>
      </div>
    </>
  );
};

export default OpenMenu;
