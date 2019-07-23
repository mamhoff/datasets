The AMEE category at /business/energy/electricity/defra/international
provides a dataset and a calculation methodology for greenhouse gas
emissions associated with the consumption of grid electricity in a
variety of specific countries and international jurisdictions. The data
is sourced from the UK government department
[DEFRA](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting).

**Note:** Although DEFRA presents data for the **UK** separately from
those of other countries/regions, the data for the UK is included herein
for completeness.

-----

## The methodology

### Emissions model

Emissions are calculated, according to this methodology, on the basis on
emissions factors which relate a quantity of grid electricity
electricity with an associated quantity of greenhouse gas emissions.
These emissions factors are based on the average annual emissions
intensity of grid electricity in each country (or other region), as
specified on a *per kWh* basis. By multiplying a quantity of electricity
by the appropriate factor, the total quantity of emissions are
calculated.

### Model data

The comprehensive dataset included within methodology differentiates
several aspects of electricity-associated emissions, including: (1) the
activities of generation, transmission and consumption; (2) direct,
indirect and life cycle emissions; (3) historical (raw annual or annual
rolling average) data.

**Activity type**: Separate data are available for greenhouse gas
emissions attributable to electricity *generation*, electricity
*transmission and distribution*, and electricity *consumption*. All
greenhouse gas emissions are ultimately associated with the generation
phase, being a consequence of fuel/energy consumption (*direct*
emissions) and related activities (*indirect*: e.g. fuel sourcing,
transport) at the power plant. However, since there are usually losses
associated with the *distribution and transmission* of electricity, the
quantity of emissions *per unit of electricity generated* (e.g. *kWh*)
usually differs from the corresponding *per unit* emissions at the
*point of consumption*. The DEFRA dataset provides values for greenhouse
gas quantities which are attributable to the intermediate transmission
phase, although these should be understood to be an accounting
convenience reflecting transmission (in)efficiency rather than actual
emissions caused during this phase. The emissions associated with
electricity *consumption* are simply the sum of those attributable to
generation and transmission. In most cases - i.e. those in which the
final, end-point of electricity usage is under consideration - the
values for *consumption* should be used.

**Emission type**: The DEFRA dataset differentiates between *direct* and
*indirect* greenhouse gas emissions. 'Direct' emissions are limited to
those associated with activities at the power plant, while 'indirect'
emissions refer to those which derive from other stages in the
production chain such as raw material extraction and fuel delivery. The
combination of these two types of emission represents full *life cycle*
emissions for electricity. The importance of these emissions types will
vary depending on how the user attributes the various portions of the
life cycle emissions to the various agents involved (e.g. supplier,
producer, consumer). It is most common to use *direct* emissions only
when considering electricity consumption. Indirect and life cycle
emissions are expressed in terms of CO<sub>2</sub>e.

**Historical values**: The greenhouse gas emissions produced *per unit*
of electricity generated/consumed varies through time as the mix of
fuels used by power stations supplying a national or regional grid
changes. These changes may reflect variations in electricity demand or
the relative prices of different fuel types. DEFRA publishes *annual
emissions factors* based on the average quantity of emissions per unit
of electricity across the grid during each calendar year. These values
cover the period 1990-2006. In addition to the raw annual values, DEFRA
provides '*rolling average*' emissions factors which represent the
average of the previous 5 years for each given year. These are suggested
as being more suitable for inter-annual comparisons by DEFRA.

-----

## How to use this category

### Choosing an emissions scenario

To use this category, choose the country or region by using the
*country* drill down choice and the type of activity using the *type*
drill down choice. For the latter, the following options are available:

  - *electricity generation*
  - *electricity distribution and transmission*
  - *electricity consumption*

For most cases - i.e. considering everyday electricity usage -
'electricity consumption' is the most appropriate selection.

### Specifying activity data

The quantity of electricity under consideration is specified by setting
the ***energyConsumed*** profile item value.

DEFRA publishes historical annual data for direct CO<sub>2</sub> emissions for
each country/region within this category. If calculating using the
*direct* and *annual* options, users can specify *start-* and
*end-dates* in association with their electricity consumption and AMEE
will use its *data item value history* functionality to apply the
appropriate emissions factor(s). If no profile dates are set, the most
recent (i.e. 2006) data are used.

### Result

The returned quantity represents the emissions associated with the
energy quantity (and dates) specified. The following discrete
**amounts** are returned:

  - ***directCO2AnnualBasis***: Direct CO<sub>2</sub> emissions calculated on
    the basis of annual emissions factors
  - ***directCO2RollingBasis***: Direct CO<sub>2</sub> emissions calculated on
    the basis of rolling average emissions factors
  - ***indirectCO2e***: Indirect CO<sub>2</sub> emissions
  - ***lifeCycleCO2e***: total life cycle CO<sub>2</sub>e emissions

Indirect and life cycle emissions are calculated using rolling average
data only.

### Additional data item values

This category also contains data item values representing the mix of
electricity and heat production from which the emissions data are
derived for each country/region - these are available from the AMEE data
API under the following paths:

  - *percentElectricity*: Percentage of total energy production
    represented by electricity
  - *percentHeat*: Percentage of total energy production represented by
    heat
  - *percentLossesElectricity*: Percentage of losses attributable to
    electricity production
  - *percentLossesHeat*: Percentage of losses attributable to heat
    production

-----
