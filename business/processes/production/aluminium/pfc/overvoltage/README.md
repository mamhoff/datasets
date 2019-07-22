**Metal industry methodology, aluminium. Calculates carbon tetrafluoride
(CF,,4,,) and carbon hexafluoride (C,,2,,F,,6,,) emissions based on the
quantity of aluminium produced, and process data on anode effect
overvoltage and current efficiency. Scenarios include variants of the
prebake processes. Globally applicable.**

## Summary

This methodology represents **carbon tetrafluoride** (CF,,4,,) and
**carbon hexafluoride** (C,,2,,F,,6,,) emissions associated with the
production of **aluminium**. The data and calculation methodology is
sourced from the [Greenhouse Gas Protocol](Greenhouse_Gas_Protocol)
(GHGP) worksheet tool *[GHG emissions from the production of aluminum,
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
electrolysis, aluminium oxide is dissolved in a *fluoride melt*
comprising about 80% (by weight) cryolite (Na,,3,,AlF,,6,,).
*Perfluorocarbons* (CF,,4,, and C,,2,,F,,6,, collectively referred to as
*PFCs*) are formed from the reaction of the carbon anode with the
cryolite melt in cases where the concentration of aluminium oxide in the
electrolyte is too low to support the standard anode reaction - a
condition known as an *anode effect*. Some process control systems
characterize anode effects by calculating the *Anode Effect Overvoltage*
(AEO) - a parameter which represents the additional cell voltage above
the target operating voltage (calculated as the mean overvoltage through
time). This parameter has been shown to be a good predictor of PFC
emissions.

This methodology enables the calculation of aluminium-associated CF,,4,,
and C,,2,,F,,6,, emissions on the basis of conversion factors
(*overvoltage coefficient*; i.e. kg / t·mV) which describe the
relationship between anode effect overvoltage (mV) the rates at which
CF,,4,, is emitted in relation to the quantity of aluminium produced. By
specifying the quantity of aluminium produced *and* the anode effect
overvoltage, a calculation for the associated CF,,4,, emissions can be
made. C,,2,,F,,6,, emissions are calculated as a fixed proportion of the
CF,,4,, emissions. This proportion can be specified on a facility
specific basis, but is represented by a default value if this data is
unavailable.

This methodology represents the IPCC *Tiers 2/3* approaches, the
distinction being the use of facility specific data (which corresponds
to tier 3).

### Model data

The rates at which CF,,4,, and C,,2,,F,,6,, are emitted depend on the
specific type of technology employed. This methodology provides
emissions factors representing the typical unit emissions associated
with two scenarios, differentiated by **technology type** (e.g. *Centre
Work Prebake*, *Side Work Prebake*). Each technology type is represented
by default values for the **overvoltage coefficient** and the
**CF,,4,,/C,,2,,F,,6,, weight fraction**, although these values can be
specified on facility-specific basis if data is available.

In addition, the *global warming potentials* of CF,,4,, and C,,2,,F,,6,,
are also used in order to convert absolute emissions quantities into
[CO,,2,,e](Greenhouse_gases_Global_warming_potentials) quantities - i.e.
the quantity of CO,,2,, which would exert the same atmospheric warming
effect.

### Activity data required

CF,,4,, and C,,2,,F,,6,, emissions are directly proportionate to three
quantities, all of which must be provided in order to calculate: **(1)**
the **quantity of aluminium produced** (i.e. mass); **(2)** the **anode
effect overvoltage**; and **(3)** the **aluminium production process
current efficiency**.

In addition, the methodology enables the specification of
**facility-specific** values for the **overvoltage coefficient** and the
**CF,,4,,/C,,2,,F,,6,, weight fraction** where these are available.

### Calculation and results

**CF,,4,,** and **C,,2,,F,,6,,** emissions are calculated according to
the activity data specified, and converted into a total CO,,2,,e
quantity using the associated global warming potentials. Three
quantities are ultimately returned: **CF,,4,,**, **C,,2,,F,,6,,**, and
**total CO,,2,,e**.

These emissions represent those attributable to the specified quantity
of aluminium produced.

-----

## Related methodologies

Other IPCC methodologies for aluminium-associated PFC emissions are
available. These include an alternative *tiers 2/3* approach (the
[slope](Aluminium_PFC_Slope) method), and the simpler
[tier 1](Aluminium_PFC_Defaults) methodology.

In addition, IPCC methodologies for aluminium-associated CO,,2,,
emissions are available, including the [generic](Aluminium_defaults)
(*tier 1*) approach and more detailed, technology-specific
[prebake](Aluminium_prebake) and [Søderberg](Aluminium_soderberg)
methodologies.
