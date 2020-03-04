console.log("test")

async function getData () {
    const response = await fetch('https://192.168.8.100/api/vxqLmDqnSVpUbzNSTo7WljD0VlnqzORDTyuxtuZY/lights/3/state');
    const result = await response.json();
    return result;
};

document.addEventListener('DOMContentLoaded', async() => {
    const result = await getData();
    console.log(result)
});