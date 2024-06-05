console.log('Hello');

setTimeout(() => {
  console.log('World');
}, 2000);

console.log('!');

/**Callbacks */
function connectToDatabase() {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('connect to the database!');
  }, randomTime);
}

function queryData() {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() =>{
    console.log('query the data!');
  }, randomTime);
}

connectToDatabase();
queryData();

// If we doing SourceBuffer, the queryData will be executed before the connectToDatabase() so to fix this what we can do is

function connectToDatabase() {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('connect to the database!');
    queryData();
  }, randomTime);
}

function queryData() {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() =>{
    console.log('query the data!');
  }, randomTime);
}

connectToDatabase();

// Adding Parameters
function connectToDatabase(queryFunction, queryParameter) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('connect to Database');
    queryFunction(queryParameter);
  }, randomTime);
}

function queryData(query) {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() =>{
    console.log(query);
  }, randomTime);
}

connectToDatabase(queryData, 'query data');

/* Promises */
// Resolve and Then
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log('A');
      resolve(); // call "resolve" because we have completed the function successfully
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then(() => {
  console.log('outputA resolved!');
});

// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log('A');
      resolve('outputA resolved!'); // call "resolve" because we have completed the function successfully
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then((data) => {
  console.log(data);
});

//Overall 
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve('A') : reject('Error with outputA()');
    }, randomTime);
  });
}

// output "B" after a random time between 0 & 3 seconds
function outputB() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve('B') : reject('Error with outputB()');
    }, randomTime);
  });
}

// output "C" after a random time between 0 & 3 seconds
function outputC() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve('C') : reject('Error with outputC()');
    }, randomTime);
  });
}

outputA()
  .then((data) => {
    console.log(data); // output the result of "outputA()" to the console
    return outputB();
  })
  .then((data) => {
    console.log(data); // output the result of "outputB()" to the console
    return outputC();
  })
  .then((data) => {
    console.log(data); // output the result of "outputC()" to the console
  })
  .catch((err) => {
    console.log(err); // output the error to the console
  });


// await
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();