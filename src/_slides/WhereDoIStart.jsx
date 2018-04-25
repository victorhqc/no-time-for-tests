import React from 'react';

const Interesting = () => (
  <section data-background="http://media.giphy.com/media/y3QOvy7xxMwKI/giphy.gif">
    Interesting...
  </section>
);

const NiceThingsAboutTesting = () => (
  <section>
    <p>Where do I start?</p>
    <p>What can I test?</p>
    <p><span role="img" aria-label="thinking face">
      🤔
    </span></p>
    <ul>
      <li className="fragment">Everything you code.</li>
      <li className="fragment">Single responsibility principle.</li>
      <li className="fragment">Pure functions / Avoid side effects.</li>
    </ul>
  </section>
);

const WhyAreImportant = () => (
  <section>
    <NiceThingsAboutTesting />
    {/* <Interesting /> */}
  </section>
);

export default WhyAreImportant;
