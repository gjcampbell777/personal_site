import React from 'react'
import MJB from './assets/MJB.jpg'
import GC from './assets/GunControl.png'
import Palish from './assets/Palish.png'
import SRS from './assets/SRS.png'
import WH from './assets/W&H.png'
import StateMachine from './assets/StateMachine.png'

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
		You can check out my code and mess around with the state machine yourself
		<a href="https://github.com/gjcampbell777/python-state-machine"> Here </a>.
		</p>

		<br/>

		<img src={StateMachine} alt="StateMachine"/>

		<br/>

		<h3> <a href="https://gregorysoup.itch.io">My Many Games</a> </h3>

		<br/>

		<p>Over the course of the last few years I've made a handful of games on my own that I've posted to itch.io.
		I've always been interested in game developement and I use this as a way to experiment and 
		create games I would like to play myself. The fact that I've made all these games on my own allows me
		to go at my own pace as well as learn every aspect there is to this type of development while still being able to put my own charm into each game I make.
		I've worked on a fast paced endless runner 3D platformer, a 2D turn based combat puzzle and many game jam games.
		I continue to explore and create new game ideas as they pop into my head, so be sure to be on the look out for what I make next.
		I've also made the code for all of my free games viewable to the public through <a href="https://github.com/gjcampbell777">My Github</a> if you want to look at my code.
		If you want to check out any of my pages you can click 
		<a href="https://gregorysoup.itch.io"> Here </a> 
		to be brought to my itch.io page where you can play any of my games through your browser or download them.
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
		
		</body>
	</div>
  )