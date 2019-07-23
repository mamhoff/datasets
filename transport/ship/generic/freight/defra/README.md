** This category is deprecated. The latest DEFRA methodology for
ship-based freighting can be found
[here](DEFRA_freight_transport_methodology).**

This category uses the most recent
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and advice to calculate emissions from UK shipping freight. The
most accurate way to measure emissions is by fuel use using the
[Fuel](Fuel_Defra) category. But often this data is not available, or,
specifically for freight categories, all emissions are not due to the
packages being monitored. Therefore, this category allows the user to
estimate their greenhouse gas emissions based on the distance travelled
and the mass of the freight being transported.

The emission factor for RoPax ferries was derived from data provided by
Best Foot Forward and assumes an average HGV load factor of 13.6 tonnes,
based on information from the Road Transport Statistics 2005. RoPax
ferries are roll-on-roll off that carry both road vehicles and their
passengers as well as having additional passenger-only capacity.

The emission factors for other types of ships presented here are derived
from the information in the EMEP-CORINAIR Handbook 2003 and a report by
Entec 2002. This included fuel consumption rates for engine power and
speed while cruising at sea associated with different vessels. The
factors refer to kgCO2 per deadweight tonne km. Deadweight tonnage is
the weight of the cargo that, when added to the weight of the ship's
structure and equipment, will bring the vessel down to its designated
waterline. This implies the factors are based on a fully loaded vessel.
Because the ship's engines are propelling the weight of the ship itself,
which is a significant proportion of the overall weight of the vessel
and its cargo, reducing the cargo load from the deadweight tonnage will
not lead to a proportionate reduction in the amount of fuel required to
move the vessel a given distance.

The emissions calculated in this category assume a fully laden ship, so
if this is not the case these results will underestimate the emissions.
Therefore, results from this category should be taken as a lower limit
only.

## How to use this category

Use the drill-down ***type*** to select the type of vessel used from the
following options.

  - *large ropax ferry*

<!-- end list -->

  - *small tanker*

<!-- end list -->

  - *large tanker*

<!-- end list -->

  - *very large tanker*

<!-- end list -->

  - *small bulk carrier*

<!-- end list -->

  - *large bulk carrier*

<!-- end list -->

  - *very large bulk carrier*

<!-- end list -->

  - *small container vessel*

<!-- end list -->

  - *large container vessel*

The ***typicalVesselDeadweight*** is also provided as a data item, for
reference.

The ***distance*** and ***mass*** are required as profile item values.

## Algorithm

CO2eEmissionFactor = CO2EF + N2OEF + CH4EF

kgCO2e = CO2eEmissionFactor \* distance \* mass

The result is equivalent CO<sub>2</sub> emissions, which includes contributions
from carbon dioxide, nitrous oxide and methane emissions.
