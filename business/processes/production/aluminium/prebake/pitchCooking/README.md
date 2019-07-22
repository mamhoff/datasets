**Metal industry methodology, aluminium. Calculates carbon dioxide
(CO,,2,,) emissions based on inputs and products of the anode baking
furnaces. Scenarios include Rieghammer and other furnace types. Globally
applicable.**

## Summary

This methodology represents **carbon dioxide** (CO,,2,,) emissions
associated with the **production of baked anodes** for aluminium
production. The data and calculation methodology is sourced from the
[Greenhouse Gas Protocol](Greenhouse_Gas_Protocol) (GHGP) worksheet tool
*[GHG emissions from the production of aluminum,
version 2.0](http://www.ghgprotocol.org/files/ghgp/tools/Aluminium%20Sector%20GHG%20Workbook%20-%20version%202.0.xls)*,
which is ultimately based on the methodologies described in *[Volume 3,
Chapter 4 - Metal Industry
Emissions](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_4_Ch4_Metal_Industry.pdf)*
of their *[2006 IPCC Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/index.html)*.

-----

## The methodology

### Emissions model

Aluminium is extracted from its ore (aluminium oxide (Al,,2,,O,,3,,), or
'bauxite') using an electrolysis cell and carbon anodes. The *Prebake*
process is one of two primary technologies employed in this process and
involves the use of a coke/pitch electrode paste which is baked *prior*
to electrolysis. In addition to emissions related to the combustion of
fossil fuels, the anode baking process represents two other sources of
CO2 emissions: (1) the combustion of pitch volatile matter released
during the baking operation; and (2) the combustion of baking furnace
packing material (coke).

This methodology enables the calculation of CO,,2,, emissions associated
with pitch volatiles combustion and packing material in the anode baking
furnace. Both types of emissions are calcualted on the basis of a mass
balance approach that tracks the quantities of carbon (C) entering and
leaving the baking process, and assuming that the discrepancy represents
the C emitted as CO,,2,,.

**Pitch volatile matter combustion:** The emissions associated with the
combustion of pitch volatiles are calculated by considering the quantity
of *green anodes* which is used, from which the appropriate quantities
for the *hydrogen content of the green anodes*, *baked anode production*
and *waste tar* are subtracted. The remaining quantity represents the
carbon lost through pitch volatile combustion. This quantity is
converted into the corresponding quantity of CO,,2,, on the basis of the
relative molecular/atomic masses of CO,,2,, and C.

**Furnace packing material:** The emissions associated with the
combustion of furnace packing material are calculated by considering the
quantity of *packing coke* which is consumed, from which the appropriate
quantities of impurities (ash, sulphur; specified as weight percentages,
wt. %) are subtracted. The total quantity of coke consumed is converted
into the corresponding quantity of CO,,2,, on the basis of the relative
molecular/atomic masses of CO,,2,, and C.

This methodology represents both *Tier 2* and *Tier 3* approaches under
the IPCC guidelines, the *Tier 3* approach corresponding to the use of
facility-specific data.

### Model data

CO,,2,, emissions associated with these processes depend partly on the
type of furnace employed. This methodology represents two scenarios:
*Rieghammer furnaces* and *other furnaces*. Both of these scenarios are
represented by specific default data values for the following process
components:

  - Typical quantity of tar collected from furnace (as a percentage of
    green anode quantity)

<!-- end list -->

  - Typical ratio of green anode weight to baked anode weight

Both of these values can be overridden with facility specific data where
available. Other components - which are invariant across furnace types -
are also represented by default values:

  - Typical hydrogen content of green anode (wt. %)

<!-- end list -->

  - Typical packing coke consumption relative to baked anode production

<!-- end list -->

  - Typical sulphur content of packing coke (wt. %)

<!-- end list -->

  - Typical ash content of packing coke (wt. %)

The methodology also provides the mass ratio of CO,,2,,/C (44/12 =
3.66667) which is used to convert quantities of C into their
corresponding quantity of CO,,2,, (assuming all residual C is emitted as
CO,,2,,).

### Activity data required

Both calculations are dependent on the **quantity of baked anodes
produced** and therefore this must be specified in order to calculate.

The pitch volatile calculation also has specific activity data
requirement, although this is somewhat flexible. The quantity of green
anodes used can be calculated using the quantity of baked anodes
produced (required) together with the typical weight ratio of green
anodes consumed and baked anodes produced (provided as a default value).
Alternatively, users can specify the **corresponding green/baked anode
weights for the process** if facility-specific data are available.
Should the process quantity of green anodes be known, then the quantity
of waste tar collected can be derived from the default factor provided
(i.e. mass \[waste tar\] per mass \[green anode\]). Otherwise, the
**quantity of waste tar** must be explicitly provided.

Otherwise, the methodology enables the optional specification of some
quantities where **facility-specific data** is available. These include:
the green anode hydrogen content, the quantity of packing coke used (per
unit of baked anodes produced), and the packing coke sulphur and ash
contents. Each of these is represented by default values if facility
specific data is not available.

### Calculation and results

**CO,,2,,** emissions are calculated by considering all of the carbon
inputs and outputs to the baking process and multiplying the remainder C
by the CO,,2,,/C mass ratio. The emissions calculated represent those
attributable to the specified quantity of aluminium produced.

-----

## Related methodologies

Emissions from the related electrolysis process (which occurs subsequent
to the baking process and consumes the baked anodes) can be calculated
using the IPCC methodology for [prebake
electrolysis](Aluminium_prebake_electrolysis).

Alternative IPCC methodologies are available for aluminium-associated
CO,,2,, emissions including the [generic](Aluminium_defaults) (*tier 1*)
approach and an alternative *tiers 2/3* methodology (representing the
[Søderberg](Aluminium_soderberg) process).

IPCC methodologies for aluminium-associated *PFC emissions* (CF,,4,, and
C,,2,,F,,6,,) are also available, including a simple
*[tier 1](Aluminium_PFC_Defaults)* approach and two alternative
approaches for *tiers 2/3*: the [slope](Aluminium_PFC_Slope) and
[overvoltage](Aluminium_PFC_Overvoltage) methods.
