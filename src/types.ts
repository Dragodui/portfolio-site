import { Variants } from 'framer-motion';

export interface ITechnology {
  img: string;
  title: string;
}

export interface ICommand {
  description: string;
  output: string;
}

export type ICommands = {
  [key: string]: ICommand;
};

export interface IProject {
  title: string;
  photo: string;
  GitHub: string;
  demo: string;
  description: string;
}

export const blockVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
};
