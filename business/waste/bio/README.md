The AMEE category /business/waste/bio contains data and a methodology
sourced from the IPCC [Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/5_Volume5/V5_4_Ch4_Bio_Treat.pdf)
for calculating greenhouse gas emissions from the biological treatment
of organic wastes.

This category provides calculation for CH<sub>4</sub> and, where appropriate,
N<sub>2</sub>O emissions associated with composting and anaerobic digestion.
These processes (especially composting) also produce CO<sub>2</sub>, but since
the carbon is of recent, biogenic origin, and therefore not a net
contributor to atmospheric concentrations, these emissions are not
considered here.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, select the type of biological treatment
(composting, anaerobic digestion) using the *type* drill choice.

### Specifying activity data

Next, set the quantity of waste treated using the ***mass*** profile
item value. Users can opt to specify the mass in terms of wet or dry
weight, although AMEE assumes quantities represent dry weights by
default. To instruct that quantities represent wet weight, set the
***isWetWeight*** to 'true'.

Where methane recovery/capture is practised, this can be deducted from
the emissions calculation. To specify methane recovery, set the mass of
recovered methane in the ***recoveredMethane*** profile item value.

### Results and calculation

The values returned represent CH<sub>4</sub> and N<sub>2</sub>O emissions associated
with the waste quantity specified (minus the methane recovered, where
appropriate). The following discrete values are returned:

  - ***N2O***: N<sub>2</sub>O (nitrous oxide) emissions
  - ***CH4***: CH<sub>4</sub> (methane) emissions
  - ***CO2e***: CO<sub>2</sub>e emissions (both gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

If a quantity of recovered methane is specified which is greater than
the emitted quantity, a value of 0 is retutned for ***CH4***, together
with a notification comment.

-----

## Notes

### Methane recovery

Where recovered methane is burned for energy production, flared, or fed
into a gas distribution system, users are referred to the following AMEE
categories

  - [Stationary fuel combustion](Stationary_Combustion)

<!-- end list -->

  - [Methane flaring](Methane_flaring)

<!-- end list -->

  - [Oil and gas processing](Oil_and_gas_fugitive_emissions)
