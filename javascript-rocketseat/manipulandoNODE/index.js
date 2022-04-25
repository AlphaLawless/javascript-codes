const fs = require('fs');

fs.readFile("../package-lock.json", 'utf8', (_err, data) => {
  const {packages} = JSON.parse(data)
  console.log(Object.keys(packages).filter(package => package !== "").join(",\n"))
})
