**Chemical industry methodology, ammonia. Calculates carbon dioxide
(CO,,2,,) emissions based on the quantity of ammonia produced or
fuel/feedstock consumed. Scenarios include modern and mixed plants, and
a variety of production processes and feedstock types. Globally
applicable.**

## Summary

This methodology represents **carbon dioxide** (CO,,2,,) emissions
associated with the production of **ammonia**. The data and calculation
methodology is sourced from the [Greenhouse Gas
Protocol](Greenhouse_Gas_Protocol) (GHGP) worksheet tool *[CO2 emissions
from the production of ammonia,
version 2.0](http://www.ghgprotocol.org/downloads/calcs/Ammonia%202.0.xls)*,
which is ultimately based on the methodologies described in *[Volume 3,
Chapter 3 - Chemical Industry
Emissions](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_3_Ch3_Chemical_Industry.pdf)*
of the *[2006 IPCC Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/index.html)*.

The calculations provided within this category represent the *Tier 1, 2
and 3* approaches of the [IPCC](IPCC) guidelines.

-----

## The methodology

### Emissions model

Ammonia (NH,,3,,) is a major industrial chemical used directly as a
fertiliser and a refrigerant, as well as in the processes of heat
treating and paper pulping, and in the manufacture of nitric acid (and
nitric acid ester), nitrates, nitro compounds, explosives of various
types, and urea. In addition to the nitrogen (N) component (which is
sourced from air), the production of ammonia (NH,,4,,) requires a source
of hydrogen (H). The predominant source of H employed in the manufacture
of ammonia is natural gas (usually methane, CH,,4,,), although other
hydrocarbons (as well as water, H,,2,,O) are less commonly used. H is
obtained using a process known as *catalytic steam reforming*, which is
described by the following reaction:

1.  0.88CH,,4,, + 1.26Air + 1.24H,,2,,O → 0.88CO,,2,, + N,,2,, + 3H,,2,,

As suggested, a by-product of the process is CO,,2,,. Indeed, the
production of ammonia represents a significant *non-energy-related*
industrial source of CO,,2,, emissions.

This methodology enables the calculation of ammonia-associated CO,,2,,
emissions based on a mass-balance approach which assumes that all
feedstock/fuel carbon (C) which enters the production process is emitted
as CO,,2,,. The quantity of feedstock/fuel C is determined on the basis
of **(1)** the quantity of feedstock/fuel consumed and **(2)** the
carbon content of the feedstock/fuel. This quantity of C is converted
into the corresponding quantity of CO,,2,, using the ratio of their
relative molecular/atomic masses (i.e. 44/12).

In addition, the methodology can take into account the capture/recovery
of CO,,2,, for use in urea production or storage. In this case the
quantity of CO,,2,, emitted is adjusted according to the quantity
recovered.

This methodology can represent each of the IPCC *tier 1, 2 or 3*
approaches, depending on the activity data available (see below).

### Model data

The rate at which ammonia production produces emissions of CO,,2,,
depends on the type of process and type of fuel used. This methodology
provides data representing 416 scenarios which are differentiated by
their **plant type** (e.g. *modern European plants*, *mixed age
plants*), **production process** (e.g. *conventional reforming*,
*partial oxidation*) and **fuel type** (e.g. *natural gas*, *coking
coal*). Each scenario is represented by default values for:

  - the typical *quantity of feedstock/fuel consumed per unit of ammonia
    produced*

<!-- end list -->

  - the typical *carbon content* of the feedstock/fuel

These values can be specified on facility-specific basis if data is
available, however. In addition, the methodology provides conversion
factors for quantities of both C and urea into the corresponding
quantities of CO,,2,,, based on the respective molecular/atomic masses
of each.

### Activity data required

CO,,2,, emissions are directly proportionate to the quantity of fuel
consumed, which therefore must be provided. There are two ways in which
this quantity can be specified: **(1)** the **total quantity of fuel
consumed** can be explicitly specified (on an energetic basis; e.g. GJ);
or **(2)** the **quantity of ammonia produced** can be specified. In the
latter case, the total fuel quantity is determined on the basis of an
additional value representing the **quantity of fuel required per unit
of ammonia** (i.e. GJ per kg). This can be provided if facility-specific
or national data is available. Otherwise, a default value for the
respective production scenario can be used.

The methodology also requires a value for the **carbon content** of the
fuel. This is defined on an energetic basis, i.e. the mass of carbon per
unit of energy yielded by the fuel (kg per GJ). Where facility-specific
data is not available, the methodology provides default values for each
fuel type.

In addition, the **completeness of oxidation** can be specified, i.e.
the fraction of the fuel which is fully combusted. If no
facility-specific data is available, combustion is assumed by the
methodology to have occurred completely, i.e 100%.

Finally, this methodology can optionally take in to account **CO,,2,,
which is recovered** for storage or urea production. In the case of urea
production, the quantity of CO,,2,, can be specified in one of two ways:
**(1)** by specifying the quantity of CO,,2,, recovered explicitly; or
**(2)** by specifying the **quantity of urea produced**, in which case
the corresponding quantity of recovered CO,,2,, is derived using the
respective molecular masses of urea and CO,,2,,.

### Calculation and results

The quantity of C which enters the production process is determined by
multiplying the specified quantity of fuel consumed by the values for
carbon content and oxidation level. This is converted into the
corresponding CO,,2,, quantity using their relative molecular/atomic
masses, from which any quantities of CO,,2,, recovered are subtracted.

-----

## Additional information

### IPCC Tiers

The following combinations of activity data define each of the IPCC
tiered approaches:

***Tier 1***

  - Fuel specified in terms of *ammonia production* together with
    *default fuel requirement*
  - Fuel type is not available. The fuel with the *highest emissions
    factor* is used
  - *Carbon content* and *oxidation level* are defined using methodology
    the default value
  - Recovered CO,,2,, specified using *urea production* data or *assumed
    to be zero* if no explicit data is available

***Tier 2***

  - Fuel specified in terms of *ammonia production* together with
    *default fuel requirement*
  - Each *fuel type differentiated* and calculated separately
  - *Carbon content* and *oxidation level* are defined by either
    methodology defaults or from facility-specific or national data
  - Recovered CO,,2,, specified where appropriate

***Tier 3***

  - Each *fuel type differentiated* and calculated separately
  - *Explicit quantities* of each fuel type consumed used
  - *Carbon content* and *oxidation level* are defined by
    facility-specific or national data
  - Recovered CO,,2,, specified where appropriate

### Urea production

When a deduction is made for CO,,2,, used in urea production, IPCC
advise that it is good practice to ensure that emissions from urea use
are included elsewhere in an inventory. CO,,2,,
