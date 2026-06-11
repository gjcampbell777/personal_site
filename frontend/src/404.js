import React from 'react';
import { Helmet } from 'react-helmet-async';

export const NoMatch = () => {
  return (
    <main className="notfound-page">
      <Helmet>
        <title>404 Error</title>
      </Helmet>

      <header>
        <h1>404 ERROR</h1>
        <p>Hey, you shouldn't be here!</p>
      </header>
      <section>
        <p>Don't know how you got here, but you should probably head back.</p>
      </section>
    </main>
  );
};
