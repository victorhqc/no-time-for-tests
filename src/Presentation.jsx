import React, { Component } from 'react';
import reveal from 'reveal.js';
import hljs from 'highlight.js';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import 'highlight.js/styles/atom-one-dark.css';

import Intro from './slides/Intro';
import About from './slides/About';
import Definition from './slides/Definition';
import UnitTestsApproaches from './slides/UnitTestsApproaches';
import WhyAreImportant from './slides/WhyAreImportant';
import WhereDoIStart from './slides/WhereDoIStart';
import Libraries from './slides/Libraries';
import SimpleTest from './slides/SimpleTest';
import Recommendations from './slides/Recommendations';
import TestsFirst from './slides/TestsFirst';
import CodeFirst from './slides/CodeFirst';
import PracticalExample from './slides/PracticalExample';
import Disadvantages from './slides/Disadvantages';
import ThankYou from './slides/ThankYou';

class Presentation extends Component {

  componentDidMount() {
    reveal.initialize({
      controls: true,
      progress: true,
    });

    hljs.initHighlightingOnLoad();
  }

  render() {
    return (
      <div className="slides">
        <Intro />
        <About />
        <Definition />
        <WhyAreImportant />
        <WhereDoIStart />
        <Libraries />
        <SimpleTest />
        <UnitTestsApproaches />
        <TestsFirst />
        <CodeFirst />
        <PracticalExample />
        <Disadvantages />
        <Recommendations />
        <ThankYou />
      </div>
    );
  }
}

export default Presentation;
