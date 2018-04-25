import React, { Component } from 'react';
import reveal from 'reveal.js';
import hljs from 'highlight.js';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import 'highlight.js/styles/atom-one-dark.css';

import Intro from './_slides/Intro';
import About from './_slides/About';
import Definition from './_slides/Definition';
import UnitTestsApproaches from './_slides/UnitTestsApproaches';
import WhyAreImportant from './_slides/WhyAreImportant';
import TestPyramid from './_slides/TestPyramid';
import WhereDoIStart from './_slides/WhereDoIStart';
import Libraries from './_slides/Libraries';
import SimpleTest from './_slides/SimpleTest';
import Recommendations from './_slides/Recommendations';
import TestsFirst from './_slides/TestsFirst';
import CodeFirst from './_slides/CodeFirst';
import PracticalExample from './_slides/PracticalExample';
import Disadvantages from './_slides/Disadvantages';
import ThankYou from './_slides/ThankYou';

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
        <TestPyramid />
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
