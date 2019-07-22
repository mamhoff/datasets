The AMEE category /transport/byFuel/ipcc/ship contains data and a
methodology sourced from the IPCC [Guidelines for National Greenhouse
Gas Inventories](http://www.ipcc-nggip.iges.or.jp/) for calculating
emissions associated with fuel used in water-borne transport contexts.

-----

## Using this methodology

### Choosing a specific activity type

To use this category, select the fuel type and use context using the
*fuel* and *useContext* drill options. At present, only a single item is
available representing a 'diesel' powered (the *fuel* drill option)
'ocean-going ship' (*useContext*).

### Activity data required

Next, specify the quantity of fuel consumed. This can be specified
either as a volume, using the ***volumeConsumed*** profile item value,
or directly as a quantity of energy, using the ***energyConsumed***
profile item value.

### Calculation and result

The returned quantities for this methodology represent CO,,2,,, CH,,4,,
and N,,2,,O emissions associated with the specified quantity of fuel.
The following discrete **amounts** are returned:

  - ***CO2***: CO,,2,, emissions
  - ***CH4***: CH,,4,, (methane) emissions
  - ***N2O***: N,,2,,O (nitrous oxide) emissions
  - ***CO2e***: CO,,2,,e emissions (all three gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantities for CH,,4,, and N,,2,,O represent *absolute
quantities* rather than CO,,2,,e quantities.
