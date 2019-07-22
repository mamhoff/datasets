**Life cycle methodology, materials. Calculates embodied energy and
carbon dioxide (CO,,2,,) and CO,,2,,e emissions based on the quantity of
materials used (by area). Scenarios include paint, carpet, photovoltaic
cells and roads. Mixed geographical scopes.**

## Summary

This methodology represents **embodied energy, carbon dioxide**
(CO,,2,,) and **CO,,2,,e emissions** associated with the use of various
**materials** as specified on the basis of **area** quantities. The data
and calculation methodology is sourced from the [Inventory of Carbon &
Energy (ICE), version 2.0](http://people.bath.ac.uk/cj219/) life cycle
dataset, produced in conjunction with the University of Bath.

-----

## The methodology

### Emissions model

The methodology is based on factors which describe the quantities of
energy and CO,,2,, which are 'embodied' within unit quantities of
various materials. By multiplying a quantity of material - in this case,
an **area** quantity - by these factors, an estimate of the embodied
energy and emissions associated with that quantity can be calculated.

### Model data

Embodied energy and emissions vary between types of material because of
each material's differing raw material and manufacturing requirements.
This methodology represents 31 different materials scenarios, each
differentiated by their **material** name (e.g. *paint*, *carpet*,
*road*) and **type** and **subtype** descriptors (e.g. *single coat*,
*hot asphalt*, *pile weight 300 g/m^^2^^*).

Each specific type of material is represented by up to three data
values, representing:

  - *embodied energy per unit area* (MJ/m^^2^^)
  - *embodied CO,,2,, per unit area* (kg/m^^2^^)
  - *embodied CO,,2,,e per unit area* (kg/m^^2^^)

For some materials, unit CO,,2,,e emissions are not explicitly defined.

In addition, each material is described by a **life cycle analysis
boundary**, indicating the stages in the material life cycle which are
represented by the energy and CO2 factors, and in most cases **author
notes** on the sourcing of the data.

### Activity data required

Embodied energy and emissions are directly proportionate to the
**quantity of material used** (i.e. **area**), which therefore must be
available in order to calculate.

### Calculation and results

Embodied energy and emissions are calculated by multiplying the
specified quantity of material used by the available factors. Up to
three values are returned representing the embodied energy, and CO,,2,,
or CO,,2,,e emissions attributable to the specified quantity.

-----

## Related methodologies

Several other methodologies sourced from the ICE database are available.
While this methodology deals with area-based material quantities,
material life cycle emissions can also be calculated on the basis of
[mass](ICE_v2_by_mass). The *mass-based* methodology represents the bulk
of the ICE database.

In addition, there exist several methodologies which provide data and
calculations specific to particular types of materials, for example
[concrete](ICE_v2_concrete), [timber](ICE_v2_timber) (including biogenic
CO,,2,, emissions) and [windows](ICE_v2_windows).

Details of the [sources of data](ICE_v2_references) for the ICE database
are also available.
