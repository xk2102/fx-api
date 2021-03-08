// npm i node-fetch --save
const fetch = require("node-fetch");

var url = "https://api.exchangeratesapi.io/latest?base=USD";

async function run() {
  var response = await fetch(url);
  var jsonData = await response.json();
  console.log(jsonData);
}

run();
