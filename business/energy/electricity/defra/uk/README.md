The AMEE category at /business/energy/electricity/defra/uk provides a
dataset and a calculation methodology for greenhouse gas emissions
associated with the consumption of grid electricity in the United
Kingdom. The data is sourced from the UK government department
[DEFRA](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting).

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
when considering electricity consumption. Direct emissions are
additionally differentiated by the specific greenhouse gases CO,,2,,,
CH,,4,, and N,,2,,O, the latter two quantities being expressed in terms
of [CO,,2,,e](Greenhouse_gases_Global_warming_potentials). Indirect and
life cycle emissions are expressed in terms of CO,,2,,e.

**Historical values**: The greenhouse gas emissions produced *per unit*
of electricity generated/consumed varies through time as the mix of
fuels used by power stations supplying a national or regional grid
changes. These changes may reflect variations in electricity demand or
the relative prices of different fuel types. DEFRA publishes *annual
emissions factors* based on the average quantity of emissions per unit
of electricity across the grid during each calendar year. These values
cover the period 1990-2008. In addition to the raw annual values, DEFRA
provides '*rolling average*' emissions factors which represent the
average of the previous 5 years for each given year. These are suggested
as being more suitable for inter-annual comparisons by DEFRA.

-----

## How to use this category

### Choosing an emissions scenario

To use this category, choose the type of activity using the *type* drill
down choice. The following options are available:

  - *electricity generation*
  - *electricity distribution and transmission*
  - *electricity consumption*

For most cases - i.e. considering everyday electricity usage -
'electricity consumption' is the most appropriate selection. Next,
select the type of emission required using the *emission* drill down
choice. The following options are available:

  - *direct*
  - *indirect*
  - *life cycle* (direct + indirect)

Finally, select the basis for the data used in the calculation using the
*basis* drill down choice. The choices are:

  - *annual*
  - *rolling average*

The *annual* data values are applicable only to *direct* emissions
calculations.

### Specifying activity data

The quantity of electricity under consideration is specified by setting
the ***energyConsumed*** profile item value. If users specify *start-*
and *end-dates* in association with their electricity consumption, AMEE
will use its *data item value history* functionality to apply the
appropriate emissions factor(s). If no profile dates are set, the most
recent (i.e. 2008) data are used.

### Result

In the case of *direct* emissions, four quantities are returned, as
follows:

  - ***CO2***: CO,,2,, emissions
  - ***methaneCO2e***: CH,,4,, emissions
  - ***nitrousOxideCO2e***: N,,2,,O emissions
  - ***totalCO2e***: total direct CO,,2,,e emissions (all gases
    combined)

Note that each of these values - including the separated CH,,4,, and
N,,2,,O emissions - are expressed in terms of carbon-dioxide-equivalent
(CO,,2,,e) emissions.

For *indirect* and *life cycle* emissions, just the ***totalCO2e***
quantity is returned which represents total CO,,2,,e emissions for the
indirect and life-cycle perspectives respectively. All quantities
represent greenhouse gas (CO,,2,,e) emissions associated with the energy
quantity (and dates) specified.
