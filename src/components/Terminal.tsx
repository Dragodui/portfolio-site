import React, { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useAppDispatch } from '../store/store';
import { changeDevmode } from '../store/features/devmodeSlice';
import { commands } from '../commands';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to the my portfolio. Type "help" for a list of commands.<br/>',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    const [command, ...args] = trimmedInput.split(' ');

    setOutput((prev) => [...prev, `$ ${trimmedInput}`]);

    if (command in commands) {
      if (command === 'clear') {
        setOutput([]);
      } else if (command === 'echo') {
        setOutput((prev) => [...prev, args.join(' ') || '']);
      } else {
        setOutput((prev) => [...prev, commands[command].output]);
        console.log(commands[command].output);
      }
    } else if (trimmedInput !== '') {
      setOutput((prev) => [...prev, `Command not found: ${command}`]);
    }

    setInput('');
  };

  const focusInput = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto bg-[#300a24] blur-none text-white p-4 rounded-md shadow-lg font-mono cursor-text"
      style={{ fontFamily: "'Ubuntu Mono', monospace" }}
      onClick={(e) => focusInput(e)}
    >
      <div className="flex items-center justify-start mb-2 space-x-2">
        <div
          onClick={() => {
            dispatch(changeDevmode({ devmode: false }));
            document.body.style.overflow = 'auto';
          }}
          className="w-3 h-3 rounded-full cursor-pointer bg-[#ff5f57]"
        ></div>
        <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
      </div>
      <ScrollArea className="h-[400px] overflow-y-auto" ref={scrollAreaRef}>
        <div dangerouslySetInnerHTML={{ __html: `${output.join('')}` }} />
        <div className="flex items-start">
          <span className="mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleInputSubmit(e);
              }
            }}
            className="flex-grow bg-transparent outline-none"
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Terminal;
