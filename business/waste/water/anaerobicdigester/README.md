The AMEE category at business/waste/water/anaerobicdigester provides a
methodology for calculating the quantity of methane emissions from
anaerobic digesters which are combusted at water treatment plants. The
methodology is based on measurements of several plant-specific
parameters relating to the flow of emissions from the digester, and is
sourced from the
[guidelines](http://www.epa.gov/climatechange/emissions/archived/downloads/tsd/TSD%20wastewater_020409.pdf)
associated with the US EPA's [mandatory reporting
requirements](http://www.epa.gov/climatechange/emissions/ghgrulemaking.html).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, simply create a profile item - there are no drill
choices.

### Specifying activity data

Next, specify the following profile item values:

  - ***volumetricFlow***: the measured volumetric flow rate (i.e. volume
    per time) of emissions from the digester
  - ***CH4Concentration***: the measured concentration of CH,,4,, in the
    digester emissions (expressed as a whole percentage, i.e. 0-100)
  - ***temperature***: the temperature at which flow measurements were
    made
  - ***pressure***: the pressure at which flow measurements were made
  - ***time***: the duration for which the facility was in operation

The assumes default values for the density of CH,,4,, and the
destruction efficiency of combustion. Users can override these default
values by specifying their own facility-specific values using the
following profile item values:

  - ***destructionEfficiency***: the fraction of CH,,4,, destroyed under
    combustion (a decimal fraction, 0-1; default, 0.99)
  - ***density***: density of CH,,4,, (i.e. mass per volume)

### Results and calculation

The quantities returned represent the methane emissions associated with
the quantity specified. The following quantities are returned:

  - ***producedCH4***: absolute quantity of CH,,4,, produced by the
    anaerobic digestion process
  - ***destroyedCH4***: absolute quantity of CH,,4,, destroyed by
    combustion
  - ***emittedCH4***: absolute quantity of CH,,4,, emitted (i.e. not
    destroyed)
  - ***CO2e***: emitted CH,,4,, to CO,,2,,e converted using the
    appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
