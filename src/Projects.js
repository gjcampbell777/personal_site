import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectCard from './components/ProjectCard';
import ShowingOff from './assets/ShowingOff.jpg';
import StateMachine from './assets/StateMachine.png';
import Skin2 from './assets/skin2.png';
import EulerExample from './assets/EulerExample.png';
import Hangman from './assets/Hangman.png';
import KngihtsTour from './assets/KnightsTour.png';
import TextAnalyzer from './assets/TextAnalyzer.png';
import AlgorithmComparison from './assets/AlgorithmComparison.png';

const projects = [
  {
    title: 'Python State Machine',
    link: 'https://github.com/gjcampbell777/python-state-machine',
    description: 'A Python state machine used to emulate a locked/unlocked device.',
    img: StateMachine,
    imgAlt: 'Python state machine demo'
  },
  {
    title: 'Python Skin Detection Algorithms',
    link: 'https://github.com/gjcampbell777/python-photo-skin-detection',
    description: 'Replicated multiple skin detection algorithms in Python and modernized them for Python 3.',
    img: Skin2,
    imgAlt: 'Skin detection before/after',
  },
  {
    title: 'Euler Checking Algorithm',
    link: 'https://github.com/gjcampbell777/euler-checking-algorithm',
    description: 'C program to check if graphs are Eulerian.',
    img: EulerExample,
    imgAlt: 'Euler example'
  },
  {
    title: 'Fortran Hangman',
    link: 'https://github.com/gjcampbell777/fortran-hangman',
    description: 'Updated a Fortran 77 hangman game to Fortran 95 and improved the code.',
    img: Hangman,
    imgAlt: 'Hangman game'
  },
  {
    title: "Ada Knights Tour",
    link: 'https://github.com/gjcampbell777/ada-knights-tour',
    description: "Solves the knight's tour problem in Ada.",
    img: KngihtsTour,
    imgAlt: 'Knights tour output'
  },
  {
    title: 'COBOL Text Analyzer',
    link: 'https://github.com/gjcampbell777/cobol-text-analyzer',
    description: 'Modernized COBOL text analyzer to report text statistics.',
    img: TextAnalyzer,
    imgAlt: 'Text analyzer output'
  },
  {
    title: 'Legacy Algorithm Comparison',
    link: 'https://github.com/gjcampbell777/legacy-algorithm-comparison',
    description: 'Compare KMP implementations across C, Fortran, and Ada.',
    img: AlgorithmComparison,
    imgAlt: 'Algorithm comparison charts'
  },
  {
    title: 'My Many Games',
    link: 'https://gregorysoup.itch.io',
    description: 'A selection of games made with Unity and Godot.',
    img: ShowingOff,
    imgAlt: 'Game showcase'
  }
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

      <section>
        <p>This page contains the projects I've done in the past, present and future.</p>
        <p>
          If you want to see what I'm currently working on, you can see all my updates{' '}
          <a href="https://twitter.com/Gregory_Soup" target="_blank" rel="noreferrer noopener">here</a>.
        </p>
      </section>

      {projects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          imgSrc={p.img}
          imgAlt={p.imgAlt}
          link={p.link}
        />
      ))}
    </main>
  );
};
