import { Variants } from "framer-motion";

export interface ITechnology {
    img: string;
    title: string;
}

export const blockVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1
      }
    }
  };
