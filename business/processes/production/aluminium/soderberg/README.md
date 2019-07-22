**Metal industry methodology, aluminium. Calculates carbon dioxide
(CO,,2,,) emissions based on the quantity of aluminium produced.
Scenarios represent variants of the Søderberg process. Globally
applicable.**

## Summary

This methodology represents **carbon dioxide** (CO,,2,,) emissions
associated with the production of **aluminium using Søderberg
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

Aluminium is extracted from its ore (aluminium oxide (Al,,2,,O,,3,,), or
'bauxite') using an electrolysis cell and carbon anodes. During
electrolysis, the aluminium (Al) is separated according to the following
equation:

1.  2Al,,2,,O,,3,, + 3C =\> 4Al + 3CO,,2,,

Carbon (C) at the anode is therefore consumed during electrolysis and
emitted as CO,,2,,. This net reaction accounts for the majority of
process-related greenhouse gas emissions in aluminium production. The
Søderberg process is one of two primary technologies employed in this
process and involves the use of a coke/pitch electrode paste which is
baked *during* electrolysis rather than prior to, as in the case of the
*prebake* process.

This methodology enables the calculation of aluminium-associated CO,,2,,
emissions based on a mass balance approach that assumes that the carbon
(C) contained within the Søderberg paste is ultimately emitted as
CO,,2,,. By tracking the C which enters the process, and accounting for
C which leaves the process via the aluminium product (and other
waste-/by-products), the residual C which is emitted as CO,,2,, can be
calculated. This balance may be complicated by impurities present within
the coke and pitch feedstocks (such as ash, sulphur and hydrogen), as
well as the C which remains in the dust collected from the Søderberg
cells. The respective quantities of these impurities/by-products can be
additionally considered in the mass balance equation, and the
methodology provides industry-typical values for each for cases where
facility specific data is not available.

Once the consumed quantity of carbon has been calculated, this is
converted into the corresponding quantity of CO,,2,, on the basis of
their relative molecular/atomic masses.

This methodology represents both *Tier 2* and *Tier 3* approaches under
the IPCC guideliines, the *Tier 3* approach corresponding to the use of
facility-specific data.

### Model data

The rate at which CO,,2,, is emitted depends on the specific type of
technology employed. This methodology provides data representing four
scenarios, differentiated by **technology type** (*Vertical Stud
Søderberg*, *Horizontal Stud Søderberg*), and **paste type** (*wet*,
*dry*). Each scenario is represented by default values for the **paste
binder content (%)** and **cyclohexane soluble matter emissions** (per
quantity of aluminium produced). Both of these values can be specified
on facility-specific basis if data is available.

In addition, this provides default values for several process
components:

  - Typical binder content in paste

<!-- end list -->

  - Typical sulphur, ash and hydrogen contents in pitch

<!-- end list -->

  - Typical sulphur and ash contents in coke

<!-- end list -->

  - Typical quantity of dust carbon per unit aluminium production

The methodology also provides the mass ratio of CO,,2,,/C (44/12 =
3.66667) which is used to convert quantities of C into their
corresponding quantity of CO,,2,, (assuming all residual C is emitted as
CO,,2,,).

### Activity data required

CO,,2,, emissions are directly proportionate to the **quantity of
aluminium produced** (i.e. mass) and the **quantity of anode paste**
consumed per unit of aluminium produced. Both of these values must
therefore be provided in order to calculate.

In addition, the methodology enables the specification of
**facility-specific data** for a number of components (e.g. paste binder
content; pitch sulphur, ash and hydrogen content; coke sulphur and ash
content) where this is available.

### Calculation and results

**CO,,2,,** emissions are calculated by considering all of the carbon
inputs and outputs to the Søderberg process and multiplying the
discrepancy (consumed C) by the CO,,2,,/C mass ratio. These emissions
represent those attributable to the specified quantity of aluminium
produced.

-----

## Related methodologies

Other IPCC methodologies are available for aluminium-associated CO,,2,,
emissions including the [generic](Aluminium_defaults) (*tier 1*)
approach and an alternative *tiers 2/3* methodology (representing the
[prebake](Aluminium_prebake) process).

IPCC methodologies for aluminium-associated *PFC emissions* (CF,,4,, and
C,,2,,F,,6,,) are also available, including a simple
*[tier 1](Aluminium_PFC_Defaults)* approach and two alternative
approaches for *tiers 2/3*: the [slope](Aluminium_PFC_Slope) and
[overvoltage](Aluminium_PFC_Overvoltage) methods.
