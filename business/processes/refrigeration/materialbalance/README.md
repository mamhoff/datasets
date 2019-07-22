This methodology enables the calculation of greenhouse gas emissions
associated with the use of refrigerants. The methodology is sourced from
the UK government department DEFRA, as published in their most recent
greenhouse gas (GHG) conversion factors documentation, but ultimately
follows the methodology publlished in association with the [IPCC
National Greenhouse Gas Inventory
Programme](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_7_Ch7_ODS_Substitutes.pdf).

-----

## The methodology

### Emissions model

This methodology estimates refrigerant emissions on the basis of
**material balance** - that is, an accounting of refrigerant inputs,
outputs and stores. The discrepancy between inputs and outputs is
assumed to represent the quantity of refrigerant which was lost as
emissions. This is more accurate than the 'emissions factor' approach
(see below) in which assumptions regarding all of the emissions causing
processes are incorporated into a single, generalized emissions rate.

Refrigerants differ in their specific physical (particularly thermal)
properties and therefore exert a variable effect on atmospheric warming.
As such, the absolute quantity of emissions for a given refrigerant type
is converted into a standard measure of environmental impact - CO<sub>2</sub>e:
the equivalent quantity of carbon dioxide (CO<sub>2</sub>) which would produce
the same atmospheric warming effect. This conversion is made by
multiplying the absolute emissions quantity by the ['global warming
potential'](Greenhouse_gases_Global_warming_potentials) (GWP) of the
respective refrigerant - a value unique to the gas which represents its
warming effect relative to CO<sub>2</sub>.

### Similar methodologies

DEFRA publishes an alternative methodology for accounting for greenhouse
gases associated with refrigerants which uses generic emissions factors
relating to the [installation](Refrigeration_Installation),
[operation](Refrigeration_Operation) and
[disposal](Refrigeration_Disposal) of refrigeration and air conditioning
units.

-----

## Using this category

### Specifying activity type

To use this category, simply create a profile item - there are no
alternative drill choices.

### Specifying activity data

Since the methodology is based on a material balance accounting of
refrigerant quantities, each of the following quantities must be
specified in order to make an emissions calculation:

  - ***purchased***: Purchases of refrigerant used to charge new
    equipment
  - ***newCapacity***: Total full capacity of the new equipment
  - ***service***: Quantity of refrigerant used to service equipment
  - ***retiredCapacity***: Total full capacity of retiring equipment
  - ***recovered***: Refrigerant recovered from retiring equipment

The refrigerant type can also be specified using the ***refrigerant***
profile item item value. The type of refrigerant must match one of the
drill options found [here](Greenhouse_gases_Global_warming_potentials) -
AMEE uses this category as a lookup resource for converting absolute
emissions into the appropriate quantity of CO<sub>2</sub>e for the respective
refrigerant.

### Results and calculation

AMEE calculates the the absolute and CO<sub>2</sub>e emissions of refrigerant
using the material balance methodology. The following quantities are
returned:

  - ***absoluteEmissions***: Absolute quantity of emissions based on
    specified input/output quantities
  - ***CO2e***: Emissions quantity expressed as CO<sub>2</sub>e

These are expressed in terms of a mass (e.g. kg). The ***CO2e*** return
value represents the conversion of absolute emissions into CO<sub>2</sub>e and
is enumerated only if the refrigerant type is specified (using the
appropriate [GWP](Greenhouse_gases_Global_warming_potentials)).
Otherwise this value is set to 0.

-----
