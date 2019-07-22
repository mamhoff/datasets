This methodology represents greenhouse gas emissions associated with the
stationary combustion of blended fuels. The data and calculation
methodology originates from the UK government department DEFRA, as
published in their most recent [greenhouse gas (GHG) conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

-----

## The methodology

### Emissions model

Blended fuels are made up from a mixture of conventional fuels (diesel,
petrol compressed natural gas) and biofuels (biomethane, biodiesel,
bioethanol). Given that each component is associated with different
quantities of greenhouse gas emission, the type of blend together with
the precise proportion of conventional to biofuel in the mixture
determines the quantity of greenhouse gases emitted on combustion.

The emissions calculation methodology is based upon emissions factors
which relate mass, volume, or energy-based quantities of biofuels and
conventional fuels with their associated quantity of greenhouse gas
emissions. By specifying the type of blend and the relative proportion
of the conventional and biogenic components, the emissions arising from
the combustion of the blended fuel can be calculated.

Because the biofuels components represented in this methodology are
derived from recently grown biomass, the direct emissions they produce
on combustion are mostly benign from the point of view of atmospheric
warming: the carbon released from the biofuel has only recently been
sequestered from the atmosphere (during plant growth) and therefore does
not represent a net contributor to atmospheric CO<sub>2</sub> concentrations.
As such, emissions according to this methodology are differentiated into
several types:

  - '**direct**' emissions represent those greenhouse gases emitted
    during combustion which **do** cause a net contribution to
    atmospheric CO<sub>2</sub> concentrations.

<!-- end list -->

  - '**indirect**' emissions represent those greenhouse gases emitted in
    association with stages in the fuel production chain such as raw
    material extraction and delivery, and therefore considered to
    'embodied' within the fuel.

<!-- end list -->

  - '**life cycle**' emissions are to sum of direct and indirect
    emissions which contribute to atmospheric CO<sub>2</sub> concentrations.

<!-- end list -->

  - **Emissions which are 'outside of scopes'** are equivalent to the
    CO<sub>2</sub> absorbed from the atmosphere during growth of the biomass.
    These do not cause a net contribution to atmospheric CO<sub>2</sub>
    concentrations

### Model data

The data used for this methodology are referenced from the DEFRA
methodologies for biofuels and conventional fuels assocaited with
biofuel blends. All bio- and conventional fuel components are
represented by the following types of emissions factor:

  - *direct emissions by mass*: direct CO<sub>2</sub>e emissions per unit fuel
    mass
  - *indirect emissions by mass*: indirect CO<sub>2</sub>e emissions per unit
    fuel mass
  - *life-cycle emissions by mass*: total/life-cycle CO<sub>2</sub>e emissions
    per unit fuel mass
  - *non-scope / biogenic emissions by mass*: biogenic CO<sub>2</sub> emissions
    per unit fuel mass
  - *direct emissions by volume*: direct CO<sub>2</sub>e emissions per unit
    fuel volume
  - *indirect emissions by volume*: indirect CO<sub>2</sub>e emissions per unit
    fuel volume
  - *life-cycle emissions by volume*: total/life-cycle CO<sub>2</sub>e
    emissions per unit fuel volume
  - *non-scope / biogenic emissions by volume*: biogenic CO<sub>2</sub>
    emissions per unit fuel volume
  - *direct emissions by energy*: direct CO<sub>2</sub>e emissions per unit
    fuel energy
  - *indirect emissions by energy*: indirect CO<sub>2</sub>e emissions per unit
    fuel energy
  - *life-cycle emissions by energy*: total/life-cycle CO<sub>2</sub>e
    emissions per unit fuel energy
  - *non-scope / biogenic emissions by energy*: biogenic CO<sub>2</sub>
    emissions per unit fuel energy

### Similar methodologies

The DEFRA methodologies for [biofuels](Biofuels_by_DEFRA) and
[conventional fuels associated with biofuel
blends](Fuels_associated_with_biofuel_blends_by_DEFRA) are also
available

-----

## How to use this category

### Choosing a specific activity type

To use this methodology, specify the fuel type using the ***fuel***
drill down choice.

### Activity data required

Since emisisons according to this methodology are directly proportionate
to fuel quantity, the quantity of fuel used must be specified using
either the ***mass***, ***volume*** or ***energy*** profile item values.
in addition, the proportion of biofuel within the blend must be
specified using the ***biofuelPercentage*** profile item value, as a
decimal percentage (i.e. 0-1). This value is set to 1 by default, which
represents 100% conventional fuel.

### Results and calculation

AMEE returns the quantity of greenhouse gas emissions associated with
the quantity of blended fuel specified. The following discrete
**amounts** are returned:

  - ***directCO2e***: direct CO<sub>2</sub>e emissions
  - ***indirectCO2e***: indirect CO<sub>2</sub> emissions
  - ***lifeCycleCO2e***: life-cycle CO<sub>2</sub>e emissions
  - ***bioCO2***: biogenic CO<sub>2</sub> emissions

Users should note that **all quantities** are expressed in terms of
**[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO<sub>2</sub> which would exert the same atmospheric warming
effect and the emissions quantity.

-----

## Notes

The data for this category is based upon those within the DEFRA
methodologies for [biofuels](Biofuels_by_DEFRA) and [conventional fuels
associated with biofuel
blends](Fuels_associated_with_biofuel_blends_by_DEFRA). In both cases,
AMEE has used fuel property data published in the same DEFRA GHG
Conversion Factors source documentation in order to provide a full suite
of emissions factors for use on the bases of mass, volume or energy
quantities. This methodology follows that additional functionality in
being able to calculate via each of these bases.

One exception is that of the *biomethane/cng* blended fuel. In this
case, the density values provided by DEFRA for each of the respective
fuels are incompatible - one be at standard atmospheric pressure
(biomethane), the other in a compressed state (CNG). As such, the
conversion of emissions factors from a mass basis into a volumetric
basis for these fuels is not equivalent and therefore the combination of
thus derived volumetric emissions factors into a calculation for their
blend is not valid.

The volumetric option for *biomethane/cng* therefore returns 0, and any
calculation for this blend must specify fuel quantity on either a mass
or energetic basis.
