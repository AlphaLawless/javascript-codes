const fs = require('fs');

const consoleLog = console.log;

const filterValidPackageNAME = (package) => package !== "";

const handleData = (_err, data) => {
  const {packages} = JSON.parse(data)

  const packageNames = Object.keys(packages);

  consoleLog(packageNames.filter(filterValidPackageNAME).join(",\n"));
}

fs.readFile("../package-lock.json", 'utf8', handleData)
