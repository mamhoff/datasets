The AMEE category /business/energy/stationaryCombustion/epa/coal
contains data on the emissions associated with the burning of coal,
sourced from the US Environmental Protection Agency's [Climate
Leaders](Climate_Leaders) initiative.

To use this category, select the type of coal using the *type* drill
choice. Next specify the quantity of fuel consumed using either the
***energyConsumed*** or ***mass*** profile item values.

Emissions of CH,,4,, and N,,2,,O vary according to the specific burning
context under consideration. Users can specify the burning context using
the ***burningContext*** profile item value with one of the following
valid parameters;

  - *residential*
  - *commercial*
  - *industry*
  - *electricity generation*

If no burning context is explicitly specified the *industry* context is
assumed by default. AMEE retrieves the appropriate emissions factors
from the [associated EPA dataset for CH,,4,, and N,,2,,O
emissions](CH4_and_N20_emissions_from_stationary_combustion).

Four quantities are returned, as follows:

  - ***CO2***: CO,,2,, emissions
  - ***CH4***: CH,,4,, (methane) emissions
  - ***N2O***: N,,2,,O (nitrous oxide) emissions
  - ***CO2e***: CO,,2,,e emissions (all three gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantities for CH,,4,, and N,,2,,O represent *absolute
quantities* rather than CO,,2,,e quantities.

See [here](British_thermal_units) for information on using British
thermal units (Btu's) with the AMEE platform
