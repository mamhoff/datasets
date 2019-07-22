**This category is deprecated. The Greenhouse Gas Protocol methodologies
for US heavy goods vehicle transport can now be found
[here](US_road_transport_by_Greenhouse_Gas_Protocol)**

The AMEE category /transport/lgv/generic/ghgp/heavyduty/us/biomassfuel
contains data sourced from the World Resources Institute
[GHG\_Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools)
for calculating emissions associated with heavy duty biofuel trucks in
the US. This allows users to calculate their biofuel CO<sub>2</sub> emissions
separately from the fossil fuel CO<sub>2</sub>, N<sub>2</sub>O and CH<sub>4</sub> emissions
in the [US heavy duty truck](US_heavy_duty_truck) category.

To use this category, specify the vehicle type using the *vehicleType*
drill-down, from ''rigid'' or ''articulated''. Then use the *fuelType*
drill-down to select the type of fuel being used. At present the only
option for biomass fuels in this category is 'ethanol'.

The ***distance*** is then set as a profile item by the user.

The algorithm returns the kg CO<sub>2</sub> for the distance entered. This
CO<sub>2</sub> value covers biomass emissions only. CH<sub>4</sub> and N<sub>2</sub>O
emissions are included in the [US heavy duty truck](US_heavy_duty_truck)
category. If the user wishes to calculate complete emissions, including
biomass and fossil CO<sub>2</sub> emissions (as well as CH<sub>4</sub> and N<sub>2</sub>O
emissions), both categories should be used.
