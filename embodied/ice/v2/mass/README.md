**Life cycle methodology, materials. Calculates embodied energy and
carbon dioxide (CO<sub>2</sub>) and CO<sub>2</sub>e emissions based on the quantity of
materials used (by mass). Scenarios include specific metals,
construction materials, ceramics, plastics and timber. Mixed
geographical scopes.**

## Summary

This methodology represents **embodied energy, carbon dioxide**
(CO<sub>2</sub>) and **CO<sub>2</sub>e emissions** associated with the use of various
**materials** as specified on the basis of **mass** quantities. The data
and calculation methodology is sourced from the [Inventory of Carbon &
Energy (ICE), version 2.0](http://people.bath.ac.uk/cj219/) life cycle
dataset, produced in conjunction with the University of Bath.

-----

## The methodology

### Emissions model

The methodology is based on factors which describe the quantities of
energy and CO<sub>2</sub> which are 'embodied' within unit quantities of
various materials. By multiplying a quantity of material - in this case,
a **mass** quantity - by these factors, an estimate of the embodied
energy and emissions associated with that quantity can be calculated.

### Model data

Embodied energy and emissions vary between types of material because of
each material's differing raw material and manufacturing requirements.
This methodology represents 266 different materials scenarios, each
differentiated by their **material** name (e.g. *cement*, *plastics*,
*steel*) and **type** and **subtype** descriptors (e.g. *6-20% fly ash
(CEM II/A-V)*, *Low Density Polyethylene Film*, *recycled*).

Each specific type of material is represented by up to three data
values, representing:

  - *embodied energy per unit mass* (MJ/kg)
  - *embodied CO<sub>2</sub> per unit mass* (kg/kg)
  - *embodied CO<sub>2</sub>e per unit mass* (kg/kg)

For some materials, unit CO<sub>2</sub>e emissions are not explicitly defined.
In a few cases (e.g. *asbestos*, *carpet grout*, *mastic sealants*) only
embodied energy is defined.

In addition, each material is described by a **life cycle analysis
boundary**, indicating the stages in the material life cycle which are
represented by the energy and CO2 factors, and in most cases **author
notes** on the sourcing of the data.

### Activity data required

Embodied energy and emissions are directly proportionate to the **mass
of material used**, which therefore must be available in order to
calculate.

### Calculation and results

Embodied energy and emissions are calculated by multiplying the
specified quantity of material used by the available factors. Up to
three values are returned representing the embodied **energy**, and
**CO<sub>2</sub>** or **CO<sub>2</sub>e** emissions attributable to the specified
quantity.

-----

## Additional information

### Data specified as a range of values

In some cases, the published data for embodied energy and/or CO<sub>2</sub>(e)
for a particular material is provided in terms of a range of values
(e.g. *bitumen*, *slate*). This arises where the range of values in the
sample data is large, and/or the sample size is small. In these cases
the data is represented here in terms of three scenarios: the *upper*
and *lower* estimates, and the average (*mean*) of these.

Cements with a mixture of replacement fly ash or ground granulated blast
furnace slag (GGBS) are also represented in the source documentation by
a range of values. In this case, the range does not derive from data
uncertainty, but, rather, represents the range in the proportion of fly
ash or GGBS. As described above, these scenarios are represented here in
terms of upper, lower and mean values for each percentage range.

### Nylon carpets

The data for *nylon* carpet and carpet tiles is provided in the source
documentation on the basis of area quantities (i.e. kg \[CO<sub>2</sub>\] per
**m^^2^^**). This data and calculation basis is available
[here](ICE_v2_by_area). The *per kg* data for these materials (i.e. kg
\[CO<sub>2</sub>\] per **kg**) were derived from the *per m^^2^^* data using
the area density values (i.e. kg per m^^2^^) which are provided for each
of the carpet types in the original source documentation.

-----

## Related methodologies

Several other methodologies sourced from the ICE database are available.
While this methodology deals with mass-based material quantities,
material life cycle emissions can also be calculated on the basis of
[area](ICE_v2_by_area), which is appropriate for materials such as
paint, carpet, photovoltaic cells and roads. (Mass-based calculations
are nevertheless available for paint and carpet in the present
methodology).

In addition, there exist several methodologies which provide data and
calculations specific to particular types of materials, for example
[concrete](ICE_v2_concrete), [timber](ICE_v2_timber) (including biogenic
CO<sub>2</sub> emissions) and [windows](ICE_v2_windows).

Details of the [sources of data](ICE_v2_references) for the ICE database
are also available.
