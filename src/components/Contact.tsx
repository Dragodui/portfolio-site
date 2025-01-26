import BlockWrapper from './BlockWrapper';
import telegram from '../assets/contact/Telegram.svg';
import gmail from '../assets/contact/Gmail.svg';
import linkedIn from '../assets/contact/LinkedIn.svg';
import { FaGithub } from 'react-icons/fa';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { blockVariants } from '../types';
import ContactItem from './ContactItem';

const Contact: FC = () => {

  const items = [{
    link: "https://t.me/dragodui",
    title: "Telegram",
    icon: telegram
  },{
    link: "mailto:alghazaliaks123@gmail.com",
    title: "Gmail",
    icon: gmail
  },
  {
    link: "https://www.linkedin.com/in/aksandr-al-ghazali",
    title: "LinkedIn",
    icon: linkedIn
  },
  {
    link: "https://github.com/Dragodui",
    title: "GitHub",
    icon: <FaGithub className="w-[70px] h-[70px]" />
  }
]

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
        <h2 className="text-[58px] font-jb block font-medium">Contact Me</h2>
        <div className="flex gap-7 flex-wrap justify-between">
          {
            items.map((item, index) => (<ContactItem key={index} link={item.link} title={item.title} icon={item.icon} />))
          }
        </div>
      </motion.div>
    </BlockWrapper>
  );
};

export default Contact;
