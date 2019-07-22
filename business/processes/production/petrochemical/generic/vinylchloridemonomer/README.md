The AMEE category at
business/processes/production/petrochemical/generic/ethylenedichloride
provides a methodology for calculating greenhouse gas emissions
associated with the production of vinyl chloride monomer. The
methodology provides two ways to calculate, based on either: (1) the
quantity of ethylene feedstock inputs to the production process; or (2)
the quantity of vinyl chloride monomer produced. This methodology
represents the *Tier 1* approach described by the IPCC Guidelines for
National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)). The
data is based on integrated ethylene dichloride (EDC)/vinyl chloride
monomer (VCM) plants, rather than stand alone facilities.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, specify the feedstock type and emission type using
the ***feedstock*** and ***emission*** drill choices. The *emission*
drill choice represents, variously, emissions associated with
combustion, non-combustive venting or a combination of both of these.

### Specifying activity data

Next, choose between specifying the quantity of vinyl chloride monomer
produced or the quantity of feedstock consumed. To specify the quantity
of vinyl chloride monomer produced, set this quantity using the
***mass*** profile item value. Alternatively, specify the quantity of
feedstock using the ***massFeedstock*** profile item value. Users should
note that the latter option is only valid for the '*balanced process*'
option given an absence of data for the other types in the IPCC source
documentation.

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
