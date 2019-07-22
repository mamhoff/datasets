The AMEE category /business/energy/stationaryCombustion/epa/coal
contains data on the emissions associated with the burning of coal,
sourced from the US Environmental Protection Agency's [Climate
Leaders](Climate_Leaders) initiative.

To use this category, select the type of coal using the *type* drill
choice. Next specify the quantity of fuel consumed using either the
***energyConsumed*** or ***mass*** profile item values.

Emissions of CH<sub>4</sub> and N<sub>2</sub>O vary according to the specific burning
context under consideration. Users can specify the burning context using
the ***burningContext*** profile item value with one of the following
valid parameters;

  - *residential*
  - *commercial*
  - *industry*
  - *electricity generation*

If no burning context is explicitly specified the *industry* context is
assumed by default. AMEE retrieves the appropriate emissions factors
from the [associated EPA dataset for CH<sub>4</sub> and N<sub>2</sub>O
emissions](CH4_and_N20_emissions_from_stationary_combustion).

Four quantities are returned, as follows:

  - ***CO2***: CO<sub>2</sub> emissions
  - ***CH4***: CH<sub>4</sub> (methane) emissions
  - ***N2O***: N<sub>2</sub>O (nitrous oxide) emissions
  - ***CO2e***: CO<sub>2</sub>e emissions (all three gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantities for CH<sub>4</sub> and N<sub>2</sub>O represent *absolute
quantities* rather than CO<sub>2</sub>e quantities.

See [here](British_thermal_units) for information on using British
thermal units (Btu's) with the AMEE platform
