This methodology represents greenhouse gas emissions associated with the
air transport according to **Great Circle distances** between two
locations. The data and calculation methodology for plane-associated
greenhouse gas emissions originates from the UK government department
DEFRA, as published in their most recent [greenhouse gas (GHG)
conversion
factors](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
documentation. 'Great Circle' distances are calculated using the
[haversine formula](http://en.wikipedia.org/wiki/Haversine_formula).
Emissions relating to both **passenger** and **freight** transport are
available herein.

-----

## The methodology

### Emissions model

Emissions are calculated based on the DEFRA methodologies for
[passenger](DEFRA_passenger_transport_methodology) and
[freight](DEFRA_freight_transport_methodology) transport. These
methodologies contain emissions factors which describe the rate at which
greenhouse gas emissions are produced in relation to **distance**
travelled and - in the case of freight - the **quantity** of goods
freighted.

Emissions - expressed in terms of mass (e.g. *kg*) - are calculated by
multiplying these rates (e.g. *mass emitted per distance*; e.g. *kg
CO<sub>2</sub> per km*) by the great circle distance between two locations (e.g
*km*) travelled (as well as the quantity freighted, in the case of
freight).

### Great Circle distance calculations

Flight distances are calculated as the 'Great Circle' distance between
two locations, which represents the shortest distance between two points
on a sphere (an approximation of the Earth) and is derived from
departure and destination locations using the [haversine
formula](http://en.wikipedia.org/wiki/Haversine_formula). Departure and
destination locations can be defined on the basis of latitude and
longitude or the IATA codes representing the respective departure and
destination airports, with distances between airports are calculated by
reference to longitude and latitude data for a [comprehensive range of
global airports](All_airports_by_code).

### Model data

The DEFRA methodology provides passenger- and freight-based emissions
factors representing typical 'domestic', 'short haul' and 'long haul'
flights. The selection of the appropriate flight type is determined -
following DEFRA methodology - by the relationship between departure and
destination locations:

  - *domestic* flights are those which originate and terminate within
    the UK
  - *short-haul* flights are international flights (originating and
    terminating in distinct countries) extending no further than 3700 km
  - *long-haul* flights are international flights extending beyond 3700
    km

Each case (passenger, freight; domestic, short- or long-haul) is
represented in the DEFRA methodology by six distinct emissions factors
which differentiate greenhouse gas emissions into the following types:

  - *direct CO<sub>2</sub> emissions*: carbon dioxide emissions produced
    *during* flight, i.e. fuel combustion
  - *direct CH<sub>4</sub> emissions*: methane emissions produced *during*
    flight, i.e. fuel combustion
  - *direct N<sub>2</sub>O emissions*: nitrous oxide emissions produced
    *during* flight, i.e. fuel combustion
  - *total direct emissions*: all direct emissions, i.e. CO<sub>2</sub> +
    CH<sub>4</sub> + N<sub>2</sub>O
  - *indirect emissions*: emissions associated with stages in the fuel
    production chain such as raw material extraction and fuel delivery
  - *total* or '*life cycle*': the total of direct and indirect
    emissions

Each of these emissions factors are expressed in terms of kg
[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials) per tonne km.

### Similar methodologies

Alternative DEFRA methodologies are available representing
[passenger](DEFRA_passenger_transport_methodology) and
[freight](DEFRA_freight_transport_methodology) transport in which
emissions are calculated on the basis of absolute specified distances
rather than departure and destination locations.

-----

## Using this methodology

### Choosing a specific activity type

There are no drill down choices associated with this category.

### Activity data required

The activity data which is required varies depending on whether
passenger-based or freight-based emissions are required.

In **all cases** departure and destination locations must be specified
using either of the following combinations of profile item values:

  - ***lat1***, ***long1***, ***lat2***, ***long2*** (i.e. a pair of
    latitude and longitude coordinates)
  - ***IATACode1***, ***IATACode2*** (i.e. a pair of airport IATA codes)

Longitude must be in the range -180 to 180 with negative numbers
representing eastern longitudes. Latitudes must be in the range -90 to
90 with negative numbers representing southern latitudes.

**For freight-based emissions only**: If requiring an emissions
calculation associated with freight, the quantity (mass) of goods
freighted must be specified using the ***mass*** profile item value. If
multiple instances of the same quantity of freighting are under
consideration these can be specified using the ***journeys*** profile
item value.

**For passenger-based emissions**: If passenger-based emissions are
required a number of options can be specified in order to make the most
accurate calculation. Multiple journeys and passengers can be specified
by setting the ***journeys*** and ***passengers*** profile item values
respecitively. Return flights can be specified by setting the
***isReturn*** profile item value to 'true'. The specific passenger
class can also be specified using the ***passengerClass*** profile item
value with one of the following valid values:

  - 'average': use if passenger class is *unknown* (default)
  - 'economy': for *economy class*
  - 'premium economy': for *premium economy* class or '*economy plus*'
  - 'business': for *business class*
  - 'first': for *first class*

Following DEFRA methodology, all passenger class specifications revert
to 'average' for domestic flights, while 'premium economy' reverts to
'economy' and 'first' reverts to 'business' for short-haul flights.

In addition the effects of radiative forcing can be incorporated by
setting the ***useRFI*** profile item value to 'true' (default value is
'false'). The value of the the radiative forcing index can be set using
the ***radiativeForcingIndex*** profile item value, but defaults to 1.9
otherwise. For an explanation of the radiative forcing index (RFI) see
[here](Radiative_Forcing_Index).

Users can choose to specify their activity data in a comprehensive range
of appropriate [units](Units).

### Calculation and result

Great Circle distances are calcuated using the [haversine
formula](http://en.wikipedia.org/wiki/Haversine_formula) and inflated by
9% to account for indirecting routing and congestion - as specified by
DEFRA methodology. Emissions calculations are made based on the
calculated Great Circle distance and the appropriate emissions factors
for either [passenger](DEFRA_passenger_transport_methodology) or
[freight](DEFRA_freight_transport_methodology). Passenger flights are
assumed by default; freighting is indicated by the specification of a
***mass*** quantity.

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

-----
