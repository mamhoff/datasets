**General industry methodology, methane flaring. Calculates carbon
dioxide (CO<sub>2</sub>) and methane (CH<sub>4</sub>) emissions based on the quantity
of methane flared. Globally applicable.**

## Summary

This methodology represents **carbon dioxide** (CO<sub>2</sub>) and **methane**
(CH<sub>4</sub>) emissions associated with the **flaring of methane**. The data
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
calculates the resulting associated emissions of CO<sub>2</sub> and CH<sub>4</sub>
using conversion factors describing the physical processes involved.

When methane (CH<sub>4</sub>) is burned in the presence of oxygen (O<sub>2</sub>) the
following sequence of reactions occurs:

1\. CH<sub>4</sub> + O<sub>2</sub> =\> CO + H<sub>2</sub> + H<sub>2</sub>O
2\. 2H<sub>2</sub> + O<sub>2</sub> =\> 2H<sub>2</sub>O
3\. 2CO + O<sub>2</sub> =\> 2CO<sub>2</sub>

with the net reaction occuring as:

4\. CH<sub>4</sub> + 2O<sub>2</sub> =\> CO<sub>2</sub> + 2H<sub>2</sub>O

As such, the burning of methane produces CO<sub>2</sub>. Indeed, as can be seen
from the final (net) reaction, for each molecule of CH<sub>4</sub> burned, 1
molecule of CO<sub>2</sub> is produced. Since the molecular masses of CH<sub>4</sub>
(16) and CO<sub>2</sub> (44) are constant, the quantity (mass) of CO<sub>2</sub>
produced can be calculated as 2.75 (44/16) times the mass of CH<sub>4</sub>
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

  - *density of CH<sub>4</sub>*: This enables the conversion of of volumetric
    quantities of CH<sub>4</sub> into a mass-based measure, which, in turn,
    enables the calculation of emissions by mass. This takes the value
    of 0.67 kg / m^^3^^ by default.

<!-- end list -->

  - *efficiency of combustion*: Specifies the proportion of CH<sub>4</sub>
    which undergoes combustion. Default, 98%.

<!-- end list -->

  - *ratio of molecular masses of reactant CH<sub>4</sub> and product CO<sub>2</sub>
    under oxidation*: 2.75

<!-- end list -->

  - *global warming potential of CH<sub>4</sub>*: Enables the conversion of
    CH<sub>4</sub> emissions into a
    [CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) quantity -
    i.e. the quantity of CO<sub>2</sub> which would exert the same atmospheric
    warming effect.

### Activity data required

Greenhouse gas emissions are directly proportionate to the **volume** of
CH<sub>4</sub> flared, which therefore must be provided in order to calculate.
In addition, the specific values for combustion efficiency and CH<sub>4</sub>
density can be provided if available, rather than using the default
values.

### Calculation and results

CO<sub>2</sub> emissions are calculated by multiplying the quantity of CH<sub>4</sub>
flared, by the combustion efficiency factor (%) and the molecular mass
ratio for CO<sub>2</sub>:CH<sub>4</sub>.

CH<sub>4</sub> emissions are calculated by multiplying the quantity of CH<sub>4</sub>
flared by the unburned fraction (1 - the combustion efficiency factor
(%)).

Three emissions quantities are ultimately provided, representing:
**CO<sub>2</sub>**, **CH<sub>4</sub>**, **total CO<sub>2</sub>e** emissions. All emissions
calculated by this methodology represent those attributable to the
specified quantity of methane flared.
