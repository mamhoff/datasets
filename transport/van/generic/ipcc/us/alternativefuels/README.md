**This category is deprecated. The IPCC methodology for US light goods
transport with alternative fuels can be found
[here](US_road_transport_with_alternative_fuels_by_IPCC)**

The AMEE category /transport/van/generic/ipcc/us/alternativefuels
contains data on greenhouse gas emissions associated with
alternatively-fuelled (ethanol, cng, lpg) light goods vehicles in the
US, sourced from the IPCC [Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/).

The IPCC methodology for greenhouse gas emissions associated with
['mobile
combustion'](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf)
recommend calculating CO,,2,, emissions on the basis of fuel consumed,
whereas those of CH,,4,, and N,,2,,O vary more directly with other
factors such as vehicle type, emissions control standards, and distance
travelled. Therefore, this category provide a number of options for
calculating truck-associated greenhouse gas emissions, depending on
which combination of fuel consumption, fuel efficiency and distance are
specified.

To use this category, set the vehicle fuel type using the *fuel* drill
options. For some alternative fuels, IPCC methodology provides a range
of emissions factors. Where necessary, the *factorType* drill option to
specify usage of lower, upper or mean emissions factor estimates.

Users can then choose between specifying only fuel consumption, or both
fuel consumption *and* distances travelled.

## Specifying fuel used only

Set the volume of fuel consumed using the ***fuelConsumed*** profile
item value. If required, the ***occupancy*** profile item value can be
specified, representing the number of passengers for which emissions are
accountable. If no occupancy is specified, AMEE assumes an occupancy of
1. The returned amount represents *CO,,2,, emissions* associated with
that volume of fuel shared amongst all passengers.

## Specifying fuel used and distance travelled

If both fuel consumed and distance travelled are specified, AMEE can use
the IPCC methodology to calculate both CO,,2,, and non-CO,,2,, (i.e.
CH,,4,, and N,,2,,O) emissions, and therefore the returned value
represents CO,,2,,e emissions (i.e. total greenhouse gas emissions
expressed as the quantity of CO,,2,, which would produce the same global
warming effect).

If specifying values for distance and fuel consumption, both the
distance travelled and the fuel consumed can be specified in a number of
different ways, as described below. In any case, the ***occupancy***
profile item value can be specified, representing the number of
passengers for which emissions are accountable. If no occupancy is
specified, AMEE assumes an occupancy of 1. The returned amount
represents CO,,2,, emissions associated with that volume of fuel shared
amongst all passengers.

### Setting the fuel consumed

To set the fuel consumed, users can specify the volume using the
***fuelConsumed*** profile item value. Alternatively, users can specify
the rate at which their vehicle consumes fuel using the
***fuelEfficiency*** profile item value. In this case, AMEE calculates
the total fuel used from this 'efficiency' value together with the value
for distance travelled (see below). CO,,2,, emissions are based on this
fuel consumption, while non-CO,,2,, emissions are calculated directly
from the distance travelled.

### Setting the distance travelled

To set the distance travelled users may specify a total distance using
the ***distance*** profile item value. Alternatively, users can specify
a number of journeys of some fixed or average distance, by setting the
***distancePerJourney*** and ***numberOfJourneys*** profile item values.
The total distance will then be calculated from these two profile item
values.

If a specific number of journeys is taken on a regular basis, users can
additionally choose to specify a frequency interval associated with the
***numberOfJourneys*** profile item value by specifying one of the
following options using the ***frequency*** profile item value:

  - 'daily'

<!-- end list -->

  - 'weekly'

<!-- end list -->

  - 'monthly'

In these cases, the number of journeys taken to represent a value 'per
day', or 'per week', etc. and therefore the total number of journeys is
scaled up according to total annual travel. If no ***frequency***
profile item value is specified, then the returned value represents
emissions associated with the absolute distance/number of journeys
specified.
