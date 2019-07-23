The AMEE category business/processes/production/cement/ipcc/carbonate
provides a methodology for calculating the emissions associated with
cement production. The methodology uses specific quantities of various
carbonate species - used as feedstock in the cement industry and the
primary source of carbon - for calculating CO<sub>2</sub> emissions, and
represents the *Tier 3* approach described by the IPCC Guidelines for
National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

To use this category, simply create a profile item (there are no drill
options to specify). Next, specify the quantities of each carbonate
mineral using the ***massCalcite*** (appropriate for both calcite and
aragonite), ***massMagnesite***, ***massDolomite***, ***massSiderite***,
***massAnkerite***, ***massRhodochrosite***, and ***massSodaAsh***,
profile item values. Any carbonate types not used need not be specified.
The calculation returns the quantity of CO<sub>2</sub> emitted based on several
assumptions:

  - each carbonate input achieved 100% calcination
  - all cement kiln dust was recycled to the kiln
  - no non-carbonate, carbon-bearing inputs were used

Each of these assumptions can be overridden.

### Specifying calcination fraction

To specify the actual level of calciniation achieved, set the
calcination fraction (as a decimal between 0-1) for each carbonate input
using the ***fractionCalcite***, ***fractionMagnesite***,
***fractionDolomite***, ***fractionSiderite***, ***fractionAnkerite***,
***fractionRhodochrosite***, and ***fractionSodaAsh*** profile item
values respectively.

### Cement kiln dust

If cement kiln dust was recovered and not recycled to the kiln, users
can account for the uncalcined fraction by specifying the quantity of,
and fraction of calcination achieved for, cement kiln dust using the
***massCementKilnDust*** and ***fractionCementKilnDust*** profile item
values respectively. In this case, the emissions associated with the
quantity of inputs remaining uncalcined are subtracted from the main
calculation.

### Other carbon-bearing inputs

Users can also specify other, non-carbonate, carbon-bearing inputs to
the kiln if appropriate. In this case, the quantity, carbon fraction,
and CO<sub>2</sub> emissions per quantity must all be specified by the user. To
specify these values, set the ***massOther***, ***carbonFraction*** and
***massCO2PerMassCarbon*** profile item values respectively. The
emissions associated with this quantity of feedstock is added to those
associated with carbonate materials. (note: material used for fuel are
not to be included here).

**General note**: the stoichiometric ratio for Ankerite =\> CO<sub>2</sub> has
be taken as the midpoint (0.44197) of the range (0.40822 - 0.47572)
specified in the IPCC documentation.
