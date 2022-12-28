function resolveAfter2Seconds() {
  console.log("starting slow ");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");

  // ====== Execution gets here
  const slow = await resolveAfter2Seconds();
  console.log(slow); // This runs 2 seconds after 1

  const fast = await resolveAfter1Second();
  console.log(fast); // This runs 3 seconds after 1
}

async function concurrentStart() {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // ===== Execution gets here
  console.log(await slow); // this runs 2 seconds after 1
  console.log(await fast); //  this runs 2 seconds after 1, immediately after 2, since fast is already resolved
}

function concurrentPromise() {
  console.log("==CONCURRENT START with Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    }
  );
}

async function parallel() {
  console.log("==PARALLEL with await Promise.all==");

  // Start 2 parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"



