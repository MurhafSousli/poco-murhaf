let x = new Promise(function (resolve, reject) {
  // Execute some code
  let value = 1 + 10;

  if (value > 10) {
    reject();
  } else {
    resolve(value);
  }
});

x.then(function (value) {
  console.log('Promise is resolved!', value);
});

x.catch(function (reason) {
  console.log('Error', reason);
})
