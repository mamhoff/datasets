The AMEE category at
business/processes/production/petrochemical/generic/methanol provides a
methodology for calculating greenhouse gas emissions associated with the
production of methanol. The methodology provides two ways to calculate,
based on either: (1) the quantity of feedstock inputs to the production
process; or (2) the quantity of methanol produced. This methodology
represents the *Tier 1* approach described by the IPCC Guidelines for
National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, specify the feedstock type and process using the
*feedstock*, *process* and *processSubtype* drill choices.

### Specifying activity data

Next, choose between specifying the quantity of methanol produced or the
quantity of feedstock consumed. To specify the quantity of methanol
produced, set this quantity using the ***mass*** profile item value.
Alternatively, specify the quantity of feedstock - expressed in terms of
an energy quantity - using the ***energy*** profile item value. Users
should note that the latter option is not valid for the '*conventional
steam reforming with integrated ammonia production*' option given an
absence of data in the IPCC source documentation.

### Results and calculation

The quantities returned represent the greenhouse gas emissions
associated with the quantities specified. The following quantities are
returned:

  - ***CO2***: absolute quantity of CO<sub>2</sub> emissions for the quantities
    specified
  - ***CH4***: absolute quantity of CH<sub>4</sub> emissions for the quantities
    specified
  - ***CO2e***: CO<sub>2</sub>e emissions (absolute emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
