import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Contact - Gregory Campbell';
    
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
    <main className="contact-page">
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

export default Contact;

