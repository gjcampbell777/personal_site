import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

// Import all project images
import StateMachine from '../assets/StateMachine.png';
import HSV from '../assets/HSV.png';
import skin2 from '../assets/skin2.png';
import EulerExample from '../assets/EulerExample.png';
import EulerCycle from '../assets/EulerCycle.png';
import Hangman from '../assets/Hangman.png';
import KnightsTour from '../assets/KnightsTour.png';
import TextAnalyzer from '../assets/TextAnalyzer.png';
import AlgorithmComparison from '../assets/AlgorithmComparison.png';
import ShowingOff from '../assets/ShowingOff.jpg';
import MJB from '../assets/MJB.jpg';
import GunControl from '../assets/GunControl.png';
import Palish from '../assets/Palish.png';
import WH from '../assets/W&H.png';
import SRS from '../assets/SRS.png';

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

const Projects = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Projects - Gregory Campbell';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Personal website and portfolio of Gregory Campbell.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Personal website and portfolio of Gregory Campbell.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Projects</h1>
      
      <ProjectCard
        title='Python State Machine'
        link='https://github.com/gjcampbell777/python-state-machine'
        description='A Python state machine used to emulate a locked/unlocked device.'
        imgSrc={imageMap.StateMachine}
        imgAlt='Python state machine demo'
      />
      
      <ProjectCard
        title='Python Skin Detection Algorithms'
        link='https://github.com/gjcampbell777/python-photo-skin-detection'
        description='Replicated multiple skin detection algorithms in Python and modernized them for Python 3.'
        images={[ 
          { src: imageMap.HSV, alt: "HSV implementation" },
          { src: imageMap.skin2, alt: "Normal photo" }
        ]}
      />
      
      <ProjectCard
        title='Euler Checking Algorithm'
        link='https://github.com/gjcampbell777/euler-checking-algorithm'
        description='C program to check if graphs are Eulerian.'
        images={[ 
          { src: imageMap.EulerExample, alt: "Euler example" },
          { src: imageMap.EulerCycle, alt: "Euler cycle output" }
        ]}
      />

      <ProjectCard
        title='Fortran Hangman'
        link='https://github.com/gjcampbell777/fortran-hangman'
        description='Updated a Fortran 77 hangman game to Fortran 95 and improved the code.'
        imgSrc={imageMap.Hangman}
        imgAlt='Hangman game'
      />

      <ProjectCard
        title="Ada Knights Tour"
        link='https://github.com/gjcampbell777/ada-knights-tour'
        description="Solves the knight's tour problem in Ada."
        imgSrc={imageMap.KnightsTour}
        imgAlt='Knights tour output'
      />

      <ProjectCard
        title='COBOL Text Analyzer'
        link='https://github.com/gjcampbell777/cobol-text-analyzer'
        description='Modernized COBOL text analyzer to report text statistics.'
        imgSrc={imageMap.TextAnalyzer}
        imgAlt='Text analyzer output'
      />

      <ProjectCard
        title='Legacy Algorithm Comparison'
        link='https://github.com/gjcampbell777/legacy-algorithm-comparison'
        description='Compare KMP implementations across C, Fortran, and Ada.'
        imgSrc={imageMap.AlgorithmComparison}
        imgAlt='Algorithm comparison charts'
      />

      <ProjectCard
        title='My Many Games'
        description='A selection of games made with Unity and Godot.'
        images={[ 
          { src: imageMap.ShowingOff, alt: "Game showcase" },
          { src: imageMap.MJB, alt: "Magical Jumping Bean" },
          { src: imageMap.Palish, alt: "Palish" },
          { src: imageMap.WH, alt: "Wally And Harv Escape the Fireball and Brick Factory" },
          { src: imageMap.SRS, alt: "Super Robo Squad" }
        ]}
      />
    </div>
  );
};

export default Projects;
