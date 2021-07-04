import React from 'react'
import Me from './assets/Me.jpg'

export const Home = () => (
	<div>
	    <head>
			<title>The Works of Gregory Campbell</title>
		</head>
		<body>

		<h2>This site contains the projects I've done over the past, present and future.</h2>

		<p>I know this page is currently empty, but I do plan on adding and personalizing this space with projects I'm working on and maybe adding blog posts to give updates and verticle slices of projects I'm currently developing. Whatever ends up here I hope you enjoy it.</p>

		<h3>Finished Projects Viewable on this site:</h3>

		<p></p>

		<ul>
			<li>This website. It might not seem like much but it's clean, easy to read, is written in reactjs and adapts quite well to mobile.</li>
		</ul>

		<p></p>

		<p></p>

		<ul>
			<li>I also added a html and downloadable .pdf version of my resume in the <a href="https://gregoryjcampbell.com/Resume">Resume</a> page, feel free to give it a look!</li>
		</ul>

		<p></p>

		<ul>
			<li>The many projects that I've mosted in the <a href="https://gregoryjcampbell.com/Projects">Projects</a> tab, go check it out!</li>
		</ul>

		<p></p>

		<blockquote></blockquote>

		<br/>

		<img src={Me} alt="It's Me!"/>

		<br/>

		<hr />
		<h2>Where to Reach Me</h2>

		<p>Check out my many endeavours at <a href="https://www.linkedin.com/in/gregoryjcampbell/">My LinkedIn Profile</a>,&nbsp;  
		<a href="https://github.com/gjcampbell777">My Github</a>,&nbsp;
		<a href="https://gregorysoup.itch.io/">My Itch Page</a> and&nbsp; 
		<a href="https://twitter.com/Gregory_Soup">My Twitter</a></p>
		</body>
	</div>
  )