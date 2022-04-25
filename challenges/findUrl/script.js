const fs = require("fs");

let keys = "012345681abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let arr = keys.split("");

const list = [];

arr.forEach((item) => {
  for (let i = 0; i < item.length; i++) {
    list.push(`http://awsaome.co/aaeqr391${item}`).toString();
  }
});

fs.writeFile("arquivo.txt", list, (err) => {
  if (err) throw err;
});

if (list == "http://awsaome.co/aaeqr391Z") {
  console.log("Find");
}
