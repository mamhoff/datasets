The category /transport/ship/generic contains data on the greenhouse gas
emissions associated with ship-based *passenger* transport. This
category provides CO<sub>2</sub> emissions only and should be considered to
represent a useful first point of entry to ship-related emissions. If
users are interested in more specific and comprehensive data (which
includes CO<sub>2</sub> as well as CH<sub>4</sub> and N<sub>2</sub>O emissions) they should
see the specific [DEFRA](Ship_generic_Defra) category for ship
transport.

For emissions methodologies associated with ship-based *freighting*, see
the [Ship freighting](Ship_freighting) subcategory.

To use this category, select they type of ship journey using the *type*
drill option. Users can choose from the following options:

  - *ferry*: specifies emissions calculation for average ferry passenger
  - *by foot*: specifies emissions calculation specifically for walk-on
    passenger
  - *by car*: specifies emissions calculation specifically for drive-on
    passenger

Next, users can choose between calculations based on absolute travel
distances or multiple journeys. The former may be appropriate for
single, long-distance journeys (e.g. holiday travel), while the latter
is useful for those journeys which are repeated on a regular basis (e.g.
commuting).

## Calculating by absolute distance

To calculate emissions based on single journey distance, simply set the
distance using the ***distance*** profile item value. Users can
additionally set a multiple number of passengers by setting the
***numberOfPassengers*** profile item value. The value returned
represents CO<sub>2</sub> emissions attributable to all nominated passengers
for the distance travelled.

## Calculating by multiple journeys

To calculate emissions based on a number of repeated journeys, users
must specify (1) a journey distance, and (2) a journey frequency. To set
the journey distance, simply set the distance using the
***distancePerJourney*** profile item value. If the distance is not
known, a 'typical' distance for ferry travel - of 34 km - can be
substituted by setting the ***useTypicalDistance*** profile item value
to '*true*'.

Journey frequency is expressed in terms of a number of journeys per some
specified time period, for example *ten journeys per week* or *one
journey per month*. The quantity of journeys is specified by setting the
***numberOfJourneys*** profile item value to a numeric value, while the
time period is set using the ***journeyFrequency*** profile item value.
Valid values for the ***journeyFrequency*** profile item value are as
follows:

  - 'daily'
  - 'weekly'
  - 'monthly'
  - 'yearly'

Users can optionally declare the stated journey frequency to represent
*return* journeys by setting the ***isReturn*** profile item value to
'*true*', in which case the total number of journeys are doubled. A
multiple number of passengers can also be included by setting the
***numberOfPassengers*** profile item value. The value returned
represents CO<sub>2</sub> emissions attributable to all nominated passengers
per year.
