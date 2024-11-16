import React, { FC } from 'react';
import Terminal from './Terminal';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeDevmode } from '../store/features/devmodeSlice';

const TerminalModal: FC = () => {
  const dispatch = useAppDispatch();
  const devmode = useAppSelector((state) => state.devmode.devmode);
  console.log(devmode);

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center h-lvh w-lvw backdrop-blur bg-[rgba(0,0,0,0.7)] z-60 ${
        devmode ? '' : 'hidden'
      }`}
      onClick={() => {
        dispatch(changeDevmode({ devmode: false }));
        document.body.style.overflow = 'auto';
      }}
    >
      <Terminal />
    </div>
  );
};

export default TerminalModal;
