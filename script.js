const img = document.querySelector("img");
const ssid = document.querySelector(".ssid");
const password = document.querySelector(".password");

function update() {
  const wifi = `WIFI:T:WPA;S:${ssid.value};P:${password.value};;`;
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${wifi}`;
}

ssid.addEventListener("keyup", update);

password.addEventListener("keyup", update);
