The AMEE category business/processes/production/ferroalloy/ch4 is aimed
towards industry professionals to enable them to prepare inventories of
greenhouse gas emissions from ferroalloy production. This category is
designed for use alongside the ferroallloy
[tier 1](Generic_ferroalloy_production) or
[tier 2](Ferroalloy_raw_materials_methodology) categories. The
methodology provided by AMEE in this category represents the *Tier 1*
(default) and *Tier 2* (user-supplied) approach for CH,,4,, emissions
calculation described by the IPCC Guidelines for National Greenhouse Gas
Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

The heating of carbon materials in the furnace releases volatiles
including methane. With open or semi-covered furnaces – predominantly
used for FeSi and Si ferroalloy production - most of the volatiles will
burn to CO,,2,, above the charge, in the hood and off-gas channels, but
some will remain un-reacted as CH,,4,, and NMVOC. The amounts depend on
the operation of the furnace. Sprinkle-charging will reduce the amounts
of CH4 compared to batch-wise charging. Increased temperature in the
hood (less false air) will reduce the content of CH,,4,, further. The
errors associated with estimates or measurements of N2O emissions from
the ferroalloys industry are very large and thus, a methodology is not
provided.

-----

## How to use this category

### Selecting an emissions scenario

To use this category use the ***typeOfAlloy*** drill-down to select the
alloy type being used from the following options:

1.  *si-metal*
2.  *fesi 90*
3.  *fesi 75*
4.  *fesi 65*

A second drill-down must then be specified using the
***operationOfFurnace*** drill-down to select the operation type of the
furnace used, from the following options:

1.  *unknown*
2.  *batch-charging*
3.  *sprinkle-charging*
4.  *sprinkle-charging and over 750 degrees C*

If *unknown* is selected, the default values used are those for
*sprinkle-charging* operation.

### Specifying activity data

The only required profile item value is ***productQuantity***. The
emission factor has a default value provided by the AMEE engine, but
this can be over-ridden, using the ***massCO2PerMassProduct*** profile
item value, by the user if more precise site or country-specific values
are known. If using a site-specific emissions factor, the calculation
represents the tier 2 IPCC NGGIP methodology.

### Results and calculation

The returned amounts represent the CH,,4,, emissions associated with the
quantity specified. Two quantities are returned, as follows:

  - ***CH4***: CH,,4,, (methane) emissions
  - ***CO2e***: CO,,2,,e emissions (CH,,4,, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantity for CH,,4,, represents an *absolute quantity*
rather than a CO,,2,,e quantity.
