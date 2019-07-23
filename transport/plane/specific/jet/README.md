The AMEE category transport/plane/specific/jet contains data on the fuel
consumption and CO<sub>2</sub> emissions of jet-engine aircraft, sourced from
the [EMEP/CORINAIR Emission Inventory Guidebook
(2007)](http://www.eea.europa.eu/publications/EMEPCORINAIR5/page017.html).
The CORINAIR datasheet and documentation specifies fuel consumption data
for 19 representative jet-engine aircraft types and also provides
recommendations for the appropriate use of this data in representing
other, non-documented aircraft. Following these guidelines, AMEE
contains data for calculating CO<sub>2</sub> emissions for a total of 117
specific jet-engine aircraft.

-----

## The methodology

CO<sub>2</sub> emissions are calculated by considering the fuel consumed during
the discrete in-flight phases of "cruising" and the "landing-take off
(LTO) cycle". Cruise emissions are defined as those occurring above an
altitude of 1000 m. The fuel consumption and CO<sub>2</sub> emissions
associated with cruising are related to distance flown, and are
therefore calculated on the basis of the flight distance specified.
CORINAIR provides fuel consumption data for each aircraft type at
discrete distance intervals. Following CORINAIR methodology, AMEE
therefore interpolates between appropriate distance intervals in order
to calculate the specific fuel consumption for a given distance. For
example, the fuel consumed during the cruise phase of a 486 km flight
would be calculated by interpolating between the fuel consumption values
provided for 250 km and 500 km, according to:

cruise fuel,,486 km,, = fuel,,250 km,, + ((fuel,,500 km,, - fuel,,250
km,,)\*(486-250)/(500-250))

Fuel consumption associated with the landing-take off cycle is **not**
related to distance flown, and therefore remains constant for a
particular aircraft type. LTO fuel consumption does, however, vary
between the individual phases of the LTO cycle (taxiing, take off, climb
out, approach). Fuel consumption within each of these phases reflects
typical thrust settings required and the typical duration for which each
lasts. Default durations for these phases are set within this category
as:

  - take off - 0.7 minutes
  - climb out - 2.2 minutes
  - approach - 4 minutes
  - taxiing - 26 minutes

Users can override one or more of these default values if necessary.
Total LTO associated fuel consumption is then evaluated as the sum of
each individual phase:

LTO fuel = fuel,,take off,, + fuel,,climb out,, + fuel,,approach,, +
fuel,,taxiing,,

Total CO<sub>2</sub> emissions are calculated by combining the fuel consumption
associated with the LTO and cruising phases. This total (LTO + cruise)
fuel consumption (kg) is then multiplied by a CO<sub>2</sub> emissions factor
of 3.15 (kg CO<sub>2</sub> per kg) - in order to convert into a corresponding
quantity of CO<sub>2</sub> emitted - and by the quantity of flights:

CO<sub>2</sub> emissions = (LTO fuel + cruise fuel) \* 3.15 \* number of
journeys

-----

## Using this methodology

### Choosing a specific activity type

To use this category, select the aircraft type via the *aircraft*
drill-down.

### Activity data required

Users can specify the flight distance by setting one of three profile
item value groups:

  - ***distance*** (directly sets the distance flown)
  - ***lat1***, ***long1***, ***lat2***, ***long2*** (latitude and
    longitude values for arrival and departure locations)
  - ***IATACode1***, ***IATACode 2*** (IATA codes for arrival and
    departure airports)

If latitude/longitude or IATA code profile item values are specified,
AMEE calculates the flight distance as the great circle distance between
the two locations, inflating by 9% to account for congestion and
indirect routing. If no distance profile item value is set, AMEE will
return a zero value. Similarly, if a distance is specified which is
beyond the range of a given aircraft type, AMEE will return a zero value
and a notification comment.

If appropriate, specific landing-take off phase durations can be set by
using the following profile item values

  - ***takeOffDuration***
  - ***climbOutDuration***
  - ***approachDuration***
  - ***taxiDuration***

If left unspecified, these profile item values will reflect default
values (see above).

The number of flights under consideration can also be set using the
***journeys*** profile item value (defaulting to 1).

Users can elect to incorporate the RFI by setting the ***useRFI***
profile item value to "*true*", and entering a value for RFI in the
***radiativeForcingIndex*** profile item value. If no value is entered
in the ***radiativeForcingIndex*** profile item value, a default factor
of 1.9 will be applied (to cruise emissions only). For more information
on RFI, see the [here](Radiative_Forcing_Index).

### Calculation and result

The returned quantities for this methodology represent CO<sub>2</sub>,
emissions associated with the aircraft and distance specified. The
following **amounts** are returned:

  - ***cruiseCO2***: CO<sub>2</sub> emissions associated with cruising at
    altitude
  - ***takeOffCO2***: CO<sub>2</sub> emissions associated with the take off
    phase
  - ***climbOutCO2***: CO<sub>2</sub> emissions associated with the climb out
    phase
  - ***approachCO2***: CO<sub>2</sub> emissions associated with the approach
    phase
  - ***taxiCO2***: CO<sub>2</sub> emissions associated with taxiing
  - ***totalCO2***: All CO<sub>2</sub> emissions
  - ***greatCircleDistance***: calculated great circle distance in kms
