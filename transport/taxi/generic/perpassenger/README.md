The category /transport/taxi/generic/perpassenger contains data on the
greenhouse gas emissions associated with taxi travel on a *per
passenger* basis. For alternative *per passenger* and *per vehicle*
emissions methodologies, see other subcategories of [Generic
taxi](Generic_taxi_transport)

## Overview

This category contains greenhouse gas emissions data relating to taxi
travel, sourced from the UK government agency
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm).

To use this category, select they type of taxi using the *type* drill
option. Users can choose from the following options:

  - *typical*
  - *black cab*

Next, users can choose between calculations based on absolute travel
distances or multiple journeys. The former may be appropriate for
single, 'one-off' journeys, while the latter is useful for those
journeys which are repeated on a regular basis (e.g. commuting).

## Calculating by absolute distance

To calculate emissions based on single journey distance, simply set the
distance using the ***distance*** profile item value. Users can
additionally set a multiple number of passengers by setting the
***numberOfPassengers*** profile item value. The value returned
represents CO,,2,, emissions attributable to all nominated passengers
for the distance travelled.

## Calculating by multiple journeys

To calculate emissions based on a number of repeated journeys, users
must specify (1) a journey distance, and (2) a journey frequency. To set
the journey distance, simply set the distance using the
***distancePerJourney*** profile item value. If the distance is not
known, a 'typical' distance for taxi travel - of 7.4 km - can be
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
represents CO,,2,, emissions attributable to all nominated passengers
per year.
