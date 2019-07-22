The AMEE category /business/waste/combustion/municipal contains data and
methodologies sourced from the IPCC [Guidelines for National Greenhouse
Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/5_Volume5/V5_5_Ch5_IOB.pdf)
for calculating greenhouse gas emissions associated with the burning of
municipal waste. Users can choose between many kinds of waste, including
paper, textiles, food, wood, nappies and plastics. AMEE calculates
CO<sub>2</sub> emissions based on the typical carbon content of each waste type
(sourced from
[Chapter 2](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/5_Volume5/V5_2_Ch2_Waste_Data.pdf%20)
of the same volume), as well as typical CH<sub>4</sub> and N<sub>2</sub>O emissions
associated with the specific combustion methods used.

CO<sub>2</sub> which derives from recently sequestered carbon sources and
fossil sources are differentiated, since their net impact on atmospheric
CO<sub>2</sub> concentrations in distinct.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, select the waste type using the *type* drill
choice.

Next, specify the burning method (continuous incineration, open burning,
etc.) and technology (stoker, fluidised bed) using the *method* and
*technology* drill choices. No technology choice is required for the
'open burning' combustion method.

### Specifying activity data

Finally, set the quantity of waste burned using the ***mass*** profile
item value. AMEE assumes that the weight specified is the dry weight of
the waste burned. Users can alternatively use the wet weight by setting
the ***isWetWeight*** profile item value to 'true', in which case AMEE
will convert wet weight into dry weight using typical dry weight
fraction data for each waste type.

### Results and calculation

The values returned represent CO<sub>2</sub> emissions associated with the
waste quantity specified. The following discrete values are returned:

  - ***fossilCO2***: CO<sub>2</sub> emissions which derived from fossil carbon
  - ***biogenicCO2***: CO<sub>2</sub> emissions which derived from recently
    sequestered, biogenic carbon
  - ***totalCO2***: fossil *and* biogenic carbon
  - ***CH4***: CH<sub>4</sub> emissions associated with the waste quantity
    specified
  - ***N2O***: N<sub>2</sub>O emissions associated with the waste quantity
    specified
  - ***CO2e***: fossil CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O combined and
    expressed in terms of CO<sub>2</sub>e

-----

**Note:** This category does not cover emissions associated with the
burning of glass or metal wastes which are considered by the IPCC to be
only rarely burned.
