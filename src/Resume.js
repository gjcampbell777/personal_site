import React from 'react'
import pdf from './assets/Gregory Campbell Resume.pdf'
import pic from './assets/Resume.png'

export const Resume = () => (
	<div>
	    <head>
			<title>The Resume of Gregory Campbell</title>
		</head>
		<body>
		<header>
		<h1>My Resume</h1>

		<aside>Check out everything I have accomplished in my career.</aside>
		</header>

		<br/>

		<h2>Downloadable PDF</h2>

		<p>You can view and download a .pdf verison of my resume <a href={pdf}>Here</a></p>

		<br/>

		<h2><u>Resume</u></h2>

		<br/>

		<img src={pic} alt="Resume"/>

		<br/>

		<h2><u>Written Resume</u></h2>

		<br/>

		<h2>Gregory Campbell</h2>

		<p align="right">
		<a href="tel:6477797951">(647)-779-7951</a><br />
		<b><a href="mailto:gjcampbell777@gmail.com">gjcampbell777@gmail.com </a></b>
		</p>

		<h3><u>Profile:</u></h3>

		<p>Highly motivated and team-focused software developer with 4+ years of experience developing code and creating test environments and infrastructure.</p>

		<br/>

		<h3><u>Education:</u></h3>

		<br/>

		<p><b>Bachelor of Computing, Computer Science (Co-op)</b><br />
		<i>University of Guelph &ndash; Guelph, Ontario</i> <span>Completed April 2017 </span></p>

		<br/>

		<h3><u>Work Experience</u></h3>

		<p><b>Software Developer,</b><br />
		<i>Clear Blue Technologies &ndash; North York, Ontario</i> <span>Aug 2017 - Present </span></p>

		<ul>
			<li>Adding features and fixing issues with various controllers using the functional programming language Elixir.</li>
			<li>Built multiple varieties of automated black box testing devices and accompanying infrastructure with the controller, a raspberry pi, a programmable power supply and elixir code from scratch.</li>
			<li>Developed automated black box front end testing infrastructure of the company web service across Chrome, Firefox and Safari using the node.js automation tool "Testcafe".</li>
		</ul>

		<p><b>Software Test Specialist,</b><br />
		<i>IBM (Appscan Source team) &ndash; Markham, Ontario</i> <span>Jun 2014 - Aug 2016 </span></p>

		<ul>
			<li>Created a test tool in HTML and Javascript with API usage for developers to more efficiently test builds using subsets of smoke tests.</li>
			<li>Multiple presentations to stakeholders, architects and developers on security vulnerabilities, demoed security programs. </li>
			<li>Integrated Juliet test suite into the Appscan Source test automation system using Java.</li>
			<li>Developed, debugged, executed and maintained bash testing scripts.</li>
		</ul>

		<br/>

		<h3><u>Technical Skills:</u></h3>

		<ul>
			<li>Programming Languages: Elixir, C, C#, Java, Python, Fortran, Ada, Cobol</li>
			<li>Web Design and Coding: HTML, Javascript, ReactJs, CSS, Node.js, JQuery</li>
			<li>Software Environments: Windows, Mac, Linux, Unity, Godot, VirtualBox, Terminal/Console</li>
			<li>Various automation tools such as Bash, Testcafe, ExUnit, Jenkins, Gitlab CI and Python scripting</li>
			<li>Knowledge and experience with computer security, security vulnerabilities and security testing</li>
			<li>Well versed in application design, development and testing within an agile development cycle</li>
			<li>Expertise using SVN such as Github, Gitlab and Bitbucket within team and solo projects</li>
		</ul>

		<br/><br/>

		<blockquote></blockquote>

		<br/>

		<hr />
		</body>
	</div>
  )
