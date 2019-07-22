**This category is deprecated. The Greenhouse Gas Protocol methodologies
for motorcycle transport can now be found
[here](US_road_transport_by_Greenhouse_Gas_Protocol)**

The US motorcycle transport category includes data from the [GHGP
worksheet](http://www.ghgprotocol.org/calculation-tools/all-tools)
Mobile Combustion GHG Emissions Calculation Tool v2.0, and allows the
user to calculate emissions associated with motorcycle usage in the US
depending on the emissions control technology used.

To use this category, firstly the type of vehicle is selected, using the
**vehicleType** drill-down, from the following options.

  - non-catalyst control
  - uncontrolled
  - control unknown

The **distance** is then set as a profile item value.

The algorithm returns kg CO<sub>2</sub>e value, which is a sum of CO<sub>2</sub>,
N<sub>2</sub>O and CH<sub>4</sub> emissions for each fuel type.

Users can opt to share emissions amongst passengers by setting the
number of passengers using the ***occupancy*** profile item value.
Setting multiple passengers will result in the emissions *per passenger*
being returned. If not set, AMEE will return the emissions assocated
with the entire vehicle.
