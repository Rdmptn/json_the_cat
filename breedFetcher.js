const breed =  process.argv.slice(2,3)
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
  const data = JSON.parse(body);
  if (error) {
    console.log("Error: ", error);
  } else if (data[0] === undefined) {
    console.log("Breed not found!");
  } else {
    console.log("Description: " + data[0].description);
  }
});
  

