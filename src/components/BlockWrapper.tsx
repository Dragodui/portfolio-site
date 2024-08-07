import { ReactNode } from 'react';

const BlockWrapper = ({children, ...props}: { children: ReactNode }) => {
    return (
        <div {...props} className='max-w-[1300px] animate-fade-up animate-duration-[6000ms] w-full flex justify-between flex-col items-center lg:flex-row px-[15px] mt-10'>
            {children}
        </div>
    );
};

export default BlockWrapper;