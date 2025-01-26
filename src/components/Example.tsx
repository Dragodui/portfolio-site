import { ExternalLink, Github } from 'lucide-react';
import { FC } from 'react';

interface IProps {
  githubLink: string;
  siteLink: string;
  photo: string;
  title: string;
  description: string;
}

const Example: FC<IProps> = ({ githubLink, siteLink, photo, title }) => {
  return (
    <div
      className="rounded-md bg-projectBg shadow-2xl flex flex-col justify-between"
      rel="noreferrer"
      title="link to the demo"
    >
      <img className="w-full rounded-md rounded-b-none" src={photo} />
      <h2 className="flex gap-4 justify-between px-[15px] py-4">
       <div>
       <p className="text-xl font-bold">{title}</p>
       </div>
        <a
          href={githubLink}
          className="flex gap-5 items-center"
          target="_blank"
          rel="noreferrer"
          title="link to GitHub"
        >
          <a 
            target="_blank" href={siteLink}>
          <ExternalLink size={40} />
          </a>
          <Github size={40} />
        </a>
      </h2>
    </div>
  );
};

export default Example;
