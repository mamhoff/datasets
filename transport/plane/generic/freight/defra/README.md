** This category is deprecated. The latest DEFRA methodology for plane
freighting can be found [here](DEFRA_freight_transport_methodology) and
[here](Great_Circle_flight_methodology) .**

This category allows the user to calculate air freight emissions using
the latest Defra data and advice.

To use this category, users must specify both a distance and a mass of
freight transported. Mass should be specified using the ***mass***
profile item value. Users can set freight distance in one of three ways:
(1) directly, by specifying an actual distance flown; (2) indirectly, by
specifying departure and destination locations; or (3) approximately, by
using generic distance categories. In all cases, the returned value
represents CO<sub>2</sub> emissions attributable to the transported freight
over the distance specified.

## Specifying departure and destination locations

Users can enter either the latitude/longitude of the departure and
destination locations or IATA codes for the respective airports involved
in travel. In both cases, AMEE calculates the distance based on a
'great-circle' calculation (using the haversine formula), and inflates
by 9% to account for congestion and indirect routing.

To use this method, select the *auto* category via drill down. Next,
enter departure and destination locations by setting one of the
following groups of profile item values:

  - ***lat1***, ***long1***, ***lat2***, ***long2*** (i.e. a pair of
    latitude and longitude coordinates)

<!-- end list -->

  - ***IATACode1***, ***IATACode2*** (i.e. a pair of airport IATA codes)

The IATA code calculation made by reference to airport longitude and
latitude data obtained from the /transport/plane/generic/airports
category. If no IATA codes are specified but ***long1*** is set to a
valid value then the great circle distance is calculated directly
between ***long1***, ***lat1*** and ***long2***, ***lat2*** (and
inflated by 9%). Longitude must be in the range -180 to 180 with
negative numbers representing eastern longitudes. Latitudes must be in
the range -90 to 90 with negative numbers representing southern
latitudes.

Depending on the distance calculated, AMEE selects the appropriate CO2
emissions factor (kg CO2 per mass km). A short haul emissions factor is
used for flights under 3700 km, while a long haul factor is used for
those greater than 3700 km. For flights originating and landing within a
single country, the domestic emissions factor is used.

## Directly specifying a distance

Users can alternatively specify the distance of freighting directly. To
use this method, specify the type of flight by selecting *domestic*,
*short haul*, or *long haul* via drill down. Next, set the distance
flown in the ***distance*** profile item value. AMEE calculates
emissions according to this distance and the selected (domestic,
short-haul or long-haul) emissions factor (kg CO2 per mass km).

## Generic distance categories

If flight distances, or specific freight departure and destination
locations are not available, users can calculate flight emissions based
on 'typical' distance categories. AMEE follows
[DEFRA/DECC](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
in assuming the following typical one way flight distances:

  - domestic = 463 km

<!-- end list -->

  - short-haul = 1108 km

<!-- end list -->

  - long-haul = 6482 km

To use this method, specify the type of flight by selecting *domestic*,
*short haul*, or *long haul* via drill down as above, but leave the
***distance*** profile item value unspecified. In this case, AMEE
calculates freighting emissions according to the the appropriate typical
distance.

## Other Optional Parameters

If users wish to incorporate the effects of radiative forcing, the
***useRFI*** profile item value should be set to *true* (default value
is *false*). The value of the the radiative forcing index can be set
using the ***radiativeForcingIndex*** profile item value, defaulting to
1.9 otherwise. For an explanation of the radiative forcing index (RFI)
see the [here](Radiative_Forcing_Index).
