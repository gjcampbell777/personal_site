import React from 'react';

export const NoMatch = () => {
  return (
    <div className="notfound-page">

      <header>
        <h1>404 ERROR</h1>
        <p>Hey, you shouldn't be here!</p>
      </header>
      <section>
        <p>Don't know how you got here, but you should probably head back.</p>
      </section>
    </div>
  );
};

export default NoMatch;
