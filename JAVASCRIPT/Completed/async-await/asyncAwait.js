function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making call to location "${location}"`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information +  ${response}`);
  });
}

//Making request using Promises chaining
// makeRequest("Google")
//   .then((response) => {
//     console.log(`Response Received`);
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//using asyn await all we have do is
async function doWork() {
  try {
    const response = await makeRequest("Facebook");
    console.log("<< Response Received");
    const processResponse = await processRequest(response);
    console.log(">>", processResponse);
  } catch (error) {
    //handle Promise rejects and errors
    console.log(error);
  }
}

doWork();
