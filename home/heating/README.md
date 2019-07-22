This category is deprecated. The [/home/heating/uk](Heating_uk) category
should be used instead.

## Why is this category deprecated?

This category contains a data item for every possible combination of
drill down options: home type, age, size, fuel and heating type (3744 in
total). The /home/heating/uk category only has drill options for home
type and fuel (48 in total) with age, size and heating type being
profile item values. The advantage of this approach is that the
calculation is performed in AMEE's algorithm rather than being
pre-calculated before data items are uploaded. This allows many more
options to be added (specifically insulation and renewables) and the
algorithm can reference data items in AMEE, e.g. the fuel emission
factors in [/home/energy/quantity](Energy_by_Quantity).

## UK heating

This category contains items that give the kgCO<sub>2</sub> emitted for a
variety of home types, sizes and heating systems in the UK. The values
account for both space and water heating using data and methods adapted
from the BREDEM, SAP and RDSAP systems - see [BRE](http://www.bre.co.uk)
and [NEF](http://www.nef.org.uk) for more information on these.

The following assumptions were made in the /home/heating category, as
they are typical of current housing stock in the UK:

  - 100mm of loft insulation (U-value of 0.4 W/m^^-2^^K)

<!-- end list -->

  - Mainly double glazed (average window U-value 3.5 W/m^^-2^^K)

<!-- end list -->

  - Uninsulated concrete ground floors (where applicable)

<!-- end list -->

  - 55mm jacket type hot water cylinder insulation

<!-- end list -->

  - Hot water cylinder thermostat present

Further details can be found in the [heating
section](Act_On_CO2_Methodology) of the DEFRA methodology paper.

All values include only the direct carbon dioxide emission, except for
biomass which is entirely indirect emission.

See [Carbon\_dioxide\_emissions](Carbon_dioxide_emissions) for an
explanation of direct and indirect emission.
