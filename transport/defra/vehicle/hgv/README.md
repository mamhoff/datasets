This methodology represents greenhouse gas emissions associated with the
use of **heavy goods vehicles**. The data and calculation methodology
originates from the UK government department DEFRA, as published in
their most recent [greenhouse gas (GHG) conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the rate at which heavy goods vehicles emit greenhouse gases according
to **distance** travelled. These emissions factors represent emissions
associated with *entire vehicles*, which can be contrasted with similar
transport-related emissions factors which describe emissions on
*per-passenger* or *per-unit-of-freight* bases.

Emissions - conventionally expressed in terms of mass (e.g. *kg*) - are
calculated by simply multiplying these rates (*mass emitted per
distance*; e.g. *kg CO<sub>2</sub> per km*) by a distance travelled (e.g *km*).

### Model data

The rate at which heavy goods vehicles emit greenhouse gases varies
depending on the vehicle's fuel 'efficiency' (i.e. the distance acheived
per unit of fuel consumed) which is affected by vehicle size and the
loading of goods. Therefore, emissions factors for a broad range of
generalised heavy goods vehicles and illustrative loadings are provided.

A total of 23 specific types of heavy goods vehicle scenarios are
represented and are differentiated by vehicle type (rigid *versus*
articulated), size (i.e. gross weight in tonnes), and percentage laden
(0%, 50%, 100% as well as the UK average for each vehicle type).

Each vehicle type is represented by six distinct emissions factors which
differentiate greenhouse gas emissions into the following types:

  - *direct CO<sub>2</sub> emissions*: carbon dioxide emissions produced
    *during* vehicle usage, i.e. fuel combustion
  - *direct CH<sub>4</sub> emissions*: methane emissions produced *during*
    vehicle usage, i.e. fuel combustion
  - *direct N<sub>2</sub>O emissions*: nitrous oxide emissions produced
    *during* vehicle usage, i.e. fuel combustion
  - *total direct emissions*: all direct emissions, i.e. CO<sub>2</sub> +
    CH<sub>4</sub> + N<sub>2</sub>O
  - *indirect emissions*: emissions associated with stages in the fuel
    production chain such as raw material extraction and fuel delivery
  - *total* or '*life cycle*': the total of direct and indirect
    emissions

Each of these emissions factors are expressed in terms of kg
[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) per km.

### Similar methodologies

Other DEFRA vehicle-based methodologies available represent [vehicles
differentiated by
size](DEFRA_road_transport_methodology_by_vehicle_size) and [cars
differentiated by market
segment](DEFRA_road_transport_methodology_by_vehicle_class).
Methodologies oriented around
[passenger](DEFRA_passenger_transport_methodology) and
[freight](DEFRA_freight_transport_methodology) transport are also
available.

-----

## Using this methodology

### Choosing a specific activity type

To use this methodology, the particular type of vehicle and loading
scenario which best represents the users emissions scenario must be
specified by making selections from each of the ***type***, ***size***
and ***load*** drill down choices.

### Activity data required

According to this methodology, greenhouse gas emissions are directly
proportionate to distance travelled which therefore must be specified -
using the ***distance*** profile item value - in order to make an
emissions calculation.

Users can choose to specify their activity data in a comprehensive range
of appropriate [units](Units).

### Calculation and result

The returned emissions quantities for this methodology are inclusive of
CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O. The following discrete **amounts** are
returned:

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

This methodology represents *per vehicle* emissions and therefore the
returned emissions should be considered - by default - to represent
those attributable to an entire single vehicle.

-----
