The AMEE category at
business/processes/production/electronics/heattransferfluids/production
provides a methodology for calculating the emissions associated with the
use of heat transfer fluids during semiconductor manufacturing. Such
emissions arise from evaporative losses during use. This methodology
represents the *Tier 1* approach described by the IPCC Guidelines for
National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

The methodology is based on a default emissions factor which represents
the aggregate emissions per unit of silicon consumed. This factor is
derived from a weighted average across all liquid fluorinated compounds
typically used, expressed in terms of a C,,6,,F,,14,,. Emissions are
calculated from the quantity of semiconductor substrate produced.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, simply create a profile item - there are no
alternative drill choices.

### Specifying activity data

Next, the user must specify the annual manufacturing design *capacity*
of substrate processes, and the annual capacity *utilisation* using the
***capacity*** and ***fractionCapacityUtilised*** profile item values.

### Results and calculation

The quantity returned represents the emissions assocaited with the
specified quantities. Two quantities are returned, as follows:

  - ***C6F14***: C,,6,,F,,14,, emissions
  - ***CO2e***: CO,,2,,e emissions (C,,6,,F,,14,, emissions converted
    using the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
