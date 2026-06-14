import React, { useEffect } from 'react';
import meImage from '../assets/Me.jpg';

const Home = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Home - Gregory Campbell';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Personal website and portfolio of Gregory Campbell.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Personal website and portfolio of Gregory Campbell.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <main className="home-page">
      <section>
        <h2>Welcome to the personal website of Gregory Campbell</h2>
        <p>I hope you enjoy everything it has to offer.</p>
      </section>

      <section>
        <h3>Finished projects viewable on this site</h3>
        <ul>
          <li>This website which is written in React, hosted on AWS through Amplify and adapts well to mobile.</li>
          <li>I also added a HTML and downloadable PDF version of my resume on the Resume page.</li>
          <li>Check out the many projects on the Projects tab.</li>
        </ul>
      </section>

      <section>
        <img
          src={meImage}
          alt="Portrait of Gregory Campbell"
          loading="lazy"
          decoding="async"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />
      </section>
    </main>
  );
};

export default Home;

