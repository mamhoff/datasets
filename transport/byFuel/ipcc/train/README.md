The AMEE category /transport/byFuel/ipcc/train contains data on
emissions associated with train fuel consumption, sourced from the IPCC
[Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/). This category enables
emissions calculations for CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O based on train
engine type and age.

-----

## Using this methodology

### Choosing a specific activity type

To use this category, specify the fuel and engine type using the *fuel*
and *engineType* drill options.

### Activity data required

Next set quantity consumed using the ***energyConsumed*** profile item
value. Users can additionally specify the train age by setting the
***age*** profile item value. In this case, AMEE modifies the emissions
factor for CH<sub>4</sub> to account for the extra emissions which arise as a
function of the engine age. For each additional year of age, CH<sub>4</sub>
emissions are increased by 1.5%.

### Calculation and result

The returned quantities for this methodology represent CO<sub>2</sub>, CH<sub>4</sub>
and N<sub>2</sub>O emissions associated with the specified quantity of energy
and train age. The following discrete **amounts** are returned:

  - ***CO2***: CO<sub>2</sub> emissions
  - ***CH4***: CH<sub>4</sub> (methane) emissions
  - ***N2O***: N<sub>2</sub>O (nitrous oxide) emissions
  - ***CO2e***: CO<sub>2</sub>e emissions (all three gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantities for CH<sub>4</sub> and N<sub>2</sub>O represent *absolute
quantities* rather than CO<sub>2</sub>e quantities.
