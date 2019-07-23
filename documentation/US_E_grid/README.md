The *Emissions & Generation Resource Integrated Database (eGRID)*,
published by the US Environmental Protection Agency, is the preeminent
source of emissions data for the electric power sector in the United
States.

In May 2011,
**[Version 1.1](http://www.epa.gov/cleanenergy/energy-resources/egrid/index.html)**
was published, representing the calendar year of 2007 and incorporating
earlier versions covering 2004 and 2005. AMEE represents part of this
dataset, enabling the calculation emissions associated with electricity
supplied to, and consumed from, the grid systems of the US.

-----

## The dataset

eGRID is based on available plant-specific data for all generating
plants that provide power to the electric grid, aggregated at several
geographic levels, and descriptive of numerous aspects of the
electricity production and consumption process. The full dataset
includes absolute values for annual power and heat output and annual
emissions, differentiated by fuel type (or other source), as well as by
individual plants and geographic regions. Also included, however, is a
rich set of emissions intensity data (i.e. emissions 'factors') which
enables a spectrum of emissions calculation scenarios to be supported.

### Generated versus consumed electricity

The delivery of generated electricity via a grid network is associated
with 'distribution and transmission losses'. Therefore, the emissions
intensity of electricity consumed by an end-user of the grid is
typically higher than that of the same quantity of electricity supplied
to the grid. The basic emissions factors provided in the eGRID dataset
represent the emissions intensity (i.e. per unit of energy) of
electricity supplied *to* the grid, rather than consumed *from* the grid
by an end-user. EPA publish [data on transmission
losses](EPA_eGRID_transmission_losses) for the main 'parent' grid
regions of the United States and therefore converting between generated
and consumed emissions intensities is achieved by dividing the emissions
factor for generation by the appropriate transmission loss quantity (%),
as follows:

*emissions factor*,,consumption,, = *emissions factor*,,generation,, /
(1 - (*transmission loss*,,%,, / 100))

### Emissions types

Emissions intensity data (i.e. emissions 'factors') are provided for the
following greenhouse gases and pollutants:

  - carbon dioxide (CO<sub>2</sub>)
  - methane (CH<sub>4</sub>)
  - nitrous oxide (N<sub>2</sub>O)
  - CO<sub>2</sub>e
  - other nitrogen oxides (NO,,x,,)
  - sulphur dioxide (SO<sub>2</sub>)
  - mercury (Hg)

### Total versus non-baseload

The eGRID dataset differentiates between 'total' emissions and
'non-baseload' emissions. Non-baseload emissions factors represent the
aggregated emissions intensities of power plant generation which is not
considered to contribute to the grid baseload (i.e. the minimum level of
output supplied to the grid). These emission factors are considered to
be useful for estimating the effects of reducing grid electricity
consumption, since baseload generation is largely unaffected by such
measures.

### Geographic regions

eGRID aggregates emissions data (i.e. from the data on individual power
plants) at several geographic levels:

  - US state
  - eGRID subregions
  - North American Electric Reliability Corporation (NERC) subregions
  - Power Control Areas
