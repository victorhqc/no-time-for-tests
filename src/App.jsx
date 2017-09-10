import React, { Component } from 'react';
import reveal from 'reveal.js';
import hljs from 'highlight.js';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import 'highlight.js/styles/atom-one-dark.css';

import Intro from './sections/Intro';
import About from './sections/About';
import Definition from './sections/Definition';
import WhyAreImportant from './sections/WhyAreImportant';
import Libraries from './sections/Libraries';
import SimpleTest from './sections/SimpleTest';

class App extends Component {

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
      </div>
    );
  }
}

export default App;
