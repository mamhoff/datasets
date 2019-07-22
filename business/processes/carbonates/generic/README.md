**Mineral industry methodology, general carbonate calcination.
Calculates carbon dioxide (CO,,2,,) emissions based on the quantity of
carbonate minerals calcined. Scenarios include pure, rock and clay forms
of limestone and dolomite. Globally applicable.**

## Summary

This methodology represents **carbon dioxide** (CO,,2,,) emissions
associated with the **calcination of carbonate minerals**. The data and
calculation methodology is sourced from the [IPCC](IPCC), as published
in *[Volume 3, Chapter 2 - Mineral Industry
Emissions](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_2_Ch2_Mineral_Industry.pdf)*
of their *[2006 IPCC Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/index.html)*.
IPCC ***tier 1* and *tier 2*** approaches are represented by this
methodology.

-----

## The methodology

### Emissions model

Limestone (CaCO,,3,,) and dolomite (CaMg(CO,,3,,),,2,,) are basic raw
materials having commercial applications in a number of industries. The
heating of carbonate minerals to high temperatures ('calcining')
produces metallic oxides as well as CO,,2,, emissions. This methodology
calculates CO,,2,, emissions from the general consumption (through
calcination) of carbonate minerals.

The methodology represents a simplified *mass-balance* approach,
assuming (1) that all carbon (C) which enters the calcination process as
a component of carbonate minerals is eventually emitted as CO,,2,,; and
(2) that carbonate consumption is based entirely on mixtures of
limestone and dolomite (more varied composition can be handled using the
*tier 3* approach - see below).

Quantities of CO,,2,, are calculated by using conversion factors which
represent the *stoichiometry* of the chemical processes, i.e. the known
molecular mass ratio of the reactant carbonate material and the product
CO,,2,,.

A **default composition** of 85% limestone and 15% dolomite is provided
for cases where specific quantities are not known. In this case this
methodology represents the IPCC *tier 1* approach. Where individual
quantities of limestone and dolomite are provided as additional activity
data, the calculation represents the *tier 2* approach.

### Model data

CO,,2,, conversion factors (**stoichiometric ratios**) for limestone and
dolomite are sourced from the IPCC and can be found
[here](Stoichiometries_ratios).

As well as stoichiometric considerations, CO,,2,, emissions associated
with the calcining of carbonate minerals are also related to the purity
of the carbonate. Four calculation scenarios are provided with this
methodology representing different levels of **carbonate purity** for
the limestone/dolomite mix:

  - *pure*: 100% carbonate
  - *rock*: 95% carbonate
  - *clay*: 10% carbonate
  - *other*: 100% carbonate

These purities specify what proportion of the bulk material calcined
represents carbonate minerals. These values can be overidden if specific
purity data is available.

### Activity data required

Greenhouse gas emissions are directly proportionate to the **quantity**
(i.e. mass) of carbonate consumed, which therefore must be specified in
order to make a calculation. In addition, values for the **proportions
of limestone and dolomite** and the overall mixture **purity** can be
specified optionally, if data are available.

### Calculation and results

CO,,2,, emissions are calculated by converting the bulk quantity into a
quantity for pure carbonate (via the *purity* value), from which the
respective quantities of limestone and dolomite are calculated (via
their fractional concentrations). These quantities are finally converted
into a quantity of **CO,,2,,** emissions on the basis of their
respective CO,,2,, conversion factors

This emissions calculated by this methodology represent those
attributable to the specified quantity of carbonate calcined.

-----

## Related methodologies

Several other [IPCC](IPCC) methodologies are available which represent
carbonate calcination. These include the IPCC
*[tier 3](Specific_carbonate_consumption)* methodology which corresponds
to this methodology, as well as methodologies specific to [soda ash
consumption](Aluminium_soda_ash), as well as
[glass](Glass_production_carbonate_methodology) and
[cement](IPCC_cement_production_based_on_carbonate_inputs) production.
