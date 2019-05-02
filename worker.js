// const fetchPolifyll = require('whatwg-fetch');
//
// if (!window.fetch) {
//   fetch = fetchPolifyll;
// }

onmessage = function(e) {
  console.log('Worker: Test fetch');
  fetch('https://api.github.com')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
    console.log('Worker: parsed json', json)
  }).catch(function(ex) {
    console.log('Worker: parsing failed', ex)
  })

  console.log('Worker: Message received from main script');
  let result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    let workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
  }


}
