The AMEE category at business/processes/production/hydrogen/production
provides a methodology for calculating greenhouse gas emissions
associated with the production of hydrogen. The methodology is based on
a default emissions factors for several stages in the life-cycle of
hydrogen production. This methodology is sourced from the *[Life Cycle
Assessment of Hydrogen Production via Natural Gas Steam
Reforming](http://www.nrel.gov/docs/fy01osti/27637.pdf)* report of the
US Department of Energy's [National Renewable Energy
Laboratory](http://www.nrel.gov/). This report and the emissions factors
included are referenced in the EPA's
[guidelines](http://www.epa.gov/climatechange/emissions/archived/downloads/tsd/TSD%20HydrogenProduction%20EPA_2-02-09.pdf)
for mandatory reporting of greenhouse gas emissions associated with
hydrogen production, although they do not formally specify this as a
recommended methodology.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, specify a process using the *process* drill
choices.

  - *'full life cycle*': returns per unit emissions for the entire life
    cycle

<!-- end list -->

  - '*construction and decommissioning*': returns per unit emissions for
    the plant construction and decommissioning phase

<!-- end list -->

  - '*natural gas production and transport*': returns per unit emissions
    for the production and distribution of the natural gas feedstock

<!-- end list -->

  - *'electricity generation*': returns per unit emissions for the
    on-site generation of electricity

<!-- end list -->

  - '*plant operation*': returns per unit emissions from plant operation
    (used to derive annual sector emissions statistics in the EPA's
    [documentation](http://www.epa.gov/climatechange/emissions/archived/downloads/tsd/TSD%20HydrogenProduction%20EPA_2-02-09.pdf)

<!-- end list -->

  - '*avoided operations*': returns per unit emissions avoided through
    the export of steam to other facilities

### Specifying activity data

Next, specify the quantity of hydrogen produced using the ***mass***
profile item value.

### Results and calculation

The quantities returned represent the greenhouse gas emissions
associated with that quantity of hydrogen associated the process
specified. The following quantities are returned, as follows:

  - ***CO2***: absolute quantity of CO,,2,, emissions for the quantity
    specified
  - ***CH4***: absolute quantity of CH,,4,, emissions for the quantity
    specified
  - ***N2O***: absolute quantity of N,,2,,O emissions for the quantity
    specified
  - ***CO2e***: CO,,2,,e emissions (absolute emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
