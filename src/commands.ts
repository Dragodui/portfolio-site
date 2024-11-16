import { ICommands } from './types';
import { projects } from './projects';
import { frontEnd, backEnd, databases, codeEditors } from './technologies';

export const commands: ICommands = {
  help: {
    description: 'List all available commands',
    output: `<div class="mb-1">Available commands: help, echo, date, clear, projects, about, stack </div>`,
  },
  echo: {
    description: 'Print a message',
    output: `<div class="mb-1">Usage: echo <message> </div>`,
  },
  date: {
    description: 'Display the current date and time </div>',
    output: `<div class="mb-1">${new Date().toString()}`,
  },
  clear: {
    description: 'Clear the terminal',
    output: '',
  },
  about: {
    description: 'About me',
    output:
      '<p>I`m Aksandr Al-Ghazali, Junior Full-stack developer located in Szczecin, Poland</ p>',
  },
  stack: {
    description: 'List of all technologies I use',
    output: `
      <div class="mb-1">
        <h3>Front-end:</h3>
      <div class="flex gap-3 items-center">
        ${frontEnd
          .map(
            (tech) =>
              `<p><img src="${tech.img}" alt="${tech.title}" style="width: 20px; height: 20px;" /></p>`
          )
          .join('')}
          </div>
      </div>
      <div class="mb-1">
        <h3>Back-end:</h3>
        <div class="flex gap-3 items-center">
        ${backEnd
          .map(
            (tech) =>
              `<p><img src="${tech.img}" alt="${tech.title}" style="width: 20px; height: 20px;" /></p>`
          )
          .join('')}
          </div>
      </div>
      <div class="mb-1">
        <h3>Code Editors:</h3>
        <div class="flex gap-3 items-center">
        ${codeEditors
          .map(
            (editor) =>
              `<p><img src="${editor.img}" alt="${editor.title}" style="width: 20px; height: 20px;" /></p>`
          )
          .join('')}
          </div>
      </div>
      <div class="mb-1">
        <h3>Databases:</h3>
        <div class="flex gap-3 items-center">
        ${databases
          .map(
            (db) =>
              `<p><img src="${db.img}" alt="${db.title}" style="width: 20px; height: 20px;" /></p>`
          )
          .join('')}
          </div>
      </div>
    `,
  },
  projects: {
    description: 'List of all my projects',
    output: `<div class="mb-1">${projects
      .map(
        (project) =>
          `<p>title: ${project.title} <br />  github: ${project.GitHub} <br />  demo: ${project.demo} </p> <br />`
      )
      .join('')}</>`,
  },
};
