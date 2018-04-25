import React from 'react';

const Interesting = () => (
  <section data-background="http://media.giphy.com/media/y3QOvy7xxMwKI/giphy.gif">
    Interesting...
  </section>
);

const NiceThingsAboutTesting = () => (
  <section>
    <p>Ok, so why all the fuss about them?</p>
    <ul>
      <li className="fragment">Help debugging.</li>
      <li className="fragment">Help designing code.</li>
      <li className="fragment">Help to detect flaws or errors.</li>
      <li className="fragment">Best documentation ever.</li>
      <li className="fragment">Refactors are trivial.</li>
    </ul>
  </section>
);

const WhyAreImportant = () => (
  <section>
    <NiceThingsAboutTesting />
    <Interesting />
  </section>
);

export default WhyAreImportant;
