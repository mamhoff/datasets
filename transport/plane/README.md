The AMEE category /transport/plane contains data and methodologies for
calculating greenhouse gas emissions associated with aviation. The
category is primarily organised into categories representing generic,
representative aviation scenarios ([Generic plane
transport](Plane_Generic_Defra)) and those reflecting specific aircraft
types ([Specific plane transport](Specific_plane_transport)). The
generic subcategory contains several types of resources including *per
passenger* emissions calculations, air-transported *freight*, and a
geographic dataset of 3000 world airports from which flight distances
are calculated. A brief summary of each subcategory appears below.

## Specific plane transport

The [Specific plane transport](Specific_plane_transport) category
contains data on the greenhouse gas emissions associated with over 140
specific jet, turboprop and military aircraft types. The data and
calculation methodology are sourced from the [EMEP/CORINAIR Emission
Inventory Guidebook
(2007)](http://www.eea.europa.eu/publications/EMEPCORINAIR5/page017.html)
and provides a calculation of CO<sub>2</sub> emissions on a *per aircraft*
basis, dependent on flight distance.

Users may specify flight **distances** in several ways (including
nominating departure and destination airports), may set the duration
time for discrete phases of the **landing-take off (LTO) cycle**, and
also incorporate a **radiative forcing** weighting to emissions
calculations if required.

## Generic plane transport by DEFRA

The [DEFRA plane](Plane_Generic_Defra) category contains emissions data
for flying on a *per passenger* basis, sourced from the UK Government's
[DEFRA/DECC](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
agency. The methodology uses distance-based emissions factors (i.e. *kg
CO2 per km per passenger*), with users able to specify flight
**distances** in several ways, including nominating departure and
destination airports or by using 'typical' *domestic*, *short-* and
*long-haul* distances of 463 km, 1108 km, 6482 km respectively.

In addition, distinct CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O emissions factors for
each **passenger class** (economy, economy plus, business and first) are
provided, and users may incorporate a **radiative forcing** weighting to
emissions calculations if required.

## User-defined plane emissions

The AMEE [User defined plane emissions](User_defined_plane_emissions)
category allows users to specify their own **landing-take-off cycle**
and **cruise phase** emissions factors for air transport, following a
methodology proposed by the GHG Protocol. Default emissions factors are
included reflecting those derived by the GHG Protocol from [earlier
DEFRA
data](http://www.defra.gov.uk/environment/business/reporting/pdf/envrpgas-annexes.pdf).
Users must specify the **distance** travelled and the number of
**passengers** under consideration, which results in a *per passenger*
emissions calculation according to the data provided.

## Plane freighting

The AMEE [Plane freighting](Plane_freighting) category contains data on
the greenhouse gas emissions associated with plane transported freight,
sourced from
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/pdf/ghg-cf-guidelines2008.pdf)
and the [WRI Greenhouse Gas
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools). These
methodologies use *per distance per mass* emissions factors, requiring
the user to provide **distance** and **mass** values for the transported
freight.

## Global airports

This category [Global airports](Global_airports) includes data on the
names, locations (latitude and longitude, country) and IATA codes of
3000 world airports. This data provides a reference for calculating
flight distances for the [Specific plane
transport](Specific_plane_transport) and [Generic plane
transport](Generic_plane_transport) categories. Airports are searchable
by either name or IATA code. This category also contains a smaller
subset of 500 world airports - with major cities and travel destinations
represented.
