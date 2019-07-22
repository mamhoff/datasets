**This category is now deprecated. All of the functionality of this
category, as well as more up-to-date and comprenhesive data, can be
found under the specific [DEFRA category for plane
transport](Plane_Generic_Defra)**

The AMEE category transport/plane/generic contains data on CO,,2,,
emissions associated with 'typical' forms of air travel, sourced from
the UK government agency
[DEFRA/DECC](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm).

This dataset follows the CORINAIR guidebook data and methodology but
emissions are calculated on a *per passenger* basis, assuming typical
aircraft types and load factors.

Domestic and short-haul flight emissions calculations are based on fuel
consumption data for the Boeing 737 aircraft and a typical passenger
loading at 65% of capacity. Long-haul flight emissions reflect the fuel
consumption of Boeing 747 aircraft and a passenger loading of 79.7%.
These scenarios incorporate the fuel consumption associated with both
the landing-take off cycle and cruising, and therefore reflect the
respective typical portions of short- and long-haul flights which is
represented by cruising.

Per passenger CO,,2,, emissions for a given flight depend on the flight
*distance* and *passenger class*, both of which can be specified by the
user. Additionally, users can choose to incorporate a Radiative Forcing
Index (RFI) factor to account for the global warming effects of
non-CO,,2,, emissions.

## Distance

Users can set flight distance in one of three ways: (1) directly, by
specifying an actual distance flown; (2) indirectly, by specifying
departure and destination locations; or (3) approximately, by using
generic distance categories.

### Specifying departure and destination locations

Users can enter either the latitude/longitude of the departure and
destination locations or IATA codes for the respective airports involved
in travel. In both cases, AMEE calculates the distance based on a
'great-circle' calculation (using the haversine formula), and inflates
by 9% to account for congestion and indirect routing.

To use this method, select the *auto* category via drill down, and
select from either *one-way* or *return*. If a return flight is chosen,
emissions are simple double the one-way calculation. Next, enter
departure and destination locations by setting one of the following
groups of profile item values:

  - ***lat1***, ***long1***, ***lat2***, ***long2*** (i.e. a pair of
    latitude and longitude coordinates)
  - ***IATACode1***, ***IATACode2*** (i.e. a pair of airport IATA codes)

If ***IATACode1*** and ***IATACode2*** are set then these will be used
to compute the distance and the longitude/latitude and distance profile
items will be ignored. The IATA code calculation made by reference to
airport longitude and latitude data obtained from the
/transport/plane/generic/airports category. Users have an option of
accessing a limited selection of 500 airports (with all major cites and
destinations represented) by using the
/transport/plane/generic/airports/countries category. Alternatively, a
more comprehensive list of 3000 airports is available via
/transport/plane/generic/airports/all/countries.

If no IATA codes are specified but ***long1*** is set to a valid value
then the great circle distance is calculated directly between
***long1***, ***lat1*** and ***long2***, ***lat2*** (and inflated by
9%). Longitude must be in the range -180 to 180 with negative numbers
representing eastern longitudes. Latitudes must be in the range -90 to
90 with negative numbers representing southern latitudes.

Depending on the distance calculated, AMEE selects the appropriate
CO,,2,, emissions factor(kg CO,,2,, per passenger km). A short haul
emissions factor is used for flights under 3700 km, while a long haul
factor is used for those greater than 3700 km. For flights originating
and landing within a single country, the domestic emissions factor is
used. Users can additionally specify the number of passengers and the
number of flights being accounted for using the ***numberOfPassengers***
and ***journeys*** profile item values (both defaulting to 1). The value
returned is the kg CO,,2,, emitted by all passenger journeys, calculated
as follows:

-----

kg CO2,,total,, = kg CO2,,per passenger km,, \* (distance \* 1.09) \*
number of passengers \* number of journeys

-----

Note: the ***distance*** profile item value is ignored in this method.

### Directly specifying a distance

Users can alternatively specify the total distance flown. To use this
method, specify the type of flight by selecting *domestic*, *short
haul*, or *long haul* via drill down, followed by "-" for the flight
size. Next, set the distance flown per year in the ***distance***
profile item value. AMEE calculates emissions by using the appropriate
domestic, short-haul or long-haul emissions factor (kg CO,,2,, per
passenger km). Users may also specify the number of passengers under
consideration by setting the ***numberOfPassengers*** profile item value
(default = 1). The returned value represents annual CO,,2,, emissions
for all passengers, calculated as follows:

