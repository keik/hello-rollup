import a from './a'
import jquery from 'jquery'
import _ from 'lodash'

console.log('log from main.js');

a();

_.each([0, 1, 2], function(e) {
  console.log(`log from main.js w/ lodash.each (${e})`);
})

jquery(function() {
  console.log('log from main.js w/ jquery.ready');
})
