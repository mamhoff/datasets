The AMEE category /transport/car/specific/us contains data on greenhouse
gas emissions associated with models of car used in the United States,
sourced from [www.fueleconomy.gov](http://www.fueleconomy.gov).
Calculations are made on the basis of vehicular fuel consumption data
(i.e. *volume fuel per distance*) together with data on the carbon
intensity of fuels (i.e. *mass CO<sub>2</sub> per volume*) sourced from the
AMEE category [/home/energy/quantity](Energy_by_Quantity):

-----

Emissions = (fuel carbon intensity / fuel consumption) \* distance

-----

Users have the option of using established fuel consumption data for
their specific vehicle model - with alternatives available for 'city',
'highway' and 'combined' driving - or specifying their own fuel
consumption rate.

To use this category, drill down to the required car model using the
*manufacturer*, *line*, *transmission*, and *engineSize* drill options.
Next, specify a distance using the ***distance*** profile item value and
specify a type of fuel consumption factor using the ***drivingType***
profile item value which can be set to any of the following values:

  - '*city*' - specifies fuel consumption based on city driving
  - '*highway*' - specifies fuel consumption based on highway driving
  - '*combined*' - specifies fuel consumption based on a typical mix of
    city and highway driving
  - '*own*' - specifies fuel consumption based on users own data

If the ***drivingType*** profile item value is set to '*own*' then users
must specify their own fuel consumption factor in the
***ownFuelConsumption*** profile item value, whereas '*city*',
'*highway*', or '*combined*' result in established fuel consumption data
being used. In any case, the chosen vehicle fuel consumption factor is
used together with an appropriate fuel carbon intensity value
(diesel/petrol, taken from the category
[/home/energy/quantity](Energy_by_Quantity)) to calculcate the CO<sub>2</sub>
emissions associated with model-specific car travel over the specified
distance. By default the ***drivingType*** profile item value is set to
'*combined*' and therefore if not otherwise set, the returned value
represents CO<sub>2</sub> emissions for the vehicle and distance specified
using established fuel consumption data assuming a mix of both 'city'
and 'highway' driving.
