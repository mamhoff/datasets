The AMEE category /business/waste/combustion/industrial contains data
and methodologies sourced from the IPCC [Guidelines for National
Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/5_Volume5/V5_5_Ch5_IOB.pdf)
for calculating greenhouse gas emissions associated with the burning of
industrial waste.

Users can choose between several industrial sectors including the paper,
textiles, food, and construction industries. AMEE calculates CO,,2,,
emissions based on the typical carbon content of each waste type
(sourced from
[Chapter 2](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/5_Volume5/V5_2_Ch2_Waste_Data.pdf)
of the same volume) and assuming 100% combustion. CO,,2,, which derives
from recently sequestered carbon sources and fossil sources are
differentiated, since their net impact on atmospheric CO,,2,,
concentrations in distinct.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, select the industry sector using the *industry*
drill choice.

### Specifying activity data

Next, set the quantity of waste burned using the ***mass*** profile item
value. AMEE assumes that the weight specified is the dry weight of the
waste burned. Users can alternatively use the wet weight by setting the
***isWetWeight*** profile item value to 'true', in which case AMEE will
convert wet weight into dry weight using typical water content data for
each sector.

### Results and calculation

The values returned represent CO,,2,, emissions associated with the
waste quantity specified. The following discrete values are returned:

  - ***fossilCO2***: CO,,2,, emissions which derived from fossil carbon
  - ***biogenicCO2***: CO,,2,, emissions which derived from recently
    sequestered, biogenic carbon
  - ***totalCO2***: fossil *and* biogenic carbon

-----

## Notes

### Methane emissions

The IPCC methodology does not provide CH,,4,, emissions factors for
waste combustion disaggregated into individual industry sectors. Rather,
the IPCC documentation refers users to the methodology for stationary
fuel combustion. The stationary combustion methodology only specifies
greenhouse gas emissions from generic waste types (municipal,
industrial) on an *energetic* basis and so calculations made on the
basis of a specific *mass* of waste are not possible ('typical'
calorific values for these generic wastes are not available given the
large variability in industrial wastes). As such, this category
considers only CO,,2,, emissions. For generic waste combustion emissions
calculations which include CH,,4,, as well as N,,2,,O, users are
referred to [this](Stationary_Combustion) methodology.
