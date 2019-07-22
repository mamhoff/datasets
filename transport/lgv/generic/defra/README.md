** This category is deprecated. The latest DEFRA methodology for heavy
goods vehicle transport can be found
[here](DEFRA_heavy_goods_vehicle_methodology).**

This category uses the most recent
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and advice to calculate emissions from UK heavy goods travel. The
most accurate way to measure emissions is by fuel use using the
[Fuel](Fuel_Defra) category. But often this data is not available, or,
specifically for freight categories, all emissions are not due to the
packages being monitored. Therefore, this category allows the user to
estimate their greenhouse gas emissions based on the vehicle distance
travelled and the vehicle load mass. This category is used if the
vehicle distance and approximate load are known. If the freight distance
and mass are known then the [Load Mass](Heavy_Goods_Freight_Defra)
category should be used.

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

  - *greater than 17t* - rigid only

<!-- end list -->

  - *uk average*

<!-- end list -->

  - *3.5-33t* - articulated only

<!-- end list -->

  - *greater than 33t* - articulated only

Use the third drill-down ***percentageLaden*** to select the load
percentage of the vehicle from. The options for this drill down are
essentially 0, 50, 100 or average percentage loads.

The vehicle ***distance*** must then be entered as profile item values.

## Algorithm

CO2eEmissionFactor = CO2EF + N2OEF + CH4EF

kgCO2e = CO2eEmissionFactor \* distance

The result is equivalent CO2 emissions, which includes contributions
from carbon dioxide, nitrous oxide and methane emissions.
