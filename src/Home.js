import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
    <main className="home-page">
      <Helmet>
        <title>The Works of Gregory Campbell</title>
        <meta name="description" content="Personal website and portfolio of Gregory Campbell." />
      </Helmet>

      <section>
        <h2>Welcome to the personal website of Gregory Campbell</h2>
        <p>I hope you enjoy everything it has to offer.</p>
      </section>

      <section>
        <h3>Finished projects viewable on this site</h3>
        <ul>
          <li>This website is clean, easy to read, written in React, and adapts well to mobile.</li>
          <li>I also added a HTML and downloadable PDF version of my resume on the Resume page.</li>
          <li>Check out the many projects on the Projects tab.</li>
        </ul>
      </section>

      <section>
        <img
          src="/images/Me-640.webp"
          srcSet="/images/Me-320.webp 320w, /images/Me-640.webp 640w, /images/Me-1024.webp 1024w"
          sizes="(max-width: 600px) 100vw, 640px"
          alt="Portrait of Gregory Campbell"
          className="homeimage"
          loading="lazy"
          decoding="async"
        />
      </section>
    </main>
  );
};
