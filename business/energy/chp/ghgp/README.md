**Combined heat and power methodology. Calculates intensities of
greenhouse gas emissions for steam and electricity produced at CHP
facilities. UK and US applicable**

## Summary

This methodology enables greenhouse gas emissions produced by Combined
Heat and Power (CHP) facilities to be attributed to electricity and
steam production respectively. The methodology originates from the WRI
Greenhouse Gas Protocol worksheet *[Allocation of Emissions from a
Combined Heat and Power (CHP) Plant
(version 1.0)](http://www.ghgprotocol.org/files/ghgp/tools/CHP_tool_v1.0.xls)*.

-----

## The methodology

### Emissions Model

Combined Heat and Power facilities produce both heat and electricity as
outputs for consumption. The emissions produced in generating heat and
electricity ultimately represent emissions attributable to the eventual
energy consumer. The allocation of CHP facility emissions to specific
quantities of energy consumed in the form of either heat (steam) or
electricity is complicated however, and depends on **(1)** the
*emissions* of the entire facility; **(2)** the *ratio* in which heat
and electricity are produced; and **(3)** the *efficiencies* with which
heat and electricity are produced from fossil fuel combustion (which is
not typically the same). It is therefore usually necessary to allocate
disproportionate quantities of the plant emissions to electricity users
and heat users respectively.

This methodology provides an **allocation of plant emissions** to both
steam and electricity outputs and derives unit **emissions factors** -
i.e. measures of emissions intensity - for both steam and electricity
production. The latter can be used by consumers of CHP steam or
electricity for calculating the emissions attributable to specific
consumed quantities.

Although CO<sub>2</sub> is the primary greenhouse gas emitted during the
combustion of fossil fuels, CH<sub>4</sub>, and N<sub>2</sub>O emissions also occur
during the combustion process. The approaches described here can be
applied equally to the allocation of CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O or
CO<sub>2</sub>e emissions related to the purchase or sale of electricity or
steam from a CHP facility. This methodology only deals in *attributing*
the specified total plant emissions - whether CO<sub>2</sub>, or otherwise - to
steam and electricity outputs.

### Model Data

The allocation of facility emissions to either steam or electricity
production is dependent on the relative efficiencies in which each is
produced. This methodology provides default efficiency factors for two
scenarios: *UK* and *US* based facilities.

### Activity data required

In order to allocate facility emissions to both steam and electricity
production, **total facility emissions** and **steam and electricity
outputs** must be provided. In addition, **efficiency factors** for
steam and electricity production can be specified (as decimal
percentages, i.e. 0-1) if facility specific data is available -
otherwise US/UK typical default values are provided by the methodology.

If required, quantities of steam and/or electricity **consumed** can
also be specified, in which case the corresponding emissions can be
calculated.

### Calculation and Results

The methodology uses the proportions of heat and electricity produced -
together with their respective efficiency factors - to apportion the
total facility emissions appropriately across heat and electricity
outputs. These emissions are then converted to a per unit energy basis.

The quantities returned represent **facility emissions** and **emissions
intensities** for steam and electricity production and emissions
attributable to specified quantities of steam and/or electricity
**consumed**.

-----

### Related Methodologies

This methodology requires an independent measure of total CHP facility
emissions. Such emissions - typically associated with fuel combustion -
can be calculated using the Greenhouse Gas Protocol (ultimately
[IPCC](IPCC)) methodology for [stationary fuel
combustion](Stationary_Combustion).
