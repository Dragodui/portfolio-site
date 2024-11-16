import { FC } from 'react';
import OpenMenu from './UI/OpenMenu';
import DevModeToggle from './UI/DevModeToggle';

const Header: FC = () => {
  return (
    <header className="fixed p-3 w-[70px] h-[70px] bg-transparent md:bg-text md:w-[140px] rounded-xl top-[10px]  right-[10px] items-center justify-between z-40 font-jb">
      <DevModeToggle />
      <OpenMenu />
    </header>
  );
};

export default Header;
