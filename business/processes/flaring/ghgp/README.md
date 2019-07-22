**General industry methodology, flaring. Calculates carbon dioxide
(CO<sub>2</sub>) and methane (CH<sub>4</sub>) emissions based on the quantity of gas
flared. Globally applicable.**

## Summary

This methodology represents **carbon dioxide** (CO<sub>2</sub>), **methane**
(CH<sub>4</sub>) and total carbon dioxide-equivalent (CO<sub>2</sub>e) emissions
associated with the **flaring of hydrocarbon-containing gases**. The
data and calculation methodology are sourced from the [Greenhouse Gas
Protocol](Greenhouse_Gas_Protocol), as published in the preadsheet tool
*[CO2 emissions from the production of iron and steel,
version 2.0](http://www.ghgprotocol.org/calculation-tools/all-tools)*.

-----

## The methodology

### Emissions model

The methodology represents a *mass-balance* approach which considers the
quantity of hydrocarbon (HC) based carbon (C) which enters the flaring
process and calculates the resulting associated emissions of CO<sub>2</sub> and
CH<sub>4</sub> using data on the hydrocarbon content of the gas and other
conversion factors describing relevant chemical properties and the
physical processes involved.

The volume of gas is converted into a molar quantity using the *molar
volume*. This quantity represents the actual number of molecules within
the gas. The number of hydrocarbon-bound carbon (C) atoms within the gas
are estimated from this quantity using data describing the fraction of
the whole gas which represents combustible hydrocarbons, and the
fraction of these hydrocarbons which are carbon atoms. CO2 emissions are
estimated based on the fact that each combusted carbon atom produces one
molecule of CO<sub>2</sub>, together with the molecular mass of CO<sub>2</sub> which
enables a conversion of molar quantities to mass quantities.

The methodology assumes that the combustion efficiency of hydrocarbons
in the gas is 98%. This means that 2% of hydrocarbons escape combustion
(and therefore conversion into CO<sub>2</sub>) and are emitted to the
atmosphere directly, in their original form. From a greenhouse gas
perspective, such hydrocarbon emissions can be ignored - except in the
case of methane (CH<sub>4</sub>), which is itself a greenhouse gas. Therefore,
the methodology accounts for the quantity of *non-combusted* CH<sub>4</sub>
additionally, on the basis of the estimated combustion efficiency and
data describing the quantity of CH<sub>4</sub> as a fraction of the whole gas.

### Model data

Several data values are used in this methodology:

  - *molar volume*: This enables conversion of volumetric quantities of
    gases into a molecular-based measures, which, in turn, enables the
    calculation of molar fractions for hydrocarbons and carbon. This
    takes the value of 379.3 ft^^3^^ / lb-mole.

<!-- end list -->

  - *efficiency of combustion*: Specifies the proportion of hydrocarbons
    which undergo combustion. Default, 98%.

<!-- end list -->

  - *Molecular mass of CO<sub>2</sub>*: 44

<!-- end list -->

  - *Molecular mass of CH<sub>4</sub>*: 16

<!-- end list -->

  - *Stoichiometric ratio of C to CO<sub>2</sub>*: 1

<!-- end list -->

  - *global warming potential of CH<sub>4</sub>*: Enables the conversion of
    CH<sub>4</sub> emissions into a
    [CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) quantity -
    i.e. the quantity of CO<sub>2</sub> which would exert the same atmospheric
    warming effect.

### Activity data required

Greenhouse gas emissions are directly proportionate to the **volume** of
gas flared, and also the **fraction which comprises hydrocarbons** (and
specifically CH<sub>4</sub>), and the **sub-fraction of hydrocarbons which
comprises carbon**. Each of these must therefore be provided in order to
calculate emissions. In addition, the facility-specific values for
combustion efficiency and gas molar volume can be used if available,
rather than using the default values.

### Calculation and results

Three emissions quantities are ultimately provided, representing:
**CO<sub>2</sub>**, **CH<sub>4</sub>**, and **total CO<sub>2</sub>e** emissions.
