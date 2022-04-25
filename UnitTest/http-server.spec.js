const http = require("http");
const assert = require("assert");

http
  .request("http://localhost:8000", (res) => {
    const chucks = [];
    res.on("data", (chuck) => chucks.push(chuck));

    res.on("end", () => {
      const body = chucks.join("");
      console.log("Integration test with localhost:8000 === hello world!");
      console.log(body);
      assert(body === "Hello World!");
    });
  })
  .end();
