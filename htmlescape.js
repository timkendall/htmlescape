/**
 * Proper escaping of JSON for usage as an object literal inside
 * of a `<script>` tag.
 *
 * js implementation of http://golang.org/pkg/encoding/json/#HTMLEscape
 *
 * more info: http://timelessrepo.com/json-isnt-a-javascript-subset
 */

'use strict';

var ESCAPE_LOOKUP = {
  '&': '\\u0026',
  '>': '\\u003e',
  '<': '\\u003c',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029'
};

var ESCAPE_REGEX = /[&><\u2028\u2029]/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

module.exports = function(obj) {
  return JSON.stringify(obj).replace(ESCAPE_REGEX, escaper);
};
