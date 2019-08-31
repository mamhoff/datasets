const fs = require('fs');
const neatCsv = require('neat-csv');

export async function getItemDefinitions(path) {
  const csvData = fs.readFileSync(path + "/itemdef.csv", "utf8");
  const parsedCsv = await neatCsv(csvData, {
    mapValues: ({ header, index, value }) => {
      if (value === "") {
        return null;
      } else if (header.startsWith('is')) {
        return value == "true"
      } else {
        return value
      }
    }
  })
  const returnValue = {}
  parsedCsv.forEach((element) => {
    returnValue[element.path] = element
  })
  return returnValue;
}
