The AMEE category at ''/transport/byDistance/passenger'' includes data
for passenger travel taken from parts of several of the [Greenhouse Gas
Protocol](Greenhouse_Gas_Protocol) worksheets.

The worksheets included are:

  - CO<sub>2</sub> emissions from transport or mobile sources (v1.3)

<!-- end list -->

  - Emissions from employee commuting (v2.0)

<!-- end list -->

  - CO<sub>2</sub> emissions from business travel (v2.0)

<!-- end list -->

  - GHG emissions from pulp and paper mills (v1.3)

To use this category, use drill-downs to specify the ***vehicle*** type
and ***typeAndContext*** (subtype and data source) for the vehicle used.
The GHG protocol provides alternative emission factors for transport
compiled from a number of sources, as indicated in the
[worksheets](http://www.ghgprotocol.org/calculation-tools/all-tools).

Once the type and context have been chosen, specify the following
profile values for your item:

  - ***distance***

<!-- end list -->

  - ***passengers***

For road vehicles, the GHG protocol calculates the per-passenger
emission factor based on an assumed average occupancy of 1.8 passengers
per vehicle. A per-vehicle emission factor can thus be recovered by
setting ***passengers*** to 1.8.

There are a large number of [ additional categories](Transport%20) in
AMEE for passenger road travel. Because these are based on
per-passenger-distance emission factors, and the GHG protocol permits
users to define their own emissions factors, a GHGP compliant tool may
also use these categories.
