import React from 'react'
import Me from './assets/Me.jpg'

export const Home = () => (
	<div>
	    <head>
			<title>The Works of Gregory Campbell</title>
		</head>
		<body>

		<h2>Welcome to the personal website of Gregory Campbell</h2>

		<p>I hope you enjoy everything it has to offer</p>

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

		<img src={Me} alt="It's Me!" className="homeimage"/>

		<br/>

		<hr />
		</body>
	</div>
  )
