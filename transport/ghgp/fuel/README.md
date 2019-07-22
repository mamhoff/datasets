**Transport fuel emissions methodology. Calculates direct fossil and/or
biogenic carbon dioxide (CO,,2,,) emissions associated with fuel
consumed for a variety of common transport fuels. Global.**

## Summary

This methodology represents greenhouse gas emissions associated with the
combustion of **fuel** for transport purposes in the geographic contexts
of the US, UK and other regions. The data and calculation methodology is
based on those provided in the Greenhouse Gas Protocol worksheet *GHG
emissions from transport or mobile sources* (version 2.2), published in
June 2011.

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
assumptions about vehicle fuel efficiencies. Since the CO,,2,, produced
during the burning of biofuels in not a net contributor to atmospheric
warming (see [here](Carbon_dioxide_emissions)), fossil- and
biofuel-associated CO,,2,, are explicitly defined.

Emissions - conventionally expressed in terms of mass (e.g. *kg*) - are
calculated by multiplying these rates (*mass emitted per volume*; e.g.
*kg CO,,2,, per US gallon*) by a volume of fuel (e.g *gallons*)
consumed.

### Model data

The rate at which fuel combustion produces greenhouse gas emissions
varies depending on factors such as the carbon content of the specific
type of fuel burned. Therefore, emissions factors for numerous distinct
transport fuels are provided, including:

  - aviation gasoline
  - biofuels
  - biofuel blends
  - compressed natural gas
  - diesel
  - jet fuel
  - liquefied petroleum gas
  - petrol
  - residual fuel oil

Both fossil- and biogenic-CO,,2,, emissions factors are provided
although the latter is applicable only to biofuels and biofuel blends.
In the case of blended (bio)fuels, both types of emissions factor are
applicable and represent the proportion of fossil to biofuel carbon
contain with the fuel and emitted on combustion.

Region-specific emissions factors are provided for each fuel type for
the UK, the US and 'other regions'.

### Activity data required

According to this methodology, greenhouse gas emissions are directly
proportionate to the quantity of fuel consumed. Fuel quantity must be
specified on the basis of volume.

### Calculation and result

The returned emissions quantities for this methodology represent the
CO,,2,, associated with the type and quantity of fuel specified. Two
values are returned, as follows:

  - ***CO2***: CO,,2,, emissions associated with fossil carbon
  - ***bioCO2***: CO,,2,,e emissions associated with recently
    sequestered, biogenic carbon

In most cases only the former - fossil - CO,,2,, is returned as only
biofuels or biofuel blends contain biogenic carbon. In the case of
blended biofuels a value is return for both the fossil and biogenic
components.

-----

### Similar methodologies

Other Greenhouse Gas Protocol transport methodologies are available
representing fuels consumed in specific transport
[contexts](Transport_fuels_with_context_by_Greenhouse_Gas_Protocol),
[freighting of goods](Freight_transport_by_Greenhouse_Gas_Protocol),
[passenger/public
transport](Passenger_transport_by_Greenhouse_Gas_Protocol), and road
transportation in the [UK](UK_road_transport_by_Greenhouse_Gas_Protocol)
(with [heavy
goods](UK_heavy_goods_transport_by_Greenhouse_Gas_Protocol)),
[US](US_road_transport_by_Greenhouse_Gas_Protocol) and [other
regions](Other_regional_road_transport_by_Greenhouse_Gas_Protocol).

-----

## Notes

### Default units for CNG

The emissions factors for compressed natural gas (CNG) are presented in
units of kg \[emissions\] per *standard cubic foot (sfc)* in the
original Greenhouse Gas Protocol documentation.

For consistency with other fuels in this category, these values have
been converted to a per *US gallon*) basis using the
US-gallon-to-standard-cubic-feet conversion factor provided in the
*Reference - EF Fuel Use* worksheet of the source documentation, i.e.

*emission factor*,,kg per US gallon,, = *emission factor*,,kg per scf,,
/ 7.48051948,,US gallon per scf,,
