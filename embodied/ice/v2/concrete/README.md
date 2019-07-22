**Life cycle methodology, concrete. Calculates embodied energy and
carbon dioxide (CO<sub>2</sub>) and CO<sub>2</sub>e emissions based on the quantity of
concrete used. Scenarios include standard mixes, blocks, nominal
proportions, reinforcing steel and precasting. Mixed geographical
scopes.**

## Summary

This methodology represents **embodied energy, carbon dioxide**
(CO<sub>2</sub>) and **CO<sub>2</sub>e emissions** associated with the use of
**concrete**. The data and calculation methodology is sourced from the
[Inventory of Carbon & Energy (ICE),
version 2.0](http://people.bath.ac.uk/cj219/) life cycle dataset,
produced in conjunction with the University of Bath.

-----

## The methodology

### Emissions model

The methodology is based on factors which describe the quantities of
energy and CO<sub>2</sub> which are 'embodied' within unit quantities of
concrete. By multiplying a quantity of concrete by these factors, an
estimate of the embodied energy and emissions associated with that
quantity can be calculated.

In addition, the methodology enables the calculation of energy and
CO<sub>2</sub> emissions embodied in **reinforcing steel** or the
**precasting** process where appropriate. These are enabled by
additional factors which are combined with the baseline concrete factors
in order to derive new *per unit concrete* factors for scenarios which
use reinforced or precast concrete. The additional factor for
reinforcing steel is proportionate to the density of steel contained
within each unit of concrete.

### Model data

Embodied energy and emissions vary between different types of concrete,
owing to, among other things differences in composition. This
methodology represents 82 different concrete types, each differentiated
by their **type** (e.g. *block*, *standard ready mix*, *nominal
proportions*) **subtype** (e.g. *10 MPa compressive strength*, *1:2.5:5
cement:sand:aggregate*, *PAV1*) descriptors and the details of any
**replacement** material used (e.g. *25% blast furnace slag*).

Each specific type of concrete is represented by up to three data
values, representing:

  - *embodied energy per unit mass* (MJ/kg)
  - *embodied CO<sub>2</sub> per unit mass* (kg/kg)
  - *embodied CO<sub>2</sub>e per unit mass* (kg/kg)

For some types, unit CO<sub>2</sub>e emissions are not explicitly defined. In
addition, each material is described by a **life cycle analysis
boundary**, indicating the stages in the material life cycle which are
represented by the energy and CO2 factors, and in most cases **author
notes** on the sourcing of the data.

Additional values are provided for determining embodied emissions and
energy associated with reinforcing steel and precasting of any concrete
type:

  - *embodied energy per unit mass for precasting* (MJ/kg)
  - *embodied CO<sub>2</sub> per unit mass for precasting* (kg/kg)
  - *embodied energy per unit mass per unit density of steel* ((MJ/kg) /
    (kg/m^^3^^))
  - *embodied CO<sub>2</sub> per unit mass per unit density of steel* ((kg/kg)
    / (kg/m^^3^^))

### Activity data required

Embodied energy and emissions are directly proportionate to the **mass
of concrete used**, which therefore must be available in order to
calculate. If requiring the impact of reinforcing steel to be included,
the **density** of the steel (i.e. *mass of steel per volume of cement*)
must also be specified. If the concrete under consideration is
**precast**, this must be declared also.

### Calculation and results

Embodied energy and emissions are calculated by multiplying the
specified quantity of concrete used by the available factors. Any
additional effect of reinforcing steel or precasting are also
incorporated. Up to three values are returned representing the embodied
**energy**, and **CO<sub>2</sub>** or **CO<sub>2</sub>e** emissions attributable to
the specified quantity of concrete (and steel).

-----

## Additional information

### Autoclaved aerated blocks

In the case of *Autoclaved aerated* concrete blocks, the published data
for embodied energy and/or CO<sub>2</sub>(e) is provided in terms of a range of
values. As such, the data is represented here in terms of three
scenarios: the *upper* and *lower* estimates, and the average (*mean*)
of these.

### Reinforcing steel associated factors

The additional factors for embodied energy and CO<sub>2</sub> emissions
associated with reinforcing steel are quoted in the ICE source
documentation in relation to a unit of *100 kg \[steel\] per m^^3^^
\[concrete\]*. These factors are represented here on a simpler kg/m^^3^^
basis and are therefore scaled by a factor of 100.

-----

## Related methodologies

Several other methodologies sourced from the ICE database are available.
The bulk of the ICE database represents several hundred distinct
materials, emissions and energy for which can be calculated on the basis
of [mass](ICE_v2_by_mass) or [area](ICE_v2_by_area).

In addition, there exist several methodologies which provide data and
calculations specific to particular types of materials:
[timber](ICE_v2_timber) (including biogenic CO<sub>2</sub> emissions) and
[windows](ICE_v2_windows).

Details of the [sources of data](ICE_v2_references) for the ICE database
are also available.
