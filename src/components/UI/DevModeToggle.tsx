import { motion, spring } from 'framer-motion';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { changeDevmode } from '../../store/features/devmodeSlice';

const DevModeToggle = () => {
  const [isDevMode, setIsDevMode] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const devmode = useAppSelector((state) => state.devmode.devmode);

  useEffect(() => {
    setIsDevMode(devmode);
  }, [devmode]);

  const toggleMode = () => {
    setIsDevMode((prevState) => {
      const newMode = !prevState;
      if (newMode) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return newMode;
    });
    dispatch(changeDevmode({ devmode: !isDevMode }));
  };

  return (
    <div
      data-isOn={isDevMode}
      className={`py-2 px-1 w-[62px] hidden md:flex h-[36px] rounded-full bg-myBlack items-center cursor-pointer top-[28px] right-[80px] fixed z-40 ${
        isDevMode ? 'justify-end' : 'justify-start'
      }`}
      onClick={toggleMode}
    >
      <motion.div
        transition={spring}
        className="w-[30px] h-[30px] bg-myViolet rounded-full flex items-center justify-center"
        layout
      >
        {isDevMode ? (
          <MdKeyboardBackspace />
        ) : (
          <p className="text-text font-bold text-sm">{'</>'}</p>
        )}
      </motion.div>
    </div>
  );
};

export default DevModeToggle;
