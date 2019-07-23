The AMEE category /transport/train/specific/electric contains data on
emissions associated with electric trains based on testing and
simulations in the UK, Scandanavia and Japan, sourced from the [Rail
Safety and Standards Board](http://www.rssb.co.uk/index.asp). Emissions
calculations are made on a *per passenger* basis.

Train emissions may vary depending on local geographic and climatic
conditions as well as operational factors such as station spacing, stop
frequency and speed regulations. This category currently contains models
of train for which emissions testing has been carried out specifically
in UK-, Scandanavian- and Japanese-based contexts, and therefore users
should consider the applicability of these data for train-based travel
in other regions.

To use this category, select the geographic region and train model via
the *region* and *type* drill parameters. After specifying the train
type, set the distance travelled using the ***distance*** parameter. The
returned value represents CO<sub>2</sub> emissions for a single passenger
journey (of the specified distance) using the default assumption of 31%
train occupancy (see
[here](http://www.rssb.co.uk/pdf/reports/Research/T618_traction-energy-metrics_final.pdf)
for details of this default value).

## Accountable passengers

Users can also optionally choose to calculate emissions for a multiple
number of passengers. To specify multiple passengers, set the the
***passengers*** parameter to the number of passengers under
consideration. The returned value represents CO<sub>2</sub> emissions for all
passengers for the specified distance. If no value is set, AMEE assumes
a value of 1, i.e. a single passenger journey.

## Train occupancy

Users can optionally override the assumption of 31% occupancy by using
the ***occupancy*** parameter which should be set to a value between
0-100 representing the actual or estimated proportion of the train
occupied. If the the ***occupancy*** parameter is set to a new value,
AMEE recalculates the per passenger CO<sub>2</sub> emissions factor to reflect
the sharing of total vehiclular emissions among the number of passengers
travelling.

## Changing the country

By default, AMEE uses the electricity-generation CO<sub>2</sub> emissions
factor for the UK, but users have the option of specifying the country
of their electric train travel, in which case AMEE will apply the
CO<sub>2</sub> emissions factor for electricity-generation appropriate to that
country. To specify the country, set the ***country*** parameter to
either the name of the country or the ISO code. For example:

  - *country=Italy*
  - *country=IT*

As described above, if no ***country*** parameter is specified, the UK
emissions factors are used by default. If calculations are stored using
profiles, the country can be specified within the profile
[metadata](metadata). Users should note, however, that directly
specified ***country*** parameters override any set as profile metadata.
This is useful, for example, for recording journey's outside the user's
own country.
