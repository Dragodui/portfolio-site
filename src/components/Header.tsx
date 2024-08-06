import { FC } from 'react';
import OpenMenu from './UI/OpenMenu';

const Header: FC = () => {
  return (
    <header className='fixed top-[20px] right-[20px] z-40'>
        <OpenMenu />
    </header>
  );
};

export default Header;
