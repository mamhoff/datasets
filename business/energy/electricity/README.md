**This category is now deprecated. The Greenhouse Gas Protocol data,
together with historical values, can now be found
[here](Greenhouse_Gas_Protocol_international_electricity)**

The AMEE category at /business/energy/electricity includes data and a
calculation methodology for greenhouse gas emissions associated with the
production and consumption of grid electricity by specific country and
other international jurisdictions. Data on CO<sub>2</sub> emissions is sourced
from the WRI [Greenhouse Gas Protocol](Greenhouse_Gas_Protocol)
[worksheet](http://www.ghgprotocol.org/calculation-tools/all-tools) for
*GHG emissions from Purchased Electricity, Heat or Steam*, which based
on data published by the International Energy Agency
[IEA](http://www.iea.org/index.asp). Emissions factors for CH<sub>4</sub> and
N<sub>2</sub>O emissions data is sourced from the US
[EIA](http://www.eia.doe.gov/oiaf/1605/excel/electricity_factors_99-02country.xls).

To use this category, set the country or international region using the
***country*** drill choice. Next, set the quantity of electricity
consumed by setting the ***energyPerTime*** profile item value. The
returned quantity represents CO<sub>2</sub>e emissions associated with the
energy quantity and country/region specified.

The GHG protocol worksheets additionally provide functionality for the
accounting of electricity usage in shared facilities. AMEE replicates
this functionality by allowing users to specify the proportion of floor
area which is under consideration (e.g. square feet of office space). To
use this functionality, specify the 'responsible' and total areas using
the ***responsibleArea*** and ***totalArea*** profile item values. The
returned value represents only the share of emissions which are
attributable to the user on the basis of floor area share.
