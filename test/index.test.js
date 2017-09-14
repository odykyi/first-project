var a = 1;
var b = 2;
var result = require('../src/index')(a,b);

if (result === 3) {
  console.log('ok');
} else {
  throw new Error('fuck you!!');
}