import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';

interface IProps {
  githubLink: string;
  siteLink: string;
  photo: string;
  title: string;
}

const Example: FC<IProps> = ({ githubLink, siteLink, photo, title }) => {
  return (
    <a
      href={siteLink}
      target='_blank'
      className='rounded-md bg-projectBg shadow-2xl'
      rel='noreferrer'
      title='link to the demo'
    >
      <img className='w-full rounded-md rounded-b-none' src={photo} />
      <h2 className='flex items-center justify-between px-[15px] py-2'>
        <p className='text-xl font-bold'>{title}</p>
        <a
          href={githubLink}
          className='w-[50px] h-[50px]'
          target='_blank'
          rel='noreferrer'
          title='link to GitHub'
        >
          <FaGithub className='w-[50px] h-[50px]' />
        </a>
      </h2>
    </a>
  );
};

export default Example;
