**Passenger flight methodology. Calculates direct, indirect and life
cycle carbon dioxide (CO<sub>2</sub>), methane (CH<sub>4</sub>), nitrous oxide
(N<sub>2</sub>O) and CO<sub>2</sub>e emissions associated with passenger flights based
on the number of journeys and typical journey distances. Options include
domestic, short-haul and long-haul, together with a choice of passenger
classes.**

## Summary

This methodology represents greenhouse gas emissions associated with
**typical domestic, short- and long-haul passenger flights**. The data
and calculation methodology originates from the UK government department
[DEFRA](DEFRA_DECC), as published in their most recent [greenhouse gas
(GHG) conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the rate at which various types of passenger flight emit greenhouse
gases in relation to **distance** travelled. Emissions are calculated by
simply multiplying these rates by the **typical distances** of domestic,
short-haul and long-haul flights. The emissions associated with multiple
passengers and/or multiple journeys can be obtained by simply
multiplying by the appropriate number of passengers and journeys
respectively.

### Model data

A total of 9 passenger flight scenarios are represented, differentiated
by distance categorization (i.e. 'domestic', 'short-haul', 'long haul')
and passenger class (e.g. 'economy' *versus* 'first class'). Each
scenario is represented by an **illustrative distance** which represents
the typical flight distance for the associated distance categorization,
as well as the following *per passenger* emissions factors (expressed in
terms of kg [CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) per
km), referenced from the an [associated DEFRA
methodology](DEFRA_passenger_transport_methodology).

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

### Activity data required

Calculations are based on the assumed typical distance for the flight
type under consideration and the corresponding emissions factors for the
flight type and passenger class. If multiple **passengers** and/or
**journeys** are under consideration, these can be optionally
incorporated.

### Calculation and result

The following quantities are calculated on the basis of the typical
flight distance and associated emissions factors: **CO<sub>2</sub>**,
**CH<sub>4</sub>**, **N<sub>2</sub>O**, **total direct CO<sub>2</sub>e**, **indirect
CO<sub>2</sub>e**, **full life cycle CO<sub>2</sub>e**.

Users should note that **all quantities** (including the separated
CH<sub>4</sub> and N<sub>2</sub>O emissions) are expressed in terms of
**[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO<sub>2</sub> which would exert the same atmospheric warming
effect and the emissions quantity.

This methodology represents *per passenger* emissions and therefore the
returned emissions should be considered - by default - to represent
those attributable to single (or multiple, if specified) passengers.

-----

### Related methodologies

Other DEFRA methodologies for air travel are available, including those
based on [known flight distances](DEFRA_passenger_transport_methodology)
and [Great Circle distance](Great_Circle_flight_methodology) (calculated
on the basis of airport IATA codes or latitude and longitude
references).

DEFRA also provide other transport methodologies representing road
vehicles differentiated by
[size](DEFRA_road_transport_methodology_by_vehicle_size) and [market
segment](DEFRA_road_transport_methodology_by_vehicle_class), [heavy
goods vehicles](DEFRA_heavy_goods_vehicle_methodology) and the transport
of [freight](DEFRA_freight_transport_methodology) are also available.
