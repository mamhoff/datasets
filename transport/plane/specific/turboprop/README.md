The AMEE category transport/plane/specific/turboprop contains data on
the fuel consumption and CO,,2,, emissions of 26 types of
turboprop-engine aircraft, sourced from the [EMEP/CORINAIR Emission
Inventory Guidebook
(2007)](http://www.eea.europa.eu/publications/EMEPCORINAIR5/page017.html).

-----

## The methodology

CO,,2,, emissions are calculated by considering the fuel consumed during
the discrete in-flight phases of "cruising" and the "landing-take off
(LTO) cycle".

As with [jet aircraft](Specific_jet_aircraft), fuel consumed by
turboprop aircraft during "cruising" (i.e. at an altitude greater than
1000 m) is dependent on the distance flown. In addition, however, the
fuel used during the 'taxiing out', 'take off' and 'climb out' phases of
the LTO cycle are also related to flight distance for turboprop
aircraft, reflecting the greater fuel requirements of flying longer
distances which exerts an appreciable loading effect relative to
turboprop aircraft sizes. CORINAIR provides fuel consumption data for
taxiing out, take off, climb out and cruising for each aircraft type in
discrete distance categories. Following CORINAIR methodology, AMEE
interpolates between appropriate distance categories in order to
calculate the specific fuel consumption for a given distance. For
example, the fuel consumed during the cruise phase of a 486 km flight
would be calculated by interpolating between the fuel consumption values
for 250 km and 500 km, according to:

cruise fuel,,486 km,, = fuel,,250 km,, + ((fuel,,500 km,, - fuel,,250
km,,)\*(486-250)/(500-250))

Fuel consumed during the taxi out, take off and climb out phases are
calculated similarly, using the appropriate CORINAIR data tables. Fuel
consumed during the 'approach' and 'taxiing in' phases of the LTO cycle
are **not** related to the distance flown, and therefore remain constant
for a given aircraft type. Total CO,,2,, emissions are calculated by
combining the fuel consumption associated with the LTO and cruising
phases and multiplying by a CO,,2,, emissions factor of 3.15 (kg CO,,2,,
per kg) and the quantity of flights under consideration.

CO,,2,, = (fuel,,taxi out,, + fuel,,take off,, + fuel,,climb out,, +
fuel,,cruise,, + fuel,,approach,, + fuel,,taxi in,,) \* 3.15 \* quantity

-----

## Using this methodology

### Choosing a specific activity type

To use this category, select the aircraft type via the *aircraft*
drill-down

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
indirect routing. If a distance is specified which is beyond the range
of a given aircraft type, AMEE will return a zero value and a
notification comment.

If appropriate, the ***journeys*** profile items can be additionally
set, but will otherwise default to 1.

Users can elect to incorporate the RFI by setting the ***useRFI***
profile item value to "*true*", and entering a value for RFI in the
***radiativeForcingIndex*** profile item value. If no value is entered
in the ***radiativeForcingIndex*** profile item value, a default factor
of 1.9 will be applied (to cruise emissions only). For more information
on RFI, see the [here](Radiative_Forcing_Index).

### Calculation and result

The returned quantities for this methodology represent CO,,2,,,
emissions associated with the aircraft and distance specified. The
following **amounts** are returned:

  - ***cruiseCO2***: CO,,2,, emissions associated with cruising at
    altitude
  - ***taxiOutCO2***: CO,,2,, emissions associated with taxiing before
    take off
  - ***takeOffCO2***: CO,,2,, emissions associated with the take off
    phase
  - ***climbOutCO2***: CO,,2,, emissions associated with the climb out
    phase
  - ***approachCO2***: CO,,2,, emissions associated with the approach
    phase
  - ***taxiInCO2***: CO,,2,, emissions associated with taxiing
    subsequent to landing
  - ***totalCO2***: All CO,,2,, emissions
  - ***greatCircleDistance***: calculated great circle distance in kms
