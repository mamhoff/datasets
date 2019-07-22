The AMEE category /business/processes/production/glass/carbonate
contains data and a methodology for calculating the greenhouse gas
emissions associated with the production of glass.

The category uses specific quantities of various carbonate species -
used as feedstock in the glass industry and the primary source of carbon
- for calculating CO,,2,, emissions, and represents the IPCC *Tier 3*
methodology.

To use this category, simply create a profile item (there are no drill
options to specify). Next, specify the quantities of each carbonate
mineral using the ***massCalcite***, ***massMagnesite***,
***massDolomite***, ***massSiderite***, ***massAnkerite***,
***massRhodochrosite***, and ***massSodaAsh***, profile item values. Any
carbonate types not used need not be specified. The calculation returns
the quantity of CO,,2,, emitted assuming 100% calcination of each.

Users can override this assumption by specifying the actual calcination
fraction (as a decimal between 0-1) using the ***fractionCalcite***,
***fractionMagnesite***, ***fractionDolomite***, ***fractionSiderite***,
***fractionAnkerite***, ***fractionRhodochrosite***, and
***fractionSodaAsh*** profile item values.

**Note**: the stoichiometric ratio for Ankerite =\> CO,,2,, has be taken
as the midpoint (0.44197) of the range (0.40822 − 0.47572) specified in
the IPCC documentation.
