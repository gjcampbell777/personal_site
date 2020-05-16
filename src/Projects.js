import React from 'react'
import MJB1 from './assets/MJB1.jpg'
import MJB2 from './assets/MJB2.jpg'
import MJB3 from './assets/MJB3.jpg'
import MJB4 from './assets/MJB4.jpg'
import MJB5 from './assets/MJB5.jpg'

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

		<br/>

		<h3> <a href="https://gregorysoup.itch.io/Magical-Jumping-Bean">Magical Jumping Bean</a> </h3>

		<br/>

		<p>I created a fast paced 3D third person paltformer where the player takes control of a bean that wants to go as fast as possible!
		I features a hub world that can be used for training and practice, 3 game modes - all of which utilize different procedural level generation
		and a high score system so you can keep track how well you do after the end of each game.
		The game can be played with a mouse and keyboard or with an xbox controller (highly recommened) so you can learn and perfect the 
		extensive move set of the game and go as fast as possible. This can runs on Windows, OSX and Linux.
		Below are a few screenshots and a video to help you understand how the game works.
		If you want to see more you can check out the game page&nbsp;
		<a href="https://gregorysoup.itch.io/Magical-Jumping-Bean">Here</a>.
		</p>

		<br/>

		<img src={MJB1} alt="MJB1"/>

		<br/>

		<img src={MJB2} alt="MJB2"/>

		<br/>

		<img src={MJB3} alt="MJB3"/>

		<br/>

		<img src={MJB4} alt="MJB4"/>

		<br/>

		<img src={MJB5} alt="MJB5"/>

		<br/>

		<div class="iframe-container">
			<iframe title="MJB Video"
			src="https://www.youtube.com/embed/KJif6-wVL98" frameborder="0" 
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen>
			</iframe>
		</div>

		<br/>
		
		</body>
	</div>
  )