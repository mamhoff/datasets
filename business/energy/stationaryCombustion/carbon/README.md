The AMEE category /business/energy/stationaryCombustion/carbon contains
provides emissions calculations for stationary fuel combustion based on
the carbon content of fuels. This methodology is described in the
technical guidelines published in association with the US Environmental
Protection Agency's (EPA) [Mandatory Greenhouse Gas
Reporting](http://www.epa.gov/climatechange/emissions/archived/ghg_tsd.html)
rule.

This category offers two broad options for calculating:

1.  using **default** values for the proportion of carbon within
    specific fuels
2.  using **user-specified** carbon content value

In the latter case, the calculation equates to the *Tier 3* methodology
recommended under the EPA's mandatory reporting guidelines.

Default values for fuel carbon content are sourced from the EPA
guidelines for [Suppliers of Petroleum
Products](http://www.epa.gov/climatechange/emissions/archived/downloads/tsd/TSD%20Petroleum%20Suppliers%20_EPA%203-9-09.pdf)
as well as the American Petroleum Institute *[Compendium of Greenhouse
Gas Emissions Methodologies for the Oil and Gas
Industry](http://www.api.org/ehs/climate/response/index.cfm)* which
contains data aggregated from several sources including the EPA and the
Energy Information Administration (EIA).

## How to use this category

To use this category, select a fuel type using the *type* and *subtype*
drill choices.

Next, the quantity of fuel must be specified. There are three options
for making this specification.

### Mass-based calculations

To calculate on the basis of mass, specify a quantity using the
***mass*** profile item value. This method is suitable for solid and
liquid phase fuels.

### Volumetric calculations using fuel density

To calculate on the basis of volume, specify a quantity using the
***volume*** profile item value, together with the density of the fuel
using the ***density***. This method is suitable for liquid and gas
phase fuels.

### Volumetric calculations for gases

An alternative way to calculate on the basis of volume - appropriate
specifically to gaseous fuels - is to specify a quantity using the
***volume*** profile item value, together with the the molecular weight
(***molecularWeight***) of the fuel and a molar volume conversion factor
(***molarVolumeConversionFactor***). The latter simply represents the
volume occupied by a single mole of the respective gaseous fuel.

In all cases, the returned value represents the CO,,2,, emissions
resulting from the burning of the specified quantity, using the default
value for carbon content. To specify the carbon content of the fuel, set
the ***carbonContent*** profile item value accordingly. The value should
be expressed as a full percentage, i.e. between 0-100. If specified,
AMEE will use this value in the calculation of CO,,2,, emissions rather
than the default for the respective fuel type.

All calculations assume 100% combustion, following EPA guidelines.
