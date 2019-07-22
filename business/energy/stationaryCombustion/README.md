**Fuel combustion methodology, stationary combustion. Calculates carbon
dioxide (CO,,2,,), methane (CH,,4,,) and nitrous oxide (N,,2,,O)
emissions based on either the mass, volume or energy yield of consumed
fuel. Scenarios include a large selection of solid, liquid and gaseous
fuels within the energy producing, industrial, commericial and
residential sectors amongst others. Globally applicable.**

## Summary

This methodology represents **carbon dioxide** (CO,,2,,), **methane**
(CH,,4,,) and **nitrous oxide** (N,,2,,O) emissions associated with the
**stationary combustion of fuels**. The data and calculation methodology
is sourced from the [Greenhouse Gas Protocol](Greenhouse_Gas_Protocol)
(GHGP), and consolidates data from their worksheet tools *[GHG emissions
from stationary combustion,
version 4.0](http://www.ghgprotocol.org/downloads/calcs/Stationary_combustion_tool_\(Version4\).xls)*,
*[CO2 emissions from the production of iron and steel,
version 2.0](http://www.ghgprotocol.org/downloads/calcs/Iron%20and%20Steel.xls)*
and *[GHG emissions from pulp and paper mills,
version 1.3](http://www.ghgprotocol.org/downloads/calcs/March%206%202009%20revised%20-%20P&P%20Spreadsheet%20Version%201.3.xls)*.

These datasets are in-turn derived from the [2006 IPCC Guidelines for
National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/index.html)*,
and specifically *[Volume 2, Chapter 1 -
Introduction](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_1_Ch1_Introduction.pdf)*
and *[Volume 2, Chapter 2 - Stationary
Combustion](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf).

The calculations provided within this category represent the *Tier 1*
approaches of both the [IPCC](IPCC) and the US [Environmental Protection
Agency mandatory greenhouse gas reporting](EPA_GHG_Mandatory_Ruling)
[advice](http://www.epa.gov/climatechange/emissions/archived/ghg_tsd.html).

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the rate at which greenhouse gas emissions are produced during fuel
combustion in relation to the **energy yielded** by the fuel. These
emissions factors are expressed in terms of *kg per TJ*, and are based
on the *net* energy content of fuels (referred to as the *net calorific
content* or the *lower heating value*). Emissions - expressed in terms
of mass (e.g. kg) - are calculated by multiplying these factors by the
quantity of energy consumed.

The methodology also includes additional conversion factors which
provide the flexibility of calculating via fuel **mass** or **volume**,
and on the basis energy consumed according to the gross calorific value
measure of fuel energy content.

### Model data

CO,,2,, emissions associated with the stationary combustion of fuel are
primarily related to the concentration of carbon within the fuel.
Therefore, CO,,2,, emissions vary between fuels types according to their
different molecular composition. CH,,4,, and N,,2,,O emissions, on the
other hand, vary between specific combustion contexts. As such, this
methodology provides emissions and conversion factors for 532 distinct
combustion scenarios differentiated by **fuel type** (e.g. *blast
furnace gas*, *crude oil*, *jet gasoline*) and **combustion context**
(e.g. *energy*, *construction*, *forestry*).

Each scenario is represented by several data values:

  - *CO,,2,, emissions factor* - used to convert net energy consumption
    into an emissions quantity

<!-- end list -->

  - *CH,,4,, emissions factor* - used to convert net energy consumption
    into an emissions quantity

<!-- end list -->

  - *N,,2,,O emissions factor* - used to convert net energy consumption
    into an emissions quantity

<!-- end list -->

  - *Lower heating value* - used to convert fuel mass into net energy
    consumption

<!-- end list -->

  - *Lower to higher heating value conversion factor* - used to convert
    gross energy consumption in net energy consumption

Gaseous and liquid fuels contiain the following:

  - *Fuel density* - used to convert fuel volumes into fuel mass

In addition, the methdology uses the *global warming potential* (GWP) of
CH,,4,, and N,,2,,O to convert absolute emissions quantities into
**[CO,,2,,e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO,,2,, which would exert the same atmospheric warming
effect.

### Activity data required

Greenhouse gas emissions are directly proportionate to the quantity of
fuel consumed. This can be specified in terms of either **energy**,
**mass** or **volume**.

### Calculation and results

Greenhouse gas emissions are calculated by converting any mass or volume
or gross energy quantities into the corresponding quantity of net energy
for the given fuel and then applying the gas-specific emissions factors.
CH,,4,, and N,,2,,O emissions are additionally converted to CO,,2,,e
using the respecitive GWP's. Four emissions quantities can be
calculated, representing **CO,,2,,**, **CH,,4,,**, **N,,2,,O**, and
**CO,,2,,e**.

This emissions calculated by this methodology represent those
attributable to the specified quantity of fuel combusted.

-----

## Additional information

### Higher and lower heating values

Note that switching between LHV and HHV bases for the specification of
fuel quantity is only valid when specifying fuel quantity in terms of
energy.

### Custom emissions factors

CO,,2,, emission factors for butane and propane are not specified in the
2006 IPCC Guidelines for National Greenhouse Gas Inventories. In these
cases, values are calculated following [this](Custom_emissions_factors)
method, recommended by the Greenhouse Gas Protocol.

### Fuel synonyms

The Greenhouse Gas Protocol uses *Gas/Diesel oil* and *Distillate fuel*
synonymously across different worksheets. These have been standardised
as *Gas/Diesel oil* within AMEE.
