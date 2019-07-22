**This category is deprecated. The Greenhouse Gas Protocol methodologies
for other regional car transport can now be found
[here](US_road_transport_by_Greenhouse_Gas_Protocol)**

The US car transport category represents data and a methodology from the
[GHGP worksheet](http://www.ghgprotocol.org/calculation-tools/all-tools)
Mobile Combustion GHG Emissions Calculation Tool v2.0, and allows the
user to calculate emissions from a US car journey depending on the fuel
powering the car.

To use this category, select the fuel type using the *fuelType* drill
option, from the following options.

  - diesel
  - gasoline

A second drill-down *yearOfManufacture* sets the age of the car. The
***distance*** is then set as a profile item value.

The algorithm returns a kg CO<sub>2</sub>e value, which is a sum of CO<sub>2</sub>,
N<sub>2</sub>O and CH<sub>4</sub> emissions for the selected journey distance and
vehicle type.

Users can opt to share emissions amongst passengers by setting the
number of passengers using the ***occupancy*** profile item value.
Setting multiple passengers will result in the emissions *per passenger*
being returned. If not set, AMEE will return the emissions assocated
with the entire vehicle.
