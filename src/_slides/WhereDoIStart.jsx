import React from 'react';

const testCode = `
  function add(number1, number2) {
    return number1 + number2;
  }
`;

const TestsWhenNewPeopleCome = () => (
  <section>
    <p>2 + 2 = 4</p>
    <pre className="fragment">
      <code className="javascript" data-trim data-noescape>
        {testCode}
      </code>
    </pre>
    <p className="fragment" style={{ color: 'crimson' }}>2 + 3 = 4 !</p>
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
    <TestsWhenNewPeopleCome />
  </section>
);

export default WhyAreImportant;
