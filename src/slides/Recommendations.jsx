import React from 'react';

const Recommendations = () => (
  <section>
    <h4>Unit Test Recommendations</h4>
    <ul>
      <li className="fragment">Meaningful title</li>
      <li className="fragment">All tests need to be atomic</li>
      <li className="fragment">Better to repeat code</li>
      <li className="fragment">
        If the code is difficult to test, probably there is too much complexity in the same place
        or tight coupling
      </li>
      <li className="fragment">Pure functions work better (deterministic code)</li>
      <li className="fragment">Less mocks is better</li>
      <li className="fragment">Use code coverage tool</li>
    </ul>
  </section>
);

export default Recommendations;
