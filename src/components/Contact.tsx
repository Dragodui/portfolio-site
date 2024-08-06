import BlockWrapper from './BlockWrapper';
import telegram from '../assets/contact/Telegram.svg';
import gmail from '../assets/contact/Gmail.svg';
import linkedIn from '../assets/contact/LinkedIn.svg';
import { FaGithub } from 'react-icons/fa';
import { FC } from 'react';
import { motion } from 'framer-motion';

const Contact: FC = () => {
  return (
    <BlockWrapper>
      <div className='flex flex-col gap-3 mb-[80px]'>
        <h2 className='text-[60px] block'>Contact Me</h2>
        <div className='flex gap-3 flex-wrap'>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href='https://t.me/dragodui'
            className='flex items-center gap-2 rounded-md bg-projectBg shadow-2xl text-text p-3 hover:shadow-[0px_0px_35px_-2px_#646cff]  duration-400'
          >
            <img className='w-[70px]' src={telegram} alt='' />
            <p className='text-3xl'>@dragodui</p>
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href='mailto:alghazaliaks123@gmail.com'
            className='flex items-center gap-2 rounded-md bg-projectBg text-text shadow-2xl p-3 hover:shadow-[0px_0px_35px_-2px_#646cff]  duration-400'
          >
            <img className='w-[70px]' src={gmail} alt='' />
            <p className='text-3xl'>alghazaliaks123</p>
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href='
        www.linkedin.com/in/aksandr-al-ghazali'
            className='flex items-center gap-2 rounded-md bg-projectBg text-text shadow-2xl p-3 hover:shadow-[0px_0px_35px_-2px_#646cff]  duration-400'
          >
            <img className='w-[70px]' src={linkedIn} alt='' />
            <p className='text-3xl'>Aksandr Al-Ghazali</p>
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href='https://github.com/Dragodui'
            className='flex items-center gap-2 rounded-md bg-projectBg text-text shadow-2xl p-3 hover:shadow-[0px_0px_35px_-2px_#646cff]  duration-400'
          >
            <FaGithub className='w-[70px] h-[70px]' />
            <p className='text-3xl'>Dragodui</p>
          </motion.a>
        </div>
      </div>
    </BlockWrapper>
  );
};

export default Contact;