-----

kg CO2,,annual,, = kg CO2,,per passenger km,, \* distance,,annual,, \*
number of passengers

-----

Note: the ***journeys*** profile item value is ignored in this method -
emissions are based on the total distance flown in one year.

### Generic distance categories

If flight distances, or specific journey departure and destination
locations are not available, users can calculate flight emissions based
on 'typical' distance categories. There is no widely accepted definition
of the terms "domestic", "short haul" and "long haul", though AMEE
follows
[DEFRA/DECC](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
in assuming the following typical one way flight distances:

  - domestic = 463 km
  - short-haul = 1108 km
  - long-haul = 6482 km

These distances include a 9% inflation factor to account for congestion
and indirect routing. In terms of time, domestic would typically be
shorter than 1.5 hours, short haul between 1.5 and 5 hours and long haul
longer than 5 hours. In geographically large countries, e.g. the USA, it
may be more appropriate to class some domestic flights as short haul.

*Per passenger journey* CO,,2,, emissions factors are calculated as
follows:

-----

kg CO2,,per passenger journey,, = kg CO2,,per passenger km,, \* typical
journey distance

-----

Total CO2 emissions are then calculated according to:

-----

kg CO2,,total,, = kg CO2,,per passenger journey,, \* number of
passengers \* number of journeys

-----

To use this method, specify the type of flight by selecting *domestic*,
*short haul*, or *long haul* via drill down, followed by *one way* or
*return* for the flight size. If a return flight is chosen, emissions
are simple double the one-way calculation. Next, set the number of
journeys in the ***journey*** profile item value, and the number of
passengers by setting the ***numberOfPassengers*** profile item value.
If left unspecified, both of the profile item values default to 1.
Returned values represent CO,,2,, emissions for all passenger journeys.

## Passenger class

Users can also specify the passenger class used, from which AMEE will
attempt to look up a more precise per passenger emission factor from the
category /transport/plane/generic/passengerclass. The
***passengerClass*** profile item value can be populated by the
following valid values:

  - *economy*
  - *economy plus*
  - *business*
  - *first*

All four options are available for long-haul flight calculations, while
just *economy*, *business* and *first* can be used for short haul
calculations (although in the latter case, *business* and *first* return
the same values). No class differentiation is provided for "domestic"
flight scenarios.

## Radiative Forcing Index

Uncertainty over the environmental impact of aircraft emissions arises
from the complexity of atmospheric chemistry, particularly in relation
to the emission of non-CO,,2,, products (e.g. water vapour, contrails,
NO,,x,,) at high altitudes, which is argued to exert a greater global
warming effect compared with similar emissions at ground level. These
effects can be accounted for by using a multiplicative factor called the
Radiative Forcing Index (RFI), which represents the ratio of all
radiative forcing (CO,,2,, + non-CO,,2,, emissions) to that arising from
CO,,2,, emissions only. Estimates for RFI range between 1 and 4 with a
value of 2.7 recommended by the IPCC in 1999. No specific recommended
value was quoted in the most recent IPCC report (2007), and the current
best estimate for RFI is 1.9 ([Sausen et al.
(2005)](http://www.ingentaconnect.com/content/schweiz/mz/2005/00000014/00000004/art00013)).
Following the DEFRA/DECC methodology (e.g. as used in
[Act\_On\_CO2](Act_On_CO2)) for flight-based emissions, AMEE returns
values for CO,,2,, emissions only - i.e. with no RFI applied. Users can
elect to incorporate the RFI by setting the ***useRFI*** profile item
value to "*true*", and entering a value for RFI in the
***radiativeForcingIndex*** profile item value. If no value is entered
in the ***radiativeForcingIndex*** profile item value, a default factor
of 1.9 will be applied.

Alternatively, user can specify their own emissions factors by using the
[user defined plane emissions](User_defined_plane_emissions) category.

Further information can be found in the [flight
section](Act_On_CO2_Methodology#Flights) of the DEFRA methodology paper.
