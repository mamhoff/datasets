**General industry methodology, methane flaring. Calculates carbon
dioxide (CO,,2,,) and methane (CH,,4,,) emissions based on the quantity
of methane flared. Globally applicable.**

## Summary

This methodology represents **carbon dioxide** (CO,,2,,) and **methane**
(CH,,4,,) emissions associated with the **flaring of methane**. The data
and calculation methodology are sourced from the [IPCC](IPCC), as
published in *[Volume 2, Chapter 4 - Fugitive
Emissions](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_4_Ch4_Fugitive_Emissions.pdf)*
of their *[2006 IPCC Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/index.html)*.

-----

## The methodology

### Emissions model

The methodology represents a *mass-balance* approach which considers the
quantity of carbon (C) which enters the combustion process and
calculates the resulting associated emissions of CO,,2,, and CH,,4,,
using conversion factors describing the physical processes involved.

When methane (CH,,4,,) is burned in the presence of oxygen (O,,2,,) the
following sequence of reactions occurs:

1\. CH,,4,, + O,,2,, =\> CO + H,,2,, + H,,2,,O  
2\. 2H,,2,, + O,,2,, =\> 2H,,2,,O  
3\. 2CO + O,,2,, =\> 2CO,,2,,

with the net reaction occuring as:

4\. CH,,4,, + 2O,,2,, =\> CO,,2,, + 2H,,2,,O

As such, the burning of methane produces CO,,2,,. Indeed, as can be seen
from the final (net) reaction, for each molecule of CH,,4,, burned, 1
molecule of CO,,2,, is produced. Since the molecular masses of CH,,4,,
(16) and CO,,2,, (44) are constant, the quantity (mass) of CO,,2,,
produced can be calculated as 2.75 (44/16) times the mass of CH,,4,,
burned.

However, the above reactions assume *full combustion*, i.e. 100% of the
methane carbon (C) is oxidised according to reaction 1. In the case
where incomplete combustion occurs, a residual emission of methane
remains according to the efficiency (%) of the combustion process.

Emissions are therefore calculated on the basis of the quantity of
methane combusted, and the efficiency with which combustion is
considered to have taken place.

### Model data

Several data values are used in this methodology:

  - *density of CH,,4,,*: This enables the conversion of of volumetric
    quantities of CH,,4,, into a mass-based measure, which, in turn,
    enables the calculation of emissions by mass. This takes the value
    of 0.67 kg / m^^3^^ by default.

<!-- end list -->

  - *efficiency of combustion*: Specifies the proportion of CH,,4,,
    which undergoes combustion. Default, 98%.

<!-- end list -->

  - *ratio of molecular masses of reactant CH,,4,, and product CO,,2,,
    under oxidation*: 2.75

<!-- end list -->

  - *global warming potential of CH,,4,,*: Enables the conversion of
    CH,,4,, emissions into a
    [CO,,2,,e](Greenhouse_gases_Global_warming_potentials) quantity -
    i.e. the quantity of CO,,2,, which would exert the same atmospheric
    warming effect.

### Activity data required

Greenhouse gas emissions are directly proportionate to the **volume** of
CH,,4,, flared, which therefore must be provided in order to calculate.
In addition, the specific values for combustion efficiency and CH,,4,,
density can be provided if available, rather than using the default
values.

### Calculation and results

CO,,2,, emissions are calculated by multiplying the quantity of CH,,4,,
flared, by the combustion efficiency factor (%) and the molecular mass
ratio for CO,,2,,:CH,,4,,.

CH,,4,, emissions are calculated by multiplying the quantity of CH,,4,,
flared by the unburned fraction (1 - the combustion efficiency factor
(%)).

Three emissions quantities are ultimately provided, representing:
**CO,,2,,**, **CH,,4,,**, **total CO,,2,,e** emissions. All emissions
calculated by this methodology represent those attributable to the
specified quantity of methane flared.
