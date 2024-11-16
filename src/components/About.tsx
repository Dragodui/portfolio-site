import { FC } from 'react';
import { frontEnd, backEnd, databases, codeEditors } from '../technologies';
import { blockVariants, ITechnology } from '../types';
import BlockWrapper from './BlockWrapper';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import cv from '../assets/Aksandr Al-Ghazali CV.pdf';

const About: FC = () => {
  return (
    <BlockWrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        variants={blockVariants}
        className="flex flex-col"
        id="about"
      >
        <h1 className="text-[80px] font-jb font-medium mb-5 animate-rotate-y animate-infinite animate-duration-[600ms]">
          Aksandr Al-Ghazali
        </h1>
        <h2 className="text-[60px] font-medium">About Me</h2>
        <p className="text-2xl pt-5 text-left max-w-[600px] font-jb">
          Hi, I`m Aksandr Al-Ghazali, Junior Full-stack developer located in
          Szczecin, Poland
        </p>
        <motion.a
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          download
          href={cv}
          className="button font-jb bg-text hover:shadow-[0px_0px_35px_-2px_#646cff] duration-400 transition-all text-bg mt-7 w-auto font-medium text-xl rounded-md flex items-center justify-center gap-2 max-w-[300px]"
        >
          Dowload my CV <FaFileDownload />
        </motion.a>
        <div className="pt-5 font-jb">
          <h2 className="text-3xl font-medium text-left">
            Technologies I use:
          </h2>
          <div className="mt-2">
            <h3 className="text-2xl font-medium">Front-end</h3>
            <div className="flex items-center gap-3 pt-3 flex-wrap justify-start">
              {frontEnd.map((tech: ITechnology) => (
                <img className="w-[40px]" src={tech.img} alt="" />
              ))}
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-medium">Back-end</h3>
            <div className="flex items-center gap-3 pt-3 flex-wrap justify-start">
              {backEnd.map((tech: ITechnology) => (
                <img className="w-[40px]" src={tech.img} alt="" />
              ))}
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-medium">Databases</h3>
            <div className="flex items-center gap-3 pt-3 flex-wrap justify-start">
              {databases.map((tech: ITechnology) => (
                <img className="w-[40px]" src={tech.img} alt="" />
              ))}
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-medium">Code editors</h3>
            <div className="flex items-center gap-3 pt-3 flex-wrap justify-start">
              {codeEditors.map((tech: ITechnology) => (
                <img className="w-[40px]" src={tech.img} alt="" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </BlockWrapper>
  );
};

export default About;
