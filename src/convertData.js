const fs = require('fs');
const neatCsv = require('neat-csv');

async function getItemDefinitions(path) {
  const csvData = fs.readFileSync(path + "/itemdef.csv", "utf8");
  const parsedCsv = await neatCsv(csvData, {
    mapValues: ({ header, index, value }) => {
      if (value === "") {
        return null;
      } else if (header.startsWith('is')) {
        return value == "true"
      } else if (header === "choices") {
        return value.split('|')
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

async function getData(path) {
  const itemDefinitions = await getItemDefinitions(path)
  const csvData = fs.readFileSync(path + "/data.csv", "utf8");
  const parsedCsv = await neatCsv(csvData, {
    mapValues: ({ header, index, value }) => {
      if (value === "") {
        return null;
      } else if (header.startsWith('is')) {
        return value == "true"
      } else if (itemDefinitions[header].type === "DECIMAL") {
        return parseFloat(value)
      } else {
        return value.trim()
      }
    }
  })
  return parsedCsv;
}

module.exports = { getData, getItemDefinitions }
