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

test('works on business/waste/combustion/industrial', async () => {
  const data = await convertData.getItemDefinitions('business/waste/combustion/industrial');
  expect(data['includeAllCarbon']).toMatchObject(
    {
      "name": "Include all carbon",
      "path": "includeAllCarbon",
      "type": "TEXT",
      "isDataItemValue": false,
      "isDrillDown": false,
      "unit": null,
      "perUnit": null,
      "default": 'false',
      "choices": ['true', 'false']
    }
  )
})
