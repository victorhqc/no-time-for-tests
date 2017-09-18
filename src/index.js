/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import RenderedComponent from './RenderedComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RenderedComponent />, document.getElementById('root'));
registerServiceWorker();
