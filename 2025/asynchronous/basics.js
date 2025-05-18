console.log("hello");

import image1Path from "./img/img-1.jpg";
import image2Path from "./img/img-2.jpg";

// const countryName = "PORTUGAL";
// const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//   .then((response) => response.json())
//   .then((countrydata) => {
//     const [data] = countrydata;
//     // console.log(data);
//     return fetch(`https://restcountries.com/v3.1/name/${data.borders[0]}`);
//   })
//   .then((response) => response.json())
//   .then((data2) => {
//     const [data] = data2;
//     // console.log(data);
//   });

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds);
  });
};

// wait(1).then(() => console.log("waited for 1"));
// wait(2).then(() => console.log("waited for 2"));
// wait(3).then(() => console.log("waited for 3"));
const countries = document.querySelector(".countries");
const images = document.querySelector(".images");

const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imagePath;

    // if resolved appen image to images
    img.addEventListener("load", () => {
      images.append(img);
      resolve(img);
    });
    // if resolved appen image to images
    img.addEventListener("error", () => {
      reject(new Error(`image not found in path ${imagePath}`));
    });
  });
};

let currentImage;

// createImage(image1Path)
//   .then((img) => {
//     currentImage = img;
//     console.log("image1  loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return createImage(image2Path);
//   })
//   .then((newImg) => {
//     currentImage = newImg;
//     console.log("image2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//   })
//   .catch((err) => console.log(err));

const renderCountry = function (data) {
  console.log("data", data.name.common);
  const countryName = data.name.common;
  const languages = Object.values(data.languages).join(", ");
  const currenciesKeys = Object.keys(data.currencies);
  const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.png}"/>
            <div class="country_data">
                <h3 className="country__name">${countryName}</h3>
                <h4 className="country__region">${data.region}</h4>
                <p className="country__row"><span>👫</span>${(
                  Number(data.population) / 10000000
                ).toFixed(1)} million pople</p>
                <p className="country__row"><span>🗣️</span>${languages}</p>
                <p className="country__row"><span>💰</span>
                ${data.currencies[currenciesKeys[0]]["name"]} ${
    data.currencies[currenciesKeys[0]]["symbol"]
  }</p>
            </div>
        </articl>
    `;
  countries.insertAdjacentHTML("afterend", html);
};

const getPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// const whereAmI = async function (country)
const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: longi } = pos.coords;
  //   console.log(latitude, ", ", longitude);
  const resGeo = await fetch(`https://geocode.xyz/${lat},${longi}?geoit=json`);
  //   console.log("output geo", await resGeo.json());
  if (!resGeo.ok) throw new Error(resGeo.status);
  const dataGeop = await resGeo.json();
  //   console.log(dataGeop);
  const resp = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeop.country}`
  );
  const [data] = await resp.json();
  //   console.log(data);
  renderCountry(data);
  //   console.log(`2. You are in city ${dataGeop.city}`);
  return `2. You are in city ${dataGeop.city} ${dataGeop.country}`;
};

console.log(`1. Will get location`);
// whereAmI("INDIA"); // await only applies to the async function
// whereAmI().then((city) => console.log(city));
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.log(err.message);
  }
  console.log("3: after async: Finished Gettting the location");
})();

const getJSONResponse = (url, errMsg = "Something went wrong") => {
  return fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`${errMsg} (${resp.status})`);
      }
      return resp.json();
    })
    .catch(errMsg);
};

const timeout = (sec) => {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

// here api waits for one api to fulfill and then proceed to other in an order inside a function
const get3CountriesData = async (c1, c2, c3) => {
  try {
    const [data1] = await getJSONResponse(
      `https://restcountries.com/v3.1/name/${c1}`
    );
    const [data2] = await getJSONResponse(
      `https://restcountries.com/v3.1/name/${c2}`
    );
    const [data3] = await getJSONResponse(
      `https://restcountries.com/v3.1/name/${c3}`
    );
    console.log([data1.capital, data2.capital, data3.capital].join());
  } catch (error) {
    console.log(error);
  }
};
// get3CountriesData("INDIA", "AUSTRALIA", "Thailand");
//================================== PROMISES ===================================================================================================

// ==================== Run promises in Parallel ====================

//================================== PROMISE ALL ===================================================================================================

/*
1. Promise.all : trigger all promises and returns promises if all the promises gets fullfilled
                short circuits if either of the promises is rejected.
*/
const get3CountriesDataPromiseAll = async (c1, c2, c3) => {
  try {
    const data = await Promise.all([
      getJSONResponse(`https://restcountries.com/v3.1/name/${c1}`),
      getJSONResponse(`https://restcountries.com/v3.1/name/${c2}`),
      getJSONResponse(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    data.map((d) => console.log(d[0].capital));
  } catch (error) {
    console.log(error);
  }
};
// get3CountriesDataPromiseAll("INDIA", "AUSTRALIA", "Thailand");

//================================== PROMISE RACE ===================================================================================================
/**
 * 2. Promise.race: the prmoise is returns single promise as soons as one of the promise is settled/rejected
 * the winner of the race is returned
 *
 * SIMPLE WORDS: GIVE ME THE WINNER (GOOD OR BAD)
 */
//ex1
(async function () {
  const res = await Promise.race([
    getJSONResponse(`https://restcountries.com/v3.1/name/germany`),
    getJSONResponse(`https://restcountries.com/v3.1/name/italy`),
    getJSONResponse(`https://restcountries.com/v3.1/name/japan`),
  ]);
  console.log("race::::", res[0]);
})();

//EX 2
Promise.race([
  getJSONResponse("https://restcountries.com/v3.1/name/egypt"),
  timeout(0.05),
])
  .then((res) => console.log(res))
  .catch((err) => console.log("timeout race demo response", err));

//================================== PROMISE ALL SETTLED ===================================================================================================
/**
 *  Promise all settled returns all settled promises waits for promises to get (resolve or reject)
 *  SIMPLE WORDS: I DONT CARE I NEED EVERYTHIG FAIL AND PASS
 */
Promise.allSettled([
  Promise.resolve("allsettled:::: SUCCESS"),
  Promise.reject("allsettled:::: ERROR"),
  Promise.resolve("allsettled:::: ANOTHER SUCCESS"),
])
  .then((out) => console.log(out))
  .catch((err) => console.log(err));
// OUTPUT: [SUCCESS,ERROR,ANOTHER SUCCESS]

/** ALL will come out as soon as one of the promise get rejected
 * SIMPLE words all or nothing
 *
 */
Promise.all([
  Promise.resolve("ALL:::: SUCCESS"),
  Promise.reject("ALL:::: ERROR"),
  Promise.resolve("ALL:::: ANOTHER SUCCESS"),
])
  .then((out) => console.log(out))
  .catch((err) => console.log(err));
// output:[ERROR]

//================================== PROMISE ANY ===================================================================================================
/** RETURNS FIRST SUCCESSFUL OR RESOLVED PROMISE
 * SIMPLE WORDS I WANT THE WINNER
 *
 */

Promise.any([
  Promise.reject("any:::: ERROR"),
  Promise.resolve("any:::: ANOTHER SUCCESS"),
  Promise.resolve("any:::: SUCCESS"),
])
  .then((out) => console.log(out))
  .catch((err) => console.log(err));
// output:[ERROR]
