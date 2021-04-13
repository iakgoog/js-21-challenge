(() => {
  // function simulateAsyncAPI(text, timeout) {
  //   setTimeout(() => console.log(text), timeout);
  // }

  // simulateAsyncAPI('A', 1000);
  // simulateAsyncAPI('B', 500);
  // simulateAsyncAPI('C', 100);

  // function simulateAyncAPI(text, timeout, callback) {
  //   setTimeout(() => {
  //     console.log(text);
  //     if (callback) {
  //       callback();
  //     }
  //   }, timeout);
  // }

  // simulateAyncAPI('A', 1000, () => {
  //   simulateAyncAPI('B', 500, () => {
  //     simulateAyncAPI('C', 100);
  //   });
  // });

  // function simulatAsyncAPI(text, timeout) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (text === 'B') return reject('B got rejected');
  //       console.log(text);
  //       resolve();
  //     }, timeout);
  //   });
  // }

  // simulatAsyncAPI('A', 1000)
  //   .then(() => {
  //     return simulatAsyncAPI('B', 500);
  //   })
  //   .then(() => {
  //     return simulatAsyncAPI('C', 100);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  function simulatAsyncAPI(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (text === 'B') return reject('B got rejected');
        console.log(text);
        resolve();
      }, timeout);
    });
  }

  async function run() {
    try {
      await simulatAsyncAPI('A', 1000);
      await simulatAsyncAPI('B', 500);
      await simulatAsyncAPI('C', 100);
    } catch (error) {
      console.error(error);
    }
  }

  run();
})();
