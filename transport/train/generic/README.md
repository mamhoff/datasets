This category contains data on the per passenger CO<sub>2</sub> emissions
associated with train travel in the UK, Republic of Ireland and Spain.
This category provides CO<sub>2</sub> emissions only and should be considered
to represent a useful first point of entry to train-related emissions.
If users are interested in more specific and comprehensive per-passenger
datasets (which include CO<sub>2</sub> as well as CH<sub>4</sub> and N<sub>2</sub>O
emissions) or train-based freighting, they should see the following
categories:

  - [DEFRA](Train_generic_Defra)
  - [GHG Protocol](Generic_train_GHGP)
  - [Freight methodologies](Train_freight)

## How to use this category

To use this category, select they type of train journey using the *type*
drill parameter. The following options are available:

  - national
  - underground
  - local rail
  - tram
  - international

Next, users can specify the country within which travel is undertaken,
and then choose between calculations based on absolute travel distances
or multiple journeys. The former may be appropriate for single,
long-distance journeys (e.g. holiday travel), while the latter is useful
for those journeys which are repeated on a regular basis (e.g.
commuting).

*Setting the country* Emissions factors relating to the UK (sourced from
the government agency
[DEFRA](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)),
the Republic of Ireland, and Spain are available within this category.
To specify the appropriate emissions factor users can set the
***country*** parameter to any of the following values:

  - 'UK'
  - 'United Kingdom'
  - 'IE'
  - 'Ireland'
  - 'ES'
  - 'Spain'

If no value is specified, the UK emissions factors are used by default.
If calculations are stored using profiles, the country can be specified
within the profile [metadata](metadata). Users should note, however,
that directly specified ***country*** parameters override any set as
profile metadata.

## Calculating by absolute distance

To calculate emissions based on single journey distance, simply set the
distance using the ***distance*** parameter. Users can additionally set
a multiple number of passengers by setting the ***numberOfPassengers***
parameter. The value returned represents CO<sub>2</sub> emissions attributable
to all nominated passengers for the distance travelled.

## Calculating by multiple journeys

To calculate emissions based on a number of repeated journeys, users
must specify (1) a journey distance, and (2) a journey frequency. To set
the journey distance, simply set the distance using the
***distancePerJourney*** parameter. If the distance is not known, a
'typical' distance can be substituted by setting the
***useTypicalDistance*** parameter to '*true*'. In these cases, the
following distances are used for each of the drill parameters:

  - national: 51.2 km
  - underground: 13.9 km
  - local rail: 13.9 km
  - tram: 13.9 km
  - international: 434.0 km

Journey frequency is expressed in terms of a number of journeys per some
specified time period, for example *ten journeys per week* or *one
journey per month*. The quantity of journeys is specified by setting the
***numberOfJourneys*** parameter to a numeric value, while the time
period is set using the ***journeyFrequency*** parameter. Valid values
for the ***journeyFrequency*** parameter are as follows:

  - 'daily'
  - 'weekly'
  - 'monthly'
  - 'yearly'

Users can optionally declare the stated journey frequency to represent
*return* journeys by setting the ***isReturn*** parameter to '*true*',
in which case the total number of journeys are doubled. Additionally, a
multiple number of passengers can be included by setting the
***numberOfPassengers*** parameter. The value returned represents
CO<sub>2</sub> emissions attributable to all nominated passengers per year.
