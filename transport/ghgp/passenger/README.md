**Passenger transport emissions methodology. Calculates direct carbon
dioxide (CO,,2,,), methane (CH,,4,,), nitrous oxide (N,,2,,O) and
CO,,2,,e emissions associated with passenger transport. Choices include
vehicle type, passenger class and region. Global.**

## Summary

This methodology represents greenhouse gas emissions associated with the
passenger transport in the geographic contexts of the US, UK and other
regions. The data and calculation methodology is based on those provided
in the Greenhouse Gas Protocol worksheet *GHG emissions from transport
or mobile sources* (version 2.2), published in June 2011.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the rate at which greenhouse gas emissions are produced during travel in
relation to **distance** travelled. These emissions factors represent
emissions associated with *individual passengers*, which can be
contrasted with similar transport-related emissions factors which
describe emissions on the basis of *entire vehicles* (e.g. car,
motorcycle).

Emissions - expressed in terms of mass (e.g. kg) - are calculated by
multiplying these rates (mass emitted per distance; e.g. kg CO2 per
mile) by a distance (e.g mile) travelled.

### Model data

The rate at which passenger transportation produces greenhouse gas
emissions varies with the mode of transport, depending on factors such
as the fuel efficiency (i.e. the distance achieved per unit of fuel
consumed) of the particular type of vehicle (e.g. lorry, plane, train,
ship) as well as the typical passenger loading. Fuel efficiency may be
related factors such as the type of fuel used (e.g. petrol, diesel,
biofuel, electricity) and the physical dynamics of the transportation
context (i.e. road, rail, water, air). The loading of passengers
indicates the extent to which the emissions of the entire vehicle can be
'shared' between individual passengers. Therefore, emissions factors for
a broad range of generalised passenger transport scenarios are provided.

A total of 57 specific types of passenger transport scenarios are
represented and are differentiated by transport type (i.e. air, bus,
ferry, rail, taxi), passenger class (in the case of air travel) and
region (UK, US, other regions).

Most transport types (bus, rail, taxi) are represented by three distinct
emissions factors which differentiate greenhouse gas emissions into
CO,,2,,, CH,,4,, and N,,2,,O. For air and ferry travel, only emissions
factors for CO,,2,, are provided as part of this methodology, and
therefore only CO,,2,, emissions associated with these forms of
transport can be calculated (CH,,4,, and N,,2,,O emissions may
nevertheless exist).

Where calculated, CH,,4,, and N,,2,,O emissions are converted into kg
CO,,2,,e - a standardized unit representing the effect of a unit kg of
CO,,2,, on atmospheric warming - using the appropriate [global warming
potential](Greenhouse_gases_Global_warming_potentials) for each
respective gas.

### Activity data required

According to this methodology, greenhouse gas emissions are directly
proportionate to the distance travelled, which therefore must be
specified in order to make an emissions calculation.

If multiple passengers are under consideration, this number can be
additionally specified. The number of passengers is implicitly set to 1
by default, and therefore if no number if specified the returned
emissions are those based on a single passenger.

### Calculation and result

The returned quantities for this methodology represent CO,,2,,, CH,,4,,,
N,,2,,O and CO,,2,,e emissions associated with the activity data
(distance, passengers) specified.

CO,,2,,e emissions represent all three gases, converted using
[these](Greenhouse_gases_Global_warming_potentials) global warming
potential). The individual quantities for CH,,4,, and N,,2,,O represent
*absolute quantities* rather than CO,,2,,e quantities. For some
scenarios within this methodology, emissions factors for CH,,4,, and
N,,2,,O are not available. In these cases values of zero are returned
for the respective gases together with a notification comment. CO,,2,,
and CO,,2,,e values are returned as normal.

-----

### Similar methodologies

Other Greenhouse Gas Protocol transport methodologies are available
representing general [transport
fuel](Transport_fuels_by_Greenhouse_Gas_Protocol) consumption, fuels
consumed in [specific transport
contexts](Transport_fuels_with_context_by_Greenhouse_Gas_Protocol),
[freight transport](Freight_transport_by_Greenhouse_Gas_Protocol), and
road transportation in the
[UK](UK_road_transport_by_Greenhouse_Gas_Protocol) (with [heavy
goods](UK_heavy_goods_transport_by_Greenhouse_Gas_Protocol)),
[US](US_road_transport_by_Greenhouse_Gas_Protocol) and [other
regions](Other_regional_road_transport_by_Greenhouse_Gas_Protocol).

-----

## Notes

### Default units

The CO,,2,, emissions factors contained within this methodology are
presented in a mixture of units (i.e. kg \[emissions\] per *mile*; kg
\[emissions\] per *kilometer*) in the original Greenhouse Gas Protocol
source documentation.

For consistency, all CO,,2,, factors are presented within the AMEE
platform in a common default unit: kg \[emissions\] per *mile*.
Emissions factors were converted using the kilometer-to-mile conversion
factor provided in the *Reference - EF Fuel Use* worksheet of the source
documentation, i.e.

emission factor ,,kg per mile,, = emission factor ,,kg per kilometer,,
\* 1.609344 ,,kilometers per mile,,

Users of AMEE can, of course, choose to specify their consumption in any
appropriate unit with the AMEE handling any required conversions.
