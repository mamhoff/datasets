This methodology provides data and a calculation methodology for
calculating CO<sub>2</sub> emissions associated with the consumption of
transport fuels (e.g. motor gasoline, diesel, kerosene, compressed
natural gas (CNG), liquefied natural gas (LNG), liquid petroleum gas
(LPG)). The methodology is sourced from the 2006 IPCC [Guidelines for
National Greenhouse Gas Inventories](http://www.ipcc-nggip.iges.or.jp/).

-----

## The methodology

### Emissions model

Greenhouse gas emissions associated with transport arise from the
combustion of fuels. According to this methodology, CO<sub>2</sub> emissions
are [directly related](Custom_emissions_factors) to the quantity of
carbon which is oxidised during combustion and therefore directly
proportionate to the quantity of fuel burned and the concentration of
carbon within the particular fuel type.

### Model data

The IPCC provides the following fuel property data for several types of
transport fuel:

  - **CO<sub>2</sub> emissions factor**: emissions factors expressed in terms
    of quantities of CO<sub>2</sub> emitted *per unit of energy* (*kg per TJ*)
  - **Heating value**: 'heating' or 'calorific' values (net) describing
    the energy content of the fuel (*TJ per Gg*)

Thus, CO<sub>2</sub> emissions can be calculated in two ways using these data:
(1) on the basis of *energy consumption* by simply multiplying a
quantity of energy by the *mass CO<sub>2</sub> per energy* emission factor; or
(2) according to a *mass* of fuel by converting a mass-based fuel
quantity (e.g. kg, tonnes) into its corresponding energy quantity using
the heating value, and multiplying by the energy-based emission factor.

A third method of calculating is on the basis of a *volumetric* quantity
of fuel (e.g. litres, barrels), which can be achieved by specifying a
volumetric quantity together with value for fuel *density* (i.e. mass
per unit volume) which enables the conversion of volumetric quantities
into their corresponding mass-based quantity and, in-turn, into energy
and CO<sub>2</sub> quantities.

### Related methodologies

Other IPCC transport categories are available which represent transport
fuel consumption in specific [offroad](Offroad_fuels),
[ship](Ship_fuels) and [train](Train_fuels) contexts, as well as
vehicular emissions for [European road
vehicles](European_road_transport_by_IPCC) and both
'[conventionally](US_road_transport_by_IPCC)' and
'[alternatively](US_road_transport_with_alternative_fuels_by_IPCC)'
(cng, lpg, lng, ethanol) fuelled vehicles in the US.

-----

## Using this methodology

### Choosing a specific activity type

To use this methodology, the particular type of fuel which best
represents the users emissions scenario must be specified by selecting
from the ***fuel*** drill down choice.

### Activity data required

Calculations can be made on the basis of *either*: (1) *energy*
consumed; (2) *mass* of fuel consumed; or (3) *volume* of fuel consumed.

**Specifying energy consumption**: Set the energy consumed using the
***energy*** profile item value.

**Specifying fuel mass**: Set the mass of fuel consumed using the
***mass*** profile item value.

**Specifying fuel volume**: Set the volume of fuel consumed using the
***volume*** profile item value. In this case the fuel density **must**
also be specified using the ***density*** profile item value.

### Calculation and result

The returned quantity for this methodology represents the CO<sub>2</sub>
emissions associated with the fuel consumption specified.
