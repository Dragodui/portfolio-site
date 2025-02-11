import { FC } from 'react';
import BlockWrapper from './BlockWrapper';

const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-center">
      <BlockWrapper>
        <div className="flex w-full py-3 justify-between">
          <p className="md:flex hidden text-[27px] font-medium font-jb">
            Aksandr Al-Ghazali
          </p>
          <a
            href="mailto:alghazaliaks123@gmail.com"
            className="sm:text-[27px] text-[20px] font-normal"
          >
            alghazaliaks123@gmail.com
          </a>
        </div>
      </BlockWrapper>
    </footer>
  );
};

export default Footer;
