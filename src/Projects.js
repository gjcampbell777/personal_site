import React, { useEffect } from 'react';
import ShowingOff from './assets/ShowingOff.jpg';
import MJB from './assets/MJB.jpg';
import GC from './assets/GunControl.png';
import Palish from './assets/Palish.png';
import SRS from './assets/SRS.png';
import WH from './assets/W&H.png';
import StateMachine from './assets/StateMachine.png';
import Skin2 from './assets/skin2.png';
import HSV from './assets/HSV.png';
import EulerCycle from './assets/EulerCycle.png';
import EulerExample from './assets/EulerExample.png';
import Hangman from './assets/Hangman.png';
import KngihtsTour from './assets/KnightsTour.png';
import TextAnalyzer from './assets/TextAnalyzer.png';
import AlgorithmComparison from './assets/AlgorithmComparison.png';

export const Projects = () => {
  useEffect(() => {
    document.title = 'The Projects of Gregory Campbell';
  }, []);

  return (
    <main className="projects-page">
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

      <article className="project">
        <h2><a href="https://github.com/gjcampbell777/python-state-machine" target="_blank" rel="noreferrer noopener">Python State Machine</a></h2>
        <p>
          Recently while going through Godot documentation I came across a tutorial for building your own state machine with Python.
          I continued working on that state machine to emulate a locked/unlocked device.
          <a href="https://github.com/gjcampbell777/python-state-machine" target="_blank" rel="noreferrer noopener">View the project</a>.
        </p>
        <img src={StateMachine} alt="Python state machine demo" />
      </article>

      <article className="project">
        <h2><a href="https://github.com/gjcampbell777/python-photo-skin-detection" target="_blank" rel="noreferrer noopener">Python Skin Detection Algorithms</a></h2>
        <p>
          In an image processing course I replicated multiple skin detection algorithms in Python.
          I cleaned up the original assignment and made it compatible with Python 3.
          <a href="https://github.com/gjcampbell777/python-photo-skin-detection" target="_blank" rel="noreferrer noopener">View the project</a>.
        </p>
        <img src={Skin2} alt="Skin detection before" />
        <p>Before the algorithm.</p>
        <img src={HSV} alt="Skin detection after" />
        <p>After the HSV algorithm.</p>
      </article>

      <article className="project">
        <h2><a href="https://github.com/gjcampbell777/euler-checking-algorithm" target="_blank" rel="noreferrer noopener">Euler Checking Algorithm</a></h2>
        <p>
          This C program checks whether a graph is Eulerian by reading a text file and analyzing graph structure.
          It repeats the process until end-of-file and reports whether the graph is Eulerian.
          <a href="https://github.com/gjcampbell777/euler-checking-algorithm" target="_blank" rel="noreferrer noopener">View the project</a>.
        </p>
        <img src={EulerExample} alt="Euler graph input example" />
        <p>Example of a graph from euler-graphs.txt.</p>
        <img src={EulerCycle} alt="Euler cycle output" />
        <p>Output from running the algorithm.</p>
      </article>

      <article className="project">
        <h2><a href="https://github.com/gjcampbell777/fortran-hangman" target="_blank" rel="noreferrer noopener">Fortran Hangman</a></h2>
        <p>
          A legacy programming course project to update a Fortran 77 hangman game to Fortran 95 and improve the code.
          Use the executable or Makefile to run the game.
        </p>
        <img src={Hangman} alt="Fortran hangman game" />
        <p>A very quick hangman game.</p>
      </article>

      <article className="project">
        <h2><a href="https://github.com/gjcampbell777/ada-knights-tour" target="_blank" rel="noreferrer noopener">Ada Knights Tour</a></h2>
        <p>
          A program that solves the knight's tour problem in Ada.
          It generates a solution for small boards and shows the move sequence.
        </p>
        <img src={KngihtsTour} alt="Knights tour output" />
        <p>Knights tour output for a 5x5 chessboard starting at position (1,1).</p>
      </article>

      <article className="project">
        <h2><a href="https://github.com/gjcampbell777/cobol-text-analyzer" target="_blank" rel="noreferrer noopener">COBOL Text Analyzer</a></h2>
        <p>
          A modernized COBOL text analyzer updated from a legacy script.
          It analyzes fixed data and reports text statistics.
        </p>
        <img src={TextAnalyzer} alt="COBOL text analyzer output" />
      </article>

      <article className="project">
        <h2><a href="https://github.com/gjcampbell777/legacy-algorithm-comparison" target="_blank" rel="noreferrer noopener">Legacy Code Algorithm Comparison</a></h2>
        <p>
          A comparison of C, Fortran, and Ada implementations of the KMP search algorithm.
          The project generates executables for each language to compare performance.
        </p>
        <img src={AlgorithmComparison} alt="Algorithm comparison charts" />
      </article>

      <article className="project">
        <h2><a href="https://gregorysoup.itch.io" target="_blank" rel="noreferrer noopener">My Many Games</a></h2>
        <p>
          I have built a collection of games using Unity and Godot, including endless runners, turn-based combat puzzles, and game jam projects.
        </p>
        <img src={ShowingOff} alt="Presenting a game at a Toronto indie game dev meetup" />
        <img src={MJB} alt="Game project showcase" />
        <img src={WH} alt="Game project showcase" />
        <img src={SRS} alt="Game project showcase" />
      </article>
    </main>
  );
};
