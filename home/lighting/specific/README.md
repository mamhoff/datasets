This methodology enables the calculation of greenhouse gas emissions
associated with the use of internal lighting. This calculation is based
on the wattage of light bulbs and the duration for which they are used,
together with emissions data associated with grid electricity production
and consumption.

To use this methodology set the wattage of the bulb(s) using the
***wattage*** parameter. Finally, users must choose between two ways of
specifying the duration for which lighting was in use.

## Lighting usage

### Specifying an absolute time

To specify a single, absolute quantity of time, set this duration using
the ***totalTimeInUse*** parameter. The returned value represents
CO<sub>2</sub> emissions associated with the specified duration of lighting
use, based on the emissions factors for electricity generation and
consumption in the United Kingdom (this location can be overriden - see
below).

### Specifying regular usage

Users can alternatively specify repeated intervals of lighting usage by
specifying two parameters representing a *rate* of lighting usage and a
period under consideration. For example, users could set the number of
*hours per day* and the total *number of days*. To use this approach,
set the rate of lighting usage using the ***timePerTimePeriod***
parameter and the duration under consideration using the
***timePeriod*** parameter. AMEE converts this specification into a
total quantity of lighting (electricity) consumption and calculates the
associated emissions. By default, the units for the
***timePerTimePeriod*** parameter are set to hours ('h') per day
('day'), while those of the ***timePeriod*** parameter are set to days
('day') with a default value of 365.2425 (based on Gregorian calendar).
This means that, unless these default values are overridden, an *annual*
quantity of emissions based on the number of hours of lighting used per
day will be returned. It is best practice to always specify units and
'per-units', however.

## Specifying multiple bulbs

Users can specify multiple light bulbs, if appropriate, although it
should be noted that each must represent similar wattage and usage. This
may be useful where a single light fitting contains several bulbs, or
perhaps where multiple rooms or internal spaces are lit consistently. To
indicate that multiple light bulbs are to be considered in the emissions
calculation, set the number of light bulbs using the ***number***
parameter. AMEE scales up the emissions calculation accordingly. This
value is set to 1 by default.

## Setting the country

By default, the emissions factor for UK grid electricity generation is
used to convert lighting associated electricity consumption into a
quantity of greenhouse gas emissions. However, users can specify an
alternative country by setting the country name or ISO code in the
***country*** parameter. In this case, AMEE will lookup the appropriate
grid electricity emissions factor from [this
dataset](Electricity_by_country). If calculations are stored using
profiles, the country can be specified within the profile
[metadata](metadata). Users should note, however, that directly
specified ***country*** parameters override any set as profile metadata.
