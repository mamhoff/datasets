This category allows you to create profile items that represent a
journey between two train stations. AMEE will determine the route and
calculate the distance and emissions. At present, our database contains
over 2800 UK stations with all mainline UK train stations supported.

See the [UK train stations](UK_train_stations) page for further details
of stations coverage.

-----

## Using this methodology

### Choosing a specific activity type

There are no drill down choices necessary. All variables (departure and
destination stations, train types) are specified as profile item values
(see below).

### Activity data required

To use this category, users must specify the names of two stations and a
'train type' which indicates the emissions factor which is to be used
for the emissions calculation.

**Stations:** To specify the journey, set the profile item values
***station1*** and ***station2*** to the names or codes of any two
stations. If a train station name does not exactly match one held in
AMEE then a fuzzy match will be attempted. This means you can either
specify the train station explicitly, such as London Euston, or simply
specify London as the train station.

The route will be determined based on all open lines with scheduled
services as of October 2009. If no reasonable or realistic route can be
found between two stations AMEE will return a HTTP 400 BAD REQUEST
error. This would arise, for example, in those cases where two stations
are physically close to one another but not linked directly by rail.

**Train types:** Users can obtain emissions calculation using either
representative data on generic train types, or data specific to
particular types of train. To specify the type of train the
***trainType*** profile item value must make reference to one of the
trains represented in any of the following methodologies:

  - [General passenger rail
    transport](DEFRA_passenger_transport_methodology): *value* = one of
    the rail ***subtype*** choices (e.g. *light rail and tram*)
  - [Rail transport on specific electric-powered
    trains](Specific_electric_trains): *value* = one of the UK-based
    ***type*** choices (e.g. *Class 390 Pendolino EMU 11-car*)
  - [Rail transport on specific diesel-powered
    trains](Specific_diesel_trains): *value* = one of the UK-based
    ***type*** choices (e.g. *Class 220 Voyager*)

Should an invalid train type be entered, a value of zero will be
returned together with an error message.

**Occupancy:** By default, the returned emissions will be kgCO2 per
passenger, though this can be overridden to give the emissions for any
number of passengers by setting the ***passengers*** profile item value.
A default occupancy of 31% is assumed, but this can be overriden by
specifying the ***occupancy*** profile item value.

### Calculation and result

The returned quantities for this methodology represent CO,,2,, emissions
associated with the journey specified. The following discrete
**amounts** are returned:

  - ***CO2***: CO,,2,, emissions
  - ***distance***: calculated distance in kms
