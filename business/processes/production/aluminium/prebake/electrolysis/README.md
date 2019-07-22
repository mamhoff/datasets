**Metal industry methodology, aluminium. Calculates carbon dioxide
(CO<sub>2</sub>) emissions based on the quantity of aluminium produced and
associated anode consumption. Globally applicable.**

## Summary

This methodology represents **carbon dioxide** (CO<sub>2</sub>) emissions
associated with the production of **aluminium using prebake
technologies**. The data and calculation methodology is sourced from the
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

Aluminium is extracted from its ore (aluminium oxide (Al<sub>2</sub>O<sub>3</sub>), or
'bauxite') using an electrolysis cell and carbon anodes. During
electrolysis, the aluminium (Al) is separated according to the following
equation:

1.  2Al<sub>2</sub>O<sub>3</sub> + 3C =\> 4Al + 3CO<sub>2</sub>

Carbon (C) at the anode is therefore consumed during electrolysis and
emitted as CO<sub>2</sub>. This net reaction accounts for the majority of
process-related greenhouse gas emissions in aluminium production. The
Prebake process is one of two primary technologies employed in this
process and involves the use of a coke/pitch electrode paste which is
baked *prior* to electrolysis. This produces anodes with a higher
current efficiency than in the case of the alternative *Søderberg*
process which bakes the anode paste during electrolysis.

This methodology enables the calculation of aluminium-associated CO<sub>2</sub>
emissions based on a mass balance approach that assumes that the carbon
(C) contained within the prebaked anodes is ultimately emitted as
CO<sub>2</sub>. By determining the quantity of C which enters the process, the
quantity which is emitted as CO<sub>2</sub> can be calculated. This balance may
be complicated by impurities present within the anodes (sulphur and
ash), and the respective quantities of these impurities can be
additionally considered in the mass balance equation. The methodology
does, however, provide industry-typical values for these which can be
used in those cases where facility specific data is not available.

Once the consumed quantity of carbon has been calculated, this is
converted into the corresponding quantity of CO<sub>2</sub> on the basis of
their relative molecular/atomic masses.

This methodology represents both *Tier 2* and *Tier 3* approaches under
the IPCC guideliines, the *Tier 3* approach corresponding to the use of
facility-specific data.

### Model data

This methodology provides default values for several process components:

  - Typical sulphur content in baked anodes

<!-- end list -->

  - Typical ash content in baked anodes

The methodology also provides the mass ratio of CO<sub>2</sub>/C (44/12 =
3.66667) which is used to convert quantities of C into their
corresponding quantity of CO<sub>2</sub> (assuming all residual C is emitted as
CO<sub>2</sub>).

### Activity data required

CO<sub>2</sub> emissions are directly proportionate to the **quantity of
aluminium produced** (i.e. mass) and the **quantity of baked anodes**
consumed per unit of aluminium produced (i.e. mass \[anodes\] per mass
\[aluminium\]). Both of these values must therefore be provided in order
to calculate.

In addition, the methodology enables the specification of
**facility-specific data** for baked anode sulphur and ash contents
where this is available.

### Calculation and results

**CO<sub>2</sub>** emissions are calculated by considering all of the carbon
inputs to the Prebake process and multiplying by the CO<sub>2</sub>/C mass
ratio. These emissions represent those attributable to the specified
quantity of aluminium produced.

-----

## Related methodologies

Emissions from the combustion of fossil fuels used in the production of
baked anodes can be calculated using the IPCC methodology for
[stationary fuel combustion](Stationary_Combustion). Two other sources
of related CO2 emissions are represented by the IPCC methodology for
[anode baking furnaces](Aluminium_prebake_pitchcooking). This
methodology covers (1) the combustion of volatile matter released during
the baking operation; and (2) the combustion of baking furnace packing
material (coke), but excludes the emissions associated with fossil fuel
used to produce heat/energy.

Alternative IPCC methodologies are available for aluminium-associated
CO<sub>2</sub> emissions including the [generic](Aluminium_defaults) (*tier 1*)
approach and an alternative *tiers 2/3* methodology (representing the
[Søderberg](Aluminium_soderberg) process).

IPCC methodologies for aluminium-associated *PFC emissions* (CF<sub>4</sub> and
C<sub>2</sub>F<sub>6</sub>) are also available, including a simple
*[tier 1](Aluminium_PFC_Defaults)* approach and two alternative
approaches for *tiers 2/3*: the [slope](Aluminium_PFC_Slope) and
[overvoltage](Aluminium_PFC_Overvoltage) methods.
