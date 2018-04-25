import React from 'react';

const testCode = `
import myFunction from './myReducer';

describe('my reducer', () => {
  it('needs to do something cool');

  it('should do some other cool stuff');

  it('Should handle an error');
});
`;

const TestsFirst = () => (
  <section>
    <h4>Tests first</h4>
    <pre>
      <code className="javascript" data-trim data-noescape>
        {testCode}
      </code>
    </pre>
  </section>
);

export default TestsFirst;
