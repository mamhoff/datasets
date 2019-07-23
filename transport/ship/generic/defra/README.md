** This category is deprecated. The latest DEFRA methodology for ship
transport can be found [here](DEFRA_passenger_transport_methodology) .**

This category allows users to calculate greenhouse gas emissions from a
ship journey from indicating the ship's size. The methodology follows
the latest
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
emission factors and advice.

## How to use this category

There is one drill-down in this category. Use the drill-down ***type***
to select the type of ship used from the following options.

  - *ferry* - average RoPax ferry (roll-on roll-off ferry with
    additional passenger capacity)

<!-- end list -->

  - *by foot* - pedestrian journey only

<!-- end list -->

  - *by car* - car journey only

These factors are based on data provided by Best Foot Forward from work
for the Passenger Shipping association (PSA) carried out in 2007/2008.
The calculated figures are based on ferry service operator provided data
on fuel consumption and passengers transported. This does not include
any data for passenger only ferry services, which would be expected to
have significantly higher emission factors per passenger km.

The ***distancePerJourney*** must then be entered as a profile item
value. There are three further optional profile item values,
***isReturn***, ***numberOfJourneys***, ***numberOfPassengers***. The
***isReturn*** profile item can be set to either *true* or *false*
(false by default), if *true* the algorithm doubles the
***numberOfJourneys***. The emissions for one journey for one person are
multiplied by the ***numberOfJourneys*** and ***numberOfPassengers***
(each have a default of 1) to give the total emissions for the people
and journeys the user wishes to calculate for.

## Algorithm

CO2eEmissionFactor = CO2EF + CO2eEFForN2O + CO2eEFForCH4

CO2e = CO2eEmissionFactor \* distancePerJourney \* numberOfJourneys \*
numberOfPassengers

The algorithm returns a value of kgCO<sub>2</sub>e for the selected journey.
This value includes contributions from carbon dioxide, nitrous oxide and
methane.
