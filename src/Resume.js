import React from 'react';
import { Helmet } from 'react-helmet-async';
import pdf from './assets/Gregory Campbell Resume.pdf';

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
          src={`${process.env.PUBLIC_URL || '.'}/images/Resume-640.webp`}
          srcSet={`${process.env.PUBLIC_URL || '.'}/images/Resume-320.webp 320w, ${process.env.PUBLIC_URL || '.'}/images/Resume-640.webp 640w, ${process.env.PUBLIC_URL || '.'}/images/Resume-1024.webp 1024w`}
          sizes="(max-width: 600px) 100vw, 640px"
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
        <p>Highly motivated and team-focused software developer with 4+ years of experience developing code and creating test environments and infrastructure.</p>

        <h3>Education</h3>
        <p>
          <strong>Bachelor of Computing, Computer Science (Co-op)</strong><br />
          <em>University of Guelph – Guelph, Ontario</em><br />
          Completed April 2017
        </p>

        <h3>Work Experience</h3>
        <article>
          <h4>Software Developer</h4>
          <p><em>Clear Blue Technologies – North York, Ontario</em> · Aug 2017 - Present</p>
          <ul>
            <li>Added features and fixed issues with various controllers using the functional programming language Elixir.</li>
            <li>Built automated black box testing devices and infrastructure with controller code, Raspberry Pi, and programmable power supplies.</li>
            <li>Developed automated black box front end testing across Chrome, Firefox, and Safari using TestCafe.</li>
          </ul>
        </article>

        <article>
          <h4>Software Test Specialist</h4>
          <p><em>IBM (AppScan Source team) – Markham, Ontario</em> · Jun 2014 - Aug 2016</p>
          <ul>
            <li>Created a test tool in HTML and JavaScript to help developers efficiently test builds using subsets of smoke tests.</li>
            <li>Presented security findings to stakeholders, architects, and developers.</li>
            <li>Integrated the Juliet test suite into AppScan Source test automation using Java.</li>
            <li>Developed, debugged, executed, and maintained Bash testing scripts.</li>
          </ul>
        </article>

        <h3>Technical Skills</h3>
        <ul>
          <li>Programming Languages: Elixir, C, C#, Java, Python, Fortran, Ada, Cobol</li>
          <li>Web Design and Coding: HTML, JavaScript, ReactJS, CSS, Node.js, jQuery</li>
          <li>Software Environments: Windows, Mac, Linux, Unity, Godot, VirtualBox, Docker</li>
          <li>Automation tools: Bash, TestCafe, ExUnit, Jenkins, GitLab CI, Python scripting</li>
          <li>Experience with security testing, vulnerabilities, and application design in agile environments</li>
          <li>Version control: GitHub, GitLab, Bitbucket</li>
        </ul>
      </section>
    </main>
  );
};
