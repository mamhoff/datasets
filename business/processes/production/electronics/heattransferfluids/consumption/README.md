The AMEE category at
business/processes/production/electronics/heattransferfluids/consumption
provides a methodology for calculating emissions of fluorinated
compounds (FC) associated with the use of heat transfer fluids during
semiconductor manufacturing. Such emissions arise from evaporative
losses during use. This methodology represents the *Tier 2* approach
described by the IPCC Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

The methodology is based on a mass-balance accounting of heat transfer
fluid usage over a specified period. Users have the option of returning
absolute quantity of emissions, or, by specifying the particular type of
FC fluid used, returning the emissions expressed as CO<sub>2</sub>e.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, simply create a profile item - there are no
alternative drill choices.

### Specifying activity data

Next, users must specify the quantities of heat transfer fluids which
represent specific inputs and outputs to the manufacturing process,
using the following profile item values:

  - ***previousFC***: the inventory of liquid at the end of the previous
    period
  - ***purchasedFC***: net purchases of liquid during the period (net of
    purchases and any returns)
  - ***newCharge***: total charge (or nameplate capacity) of newly
    installed equipment
  - ***oldCharge***: total charge (or nameplate capacity) of retired or
    sold equipment
  - ***remainingFC***: inventory of liquid at end of the period
  - ***recoveredFC***: amount recovered and sent offsite from retired
    equipment during the period

Since fluids are expressed as liquid volumes, users must also specify
the density using the ***density*** profile item value, in order to
express emissions as a mass (e.g. kg).

Users can also convert their emissions into CO<sub>2</sub>e - i.e. the quantity
of CO<sub>2</sub> which would produce the same global warming effect as the
absolute FC emissions. To convert emissions into CO<sub>2</sub>e, users must
specify which type of fluid is used, as each has a different ['global
warming potential'](Greenhouse_gases_Global_warming_potentials). Users
can set the fluid type using the ***fluid*** profile item item value.
The type of fluid must match one of the options found
[here](Greenhouse_gases_Global_warming_potentials) - AMEE uses this
dataset as a lookup resource for converting absolute emissions into the
appropriate quantity of CO<sub>2</sub>e for the respective fluid.

### Results and calculation

The quantity returned represents the absolute quantity of heat transfer
fluids emitted due to evaporative losses based on the accounting
specified. Three quantities are returned, as follows:

  - ***rawEmissions***: absolute quantity of emissions for the quantity
    specified
  - ***CO2e***: CO<sub>2</sub>e emissions (absolute emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
  - ***default***: this value returns *either* raw emissions or CO2e
    depending on the presence of a ***fluid*** type specification
