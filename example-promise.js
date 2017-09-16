// function getTempCallback (location, callback) {
//   callback(undefined, 20);
//   callback('City not found');
// }
//
// getTempCallback('Paris', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(22);
//       reject('City not found.');
//     }, 1000);
//   });
// }
//
// getTempPromise('Paris').then(function(temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise Error', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not a Number');
    }
  });
}

addPromise(9, 6).then(function(add) {
  console.log('Added Numbers', add);
}, function (err) {
  console.log('Error : ', err);
});
