//Promise in JS:
/*
    Promise -states: 
        . Resolve
        .Reject

*/
const user = {
  name: "Vinid",
  age: 16,
  documentValidated: false,
};

function isEligibleForLicense(callback, errorCallback) {
  if (user.age <= 18) {
    errorCallback({
      msg: "Below 18 yr old",
      code: 110,
    });
  } else {
    callback("Elible for License");
  }
}

function isEligibleForLicensePromise() {
  return new Promise((resolve, reject) => {
    if (user.age <= 18) {
      reject({
        msg: "Below 18 yr old",
        code: 110,
      });
    } else {
      resolve("Elible for License");
    }
  });
}

// function call
isEligibleForLicense(
  //callbackFn
  (message) => {
    console.log("Elible: " + message);
  },
  //errorCallback
  (error) => {
    console.log("Not Eligible: '" + error.msg + "'| err code " + error.code);
  }
);

//Promise call
isEligibleForLicensePromise()
  .then((message) => console.log("isEligible: " + message))
  .catch((error) => {
    console.log("Sorry: '" + error.msg + "'| err code " + error.code);
  });

/**
 * Example : 2
 * all promise retur resove.
 *
 */
const recordVideOne = new Promise((resolve, reject) => {
  setTimeout(() => {}, 3000);
  resolve("Video 1 recorded");
});

const recordVideTwo = new Promise((resolve, reject) => {
  setTimeout(() => {}, 2000);
  resolve("Video 2 recorded");
});

const recordVideThree = new Promise((resolve, reject) => {
  setTimeout(() => {}, 1000);
  resolve("Video 3 recorded");
});

Promise.all([recordVideOne, recordVideTwo, recordVideThree])
  .then((messages) => {
    //returns array of resolved arguments
    console.log(messages);
  })
  .catch((errors) => {
    console.log(errors);
  });

// Return the first resolved promise
Promise.race([recordVideOne, recordVideTwo, recordVideThree])
  .then((messages) => {
    //returns array of resolved arguments
    console.log(messages);
  })
  .catch((errors) => {
    console.log(errors);
  });
