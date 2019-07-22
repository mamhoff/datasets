**This category is deprecated. The Greenhouse Gas Protocol methodologies
for transport fuel can now be found
[here](Transport_fuels_by_Greenhouse_Gas_Protocol)**

Transport by fuel US data is sourced from the [GHGP
worksheet](http://www.ghgprotocol.org/calculation-tools/all-tools) GHG
emissions from transport or mobile sources v2.0. This category allows
the user to calculate emissions from specified journey by monitoring the
amount of fuel used. Firstly the user selects the drill-down *fuelType*
from the following options.

  - jet fuel
  - aviation gasoline
  - gasoline/petrol
  - diesel
  - residual fuel oil
  - lpg
  - cng
  - lng
  - e85 ethanol/gasoline
  - b20 biodiesel/diesel

Secondly the drill-down *CO2eOrCO2* allows the user to specify whether
they wish the result to give CO<sub>2</sub>e emissions, including N<sub>2</sub>O and
CH<sub>4</sub> emissions, or CO<sub>2</sub> emissions only. The next two drill-downs
allow the specification of the *transportType* and *transportSubType*.
Finally the drill-down '''yearOfManufacture''' specifies the age for
certain vehicles. The ***fuelQuantity*** used during the journey is then
entered as a profile item value.

The algorithm returns either CO<sub>2</sub> or CO<sub>2</sub>e emissions depending on
the choice made in the *CO2eOrCO2* drill-down.

### Biomass fuel

The GHG protocol requires CO<sub>2</sub> emissions from biomass fuels to be
reported on differently, due to the fact that the CO<sub>2</sub> released from
biomass fuels has only recently been sequestered from the atmosphere and
so does not constitute a net increase in CO<sub>2</sub>, unlike fossil fuel
emissions or those of CH<sub>4</sub> and N<sub>2</sub>O. Therefore, the CO<sub>2</sub>
emissions for pure ethanol and biodiesel are not included here, but can
be found in the [biomass](US_transport_biofuel) subcategory. There are
two mixed fuel entries in this category - E85 and B20. These are a
mixture of biofuel and fossil fuel. Therefore, this category contains
the CO<sub>2</sub> emitted from the fossil fuel constituent, with the biomass
fuel emissions given in the [biomass](US_transport_biofuel) subcategory.
If the user wishes to calculate their total emissions, including biomass
CO<sub>2</sub> they should use both categories in combination.
