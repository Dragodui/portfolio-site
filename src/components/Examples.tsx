import Example from './Example';
import BlockWrapper from './BlockWrapper';
import { blockVariants } from '../types';
import { motion } from 'framer-motion';
import { projects } from '../projects';

const Examples = () => {
  return (
    <BlockWrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
        variants={blockVariants}
        className="flex flex-col"
        id="projects"
      >
        <h1 className="text-[58px] font-jb inline mb-7 text-left font-medium">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <Example
              key={index}
              photo={project.photo}
              siteLink={project.demo}
              githubLink={project.GitHub}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </motion.div>
    </BlockWrapper>
  );
};

export default Examples;
