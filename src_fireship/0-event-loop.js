// Most would assume that these lines of code would run in order but instead the event loop specifies otherwise.
// This demonstrates the basic event loop cycle of the following lines of code:
// L1: Executed right away because it's on the main thread.
console.log('Synchronous 1');

// L2: Queued for a future task.
setTimeout(_ => console.log('Timeout 2'), 0);

// L3: Promised is being queued to run on the microqueue
Promise.resolve().then(_ => console.log('Promise 3'));

// L4: Executed right away
console.log('Synchronous 4');