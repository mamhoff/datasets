**Metal industry methodology, aluminium. Calculates carbon tetrafluoride
(CF<sub>4</sub>) and carbon hexafluoride (C<sub>2</sub>F<sub>6</sub>) emissions based on the
quantity of aluminium produced. Scenarios include variants of the
prebake and Søderberg processes. Globally applicable.**

## Summary

This methodology represents **carbon tetrafluoride** (CF<sub>4</sub>) and
**carbon hexafluoride** (C<sub>2</sub>F<sub>6</sub>) emissions associated with the
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

Aluminium is extracted from its ore (aluminium oxide (Al<sub>2</sub>O<sub>3</sub>), or
'bauxite') using an electrolysis cell and carbon anodes. During
electrolysis, aluminium oxide is dissolved in a *fluoride melt*
comprising about 80% (by weight) cryolite (Na<sub>3</sub>AlF<sub>6</sub>).
*Perfluorocarbons* (CF<sub>4</sub> and C<sub>2</sub>F<sub>6</sub> collectively referred to as
*PFCs*) are formed from the reaction of the carbon anode with the
cryolite melt in cases where the concentration of aluminium oxide in the
electrolyte is too low to support the standard anode reaction (a
condition known as an *anode effect*).

This methodology enables the calculation of aluminium-associated CF<sub>4</sub>
and C<sub>2</sub>F<sub>6</sub> emissions on the basis of emissions factors which
represent the rates at which CF<sub>4</sub> and C<sub>2</sub>F<sub>6</sub> are typically
emitted in relation to the quantity of aluminium produced. Multiplying a
quantity of aluminium produced by these emissions factors results in an
estimate of the emissions associated with that quantity.

This methodology represents the IPCC *Tier 1* approach, and is
considered advisable in cases where there is insufficient activity data
available on the process anode effects.

### Model data

The rates at which CF<sub>4</sub> and C<sub>2</sub>F<sub>6</sub> are emitted depend on the
specific type of technology employed. This methodology provides
emissions factors representing the typical unit emissions associated
with four scenarios, differentiated by **technology type** (e.g. *Centre
Work Prebake*, *Vertical Stud Soderberg*). Each technology type is
represented by **emissions factors for CF<sub>4</sub> and C<sub>2</sub>F<sub>6</sub>** (i.e.
kg \[emissions\] per kg \[aluminium\]), although these values can be
specified on facility-specific basis if data is available.

In addition, the *global warming potentials* of CF<sub>4</sub> and C<sub>2</sub>F<sub>6</sub>
are also used in order to convert absolute emissions quantities into
[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) quantities - i.e.
the quantity of CO<sub>2</sub> which would exert the same atmospheric warming
effect.

### Activity data required

CF<sub>4</sub> and C<sub>2</sub>F<sub>6</sub> emissions are directly proportionate to the
**quantity of aluminium produced** (i.e. mass), which therefore must be
provided in order to calculate. In addition, the methodology enables the
specification of **facility-specific CF<sub>4</sub> and C<sub>2</sub>F<sub>6</sub> emissions
factors** where these are available.

### Calculation and results

**CF<sub>4</sub>** and **C<sub>2</sub>F<sub>6</sub>** emissions are calculated by simply
multiplying the specified quantity of aluminium produced by the
respective emissions factors. These quantities are converted into a
total CO<sub>2</sub>e quantity using the associated global warming potentials.

Three quantities are ultimately returned: **CF<sub>4</sub>**, **C<sub>2</sub>F<sub>6</sub>**,
and **total CO<sub>2</sub>e**. These emissions represent those attributable to
the specified quantity of aluminium produced.

-----

## Related methodologies

In cases where more detailed activity data are available, the IPCC
[slope](Aluminium_PFC_Slope), and
[overvoltage](Aluminium_PFC_Overvoltage) methodologies may provide more
accurate emissions calculations.

In addition, IPCC methodologies for aluminium-associated CO<sub>2</sub>
emissions are available, including the a *[generic](Aluminium_defaults)*
(*tier 1*) approach and more detailed, technology-specific
[prebake](Aluminium_prebake) and [Søderberg](Aluminium_soderberg)
methodologies.
