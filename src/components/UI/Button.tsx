import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  addClasses?: string;
}

const Button: FC<ButtonProps> = ({ children, addClasses, ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className={`hover:shadow-[0px_0px_35px_-2px_#646cff] duration-400 transition-all ${addClasses}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
