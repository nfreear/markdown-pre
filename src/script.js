/*!
  markdown-pre | © Nick Freear, 02-Jun-2019 | License: MIT.
*/

const DOC = window.document;

// enable everything
const MarkdownIt = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

const $PRE = DOC.querySelector('pre');

const $DEST = DOC.createElement('div');
const $STYLE = DOC.createElement('link');

const SRC = $PRE.innerText;
const HTML = MarkdownIt.render(SRC);

$DEST.innerHTML = HTML;

$PRE.className += ' markdown-pre-js-src';
$DEST.className = 'markdown-pre-js-out';

$STYLE.rel = 'stylesheet';
$STYLE.href = getStylesheetUrl();

DOC.body.insertBefore($DEST, $PRE);
DOC.body.appendChild($STYLE);

// Was: console.warn('markdown-pre:', $PRE, $DEST);

// ------------------------------

function getStylesheetUrl() {
  const IS_CDN_TEST = /\?test=data-cdn/.test(window.location.href);
  const $_SCRIPT = DOC.querySelector(
    IS_CDN_TEST ? 'script[ data-cdn-src ]' : 'script[ src *= markdown-pre ]'
  );

  const SCRIPT_URL = $_SCRIPT.getAttribute(
    IS_CDN_TEST ? 'data-cdn-src' : 'src'
  );
  const M_URL = SCRIPT_URL.match(/-pre@[^.]*$/);

  return SCRIPT_URL + (M_URL ? '' : '/../..') + '/src/style.css';
}

// End.
