** This category is deprecated. The latest DEFRA methodology for plane
transport can be found [here](DEFRA_passenger_transport_methodology) and
[here](Great_Circle_flight_methodology) .**

This category allows users to calculate greenhouse gas emissions from
aeroplane travel using the latest Defra data and advice. The calculation
is based on a given emission factor, dependent on the users drill-down
choices, and a distance flown. The distance can be calculated in one of
three ways: (1) directly, by specifying an actual distance flown; (2)
indirectly, by specifying departure and destination locations; or (3)
approximately, by using generic distance categories. In all cases, the
returned value represents CO2 equivalent emissions attributable to the
journey specified, which includes contributions from carbon dioxide,
methane and nitrous oxide.

## Directly specifying a distance

Users can alternatively specify the distance travelled. To use this
method, select either *domestic, short haul*, or *long haul* via the
***type*** drill down choice and the appropriate ***passengerClass***
(*unspecified, economy, economy plus, business, first*), via the second
drill-down. Next, set the distance flown in the ***distance*** profile
item value. AMEE calculates emissions according to this distance and the
selected emissions factor (kg CO2e per mass km). In this case it is up
to the user to ensure that the correct drill-down options have been
chosen for the specified distance travelled. For example, if a distance
of 50 miles was entered for a long-haul flight, the result of the
calculation will be incorrect. In this example ''domestic'' travel
should be specified instead.

## Specifying departure and destination locations

Users can enter either the latitude/longitude of the departure and
destination locations or IATA codes for the respective airports involved
in travel. In both cases, AMEE calculates the distance based on a
'great-circle' calculation (using the haversine formula), and inflates
by 9% to account for congestion and indirect routing.

To use this method, select the auto category via the ***type*** drill
choice and the appropriate ***passengerClass*** (*unspecified, economy,
economy plus, business, first*), via the second drill choice. Next,
enter departure and destination locations by setting one of the
following groups of profile item values:

  - ***lat1, long1, lat2, long2*** (i.e. a pair of latitude and
    longitude coordinates)

<!-- end list -->

  - ***IATACode1, IATACode2*** (i.e. a pair of airport IATA codes)

The IATA code calculation made by reference to airport longitude and
latitude data obtained from the /transport/plane/generic/airports
category. If no IATA codes are specified but ***long1*** is set to a
valid value then the great circle distance is calculated directly
between ***long1, lat1*** and *\*long2, lat2*** (and inflated by 9%).
Longitude must be in the range -180 to 180 with negative numbers
representing eastern longitudes. Latitudes must be in the range -90 to
90 with negative numbers representing southern latitudes.****

Depending on the distance calculated, AMEE selects the appropriate CO2e
emissions factor (kg CO2e per mass km). A short haul emissions factor is
used for flights under 3700 km, while a long haul factor is used for
those greater than 3700 km. For flights originating and landing within a
single country, the domestic emissions factor is used.

## Generic distance categories

If flight distances, or specific freight departure and destination
locations are not available, users can calculate flight emissions based
on 'typical' distance categories. AMEE follows
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
in assuming the following typical one way flight distances:

  - domestic = 463 km

<!-- end list -->

  - short-haul = 1108 km

<!-- end list -->

  - long-haul = 6482 km

To use this method, specify the ***type*** of flight and
***passengerClass*** as above, but leave the distance profile item value
unspecified. In this case, AMEE calculates freighting emissions
according to the the appropriate typical distance.

## Other optional parameters

There are four other optional profile item values that can be set:
***numberOfPassengers***, ***journeys***, ***useRFI*** and
***radiativeForcingIndex***.

The *\*numberOfPassengers*** profile item value can be used if the user
wishes to calculate emissions for multiple people. The ***journeys***
profile item value can be used if the specified journey has been flown
multiple times. In both of these cases the calculated emissions are
multiplied by the number of passengers and the number of journeys
entered by the user. The number of passengers and number of journeys are
set to 1 if nothing is entered.****

If users wish to incorporate the effects of radiative forcing, the
***useRFI*** profile item value should be set to *true* (default value
is *false*). The value of the the radiative forcing index can be set
using the ***radiativeForcingIndex*** profile item value, defaulting to
1.9 otherwise. For an explanation of the radiative forcing index (RFI)
see the [here](Radiative_Forcing_Index).
