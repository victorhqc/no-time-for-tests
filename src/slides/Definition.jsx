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
  <section>
    <h4>
      A set of functions designed to express the behavior of a specific piece of code.
    </h4>
  </section>
);

const MyDefinitionBefore = () => (
  <section>
    <h4>2 = 2</h4>
  </section>
);

const Duh = () => (
  <section data-background="https://media.giphy.com/media/aVtdz7iNVPI1W/giphy.gif">
    obviously
  </section>
);

const Definition = () => (
  <section>
    <SoftwareFundamentalsDefinition />
    <MyDefinition />
    <MyDefinitionBefore />
    <Duh />
  </section>
);

export default Definition;
