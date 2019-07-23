This methodology represents greenhouse gas emissions associated with the
combustion of **fuel** for transport purposes. The data and calculation
methodology originates from the UK government department DEFRA, as
published in their most recent [greenhouse gas (GHG) conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the greenhouse gas emissions associated with the specific quantities of
transport fuel. These emissions factors can be contrasted with similar
transport-related emissions factors which describe emissions on the
basis of *distance*. This methodology is typically more accurate for
calculating transport related greenhouse gas emissions since it involves
a more direct measure of fuel consumption without the requirement for
assumptions about vehicle fuel efficiencies.

Emissions - conventionally expressed in terms of mass (e.g. *kg*) - are
calculated by multiplying these rates (*mass emitted per volume*; e.g.
*kg CO<sub>2</sub> per litre*) by a volume of fuel (e.g *litres*) consumed.
DEFRA also publish data on [fuel densities](Fuel_properties_by_DEFRA)
which can be used to convert volumetric quantities of fuel into their
equivalent masses (or vice versa). As such, emissions can additionally
be calculated on the basis of mass-based quantities (e.g. *kg* or
*tonnes*).

### Model data

The rate at which fuel combustion produces greenhouse gas emissions
varies depending on factors such as the carbon content of the specifc
type of fuel burned. Therefore, emissions factors for a number of
distinct transport fuels are provided.

Each fuel is represented by six distinct emissions factors which
differentiate greenhouse gas emissions into the following types:

  - *direct CO<sub>2</sub> emissions*: carbon dioxide emissions produced
    *during* combustion
  - *direct CH<sub>4</sub> emissions*: methane emissions produced *during*
    combustion
  - *direct N<sub>2</sub>O emissions*: nitrous oxide emissions produced
    *during* combustion
  - *total direct emissions*: all direct emissions, i.e. CO<sub>2</sub> +
    CH<sub>4</sub> + N<sub>2</sub>O
  - *indirect emissions*: emissions associated with stages in the fuel
    production chain such as raw material extraction and fuel delivery
  - *total* or '*life cycle*': the total of direct and indirect
    emissions

Each of these emissions factors are expressed in terms of kg
[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) per tonne km.

### Similar methodologies

Other DEFRA transport methodologies available representing road vehicles
differentiated by
[size](DEFRA_road_transport_methodology_by_vehicle_size) and [market
segment](DEFRA_road_transport_methodology_by_vehicle_class), [heavy
goods vehicles](DEFRA_heavy_goods_vehicle_methodology), [passenger
transport](DEFRA_passenger_transport_methodology) and the transport of
[freight](DEFRA_freight_transport_methodology) are also available.

-----

## Using this methodology

### Choosing a specific activity type

To use this methodology, the particular type of fuel must be specified
by selecting from of the ***fuel*** drill down choice.

### Activity data required

According to this methodology, greenhouse gas emissions are directly
proportionate to the quantity of fuel consumed. Fuel quantity must be
specified in one of two ways in order to make an emissions calculation:

  - **by volume**: specify a volume of fuel using the ***volume***
    profile item value
  - **by mass**: specify fuel quantity on the basis of mass, using the
    ***mass*** profile item value

Users can choose to specify their activity data in a comprehensive range
of appropriate [units](Units).

### Calculation and result

In the case that a mass-based fuel quantity is specified, AMEE converts
this quantity into a volumetric quantity by using the fuel-specific
[density](Fuel_properties_by_DEFRA) values provided in the DEFRA source
documentation. The following discrete **amounts** are returned:

  - ***CO2***: CO<sub>2</sub> emissions
  - ***methaneCO2e***: CH<sub>4</sub> (methane) emissions
  - ***nitrousOxideCO2e***: N<sub>2</sub>O (nitrous oxide) emissions
  - ***totalDirectCO2e***: total direct emissions
  - ***indirectCO2e***: Indirect emissions
  - ***lifeCycleCO2e***: Full life cycle emissions

Users should note that **all quantities** (including the separated
CH<sub>4</sub> and N<sub>2</sub>O emissions) are expressed in terms of
**[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO<sub>2</sub> which would exert the same atmospheric warming
effect and the emissions quantity.

These emissions reflect the emissions type specified (i.e. direct,
indirect or life cycle) are therefore represent direct emissions by
default.

-----

## Notes

### Default units for CNG

The emissions factors for compressed natural gas (CNG) are presented on
the basis of *mass* in the original DEFRA documentation, i.e. kg
\[emissions\] per *kg*.

For consistency with other fuels in this category, these values have
been converted to volumetric emissions factors (i.e. kg \[emissions\]
per *litre*) using the density value for CNG (0.175 kg per litre)
provided in *Annex 11 Fuel Properties* of the DEFRA documentation. As
described above, emissions for all fuels can nevertheless be calculated
on the basis of mass quantities, in which cases AMEE references the same
fuel property data in order to make the appropriate conversions.

### Biofuel blends

Emission factors calculated for petrol supplied at public refuelling
stations, factoring in the bioethanol supplied in the UK as a proportion
of the total supply of petrol+bioethanol (bio fraction = 3.1% by unit
mass, 2.9% by unit volume, 1.9% by unit energy). Emission factors
calculated for diesel supplied at public refuelling stations, factoring
in the biodiesel supplied in the UK as a proportion of the total supply
of diesel+biodiesel (bio fraction = 4.2% by unit mass, 2.9% by unit
volume, 1.9% by unit energy). These estimations have been made based on
the most recently available reports on the Renewable Transport Fuel
Obligation (RTFO).

-----
