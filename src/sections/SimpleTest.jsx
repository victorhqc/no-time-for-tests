import React from 'react';

const simpleCode = `
const calculateCircleArea = (radius) =>
  Math.PI * Math.pow(radius, 2);

describe('calculateCircleArea', () => {
  it('Should calculate a circle area', () => {
    const radius = 3;

    expect(calculateCircleArea(radius))
      .toBe(28.274333882308138);
  });
});
`;

const NotAmused = () => (
  <section data-background="https://media.giphy.com/media/7GPV80dC4GCNq/giphy.gif">
    <p>I{'\''}ve seen that before</p>
  </section>
);

const CodeExample = () => (
  <section>
    <h4>A Simple Test</h4>
    <pre>
      <code className="javascript" data-trim data-noescape>
        {simpleCode}
      </code>
    </pre>
  </section>
);

const SimpleTest = () => (
  <section>
    <CodeExample />
    <NotAmused />
  </section>
);

export default SimpleTest;
