// WebLearn Hub Root Content Database Registry
const webBasicsLessons = require('./data/web-basics.js');
const htmlLessons = require('./data/html.js');
const cssLessons = require('./data/css.js');
const responsiveLessons = require('./data/responsive.js');
const bootstrapLessons = require('./data/bootstrap.js');
const tailwindLessons = require('./data/tailwind.js');
const javascriptLessons = require('./data/javascript.js');
const jsLogicProblems = require('./data/js-logic.js');
const extras = require('./data/extras.js');

module.exports = {
  webBasicsLessons,
  htmlLessons,
  cssLessons,
  responsiveLessons,
  bootstrapLessons,
  tailwindLessons,
  javascriptLessons,
  jsLogicProblems,
  ...extras
};
