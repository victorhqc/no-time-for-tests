import React, { Component } from 'react';
import reveal from 'reveal.js';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import Intro from './sections/Intro';
import About from './sections/About';
import Definition from './sections/Definition';

class App extends Component {

  componentDidMount() {
    reveal.initialize({
      controls: true,
      progress: true,
    });
  }

  render() {
    return (
      <div className="slides">
        <Intro />
        <About />
        <Definition />
      </div>
    );
  }
}

export default App;
