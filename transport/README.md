The AMEE category /transport is a primary parent category containing
data and methodologies for calculating greenhouse gas emissions
associated with transport. The data within this category is taken from
several sources including [The World Resources Institute Greenhouse Gas
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools), the
UK Government agency
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
and the [EMEP/CORINAIR Emission Inventory Guidebook
- 2007](http://www.eea.europa.eu/publications/EMEPCORINAIR5).

The /transport category is organised primarily according to transport
type (i.e. vehicle type) and the nature of the emissions factors which
form the basis of calculations which are described below.

## 'Generic' versus 'specific' datasets

Within most categories a distinction is made on the basis of data and
methodologies which provide **generic** emissions calculations and those
which provide calculations relating to more **specific** scenarios. The
term 'generic' here refers to data and associated calculation methods
which are based on generalised, representative types of transport, for
example 'small, diesel car', 'local train', or 'long-haul flight'.

'Specific' datasets use actual fuel consumption and greenhouse gas
emissions information for particular models of vehicle. Examples might
be emissions calculations for car travel in a 3-door, 1.4L Volkswagen
Golf, or a flight in an Airbus A318. These datasets provide more
accurate emissions estimates for a given transport scenario but require
more detailed information from the user.

'Generic' and 'specific' data and methodologies are typically organised
into distinct subcategories within each respective AMEE transport
category. Generic subcategories are present in nearly all of the main
transport categories, with alternative datasets from differing sources
available in some cases. Specific datasets are currently available in
the [transport/car/specific](Specific_car_transport) category
(containing 9700 UK and 1151 US car models), and the
[transport/plane/specific](Specific_plane_transport) category
(containing over 140 jet, turboprop and military aircraft types).

## Differences in emissions factor type

A further distinction between datasets contained within the transport
category is the precise form of the emissions factors used. The
following types of emissions factor are utilised throughout the
transport categories, with each providing a slightly different type of
emissions estimate and requiring particular inputs from the user:

### by fuel

The most direct way to measure transport-related greenhouse gas
emissions, is to use the quantity of fuel consumed, if it is known. As
such, AMEE contains transport-associated greenhouse gas emissions
factors which relate emissions with specific quantities of fuel, e.g.
*kg CO2 per litre*. Such data can be found for numerous types of fuel in
the category [/transport/by fuel](Transport_fuel), and requires the user
to simply specify a quantity of fuel consumed in order to obtain an
emissions estimate.

### by distance only

The most common type of transport-related greenhouse gas emissions
factor specifies a quantity of emissions in terms of a distance
travelled, for example, *kg CO2 per km*. Such emissions factors are
dependent, to a greater or lesser extent, on the fuel consumption
properties of vehicles and implicitly represent emissions on a *per
vehicle* basis (which can be contrasted with *per passenger* emissions
factors, described below). In these cases the user is simply required to
specify a distance travelled (as well as the transport type) in order to
obtain an emissions estimate. Such emissions factors are used in several
AMEE transport categories, particularly those which feature private
vehicles (e.g. car, motorcycle, van).

### by distance, by passenger

In many cases, greenhouse gas emissions data are specified on a *per
passenger* basis, e.g. *kg CO2 per km per passenger*. This type of
factor is typically provided for public/passenger modes of transport and
usually incorporate assumptions regarding the typical occupancy of the
vehicle, allowing the total vehicle emissions to be 'shared' amongst
passengers. Such emissions factors are used in several AMEE transport
categories, particularly those featuring public modes of transport (e.g.
bus, plane, ship, train), and require the user to specify a distance
travelled and the number of passengers being accounted for (although the
latter usually defaults to 1 if not specified).

### by distance, by mass

Where freight is transported, associated greenhouse gas emissions are
related to both the distance travelled and the mass of freight involved.
As such, emissions factors for freighting take the form of a quantity of
greenhouse gases emitted *per distance* *per mass*, e.g. *kg CO2 per km
per tonne*. Such freighting-related methodologies can be found within
the AMEE transport category under several of the vehicular subcategories
(e.g. large goods vehicle, plane, ship, train) in discrete /freight
subcategories (e.g.
[transport/plane/generic/freight](Plane_freighting)). In these cases,
the user is required to provide both distance and mass quantities in
order to calculate their greenhouse gas emissions.

## Additional functionality

It is the aim of AMEE to provide the most useful and flexible emissions
calculations for users. With this in mind, several categories within the
AMEE transport category offer functionality which mimics the choices
offered by different emissions factor types. For example, in those
categories which use *per vehicle* emissions factors (e.g. *car*, *large
goods vehicles*, *motorcycle*, *van*, and one subcategory of the *bus*
category) users may specify the occupancy of the vehicle so that the
total vehicular emissions may be converted into *per passenger*
emissions if desired. (Note that it is usually not possible to do the
converse - i.e. calculate vehicular emissions from original *per
passenger* emissions factors - as the assumed occupancies on which the
per passenger emissions factors are based are not available in most
sources).

Similarly, categories which feature 'private' vehicles (*car*, *large
goods vehicles*, *motorcycle*, *van*) also include the facility to
specify vehicle fuel consumption, if known. In these cases, the vehicle
fuel consumption data is combined with data on the carbon intensity of
the respective fuel to derive a more accurate distance-based emissions
factor.

To learn more about the data, calculation methodologies and functional
options available within the various AMEE transport categories, consult
the appropriate documentation pages.
