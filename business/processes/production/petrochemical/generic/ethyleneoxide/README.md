The AMEE category at
business/processes/production/petrochemical/generic/ethylenedichloride
provides a methodology for calculating greenhouse gas emissions
associated with the production of ethylene oxide. The methodology
provides two ways to calculate, based on either: (1) the quantity of
ethylene feedstock inputs to the production process; or (2) the quantity
of ethylene oxide produced. This methodology represents the *Tier 1*
approach described by the IPCC Guidelines for National Greenhouse Gas
Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, specify the process type and catalyst selectivity
type using the *process* and *catalystSelectivity* drill choices, and
specify whether methane flaring is practised using the *methaneFlared*
drill choice. In the absence of specific data regarding catalyst
selectivity, default choices are *70* for the *air process* and *75* for
*oxygen process*. The default approach also assumes no flaring of
methane.

### Specifying activity data

Next, choose between specifying the quantity of ethylene oxide produced
or the quantity of feedstock consumed. To specify the quantity of
ethylene oxide produced, set this quantity using the ***mass*** profile
item value. Alternatively, specify the quantity of feedstock using the
***massFeedstock*** profile item value.

### Results and calculation

The quantities returned represent the greenhouse gas emissions
associated with the quantities specified. The following quantities are
returned:

  - ***CO2***: absolute quantity of CO,,2,, emissions for the quantities
    specified
  - ***CH4***: absolute quantity of CH,,4,, emissions for the quantities
    specified
  - ***CO2e***: CO,,2,,e emissions (absolute emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
