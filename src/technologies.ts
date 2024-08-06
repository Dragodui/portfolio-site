// front-end
import react from './assets/technologies/React-Dark.svg';
import angular from './assets/technologies/Angular-Dark.svg';
import js from './assets/technologies/JavaScript.svg';
import ts from './assets/technologies/TypeScript.svg';
import redux from './assets/technologies/Redux.svg';
import scss from './assets/technologies/Sass.svg';
import vite from './assets/technologies/Vite-Dark.svg';
import git from './assets/technologies/Git.svg';
import html from './assets/technologies/HTML.svg';
import css from './assets/technologies/CSS.svg';
import tailwind from './assets/technologies/TailwindCSS-Dark.svg';
import yarn from './assets/technologies/Yarn-Dark.svg';
import bootstrap from './assets/technologies/Bootstrap.svg';
import { ITechnology } from './types';
//code editors
import vscode from './assets/technologies/VSCode-Dark.svg';
import vs from './assets/technologies/VisualStudio-Dark.svg';
import webStorm from './assets/technologies/WebStorm-Dark.svg';
//back-end
import node from './assets/technologies/NodeJS-Dark.svg';
import express from './assets/technologies/ExpressJS-Dark.svg';
import cs from './assets/technologies/CS.svg';
import dotnet from './assets/technologies/DotNet.svg';
//databases
import mongo from './assets/technologies/MongoDB.svg';
import mySql from './assets/technologies/MySQL-Dark.svg';

export const frontEnd: ITechnology[] = [
  {
    img: react,
    title: 'react',
  },
  {
    img: angular,
    title: 'angular',
  },
  {
    img: tailwind,
    title: 'tailwind',
  },
  {
    img: vite,
    title: 'vite',
  },
  {
    img: yarn,
    title: 'yarn',
  },
  {
    img: js,
    title: 'js',
  },
  {
    img: ts,
    title: 'ts',
  },
  {
    img: redux,
    title: 'redux',
  },
  {
    img: bootstrap,
    title: 'bootstrap',
  },
  {
    img: scss,
    title: 'scss',
  },
  {
    img: css,
    title: 'css',
  },
  {
    img: html,
    title: 'html',
  },
  {
    img: git,
    title: 'git',
  },
];

export const backEnd: ITechnology[] = [
  {
    img: node,
    title: 'nodeJs',
  },
  {
    img: express,
    title: 'expressJs',
  },
  {
    img: cs,
    title: 'C#',
  },
  {
    img: dotnet,
    title: '.NET',
  },
];

export const codeEditors: ITechnology[] = [
  {
    img: vscode,
    title: 'visual studio code',
  },
  {
    img: vs,
    title: 'visual studio',
  },
  {
    img: webStorm,
    title: 'web storm',
  },
];

export const databases: ITechnology[] = [
  { img: mongo, title: 'mongoDB' },
  { img: mySql, title: 'mySql' },
];
