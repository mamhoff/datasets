The AMEE category at
business/processes/production/petrochemical/generic/carbonblack provides
a methodology for calculating greenhouse gas emissions associated with
the production of carbon black. The methodology is based on default
emissions factors based on the quantity of carbon black produced. This
methodology represents the *Tier 1* approach described by the IPCC
Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, specify the process type and feedstock type using
the *process* and *feedstock* drill choices. The *process* drill choice
represents, variously, emissions associated with primary or secondary
feedstock consumption, or a combination of both of these. Next, specify
whether methane flaring is practised using the *methaneFlared* drill
choice. In the absence of specific data regarding process type and
flaring practices, the default approach assumes the furnace black
process and that flaring of methane is practised.

### Specifying activity data

Next, specify the quantity of carbon black produced using the ***mass***
profile item value.

### Results and calculation

The quantities returned represent the greenhouse gas emissions
associated with the quantity specified. The following quantities are
returned:

  - ***CO2***: absolute quantity of CO,,2,, emissions for the quantity
    specified
  - ***CH4***: absolute quantity of CH,,4,, emissions for the quantity
    specified
  - ***CO2e***: CO,,2,,e emissions (absolute emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
