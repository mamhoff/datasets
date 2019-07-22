** This category is deprecated. The latest DEFRA methodology for
van-based freighting can be found
[here](DEFRA_freight_transport_methodology).**

This category uses the most recent
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and advice to calculate emissions from UK large goods road freight.
The most accurate way to measure emissions is by fuel use using the
[Fuel](Fuel_Defra) category. But often this data is not available, or,
specifically for freight categories, all emissions are not due to the
packages being monitored. Therefore, this category allows the user to
estimate their greenhouse gas emissions based on the distance travelled
and the mass of the freight being transported.

The emission factors used in this category, of kg CO2 per tonne km, were
calculated from the emissions factors per vehicle in the
[Van](Van_generic_Defra) category and an average load factor of 40%
(estimated on the basis of Department for Transport 2005). The average
cargo capacity was taken to be 0.6 tonnes for petrol vans up to 1.25
tonnes gross vehicle weight and diesel Class 1 vans, I tonne for Class
II diesel vans and taken to be 2 tonnes for vans up to 2.5 tonnes gross
vehicle weight.

## How to use this category

Use the drill-down ***fuel*** to select the type of fuel used from the
following options.

  - *petrol*

<!-- end list -->

  - *diesel*

<!-- end list -->

  - *lpg*

<!-- end list -->

  - *cng*

<!-- end list -->

  - *unknown* - for unknown fuel type

The second drill-down, ***size***, can then be used to select the size
of vehicle, in terms of it's weight. The ***distance*** and ***mass***
must then be entered as profile item values.

## Algorithm

CO2eEmissionFactor = CO2EF + N2OEF + CH4EF

kgCO2e = CO2eEmissionFactor \* distance \* mass

The result is equivalent CO2 emissions, which includes contributions
from carbon dioxide, nitrous oxide and methane emissions.
