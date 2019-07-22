**This category is deprecated. The Greenhouse Gas Protocol methodologies
for US light goods vehicle transport can now be found
[here](US_road_transport_by_Greenhouse_Gas_Protocol)**

The AMEE category /transport/lgv/generic/ghgp/lightgoods/us contains
data on emissions associated with light goods trucks in the US, sourced
from the [GHGP
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools), and
allows the user to calculate emissions depending on the age and fuel of
the vehicle.

Firstly the fuel type from the following options using the *fuelType*
drill option:

  - lng
  - lpg
  - cng
  - ethanol
  - diesel
  - gasoline

Next, set the vehicle age using the *yearOfManufacture* drill option.
This drill is not required for ethanol, CNG or LPG fuels.

The ***distance*** is then set as a profile item value.

The algorithm returns kg CO<sub>2</sub>e value, which is a sum of CO<sub>2</sub>,
N<sub>2</sub>O and CH<sub>4</sub> emissions for each fuel type.

## Biomass fuel

The GHG protocol requires CO<sub>2</sub> emissions from biomass fuels to be
reported on differently, due to the fact that the CO<sub>2</sub> released from
biomass fuels has only recently been sequestered from the atmosphere and
so does not constitute a net increase in CO<sub>2</sub>, unlike fossil fuel
emissions or those of CH<sub>4</sub> and N<sub>2</sub>. Therefore, the CO<sub>2</sub>
emissions for ethanol are not included here, but can be found in the
[biofuel](US_light_goods_biofuel_truck) subcategory. If the user wishes
to calculate their total GHG emissions from ethanol-powered light goods
travel (i.e. including the biomass CO<sub>2</sub> component), they should use
both categories in combination.
