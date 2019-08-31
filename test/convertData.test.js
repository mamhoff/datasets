"use strict";

const convertData = require('../src/convertData');

describe("getItemDefinitions", () => {
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
})

describe("getData", () => {
  it("works on planet/greenhousegases/gwp", async () => {
    const data = await convertData.getData('planet/greenhousegases/gwp');
    expect(data.find((elem) => elem.gas == 'SF6')).toMatchObject(
      {
        "GWP": 23900.000,
        "formula": "SF6",
        "gas": "SF6",
        "gwp_4AR_100": 22800.000,
        "gwp_4AR_20": 16300.000,
        "gwp_4AR_500": 32600.000,
        "gwp_SAR_100": 23900.000,
        "name": "sulphur hexafluoride",
        "residenceTime": 3200.000,
        "source": "http://www.ipcc.ch/pdf/assessment-report/ar4/wg1/ar4-wg1-chapter2.pdf",
        "units": null
      }
    )
  })
})
