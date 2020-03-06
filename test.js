const fetch = require("node-fetch");

var rootCas = require('ssl-root-cas/latest').create();
 

 
// will work with all https requests will all libraries (i.e. request.js)
require('https').globalAgent.options.ca = rootCas;

const urlHue =
  "https://192.168.8.100/api/vxqLmDqnSVpUbzNSTo7WljD0VlnqzORDTyuxtuZY/lights/3/state";
const tester = async () => {
  try {
    let sentiments = await fetch(urlHue, {
      method: "PUT",
      body: JSON.stringify({ on: false })
    });
    let data = await sentiments.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
tester();

/* async function getData() {
  const response = await fetch(
    "https://192.168.8.100/api/vxqLmDqnSVpUbzNSTo7WljD0VlnqzORDTyuxtuZY/lights/3/state",
    {
      method: "PUT",
      body: JSON.stringify({ on: false })
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
}
getData(); */

// document.addEventListener("DOMContentLoaded", async () => {
//     const result =  getData();
//     // console.log(result);
// });
/* async () => {
  const result = await getData();
  console.log(result);
}; */










/* function test() {
  fetch(
    "https://192.168.8.100/api/5k7o8TN2MDCRfxpFXGXXRlVsJRdOo10Mfs1ShA0O/groups/3/action",
    {
      method: "put",
      body: JSON.stringify({ on: false })
    }
  )
    .then(res => res.json())
    .then(state => {
      console.log(state);
    });
}
test() */
