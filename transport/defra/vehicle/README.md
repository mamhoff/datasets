This methodology represents greenhouse gas emissions associated with the
use of **road vehicles** as differentiated by their **size**. The data
and calculation methodology originates from the UK government department
DEFRA, as published in their most recent [greenhouse gas (GHG)
conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the rate at which road vehicles emit greenhouse gases according to
**distance** travelled. These emissions factors represent emissions
associated with *entire vehicles*, which can be contrasted with similar
transport-related emissions factors which describe emissions on
*per-passenger* or *per-unit-of-freight* bases. Users can nevertheless
choose to 'share' vehicular emissions amongst passengers by specifying
the vehicle occupancy.

Emissions - conventionally expressed in terms of mass (e.g. *kg*) - are
calculated by simply multiplying these rates (*mass emitted per
distance*; e.g. *kg CO,,2,, per km*) by a distance travelled (e.g *km*).

### Model data

The rate at which road vehicles emit greenhouse gases varies depending
on factors such as the type of fuel used, and the fuel 'efficiency' of
the vehicle (i.e. the distance acheived per unit of fuel consumed).
Therefore, emissions factors for a broad range of generalised vehicle
types are provided.

A total of 36 specific types of road vehicle are represented and are
differentiated by their vehicle type (e.g. car, motorbike or van), their
fuel type (e.g. petrol, diesel, or several others), and a measure of
their size. In the case of petrol and diesel cars and motorbikes, 'size'
represents engine size (in litres and cubic centimetres respectively),
while vans are differentiated on the basis of their gross vehicle
weight. Cars which run on compressed natural gas (CNG), liquefied
petroleum gas (LPG), or hybrid or unknown energy sources are
differentiated according to qualitative size categories (e.g. 'small',
'medium').

Each vehicle type is represented by six distinct emissions factors which
differentiate greenhouse gas emissions into the following types:

  - *direct CO,,2,, emissions*: carbon dioxide emissions produced
    *during* vehicle usage, i.e. fuel combustion
  - *direct CH,,4,, emissions*: methane emissions produced *during*
    vehicle usage, i.e. fuel combustion
  - *direct N,,2,,O emissions*: nitrous oxide emissions produced
    *during* vehicle usage, i.e. fuel combustion
  - *total direct emissions*: all direct emissions, i.e. CO,,2,, +
    CH,,4,, + N,,2,,O
  - *indirect emissions*: emissions associated with stages in the fuel
    production chain such as raw material extraction and fuel delivery
  - *total* or '*life cycle*': the total of direct and indirect
    emissions

Each of these emissions factors are expressed in terms of kg
[CO,,2,,e](Greenhouse_gases_Global_warming_potentials) per km.

### Similar methodologies

Other DEFRA vehicle-based methodologies available represent [cars
differentiated by market
segment](DEFRA_road_transport_methodology_by_vehicle_class) and [heavy
goods vehicles](DEFRA_heavy_goods_vehicle_methodology). Methodologies
oriented around [passenger](DEFRA_passenger_transport_methodology) and
[freight](DEFRA_freight_transport_methodology) transport are also
available.

-----

## Using this methodology

### Choosing a specific activity type

To use this methodology, the particular type of vehicle which best
represents the users emissions scenario must be specified by making
selections from each of the ***type***, ***fuel*** and ***size*** drill
down choices.

### Activity data required

According to this methodology, greenhouse gas emissions are directly
proportionate to distance travelled which therefore must be specified -
using the ***distance*** profile item value - in order to make an
emissions calculation.

In addition, the number of vehicle occupants can be specified by setting
the appropriate value using the ***occupancy*** profile item value
(default = 1).

Users can choose to specify their activity data in a comprehensive range
of appropriate [units](Units).

### Calculation and result

The returned emissions quantities for this methodology are inclusive of
CO,,2,,, CH,,4,, and N,,2,,O. The following discrete **amounts** are
returned:

  - ***CO2***: CO,,2,, emissions
  - ***methaneCO2e***: CH,,4,, (methane) emissions
  - ***nitrousOxideCO2e***: N,,2,,O (nitrous oxide) emissions
  - ***totalDirectCO2e***: total direct emissions
  - ***indirectCO2e***: Indirect emissions
  - ***lifeCycleCO2e***: Full life cycle emissions

Users should note that **all quantities** (including the separated
CH,,4,, and N,,2,,O emissions) are expressed in terms of
**[CO,,2,,e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO,,2,, which would exert the same atmospheric warming
effect and the emissions quantity.

This methodology represents *per vehicle* emissions and therefore the
returned emissions should be considered - by default - to represent
those attributable to an entire single vehicle, or its sole occupant
depending on the viewpoint of the user (the default value for vehicle
occupancy is 1). If multiple vehicle occupancy is specified - by setting
the ***occupancy*** profile item value to a positive value other than 1
- total vehicular emissions are shared between all occupants and
therefore the returned emissions quantity represents the emissions
attributable to each occupant.

-----
