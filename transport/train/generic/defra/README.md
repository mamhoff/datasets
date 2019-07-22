** This category is deprecated. The latest DEFRA methodology for train
transport can be found [here](DEFRA_passenger_transport_methodology).**

This category contains sub-categories allows users to calculate
greenhouse gas emissions from train journeys, based on the type of
train. The methodology follows the latest
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
emission factors and advice. For freight emission factors see the
[Train\_Freight\_Defra](Train_Freight_Defra) category.

To use this category use the drill-down ***type*** to select the type of
train used from the following options.

  - *national* - This factor refers to an average emission per passenger
    km for diesel and electric trains in 2007. The calculation of the
    factor is based on the total electricity and diesel consumed by the
    railways in 2007/2008 from the DfT National Modelling Framework
    Environment Module, and DfT transport statistics on the total number
    of passenger for 2007/2008.

<!-- end list -->

  - *underground*

<!-- end list -->

  - *local rail* - This factor is based on an average of factors for the
    Docklands Light Rail (DLR) service, the Manchester Metrolink, Tyne
    and Wear Metro, Glasgow underground, Supertram, Midland Metro and
    the Croydon Tramlink. These factors were based on annual electricity
    consumption and passenger km data provided by the network operators
    in 2008 and a CO2 emission factor for grid rolling average
    electricity.

<!-- end list -->

  - *tram* - This factor is based on an average of factors for the
    Docklands Light Rail (DLR) service, the Manchester Metrolink, Tyne
    and Wear Metro, Glasgow underground, Supertram, Midland Metro and
    the Croydon Tramlink. These factors were based on annual electricity
    consumption and passenger km data provided by the network operators
    in 2008 and a CO2 emission factor for grid rolling average
    electricity.

<!-- end list -->

  - *international* - This factor is based on an average of the figures
    provided on the Eurostar website for the London-Brussels and
    London-Paris Eurostar routes.

The ***distancePerJourney*** is then required as a profile item value.
There are three further optional profile item values, ***isReturn***,
***numberOfJourneys***, ***numberOfPassengers***. The ***isReturn***
profile item can be set to either *true* or *false* (false by default),
if *true* the algorithm doubles the ***numberOfJourneys***. The
emissions for one journey for one person are multiplied by the
***numberOfJourneys*** and ***numberOfPassengers*** (each have a default
of 1) to give the total emissions for the people and journeys the user
wishes to calculate for.

## Algorithm

CO2eEmissionFactor = CO2EF + CO2eEFForN2O + CO2eEFForCH4

CO2e = CO2eEmissionFactor \* distancePerJourney \* numberOfJourneys \*
numberOfPassengers

The algorithm returns a value of kgCO<sub>2</sub>e for the selected journey.
This value includes contributions from carbon dioxide, nitrous oxide and
methane.
