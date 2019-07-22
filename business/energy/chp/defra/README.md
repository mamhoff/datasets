This methodology represents greenhouse gas emissions associated with
energy produced by Combined Heat and Power (CHP) plants, and enables
plant emissions to be allocated to *heat* and *electricity* end-users.
The methodology originates from the UK government department DEFRA, as
published in their most recent [greenhouse gas (GHG) conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

-----

## The methodology

### Emissions model

Combined Heat and Power plants produce both heat and electricity as
outputs for consumption. The emissions produced in generating heat and
electricity therefore constitute emissions attributable to the end-user.
The emissions which are to be attributed to heat and electricity
production respectively depend on (1) the emissions of the whole plant;
and (2) the ratio in which heat and electricity are produced by the
plant. However, the efficiency with which heat and electricity are
produced from fossil fuel combustion is not the same, and it is
therefore necessary to allocate disproportionate quantities of the plant
emissions to electricity users and heat users respectively. This
methodology assumes that heat is twice as efficient to produce as
electricity, and weights the emissions attributable to heat and
electricity production accordingly.

Emissions associated with both heat and electricity outputs are
established on a *per unit energy* (e.g. kWh) basis. These values can
then be used to calculate end-user-attributable emissions depending the
quantity of heat and/or electricity consumed.

It should be noted that, in those cases where the entire (heat +
electricity) output of a CHP plant is consumed by a single user, then
the emissions attributable to that user are simply equal to the
emissions associated with the plant - no apportioning of emissions into
those associated with heat and electricity is necessary.

### Model data

No data is provided to the emissions calculation - all values represent
activity data to be specified by the user.

### Related methodologies

In order to calculate heat-specific and electricity-specific emissions
from CHP plants, it is necessary to establish the *total plant
emissions*. The DEFRA source documentation refers users to their *Annex
1 - Converting from fuel use to carbon dioxide equivalent emissions*
which contains data and a calculation methodology for the stationary
combustion of fossil fuels. This methodology is available for
[energy](Energy_based_fuel_combustion_by_DEFRA)-,
[mass](Mass_based_fuel_combustion_by_DEFRA)- and
[volume](Volume_based_fuel_combustion_by_DEFRA)-based fuel quantities.
If the CHP plant uses biomass for energy production,
[this](DEFRA_Biomass_fuel_methodology) DEFRA methodology may be useful
for calculating plant emissions.

-----

## Using this methodology

### Choosing a specific activity type

There are no drill down choices necessary for this methodology.

### Activity data required

This methodology requires that total plant emissions to be attributed to
the heat and electricity generated in their appropriate proportions. It
is therefore necessary that the total plant emissions, the quantity of
heat produced and the quantity of electricity produced be explicitly
specified by the user. These should be specified using the
***plantEmissions***, ***heatProduced*** and ***electricityProduced***
profile item values respectively.

Also required is that *at least one of* the heat or electricity
quantities consumed by the end-user is specified. These can be specified
using the ***heatConsumed*** and ***electricityConsumed*** profile item
values. Both type of consumption can be specified if appropriate.

Users can choose to specify their activity data in a comprehensive range
of appropriate [units](Units).

### Calculation and result

The methodology uses the proportion of heat and electricity produced -
together with the efficiency weighting factor - to apportion the total
plant emissions appropriately across heat and electricty outputs. These
emissions are then converted to a *per unit energy* basis in order to be
applied to the specific consumption of the user.

The emissions returned represent those associated with the consumption
of heat and/or electricity specified. The following discrete **amounts**
are returned:

  - ***heatCO2e***: CO,,2,,e emissions associated with the heat
    consumption, if specified
  - ***electricityCO2e***: CO,,2,,e emissions associated with the
    electricity consumption, if specified
  - ***totalCO2e***: CO,,2,,e emissions associated with both heat and
    electricity consumption, as specified

-----
