const co = require('co')
co(function* () {
  yield Promise.reject(new Error('boom'))
}).catch(onerror)


function onerror(err) {
  console.log('onerror', err.message)
}

co(function* () {
  var res = yield [
    1, 2, 3
  ];
  console.log(res); // => [1, 2, 3]
}).catch(onerror);