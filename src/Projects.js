import React from 'react'
import MJB from './assets/MJB.jpg'
import GC from './assets/GunControl.png'
import Palish from './assets/Palish.png'
import SRS from './assets/SRS.png'
import WH from './assets/W&H.png'
import StateMachine from './assets/StateMachine.png'
import Skin2 from './assets/skin2.png'
import HSV from './assets/HSV.png'
import EulerCycle from './assets/EulerCycle.png'
import EulerExample from './assets/EulerExample.png'
import Hangman from './assets/Hangman.png'
import KngihtsTour from './assets/KnightsTour.png'
import TextAnalyzer from './assets/TextAnalyzer.png'
import AlgorithmComparison from './assets/AlgorithmComparison.png'

export const Projects = () => (
	<div>
	    <head>
			<title>The Projects of Gregory Campbell</title>
		</head>
		<body>
		<header>
		<h1>My Projects</h1>

		<aside>Look at what I've created!</aside>
		</header>

		<br/>

		<h2>This page contains the projects I've done over the past, present and future.</h2>

		<br/>

		<hr/>

		<h4>If you want to see what I'm currently working on you can see all my updates&nbsp;
		<a href="https://twitter.com/Gregory_Soup">Here</a> 
		</h4>

		<hr/>
		<h3> <a href="https://github.com/gjcampbell777/python-state-machine">Python State Machine</a> </h3>

		<br/>

		<p>Recently while going through Godot documentation I came across a tutorial for building your own state machine with Python.
		I've always been interested in making a stand alone state machine and state machines are a big part of game developement
		so I figured it would be a good idea for me to check it out. After I finished the tutorial I decided to continue working on
		and fleshing out this state machine used to emulate a locked/unlocked device.
		You can check out my code and mess around with the state machine yourself <a href="https://github.com/gjcampbell777/python-state-machine">Here</a>.
		</p>

		<img src={StateMachine} alt="StateMachine"/>

		<br/><br/>

		<h3> <a href="https://github.com/gjcampbell777/python-photo-skin-detection">Python Skin Detection Algorithms</a> </h3>

		<br/>

		<p>In an image processing course I took in university we were tasked with replicating multiple skin detection algorithms through a python script.
		I enjoyed working on that assignment and was fascinated by how well (or not so well) a program is able to detect things that we as humans can figure out easily.
		It's one of the few assignments I worked on in university that I can still remember quite well so I figured I'd find it wherever I had saved it
		and clean it up as well as make sure it can run with python3.
		You can check out my code and run your own photos through the script by checking out the repo <a href="https://github.com/gjcampbell777/python-photo-skin-detection">Here</a>.
		</p>

		<img src={Skin2} alt="Before"/>

		<p>Before going through the algorithm</p>

		<br/>

		<img src={HSV} alt="After"/>

		<p>After going through the HSV algorithm</p>

		<br/>

		<h3> <a href="https://github.com/gjcampbell777/euler-checking-algorithm">Euler Checking Algorithm</a> </h3>

		<br/>

		<p>In a course I took in university we were tasked checking if a graph was Eulerian or not.
		Much like the Python Skin Detection assignment this was also an assignment I could still remember
		from those days and wanted to re-explore and improve upon.
		This C algorithm takes the text file euler-graphs.txt and runs through the input to determine if its contents contain a Euler graph. 
		The algorithm checks the initial line of a graph to determine the length of the graph and 
		uses that information to know how many lines it must go through to gather all the info of the graph. 
		It will repeat this process until it reaches EOF.
		You can check out my code by checking out the repo <a href="https://github.com/gjcampbell777/euler-checking-algorithm">Here</a>.
		</p>

		<br/>

		<img src={EulerExample} alt="EulerExample"/>

		<p>Example of a graph from euler-graphs.txt</p>

		<br/>

		<img src={EulerCycle} alt="EulerCycle"/>

		<p>Output from running the algorithm with euler-graphs.txt</p>

		<br/>

		<h3> <a href="https://github.com/gjcampbell777/fortran-hangman">Fortran Hangman</a> </h3>

		<br/>

		<p>In a legacy programming course I took in university we were tasked with updating a fortran77 hangman program to fortran95
		as well as improving upon the code itself.
		Much like some of the other projects above this was also an assignment I could still remember
		from those days and wanted to re-explore and improve upon.
		Run the executable to play a simple game of hangman. 
		You can even use the makefile I added to generate an executable of the fortran77 version.
		You can check out my code for this project <a href="https://github.com/gjcampbell777/fortran-hangman">Here</a>.
		</p>

		<br/>

		<img src={Hangman} alt="Hangman"/>
		<p>A very quick game of hangman</p>

		<br/>

		<h3> <a href="https://github.com/gjcampbell777/ada-knights-tour">Ada Kngihts Tour</a> </h3>

		<br/>

		<p>In a legacy programming course I took in university we were tasked with creating a program that could solve the knights tour problem using Ada.
		Much like some of the other projects above this was also an assignment I could still remember
		from those days and wanted to re-explore and improve upon.
		Run the executable and follow the prompts to have the program solve the problem for you.
		However you should try to not make the chessboard size bigger than 7 if you don't have time to spare. 
		You can check out my code for this project <a href="https://github.com/gjcampbell777/ada-knights-tour">Here</a>.
		</p>

		<br/>

		<img src={KngihtsTour} alt="KnightsTour"/>

		<p>Knights tour output for a 5x5 chessboard starting at position (1,1)</p>

		<br/>

		<h3> <a href="https://github.com/gjcampbell777/cobol-text-analyzer">Cobol Text Analyzer</a> </h3>

		<br/>

		<p>In a legacy programming course I took in university we were tasked with improving upon a cobol script that
		was full of dated coding practices.
		Much like some of the other projects above this was also an assignment I could still remember
		from those days and wanted to re-explore and improve upon.
		Run the executable and tell it which textfile you wish to have analyzed to see the text stats. 
		You can even use the makefile I added to generate an executable of the dated script. 
		However the text file that script takes is hard coded so you will have to change some things around if you want to analyze different text with it.
		You can check out my code for this project <a href="https://github.com/gjcampbell777/cobol-text-analyzer">Here</a>.
		</p>

		<br/>

		<img src={TextAnalyzer} alt="TextAnalyzer"/>

		<p>Analyzing some text from Star Wars</p>

		<br/>

		<h3> <a href="https://github.com/gjcampbell777/legacy-algorithm-comparison">Legacy Code Algorithm Comparison</a> </h3>

		<br/>

		<p>In a legacy programming course I took in university we were tasked with comparing the speeds of C, Fortran and Ada using the KMP search algorithm.
		Much like some of the other projects above this was also an assignment I could still remember
		from those days and wanted to re-explore and improve upon.
		Run the executable of your choice to see the speed of that coding language. 
		Using the makefile I created generates executables for each programming language.
		You can check out my code for this project <a href="https://github.com/gjcampbell777/legacy-algorithm-comparison">Here</a>.
		</p>

		<br/>

		<img src={AlgorithmComparison} alt="AlgorithmComparison"/>

		<p>Seeing how quickly C, Fortran and Ada are all able to find "Q" in a block of text</p>

		<br/>

		<h3> <a href="https://gregorysoup.itch.io">My Many Games</a> </h3>

		<br/>

		<p>Over the course of the last few years I've made a handful of games on my own that I've posted to itch.io.
		I've always been interested in game developement and I use this as a way to experiment and 
		create games I would like to play myself. The fact that I've made all these games on my own allows me
		to go at my own pace as well as learn every aspect there is to this type of development while still being able to put my own charm into each game I make.
		I've worked on a fast paced endless runner 3D platformer, a 2D turn based combat puzzle and many game jam games.
		I continue to explore and create new game ideas as they pop into my head, so be sure to be on the look out for what I make next.
		Any game I've worked on has either been created using Unity or Godot. 
		(I'm a bigger fan of Godot nowadays so I'd imagine all game developement projects in the future will be created using Godot.)
		I've also made the code for all of my free games viewable to the public through <a href="https://github.com/gjcampbell777">My Github</a> if you want to look at my code.
		If you want to check out any of my games you can click <a href="https://gregorysoup.itch.io">Here</a> to 
		be brought to my itch.io page where you can play any of my games through your browser or download them.
		</p>

		<br/>

		<img src={MJB} alt="MJB"/>

		<br/>

		<img src={WH} alt="WH"/>

		<br/>

		<img src={SRS} alt="SRS"/>

		<br/>

		<img src={Palish} alt="Palish"/>

		<br/>

		<img src={GC} alt="GC"/>

		<br/>

		<hr />
		
		</body>
	</div>
  )