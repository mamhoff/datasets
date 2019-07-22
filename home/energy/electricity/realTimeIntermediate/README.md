The carbon intensity of electricity is related to the specific method of
generation used (e.g. coal, gas, nuclear, wind), and therefore the CO2
emissions associated with national or regional grid electricity depend
on the specific combination of generation methods (the 'fuel mix') which
supply the grid. The fuel mix will change due to variations in demand
and supply e.g. maintenance and (de)commissioning of power stations.

The AMEE category home/energy/electricity/realTimeIntermediate permits
the user to specify their own fuel mix and derive the corresponding
weighted average CO2 emissions factor. To use this category specify the
quantity of electricity supplied by the following types of electricity
generation using the corresponding profile item values:

  - Closed cycle gas turbine (the ***ccgt*** profile item value)

<!-- end list -->

  - Open cycle gass turbine (***ocgt***)

<!-- end list -->

  - Oil (***oil***)

<!-- end list -->

  - Coal (***coal***)

<!-- end list -->

  - Nuclear (***nuclear***)

<!-- end list -->

  - Wind (***wind***)

<!-- end list -->

  - Pump storage (***pumpStorage***)

<!-- end list -->

  - Non-pump storage hydro (***npshyd***)

<!-- end list -->

  - Other (***other***)

<!-- end list -->

  - International import: France (***intfr***)

<!-- end list -->

  - International import: Ireland (***intirl***)

AMEE uses this fuel mix data to calculate a weighted average CO2
emissions factor which is posted to the ***massCO2PerEnergy*** profile
item value. Users can specify a quantity of electricity consumed by
using the ***energyUsed*** profile item value. The returned value
represents the associated quantity of CO2 emitted based on the specified
grid fuel mix data.
