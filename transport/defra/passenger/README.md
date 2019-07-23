This methodology represents greenhouse gas emissions associated with
**passenger transport**. The data and calculation methodology originates
from the UK government department DEFRA, as published in their most
recent [greenhouse gas (GHG) conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the rate at which various forms of passenger transport emit greenhouse
gases in relation to **distance** travelled. These emissions factors
represent emissions associated with *individual passengers*, which can
be contrasted with similar transport-related emissions factors which
describe emissions on the basis of *entire vehicles* or
*per-unit-of-freight*.

Emissions - conventionally expressed in terms of mass (e.g. *kg*) - are
calculated by simply multiplying these rates (*mass emitted per distance
per passenger*; e.g. *kg CO<sub>2</sub> per km per passenger*) by a distance
travelled (e.g *km*). The emissions associated with multiple passengers
can be obtained by simply multiplying by the appropriate number of
passengers.

### Model data

The rate at which passenger transportation produces greenhouse gas
emissions varies with the mode of transport, depending on factors such
as the fuel efficiency (i.e. the distance acheived per unit of fuel
consumed) of the particular type of vehicle (e.g. bus, plane, train) as
well as the passenger loading. Fuel efficiency may be related factors
such as the type of fuel used (e.g. petrol, diesel, biofuel,
electricity) and the physical dynamics of the transportation context
(i.e. road, rail, water, air). The loading of passengers indicates the
extent to which the emissions of the entire vehicle can be 'shared'
between individuals. Therefore, emissions factors for a broad range of
generalised passenger transport scenarios are provided.

A total of 22 specific types of passenger transport scenarios are
represented and are differentiated by transport type (i.e. bus, rail,
ferry, plane, taxi) and subtype (e.g. 'underground' *versus* 'local'
rail, 'domestic' *versus* 'short-haul' flights). In those cases where
individual passengers occupy dissimilar fractions of the vehicle (e.g.
'economy' *versus* 'first class' air travel; foot passengers *versus*
car-based passengers travelling by ferry), additional differentiation
into particular passenger classes is made in order to resolve the
disporportionate attribution of emissions on this basis.

Each passenger transport type is represented by six distinct emissions
factors which differentiate greenhouse gas emissions into the following
types:

  - *direct CO<sub>2</sub> emissions*: carbon dioxide emissions produced
    *during* travel, i.e. fuel combustion
  - *direct CH<sub>4</sub> emissions*: methane emissions produced *during*
    travel, i.e. fuel combustion
  - *direct N<sub>2</sub>O emissions*: nitrous oxide emissions produced
    *during* travel, i.e. fuel combustion
  - *total direct emissions*: all direct emissions, i.e. CO<sub>2</sub> +
    CH<sub>4</sub> + N<sub>2</sub>O
  - *indirect emissions*: emissions associated with stages in the fuel
    production chain such as raw material extraction and fuel delivery
  - *total* or '*life cycle*': the total of direct and indirect
    emissions

Each of these emissions factors are expressed in terms of kg
[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) per km.

### Similar methodologies

Other DEFRA transport methodologies available representing road vehicles
differentiated by
[size](DEFRA_road_transport_methodology_by_vehicle_size) and [market
segment](DEFRA_road_transport_methodology_by_vehicle_class), [heavy
goods vehicles](DEFRA_heavy_goods_vehicle_methodology) and the transport
of [freight](DEFRA_freight_transport_methodology) are also available.

-----

## Using this methodology

### Choosing a specific activity type

To use this methodology, the particular type of passenger transport
scenario which best represents the users emissions scenario must be
specified by making selections from each of the ***type***,
***subtype*** and ***passengerClass*** drill down choices.

### Activity data required

According to this methodology, greenhouse gas emissions are directly
proportionate to distance travelled which therefore must be specified -
using the ***distance*** profile item value - in order to make an
emissions calculation.

In addition, the number of passengers can be specified by setting the
appropriate value using the ***passengers*** profile item value (default
= 1).

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

This methodology represents *per passenger* emissions and therefore the
returned emissions should be considered - by default - to represent
those attributable to an single passenger (the default value for number
of passengers is 1). If multiple passnegers are specified - by setting
the ***passengers*** profile item value to a positive value other than 1
- the returned emissions quantity represents the emissions attributable
to the group of passengers.

-----

## Notes

### Great circle distance 'uplift' factors

Following IPCC advice, the DEFRA methodology stipulates that flight
distances which are defined as direct 'great circle' distances between
two locations should be inflated by 9% in order to account for the
typical indirect routing of actual flights and deviations related to
congestion. The calculations for air travel made herein assume that the
distance specifed is known to be the *actual* distance flown - rather
than the distance estimated on the basis of the Great Circle - and
therefore this adjustment factor is **not** applied. In order to make
calculations based on Great Circle estimates between two locations
(airports or specifed by latitiude/longitude) see the [Great Circle
route](Great_Circle_flight_methodology) methodology.

-----
