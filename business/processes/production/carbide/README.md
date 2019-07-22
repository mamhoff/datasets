The AMEE category at business/processes/production/carbide provides a
methodology for calculating greenhouse gas emissions associated with the
production and use of silicon and calcium carbide. The methodology
provides two ways to calculate, based on either: (1) the quantity of
feedstock inputs (coke) to the production process; or (2) the quantity
of carbide produced. This methodology represents the *Tier 1* (default
values) and *Tier 2* (facility- or country-specific values) approaches
described by the IPCC Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, select the type of carbide and the basis for the
calculation using the *type* and *basis* drill choices. Users can choose
between calculating:

1.  on the basis of carbide production
2.  on the basis on petroleum coke consumption
3.  in the case of calcium carbide, on the basis of usage in acetylene
    production

### Specifying activity data

Next, specify the quantity of feedstock/product (which ever is
appropriate) using the ***mass*** profile item value.

Users can override the default emissions factor and specify their own if
facility-specific data is available. These can be set using the
***massCO2PerMass*** and ***massCH4PerMass*** profile item values.

If calculating on the basis of coke consumption (rather than carbide
production levels) users can also derive their emissions factor from the
carbon content of the coke, should this information be available. To set
the carbon concentration, specify a decimal fraction (i.e. 0-1) using
the ***feedstockCarbon*** profile item value.

The ***feedstockOxidation*** profile item value can also be optionally
set, describing the level of oxidation acheived for the feedstock,
although this defaults to 1 (i.e. 100% oxidation) if left unspecified.

### Results and calculation

The returned amounts represent the CO,,2,, and - in case the case of
silicon carbide - CH,,4,,, emissions associated with the quantities
specified. Three quantities are returned, as follows:

  - ***CO2***: CO,,2,, emissions
  - ***CH4***: CH,,4,, (methane) emissions
  - ***CO2e***: CO,,2,,e emissions (both gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantity for CH,,4,, represents an *absolute quantity*
rather than a CO,,2,,e quantity.
