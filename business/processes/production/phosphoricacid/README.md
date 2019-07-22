The AMEE category at business/processes/production/phosphoricacid
provides a methodology for calculating greenhouse gas emissions
associated with the production of phosphoric acid. The methodology is
based on the quantities and inorganic carbon content of phosphate rock
feedstocks and is sourced from the
[guidelines](http://www.epa.gov/climatechange/emissions/archived/downloads/tsd/TSD%20Phosphoric%20-%20_EPA%202-18-09.pdf)
associated with the US EPA's [mandatory reporting
requirements](http://www.epa.gov/climatechange/emissions/ghgrulemaking.html).

To use this category, specify the region from which the phosphate rock
feedstock originates using the *region* drill choice. AMEE users a
default value for the inorganic carbon content of the phosphate based on
US EPA guidelines. Users can override these values if appropriate (see
below).

Next, specify the quantity of phosphate consumed using the ***mass***
profile item value. The returned amount represents CO<sub>2</sub>e emissions
associated with this quantity based on a default value.

To override the default carbon content set the value as a whole
percentage (i.e. 0-100) using the ***massInorganicCarbonPerMass***
profile item value. If using the 'other' option from the *region' drill
choice, then such a value for inorganic carbon *must* be specified since
there are no associated default values.*

## Time-dependent calculations

The ***mass*** profile item value can be expressed in terms of a
specific period of time, by using the *-Unit* and *-PerUnit* profile
item designations. In conjunction, users can set the duration for which
the facility was in operation, by setting the ***operatingDuration***
profile item value. In this case, AMEE automatically takes into account
the time basis of each quantity. If users specify an operating time for
the facility in terms of hours (*h*), and the quantity of phosphate
feedstock in terms of days (*day*), for example, AMEE will handle the
necessary conversions and return a value for emissions during the
specified operating time.

User should note that, in the case where all values use the same basis
for time, the emissions calculation simply reflects the absolute values
for consumption/recovery specified and is effectively independent of
particular timeframe. This is the default condition of the calculation:
all values are specified on an annual basis with the operating time
assumed to be 1 year. As such, if the ***operatingDuration*** is left
unspecified the returned emission simply reflects the absolute inputs.
