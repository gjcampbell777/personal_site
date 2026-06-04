import React from 'react';
import { Helmet } from 'react-helmet-async';
import pdf from './assets/Gregory Campbell Resume.pdf';
import resumeImage from './assets/Resume.png';

export const Resume = () => {
  return (
    <main className="resume-page">
      <Helmet>
        <title>The Resume of Gregory Campbell</title>
        <meta name="description" content="Resume and professional experience of Gregory Campbell." />
      </Helmet>

      <header>
        <h1>My Resume</h1>
        <p>Check out everything I have accomplished in my career.</p>
      </header>

      <section>
        <h2>Downloadable PDF</h2>
        <p>
          You can view and download a PDF version of my resume{' '}
          <a href={pdf} target="_blank" rel="noreferrer noopener">here</a>.
        </p>
      </section>

      <section>
        <h2>Written Resume</h2>
        <img
          src={resumeImage}
          alt="Resume preview"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section>
        <h2>Gregory Campbell</h2>
        <p>
          <a href="tel:6477797951">(647) 779-7951</a> ·{' '}
          <a href="mailto:gjcampbell777@gmail.com">gjcampbell777@gmail.com</a>
        </p>

        <h3>Profile</h3>
        <p>Highly motivated and team-focused software developer with 10+ years of experience developing code and creating test environments and infrastructure.</p>

        <h3>Education</h3>
        <p>
          <strong>Bachelor of Computing, Computer Science (Co-op)</strong><br />
          <em>University of Guelph – Guelph, Ontario</em><br />
          Completed April 2017
        </p>

        <h3>Work Experience</h3>
        <article>
          <h4>Senior Software Developer in Test</h4>
          <p><em>Genesys Cloud Services (Performance Team)</em> · Jan 2022 - April 2026</p>
          <ul>
            <li>The deignated analytics team collaborator forthe entire performance team.</li>
            <li>Taking on epics to creaed automated tests for new features being introduced to our product.</li>
            <li>Developed and incremented up in-house testing tools.</li>
          </ul>
        </article>

        <article>
          <h4>Software Developer</h4>
          <p><em>Clear Blue Technologies</em> · Aug 2017 - Dec 2021</p>
          <ul>
            <li>Added features and fixed issues with various controllers using the functional programming language Elixir.</li>
            <li>Built automated black box testing devices and infrastructure with controller code, Raspberry Pi, and programmable power supplies.</li>
            <li>Developed automated black box front end testing across Chrome, Firefox, and Safari using TestCafe.</li>
          </ul>
        </article>

        <article>
          <h4>Software Test Specialist</h4>
          <p><em>IBM (AppScan Source team)</em> · Jun 2014 - Aug 2016</p>
          <ul>
            <li>Created a test tool in HTML and JavaScript to help developers efficiently test builds using subsets of smoke tests.</li>
            <li>Presented security findings to stakeholders, architects, and developers.</li>
            <li>Integrated the Juliet test suite into AppScan Source test automation using Java.</li>
            <li>Developed, debugged, executed, and maintained Bash testing scripts.</li>
          </ul>
        </article>

        <h3>Technical Skills</h3>
        <ul>
          <li>Programming Languages: Elixir, C, Python, YAML, Go, Rust</li>
          <li>Software Environments: Windows, Mac, Linux, Godot, CLI, Docker, Kubernetes, AWS</li>
          <li>Automation tools: Bash, Jenkins, Gitlab CI, Postman, Locust, Terraform</li>
          <li>Well versed in application design, development, and testing within an agile development cycle</li>
          <li>Profeicent in testin many different aspects of distrubted systems: micro systems, REST API, Infrastructure as Code</li>
          <li>Expertise with data analysis and using and developing data analytics tools: New Relic, Sumologic, In-house tools</li>
          <li>Knowledge and experience with computer security, security vulnerabilities and security testing both professionally and personally</li>
        </ul>
      </section>
    </main>
  );
};
