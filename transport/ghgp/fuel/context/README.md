**Transport fuel emissions methodology. Calculates direct fossil and/or
biogenic carbon dioxide (CO<sub>2</sub>), methane (CH<sub>4</sub>), nitrous oxide
(N<sub>2</sub>O) and carbon dioxide equivalent (CO<sub>2</sub>e) emissions associated
with fuel consumed for a variety of common transport fuels. Choices
include fuel type and combustion context. Global.**

## Summary

This methodology represents greenhouse gas emissions associated with the
combustion of **fuel** in specific transportation contexts in the US, UK
and other regions. The data and calculation methodology is based on
those provided in the Greenhouse Gas Protocol worksheet *GHG emissions
from transport or mobile sources* (version 2.2), published in June 2011.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the greenhouse gas emissions associated with the specific quantities of
transport fuel. These emissions factors can be contrasted with similar
transport-related emissions factors which describe emissions on the
basis of *distance*. This methodology is typically more accurate for
calculating transport related greenhouse gas emissions since it involves
a more direct measure of fuel consumption without the requirement for
assumptions about vehicle fuel efficiencies.

According to this methodology, CO<sub>2</sub> emissions are [directly
related](Custom_emissions_factors) to the quantity of carbon which is
oxidised during combustion and therefore directly proportionate to the
quantity of fuel burned and the concentration of carbon within the
particular fuel type (e.g. gasoline/petrol, diesel). Emissions of
CH<sub>4</sub> and N<sub>2</sub>O, however, are considered to vary with the specific
use context. This category, then, provides fuel-based emissions factors
for CH<sub>4</sub> and N<sub>2</sub>O differentiated by fuel type and specific use
contexts. For a complete greenhouse gas calculation, CO<sub>2</sub> emissions
factors referenced for each fuel type from this related
[methodology](Transport_fuels_by_Greenhouse_Gas_Protocol), sourced from
the same Greenhouse Gas Protocol worksheet.

Emissions - conventionally expressed in terms of mass (e.g. *kg*) - are
calculated by multiplying these rates (*mass emitted per volume*; e.g.
*kg CO<sub>2</sub> per US gallon*) by a volume of fuel (e.g *gallons*)
consumed.

### Model data

The rate at which fuel combustion produces greenhouse gas emissions
varies depending on fuel type and the specific use context. Therefore,
emissions factors for distinct combinations of fuel type and context are
provided. The fuels represented are:

  - diesel
  - petrol/gasoline
  - residual fuel oil

The use context represented are:

  - train
  - agricultural equipment
  - construction equipment
  - ship and boat

Region-specific emissions factors are provided for each fuel type for
the UK, the US and 'other regions'.

### Activity data required

According to this methodology, greenhouse gas emissions are directly
proportionate to the quantity of fuel consumed. Fuel quantity must be
specified on the basis of volume by setting the ***volume*** profile
item value.

Users can choose to specify their activity data in a comprehensive range
of appropriate [units](Units).

### Calculation and result

The returned quantities for this methodology represent CO<sub>2</sub>, CH<sub>4</sub>
and N<sub>2</sub>O and CO<sub>2</sub>e emissions associated with the type, quantity
and context of fuel specified. CO<sub>2</sub>e emissions represent all three
gases, converted using
[these](Greenhouse_gases_Global_warming_potentials) global warming
potential). The individual quantities for CH<sub>4</sub> and N<sub>2</sub>O represent
*absolute quantities* rather than CO<sub>2</sub>e quantities.

-----

### Similar methodologies

Other Greenhouse Gas Protocol transport methodologies are available
representing [general fuel
consumption](Transport_fuels_by_Greenhouse_Gas_Protocol), [freighting of
goods](Freight_transport_by_Greenhouse_Gas_Protocol), [passenger/public
transport](Passenger_transport_by_Greenhouse_Gas_Protocol), and road
transportation in the [UK](UK_road_transport_by_Greenhouse_Gas_Protocol)
(with [heavy
goods](UK_heavy_goods_transport_by_Greenhouse_Gas_Protocol)),
[US](US_road_transport_by_Greenhouse_Gas_Protocol) and [other
regions](Other_regional_road_transport_by_Greenhouse_Gas_Protocol).

-----
