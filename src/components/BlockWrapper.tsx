import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const BlockWrapper = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <motion.div
      //  initial="offscreen"
      //   whileInView="onscreen"
      //   viewport={{ once: false }}
      //   variants={blockVariants}
      {...props}
      className="max-w-[1300px] animate-fade-up animate-duration-[6000ms] w-full flex justify-between flex-col items-center lg:flex-row px-[15px] mt-10"
    >
      {children}
    </motion.div>
  );
};

export default BlockWrapper;
