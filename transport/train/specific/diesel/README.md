The AMEE category /transport/train/specific/diesel contains data on
emissions associated with diesel powered trains based on testing and
simulations in the UK, sourced from the [Rail Safety and Standards
Board](http://www.rssb.co.uk/index.asp). Emissions calculations are made
on a *per passenger* basis.

Train emissions may vary depending on local geographic and climatic
conditions as well as operational factors such as station spacing, stop
frequency and speed regulations. This category currently contains only
models of train for which emissions testing has been carried out in the
UK, and therefore users should consider the applicability of these data
for train-based travel in other regions.

To use this category, select the geographic region and train model via
the *region* and *type* drill options. After specifying the train type,
set the distance travelled using the ***distance*** profile item value.
The returned value represents CO<sub>2</sub> emissions for a single passenger
journey (of the specified distance) using the default assumption of 31%
train occupancy (see
[here](http://www.rssb.co.uk/pdf/reports/Research/T618_traction-energy-metrics_final.pdf)
for details of this default value).

## Train occupancy

Users can optionally override the assumption of 31% occupancy by using
the ***occupancy*** profile item value which should be set to a value
between 0-100 representing the actual or estimated proportion of the
train occupied. If the the ***occupancy*** profile item value is set to
a new value, AMEE recalculates the per passenger CO<sub>2</sub> emissions
factor to reflect the sharing of total vehiclular emissions among the
number of passengers travelling.

## Accountable passengers

Users can also optionally choose to calculate emissions for a multiple
number of passengers. To specify multiple passengers, set the the
***passengers*** profile item value to the number of passengers under
consideration. The returned value represents CO<sub>2</sub> emissions for all
passengers for the specified distance. If no value is set, AMEE assumes
a value of 1, i.e. a single passenger journey.
