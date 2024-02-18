//import { executeFunc } from "./module.js";

const promise = new Promise((resolve, reject) => {
  let greatSuccess = false;
  if (greatSuccess) {
    resolve("success");
  } else reject("failed");
});

//Option 2
promise
  .then((sucess) => {
    console.log("Good job: ", sucess);
  })
  .catch((err) => console.error("Error: ", err));

//Option 1
async function asyncFun() {
  //error handling
  try {
    const result = await promise;
    console.log(result);
  } catch (e) {
    console.error("Error: ", e);
  }
}

asyncFun();
//executeFunc();

const fecthCountries = new Promise((resolve, reject) => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error("failed");
    })
    .then((countryData) => {
      resolve(countryData);
    })
    .catch((error) => {
      reject(error);
    });
});

const getCountries = async () => {
  try {
    const countries = await fecthCountries;
    console.log(countries);
  } catch (e) {}
};

getCountries();
