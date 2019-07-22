**This category is now deprecated. [This
category](Fuel_combustion_by_DEFRA) represents the most recent DEFRA
methodology for stationary fuel combustion and includes up-to-date data
together with a richer functionality for calculating indirect ('scope
3') and full life cycle emissions for fuel**

This category allows the user to calculate emissions from a certain
amount of fuel, measured in mass, energy or volume. It follows the
methodology presented in the most recent
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and advice.

## What the user needs to know

In order to use this category the user must know the amount of fuel used
and the units for that measurement - either mass, volume or energy. The
user also needs to know, if measuring their fuel use in terms of energy,
whether that energy is *net* or *gross*.

The data presented here provide emission factors on a Net Calorific
Value (CV) and Gross CV basis. If the fuel use is measured in terms of
mass or volume the emission factor is the same in both Net and Gross
cases. If calculating in terms of energy useage the Net CV emission
factors are significantly higher so it is important that the correct
emission factor is used. Natural Gas consumption figures quoted in kWh
by suppliers in the UK are generally calculated on a Gross CV basis from
the volume of gas used. Therefore, the Gross CV emission factor should
be used by default for calculations of Natural Gas emissions, unless the
supplier states otherwise.

Gross CV or Higher Heating Value (HHV) is the CV under laboratory
conditions. Net CV or Lower Heating Value (LHV) is the useful calorific
value in typical real world conditions. The difference is essentially
the latent heat of the water vapour produced.

## How to use this category

This category has three drill downs. Use the first drill, ***fuel***, to
select the fuel being used from the following options.

  - aviation spirit

<!-- end list -->

  - aviation turbine fuel - similar to kerosene, refined to a higher
    quality for aviation use

<!-- end list -->

  - burning oil - also known as kerosene or paraffin used for heating
    systems

<!-- end list -->

  - coal (industrial) - industry use including collieries, iron and
    steel, autogeneration, cement production, lime production, public
    sector, stationary combustion, railways and agriculture

<!-- end list -->

  - coal (electricity generation) - power station use only

<!-- end list -->

  - coal (domestic) - domestic use coal only

<!-- end list -->

  - coking coal

<!-- end list -->

  - compressed natural gas (cng)

<!-- end list -->

  - diesel

<!-- end list -->

  - fuel oil

<!-- end list -->

  - gas oil

<!-- end list -->

  - lpg

<!-- end list -->

  - lubricants

<!-- end list -->

  - naphtha

<!-- end list -->

  - natural gas

<!-- end list -->

  - other petroleum gas

<!-- end list -->

  - petrol

<!-- end list -->

  - petroleum coke

<!-- end list -->

  - refinery miscellaneous

The second drill-down, ***netOrGross*** is used to select whether the
energy use has been measured in net or gross units; this will only make
a difference if the ***energy*** profile item value is used rather than
the ***mass*** or ***volume***.

The third drill-down, ***unit*** is used to select which units the fuel
use will be entered in, either *mass*, *energy* or *volume*.

The user must then enter a fuel use value as *either* the ***mass***,
***energy*** or ***volume*** profile item values. Only one of these
profile item values can be used for any single calculation and this must
match the ***unit*** drill-down selected previously.

The algorithm then multiplies the fuel use value by the appropriate
emission factor to give a result of kgCO,,2,,e, which includes
contributions from carbon dioxide, nitrous oxide and methane.
