"use strict";

const convertData = require('../src/convertData');

test('works on planet/greenhousegases/gwp', async () => {
  const data = await convertData.getItemDefinitions('planet/greenhousegases/gwp');
  expect(data['gas']).toMatchObject(
    {
      "name": "Gas",
      "path": "gas",
      "type": "TEXT",
      "isDataItemValue": true,
      "isDrillDown": true,
      "unit": null,
      "perUnit": null,
      "default": null,
      "choices": null
    }
  )
})
