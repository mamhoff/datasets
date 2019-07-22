The AMEE category at business/waste/water/n2o provides a methodology for
calculating the quantity of nitrous oxide (N,,2,,O) emissions from from
waste water treatment plants. The methodology is based on default
emissions factors for emissions per member of the service population,
and is sourced from the
[guidelines](http://www.epa.gov/climatechange/emissions/archived/downloads/tsd/TSD%20wastewater_020409.pdf)
associated with the US EPA's [mandatory reporting
requirements](http://www.epa.gov/climatechange/emissions/ghgrulemaking.html).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, simply create a profile item - there are no drill
choices.

### Specifying activity data

Next, specify the total size of the service population and the size of
the population which is served by biological denitrification using the
***totalPopulation*** and ***populationWith*** profile item values.

Users can override default parameters by specifying their own using the
following profile item values:

  - ***massN2OPerPersonWith***: N,,2,,O emissions per person served by
    wastewater treatment plants *with* nitrification/denitrification
  - ***massN2OPerPersonWithout***: N,,2,,O emissions per person served
    by wastewater treatment plants *without*
    nitrification/denitrification
  - ***industryFactor***: Industrial/commercial adjustment factor

### Results and calculation

The quantities returned represent N,,2,,O emissions associated with this
population size together with the default or specified values for the
N,,2,,O emitted per person (for each type of treatment scenario) and an
adjustment factor representing the impact of industrial and commercial
discharges of protein. The following quantities are returned:

  - ***N2O***: absolute quantity of N,,2,,O emitted
  - ***CO2e***: emitted N,,2,,O to CO,,2,,e converted using the
    appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
