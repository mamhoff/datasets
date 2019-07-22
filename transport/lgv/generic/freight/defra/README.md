** This category is deprecated. The latest DEFRA methodology for heavy
goods vehicle freighting can be found
[here](DEFRA_freight_transport_methodology).**

This category uses the most recent
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and advice to calculate emissions from UK heavy goods road freight.
The most accurate way to measure emissions is by fuel use using the
[Fuel](Fuel_Defra) category. But often this data is not available, or,
specifically for freight categories, all emissions are not due to the
packages being monitored. Therefore, this category allows the user to
estimate their greenhouse gas emissions based on the distance travelled
and the mass of the freight being transported. This category is used if
the load mass and freight distance are known, if only vehicle distance
and approximate load known then use the [Percentage
Laden](Heavy_Goods_Defra) category.

## How to use this category

Use the drill-down ***type*** to select the type of Heavy Goods Vehicle
used from the following options.

  - *rigid*

<!-- end list -->

  - *articulated*

<!-- end list -->

  - *unknown*

Use the second drill-down ***size*** to select the size of vehicle from
the following options.

  - *3.5-7.5t* - rigid only

<!-- end list -->

  - *7.5-17t* - rigid only

<!-- end list -->

  - *\>17t* - rigid only

<!-- end list -->

  - *unknown*

<!-- end list -->

  - *3.5-33t* - articulated only

<!-- end list -->

  - *\>33t* - articulated only

The ***distance*** and ***mass*** must then be entered as profile item
values.

## Algorithm

CO2eEmissionFactor = CO2EF + N2OEF + CH4EF

kgCO2e = CO2eEmissionFactor \* distance \* mass

The result is equivalent CO2 emissions, which includes contributions
from carbon dioxide, nitrous oxide and methane emissions.
