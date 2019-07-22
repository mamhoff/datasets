**Life cycle methodology, windows. Calculates embodied energy, and
carbon dioxide (CO,,2,,) emissions based on the number of window units.
Scenarios include single and double glazings, timber, aluminium and PVC
frames and various types of glazing air space fills. Applicable for
UK.**

## Summary

This methodology represents **embodied energy, and carbon dioxide
(CO,,2,,) emissions** associated with **window units**. The data and
calculation methodology is sourced from the [Inventory of Carbon &
Energy (ICE), version 2.0](http://people.bath.ac.uk/cj219/) life cycle
dataset, produced in conjunction with the University of Bath.

-----

## The methodology

### Emissions model

The methodology is based on factors which describe the quantities of
energy and CO,,2,, which are 'embodied' within typical window units. By
multiplying the number of windows under consideration by these factors,
an estimate of the embodied energy and emissions associated with that
quantity can be calculated.

In addition, this methodology incorporates embodied energy and emissions
associated with the specific type of *air space fill* used within double
glazed windows.

For both window units and air space fills, the factors assume unit sizes
of 1.2 m by 1.2 m.

### Model data

Embodied energy and CO,,2,, emissions vary between different frame and
glazing types. This methodology therefore represents 11 different
scenarios, differentiated by their **frame** (e.g. *aluminium*,
*aluminium-clad timber*, *PVC*) and **glazing** (*single*, *double*)
types. In addition, a further differentiation is the **basis** on which
the emissions factors are estimated: the *upper*, *lower* or *average*
of the range of values provided in the ICE source documentation.

Each scenario is represented by two data values:

  - *embodied energy per window unit* (MJ/window)
  - *embodied CO,,2,, per window unit* (kg/window)

In addition, each scenario is described by a **life cycle analysis
boundary**, indicating the stages in the window life cycle which are
represented by the energy and CO2 factors, and in most cases **author
notes** on the sourcing of the data.

### Activity data required

Embodied energy and emissions are directly proportionate to the **number
of windows** under consideration, which therefore must be available in
order to calculate. In addition, the **type of glazing air space fill**
can be specified. The default fill is simply *air*, which is represented
by the base window unit emissions factors alone.

### Calculation and results

Embodied energy and emissions are calculated by multiplying the
specified number of windows by the appropriate factors. Unit energy and
emissions associated with air space fills are referenced from the
[associated ICE dataset](ICE_v2_window_fills) and incorporated into the
base window unit calculations.

Two values are calculated, representing the embodied **energy** and
**CO,,2,,** emissions attributable to the specified number of windows.

-----

## Related methodologies

The ICE methodology for [window air space fills](ICE_v2_window_fills) is
available separately, although it is incorporated into calculations in
the present methodology.

Several other methodologies sourced from the ICE database are available.
The bulk of the ICE database represents several hundred distinct
materials, emissions and energy for which can be calculated on the basis
of [mass](ICE_v2_by_mass) or [area](ICE_v2_by_area).

In addition, there exist several methodologies which provide data and
calculations specific to particular types of materials:
[concrete](ICE_v2_concrete) and [timber](ICE_v2_timber) (including
biogenic CO,,2,, emissions).

Details of the [sources of data](ICE_v2_references) for the ICE database
are also available.
