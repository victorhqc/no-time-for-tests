/* eslint global-require: 0 */

if (process.env.REACT_APP_APPLICATION) {
  module.exports = require('./components/App');
} else {
  module.exports = require('./Presentation');
}
