**Grid electricity methodology. Calculates carbon dioxide (CO<sub>2</sub>)
emissions associated with the generation of grid electricity. China.**

## Summary

This methodology represents CO<sub>2</sub> emissions associated with the
production of grid electricity in China. The data is based upon the
[Greenhouse Gas
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools)
purchased electricity worksheet, version 4.2, published in July 2011.

## The methodology

### Emissions model

This methodology is based upon emissions factors which represent the
rate at which emissions occur in relation to quantities of electricity
consumed. Multiplying a quantity of electricity consumed by these
emissions factors results in an estimate of the emissions associated
with that quantity.

### Model data

The emissions intensity of grid electricity in China varies according to
specfic grid sub-regions. Each grid sub-region is represented by it's
own characteristic emissions intensity related to the specific mix of
generating technologies employed wihtin each region. This information is
described within an [associated dataset](Electricity_China_By_Grid).
This methodology contains a mapping from Chinese provinces to
sub-regions of the Chinese grid network, thereby enabling the
calculation of electricity associated emissions on the basis of state.
30 Indian states are represented, each mapped to one of 7 grid
sub-regions which is, in-turn, represented by a characteristic CO<sub>2</sub>
emissions intensity.

### Activity data required

The quantity of electricity generated is required to make a calculation.

The Greenhouse Gas Protocol worksheets additionally provide
functionality for the accounting of electricity usage in shared
facilities. This calculation is based on the proportion of floor area
which is under consideration (e.g. square feet of office space). In this
case the 'responsible' and 'total' areas should also be provided.

### Calculation and result

By default, the quantity returned represents the CO<sub>2</sub> emissions
associated with the state and the total quantity of energy specified. If
values for the 'responsible' and 'total' areas are provided the returned
value represents just the emissions attributable to the area under
consdsideration.
