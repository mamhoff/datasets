The AMEE category /business/energy/stationaryCombustion/epa/gas contains
data on the emissions associated with the burning of gas, sourced from
the US Environmental Protection Agency's [Climate
Leaders](Climate_Leaders) initiative and the technical guidelines for
the EPA's mandatory greenhouse gas reporting
[rule](http://www.epa.gov/climatechange/emissions/ghgrulemaking.html).

To use this category, select the type of gas using the *type* and
*subtype* drill choices. Next specify the quantity of fuel consumed
using either the ***energyConsumed*** or ***volume*** profile item
values.

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

Technical note: The [Climate
Leaders](http://www.epa.gov/stateply/resources/index.html) documentation
specifies data for gases on the basis of the ''standard cubic foot''
unit. AMEE assumes that this is equivalent to a physical cubic foot.
