import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface ContactItemProps {
    link: string;
    title: string;
    icon: ReactNode | string;
}

const ContactItem: FC<ContactItemProps> = ({link, icon}) => {
    return (
        <motion.a
        href={link}
        className="flex items-center gap-4 w-full sm:w-auto  text-text duration-400"
      >
       {
            typeof icon === 'string' ? <img width="70" height="70" src={icon} alt="icon" /> : icon
        }
        {/* <p className="text-3xl">{title}</p> */}
      </motion.a>
    );
};

export default ContactItem;