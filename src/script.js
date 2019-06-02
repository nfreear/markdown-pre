/*!
  markdown-pre | © Nick Freear, 02-Jun-2019 | License: MIT.
*/

const DOC = window.document;

// enable everything
const MD = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

const $PRE = DOC.querySelector('pre')
const $SCRIPT = DOC.querySelector('script[ src *= markdown-pre ]')

const $DEST = DOC.createElement('div')
const $STYLE = DOC.createElement('link')

const SRC = $PRE.innerText
const HTML = MD.render(SRC)

$DEST.innerHTML = HTML;

$PRE.className += ' markdown-pre-js-src';
$DEST.className = 'markdown-pre-js-out';

$STYLE.rel = 'stylesheet';
$STYLE.href = $SCRIPT.src + '/../../src/style.css';

DOC.body.insertBefore($DEST, $PRE)
DOC.body.appendChild($STYLE)

console.warn('markdown-pre:', $PRE, $DEST)

// End.
