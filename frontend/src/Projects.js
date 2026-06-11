import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectCard from './components/ProjectCard';

// Import all project images
import StateMachine from './assets/StateMachine.png';
import HSV from './assets/HSV.png';
import skin2 from './assets/skin2.png';
import EulerExample from './assets/EulerExample.png';
import EulerCycle from './assets/EulerCycle.png';
import Hangman from './assets/Hangman.png';
import KnightsTour from './assets/KnightsTour.png';
import TextAnalyzer from './assets/TextAnalyzer.png';
import AlgorithmComparison from './assets/AlgorithmComparison.png';
import ShowingOff from './assets/ShowingOff.jpg';
import MJB from './assets/MJB.jpg';
import GunControl from './assets/GunControl.png';
import Palish from './assets/Palish.png';
import WH from './assets/W&H.png';
import SRS from './assets/SRS.png';


// Map imgName to imported images
const imageMap = {
  StateMachine,
  HSV,
  skin2,
  EulerExample,
  EulerCycle,
  Hangman,
  KnightsTour,
  TextAnalyzer,
  AlgorithmComparison,
  ShowingOff,
  MJB,
  GunControl,
  Palish,
  WH,
  SRS
};

const projects = [
  {
    title: 'Python State Machine',
    link: 'https://github.com/gjcampbell777/python-state-machine',
    description: 'A Python state machine used to emulate a locked/unlocked device.',
    imgName: 'StateMachine',
    imgAlt: 'Python state machine demo'
  },
  {
    title: 'Python Skin Detection Algorithms',
    link: 'https://github.com/gjcampbell777/python-photo-skin-detection',
    description: 'Replicated multiple skin detection algorithms in Python and modernized them for Python 3.',
    imgName: 'HSV',
    imgAlt: 'Skin detection image after',
  },
  {
    imgName: 'skin2',
    imgAlt: 'Skin detection image before',
  },
  {
    title: 'Euler Checking Algorithm',
    link: 'https://github.com/gjcampbell777/euler-checking-algorithm',
    description: 'C program to check if graphs are Eulerian.',
    imgName: 'EulerExample',
    imgAlt: 'Euler example'
  },
  {
    imgName: 'EulerCycle',
    imgAlt: 'Euler cycle output',
  },
  {
    title: 'Fortran Hangman',
    link: 'https://github.com/gjcampbell777/fortran-hangman',
    description: 'Updated a Fortran 77 hangman game to Fortran 95 and improved the code.',
    imgName: 'Hangman',
    imgAlt: 'Hangman game'
  },
  {
    title: "Ada Knights Tour",
    link: 'https://github.com/gjcampbell777/ada-knights-tour',
    description: "Solves the knight's tour problem in Ada.",
    imgName: 'KnightsTour',
    imgAlt: 'Knights tour output'
  },
  {
    title: 'COBOL Text Analyzer',
    link: 'https://github.com/gjcampbell777/cobol-text-analyzer',
    description: 'Modernized COBOL text analyzer to report text statistics.',
    imgName: 'TextAnalyzer',
    imgAlt: 'Text analyzer output'
  },
  {
    title: 'Legacy Algorithm Comparison',
    link: 'https://github.com/gjcampbell777/legacy-algorithm-comparison',
    description: 'Compare KMP implementations across C, Fortran, and Ada.',
    imgName: 'AlgorithmComparison',
    imgAlt: 'Algorithm comparison charts'
  },
  {
    title: 'My Many Games',
    description: 'A selection of games made with Unity and Godot.',
    imgName: 'ShowingOff',
    imgAlt: 'Game showcase'
  },
  {
    imgName: 'MJB',
    imgAlt: 'Magical Jumping Bean'
  },
  {
    imgName: 'GunControl',
    imgAlt: 'Gun Control'
  },
  {
    imgName: 'Palish',
    imgAlt: 'Palish'
  },
  {
    imgName: 'WH',
    imgAlt: 'Wally And Harv Escape the Fireball and Brick Factory'
  },
  {
    imgName: 'SRS',
    imgAlt: 'Super Robo Squad'
  },
];

export const Projects = () => {

  return (
    <main className="projects-page">
      <Helmet>
        <title>The Projects of Gregory Campbell</title>
        <meta name="description" content="Collection of projects by Gregory Campbell." />
      </Helmet>
      <header>
        <h1>My Projects</h1>
        <aside>Look at what I've created!</aside>
      </header>

      {projects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          imgSrc={imageMap[p.imgName]}
          imgAlt={p.imgAlt}
          link={p.link}
        />
      ))}
    </main>
  );
};