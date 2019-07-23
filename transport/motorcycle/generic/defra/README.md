** This category is deprecated. The latest DEFRA methodology for
motorcycle transport can be found
[here](DEFRA_road_transport_methodology_by_vehicle_size) .**

This category allows users to calculate greenhouse gas emissions from a
motorcycle journey from indicating the motorcycle fuel and size. The
methodology follows the latest
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
emission factors and advice.

## How to use this category

There are two drill-downs in this category. For the first drill,
***fuel***, there is currently just one option - *petrol*. The second
drill-down, ***size*** is used to select the size of the motorcycle from
the following list.

  - *small (\<125cc)*

<!-- end list -->

  - *medium (125-500cc)*

<!-- end list -->

  - *large (\>500cc)*

<!-- end list -->

  - *unknown* - for use if motorcycle size is unknown

The ***distance*** must then be entered as a profile item value. There
are four further optional profile item values, ***occupants***,
***ownFuelConsumption***, ***numberOfJourneys*** and
***totalFuelConsumed***.

The ***occupants*** profile item value is used to enter the number of
people in the car for the selected journey (default 1). The emissions
are then divided by the number of occupants in order to return the
fraction of the emissions due to each person. The
***ownFuelConsumption*** can be entered if the user has a reliable value
for their vehicles fuel consumption (default units of km/L). If this is
entered then it overrides AMEE's default emission factors for the
selected vehicle. The algorithm then divides the fuel emission factor,
from the [Fuel\_Defra](Fuel_Defra) category, by the users
***ownFuelConsumption*** and multiplies by the distance. The
*/**numberOfJourneys*** profile item value (default 1) can be used if
the specified journey has been repeated a number of times; the emissions
for one journey are multiplied by this value. Finally,
***totalFuelConsumed*** can be entered if the volume of fuel used for
the entire journey is known. In this case the volume of fuel is
multiplied by the appropriate emission factor in the
[Fuel\_Defra](Fuel_Defra) category.

## Algorithm

If no fuel consumption data is entered

CO2eEmissionFactor = CO2EF + CO2eEFForN2O + CO2eEFForCH4

CO2e = CO2eEmissionFactor \* distance / occupants

If ***ownFuelConsumption*** entered

CO2eEmissionFactor from business/energy/fuel

CO2e = (CO2eEmissionFactor / ownFuelConsumption) \* (distance /
occupants)

If ***totalFuelConsumed*** entered

CO2eEmissionFactor from business/energy/fuel

CO2e = CO2eEmissionFactor \* totalFuelConsumed

The algorithm returns a value of kgCO<sub>2</sub>e for the particular journey,
per occupant. This value includes contributions from carbon dioxide,
nitrous oxide and methane.
