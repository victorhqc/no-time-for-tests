/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Slides from './Slides';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Slides />, document.getElementById('root'));
registerServiceWorker();
