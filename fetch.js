const fetch = require("node-fetch");
const url = "https://192.168.8.100/api/vxqLmDqnSVpUbzNSTo7WljD0VlnqzORDTyuxtuZY/lights/3/state";

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getData(url);