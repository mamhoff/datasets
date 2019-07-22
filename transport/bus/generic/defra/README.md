** This category is deprecated. The latest DEFRA methodology for
passenger bus transport can be found by following this
[link](DEFRA_passenger_transport_methodology).**

This category uses the most recent
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and advice to calculate emissions from UK bus journeys. The most
accurate way to measure emissions is by fuel use using the
[Fuel](Fuel_Defra) category. But often, particularly for public
transport journeys, this data is not available. Therefore, this category
allows the user to estimate their greenhouse gas emissions based on the
distance travelled.

## How to use this category

Use the drill-down ***type*** to select the type of bus used for the
journey from the following options.

  - *typical*

<!-- end list -->

  - *local*

<!-- end list -->

  - *london*

<!-- end list -->

  - *coach*

The user must then enter a ***distancePerJourney*** as a profile item
value. Other optional profile item values that can be used are:

  - ***isReturn*** - is the journey a return journey, *true* or *false*?
    If true ('true') the number of journeys is multiplied by two.
    Default *false*.

<!-- end list -->

  - ***numberOfJourneys*** - Emissions for selected journey are
    multiplied by ***numberOfJourneys***. Default 1.

<!-- end list -->

  - ***numberOfPassengers*** - Number of passengers that the calculation
    is taking into account. Emissions for selected journey are
    multiplied by ***numberOfPassengers***. Default 1.

## Algorithm

CO2eEmissionFactor = CO2EF + CO2eEFForCH4 + CO2eEFForN2O

CO2e = CO2eEmissionFactor \* distancePerJouney \* numberOfJourneys \*
numberOfPassengers

The result is kgCO<sub>2</sub>e emissions for the selected journeys. This
includes contributions from carbon dioxide, nitrous oxide and methane.
