import React from 'react';

const SoftwareFundamentalsDefinition = () => (
  <section>
    <blockquote cite="http://softwaretestingfundamentals.com/unit-testing/">
      {'"'}
      Unit Testing is a level of software testing where individual units/ components of a software
      are tested. The purpose is to validate that each unit of the software performs as designed.
      {'"'}
      <footer>
        <cite>
          <a href="http://softwaretestingfundamentals.com/unit-testing/">
            softwaretestingfundamentals.com
          </a>
        </cite>
      </footer>
    </blockquote>
  </section>
);

const MyDefinition = () => (
  <section key="definition-2">
    <h4>
      A set of functions designed to express the behavior of a specific piece of code.
    </h4>
  </section>
);

const Definition = () => (
  <section>
    <SoftwareFundamentalsDefinition />
    <MyDefinition />
  </section>
);

export default Definition;
