const { getData, getItemDefinitions } = require('./convertData')
const fs = require('fs').promises;
const mkdir = require('fs').mkdirSync
const path = require('path');
const glob = require('glob');

// create the packages directory in which all packages reside
mkdir('packages');

// find package names
// packageSourcePaths = [path.join("planet", "greenhousegases", "gwp")];
const packageSourcePaths = glob.
  sync('**/itemdef.csv').
  map((file) => path.dirname(file)).
  filter((dirname) => !dirname.match(/metadata/))

packageSourcePaths.forEach(async (modelPath) => {
  getItemDefinitions('transport/van/generic')

  const packageName = modelPath.replace(new RegExp(path.sep, 'g'), '-');
  const packageDir = path.join('packages', packageName)
  await fs.mkdir(packageDir);
  const itemDefinitionsJSON = JSON.stringify(await getItemDefinitions(modelPath), null, "\t");
  const dataJSON = JSON.stringify(await getData(modelPath), null, "\t")
  await fs.writeFile(path.join(packageDir, "itemDefinitions.json"), itemDefinitionsJSON);
  await fs.writeFile(path.join(packageDir, "data.json"), dataJSON);
});
