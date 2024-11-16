import Header from './components/Header';
import './index.css';
import Footer from './components/Footer';
import Content from './components/Content';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useMemo, useEffect, useState } from 'react';
import TerminalModal from './components/TerminalModal';

const App = () => {
  const [init, setInit] = useState(false);
  const [textColor, setTextColor] = useState<string>('#ffffff');

  const getTextColor = (): void => {
    const root = document.documentElement;
    const color = getComputedStyle(root).getPropertyValue('--text').trim();
    setTextColor(color);
  };

  useEffect(() => {
    getTextColor();
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Check for theme changes periodically
    const themeInterval = setInterval(() => {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || theme === '') {
        getTextColor(); // Update textColor if the theme changes
      }
    }, 500); // Polling every 500ms (adjust as needed)

    return () => {
      clearInterval(themeInterval); // Clear interval when component unmounts
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: textColor,
        },
        links: {
          color: textColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [textColor]
  );

  return (
    <div className="w-full flex items-center justify-center flex-col mt-[80px]">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <Header />
      <Content />
      <Footer />
      <TerminalModal />
    </div>
  );
};

export default App;
