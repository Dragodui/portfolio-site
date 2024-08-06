import React, { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

const ThemeToggle: FC = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      document.documentElement.classList.add('dark');
      setIsThemeDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsThemeDark(false);
    }
  }, []);

  const toggleTheme = (): void => {
    setIsThemeDark((prevState) => {
      const newTheme = !prevState;

      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', '');
      }

      return newTheme;
    });
  };
  console.log(isThemeDark)
  return (
    <div
      data-isOn={isThemeDark}
      className={`py-2 px-1 w-[62px] h-[35px] rounded-full bg-myBlack flex items-center cursor-pointer ${
        isThemeDark ? 'justify-end' : 'justify-start'
      }`}
      onClick={toggleTheme}
    >
      <motion.div
        transition={spring}
        className='w-[30px] h-[30px] bg-myViolet rounded-full flex items-center justify-center'
        layout
      >
       {
        isThemeDark
        ?  <FaRegMoon />
        : <FaRegSun />
       }
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
