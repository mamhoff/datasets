This methodology represents which conventional fuels which are
associated with **biofuel blends**. The data and calculation methodology
originates from the UK government department DEFRA, as published in
their most recent [greenhouse gas (GHG) conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

The data contained within this methodology is used as a reference for
calculating greenhouse gas emisisons associated with blended fuels.

-----

## The methodology

### Emissions model

The emissions calculation methodology is based upon emissions factors
which relate mass, volume, or energy-based quantities of biofuel with
their associated quantity of greenhouse gas emissions.

  - '**direct**' emissions represent those greenhouse gases emitted
    during combustion

<!-- end list -->

  - '**indirect**' emissions represent those greenhouse gases emitted in
    association with stages in the fuel production chain such as raw
    material extraction and delivery, and therefore considered to
    'embodied' within the fuel.

<!-- end list -->

  - '**life cycle**' emissions are the sum of direct and indirect
    emissions which contribute to atmospheric CO,,2,, concentrations.

<!-- end list -->

  - **Emissions which are 'outside of scopes'** are equivalent to the
    CO,,2,, absorbed from the atmosphere during growth of the biomass.
    These do not cause a net contribution to atmospheric CO,,2,,
    concentrations.

### Model data

Emissions factors relating to the following calculation requirements are
available for each biofuel type:

  - *direct emissions by mass*: direct CO,,2,,e emissions per unit fuel
    mass
  - *indirect emissions by mass*: indirect CO,,2,,e emissions per unit
    fuel mass
  - *life-cycle emissions by mass*: total/life-cycle CO,,2,,e emissions
    per unit fuel mass
  - *non-scope / biogenic emissions by mass*: biogenic CO,,2,, emissions
    per unit fuel mass
  - *direct emissions by volume*: direct CO,,2,,e emissions per unit
    fuel volume
  - *indirect emissions by volume*: indirect CO,,2,,e emissions per unit
    fuel volume
  - *life-cycle emissions by volume*: total/life-cycle CO,,2,,e
    emissions per unit fuel volume
  - *non-scope / biogenic emissions by volume*: biogenic CO,,2,,
    emissions per unit fuel volume
  - *direct emissions by energy*: direct CO,,2,,e emissions per unit
    fuel energy
  - *indirect emissions by energy*: indirect CO,,2,,e emissions per unit
    fuel energy
  - *life-cycle emissions by energy*: total/life-cycle CO,,2,,e
    emissions per unit fuel energy
  - *non-scope / biogenic emissions by energy*: biogenic CO,,2,,
    emissions per unit fuel energy

### Similar methodologies

The DEFRA methodologies for [biofuels](Biofuels_by_DEFRA) and [blended
fuels](Blended_fuels_by_DEFRA) are also available.

-----

## How to use this category

### Choosing a specific activity type

To use this methodology, specify the fuel type using the ***fuel***
drill down choice.

### Activity data required

Since emisisons according to this methodology are directly proportionate
to fuel quantity, the quantity of fuel used must be specified using
either the ***mass***, ***volume*** or ***energy*** profile item values.

### Results and calculation

AMEE returns the quantity of greenhouse gas emissions associated with
the quantity of fuel specified. The following discrete **amounts** are
returned:

  - ***directCO2e***: direct CO,,2,,e emissions
  - ***indirectCO2e***: indirect CO,,2,, emissions
  - ***lifeCycleCO2e***: life-cycle CO,,2,,e emissions
  - ***bioCO2***: biogenic CO,,2,, emissions

Users should note that **all quantities** are expressed in terms of
**[CO,,2,,e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO,,2,, which would exert the same atmospheric warming
effect and the emissions quantity.

-----

## Notes

### Default units

The CO,,2,,e emissions factors contained within this methodology are
presented in a mixture of units. Each fuel is prepresented by *per unit
energy* emissions factors of the form kg \[emissions\] per *GJ*. In
addition, diesel and petrol are represented by volumetric emissions
factors (kg \[emissions\] per *litre*), while CNG is represented by a
mass-based one (kg \[emissions\] per *kg*).

For consistency, and user flexibility, all fuels have been provided with
a full suite of volumetric, energetic and mass-based emissions factors.
The mass-based factors for iesel and petrol, and the volumetric factors
for CNG, were derived from the existing mass/volume factors using
[density](Fuel_properties_by_DEFRA) values published in the same DEFRA
GHG Conversion Factors source documentation.

Users of AMEE can, of course, choose to specify their consumption in any
appropriate unit with the AMEE handling any required conversions.

-----
