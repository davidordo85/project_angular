function doSomethingPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("do something that has taken a while...");
      let number = Math.random();
      if (number < 0.7) {
        resolve(number); // correcto
      } else {
        reject(number); // incorrecto
      }
    }, 2000);
  });
}

doSomethingPromise()
  .then((data) => {
    console.log("the result is", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
