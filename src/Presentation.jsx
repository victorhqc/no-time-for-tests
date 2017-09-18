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
import Libraries from './slides/Libraries';
import SimpleTest from './slides/SimpleTest';

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
        <Libraries />
        <SimpleTest />
        <UnitTestsApproaches />
      </div>
    );
  }
}

export default Presentation;
