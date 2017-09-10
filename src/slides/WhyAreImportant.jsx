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
      <li className="fragment">Can help a lot for debugging.</li>
      <li className="fragment">Easier to design code.</li>
      <li className="fragment">Help to detect flaws or errors.</li>
      <li className="fragment">Best documentation ever.</li>
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
