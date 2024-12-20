import BlockWrapper from './BlockWrapper';
import telegram from '../assets/contact/Telegram.svg';
import gmail from '../assets/contact/Gmail.svg';
import linkedIn from '../assets/contact/LinkedIn.svg';
import { FaGithub } from 'react-icons/fa';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { blockVariants } from '../types';

const Contact: FC = () => {
  return (
    <BlockWrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        variants={blockVariants}
        className="flex flex-col gap-3 mb-[80px]"
        id="contact"
      >
        <h2 className="text-[60px] block font-medium">Contact Me</h2>
        <div className="flex gap-5 flex-wrap font-jb">
          <motion.a
            whileHover={{ scale: 0.9 }}
            href="https://t.me/dragodui"
            className="flex items-center w-full sm:w-auto gap-4 rounded-md  text-text p-3   duration-400"
          >
            <img className="w-[70px]" src={telegram} alt="" />
            <p className="text-3xl">Telegram</p>
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href="mailto:alghazaliaks123@gmail.com"
            className="flex items-center w-full sm:w-auto gap-4 rounded-md text-text p-3   duration-400"
          >
            <img className="w-[70px]" src={gmail} alt="" />
            <p className="text-3xl">Gmail</p>
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/aksandr-al-ghazali"
            className="flex items-center gap-4 w-full sm:w-auto rounded-md text-text p-3   duration-400"
          >
            <img className="w-[70px]" src={linkedIn} alt="" />
            <p className="text-3xl">LinkedIn</p>
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href="https://github.com/Dragodui"
            className="flex items-center gap-4 w-full sm:w-auto rounded-md text-text p-3   duration-400"
          >
            <FaGithub className="w-[70px] h-[70px]" />
            <p className="text-3xl">GitHub</p>
          </motion.a>
        </div>
      </motion.div>
    </BlockWrapper>
  );
};

export default Contact;
