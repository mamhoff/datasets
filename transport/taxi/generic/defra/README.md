** This category is deprecated. The latest DEFRA methodology for taxi
transport can be found
[here](DEFRA_road_transport_methodology_by_vehicle_class) and
[here](DEFRA_passenger_transport_methodology).**

This category allows users to calculate greenhouse gas emissions from
taxi journeys either per passenger or per vehicle. The methodology
follows the latest
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
emission factors and advice.

To use this category use the drill-down ***type*** to select the type of
taxi used from the following options.

  - *typical*

<!-- end list -->

  - *black cab*

The ***distancePerJourney*** is then required as a profile item value.
There are three further optional profile item values:
***numberOfJourneys***, ***isReturn***, ***numberOfPassengers***. To
specify multiple journeys, set the number of journeys using the
***numberOfJourneys*** profile item value (default of 1), in which case
AMEE multiplies the distance per journey by the number of journeys to
establish the total distance travelled. The ***isReturn*** profile item
can be set to either *true* or *false* ('false' by default), if *true*
the algorithm doubles the ***numberOfJourneys***. The returned value
represents greenhouse gas emissions attributable to the entire vehicle,
which are based on the 'medium/large diesel' and 'large diesel' cars in
the [Defra Car](Generic_car_transport_Defra) category for the *typical*
and *black cab* drill choices respectively.

To calculate on a per passenger basis, set the ***numberOfPassengers***
profile item value to the number of passengers. In this case, typical
taxi occupancy data (1.4 for *typical* taxi and 1.5 for *black cab*) is
used to calculate a per passenger emissions factor which is then
multiplied by the number of passengers. The returned value represents
greenhouse gases attributable to all passengers for the journey(s)
specified.

The user is also able to specify fuel consumption using the optional
***ownFuelConsumption*** or ***totalFuelConsumed*** profile item values.
If the user has a reliable fuel use rate (km/L) this can be entered
instead of using the set emission factors in this category. In this case
the emission factor from the [Fuel\_Defra](Fuel_Defra) category is
divided by the given fuel consumption rate and multiplied by the
distance travelled to calculate the emissions for the selected journey.
The ***totalFuelConsumed*** is to be used if the user knows the amount
of fuel used, rather than a distance travelled. In this case the
[Fuel\_Defra](Fuel_Defra) category emission factor is simply multiplied
by the given total fuel amount to calculate the total emissions for the
selected journey.

## Algorithm

CO2eEmissionFactor = CO2EF + CO2eEFForN2O + CO2eEFForCH4

CO2e = CO2eEmissionFactor \* distancePerJourney \* numberOfJourneys \*
numberOfPassengers

The algorithm returns a value of kgCO,,2,,e for the selected journey.
This value includes contributions from carbon dioxide, nitrous oxide and
methane.
