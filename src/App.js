import React, { Component } from 'react';
import reveal from 'reveal.js';

import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import Intro from './sections/Intro';
import About from './sections/About';

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
      </div>
    );
  }
}

export default App;
