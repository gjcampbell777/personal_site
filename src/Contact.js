import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Contact = () => {
  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Gregory Campbell</title>
        <meta name="description" content="Contact details for Gregory Campbell." />
      </Helmet>

      <header>
        <h1>How to Reach Me</h1>
        <p>Give me a shout!</p>
      </header>

      <section>
        <h2>Contact Info</h2>
        <ul className="contact-list">
          <li>Email: <a href="mailto:gjcampbell777@gmail.com">gjcampbell777@gmail.com</a></li>
          <li>Phone: <a href="tel:6477797951">(647) 779-7951</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/gregoryjcampbell/" target="_blank" rel="noreferrer noopener">Gregory J Campbell</a></li>
        </ul>
      </section>
    </main>
  );
};
