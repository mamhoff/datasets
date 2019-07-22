The AMEE category /transport/byFuel/ipcc/offroad contains data and a
methodology sourced from the IPCC [Guidelines for National Greenhouse
Gas Inventories](http://www.ipcc-nggip.iges.or.jp/) for calculating
emissions associated with fuel used in off-road transport contexts.

-----

## Using this methodology

### Choosing a specific activity type

To use this category, select the fuel type and use context using the
*fuel* and *useContext* drill options. The following three fuels are
available:

  - 'diesel'

<!-- end list -->

  - 'motor gasoline 4-stroke'

<!-- end list -->

  - 'motor gasoline 2-stroke'

while the following four contexts can be selected:

  - 'agriculture'

<!-- end list -->

  - 'forestry'

<!-- end list -->

  - 'industry'

<!-- end list -->

  - 'household'

### Activity data required

Next, specify the quantity of fuel consumed. This can be specified
either as a volume, using the ***volumeConsumed*** profile item value,
or directly as a quantity of energy, using the ***energyConsumed***
profile item value.

### Calculation and result

The returned quantities for this methodology represent CO<sub>2</sub>, CH<sub>4</sub>
and N<sub>2</sub>O emissions associated with the specified quantity of fuel.
The following discrete **amounts** are returned:

  - ***CO2***: CO<sub>2</sub> emissions
  - ***CH4***: CH<sub>4</sub> (methane) emissions
  - ***N2O***: N<sub>2</sub>O (nitrous oxide) emissions
  - ***CO2e***: CO<sub>2</sub>e emissions (all three gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantities for CH<sub>4</sub> and N<sub>2</sub>O represent *absolute
quantities* rather than CO<sub>2</sub>e quantities.
