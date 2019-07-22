The AMEE category /transport/car/generic contains data associated with
the greenhouse gas emissions of representative car types sourced from
the [EPA](http://www.epa.gov/), the UK government agency
[DEFRA](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting),
and the [VCA](http://www.vca.gov.uk/). This category provides CO,,2,,
emissions only and should be considered to represent a useful first
point of entry to car-related emissions. If users are interested in more
specific and comprehensive datasets (which include CO,,2,, as well as
CH,,4,, and N,,2,,O emissions) they should see the following categories:

  - [DEFRA](Generic_car_transport_Defra)
  - [GHG Protocol](Generic_car_transport_GHGP)
  - [IPCC](Generic_car_transport_IPCC)

Emissions within this category can be calculated on the basis of fuel
consumed or distance travelled. Specific fuel-based and distance-based
emissions factors are available, although users have the option of
deriving their own distance-based emissions factors based on the fuel
emissions factors and details of their vehicles fuel consumption. If
using established emissions factors, alternatives are available for the
UK (sourced from UK government agency
[DEFRA](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting))
and US/Canada (sourced from the [EPA](http://www.epa.gov/)), reflecting
the fact that US car models generally have larger engine sizes. The data
for petrol hybrids comes from the [VCA](http://www.vca.gov.uk/). Medium
petrol hybrid cars are based on the average over the Toyota Prius and
Honda IMA and large petrol hybrid cars are based on the average over
Lexus GS450h and RX400h. The VCA figures are increased by 15% to account
for real world usage.

## Selecting car type

To use this category, specify the vehicle fuel type and size via drill
down. The *fuel* drill option contains the following options:

  - petrol
  - diesel
  - petrol-hybrid
  - lpg
  - cng
  - 'average' (represents the average emissions of all types)

Vehicle size is specified using the *size* drill option, and corresponds
with the following engine sizes:

**petrol car**

  - small: \< 1.4 l
  - medium: 1.4 - 2.0 l
  - large: \> 2.0 l

**diesel car**

  - small: \< 1.7 l
  - medium: 1.7 - 2.0 l
  - large: \> 2.0 l

In the case that US/Canada emissions factors are chosen, the above
guidelines for size categories should be increased so that 2.5 litre
engines are considered small/medium and 3.5 litre engines medium/large.
The data was obtained from the 2008 Fuel Economy Guide published by the
US Dept of Energy, available online at
[www.fueleconomy.gov](http://www.fueleconomy.gov).

## Calculating by fuel consumed

To make calculations according to the quantity of fuel consumed, users
need only specify the fuel quantity using the ***fuelConsumed***
parameter. The returned value represents CO,,2,, emissions associated
with the quantity specified. This is the most accurate method for
determining emissions since it makes no assumptions or generalisations
regarding the performance, context or efficiency of the vehicle. This
calculation method takes precedence over distance-based calculations
(see below) - i.e. this calculation will be performed whenever the
***fuelConsumed*** parameter is specified.

## Calculating by distance

To calculate according to distance, users need to specify at least a
*distance* value, and select between calculations based on either
established, generic emissions factors or those derived from fuel
consumption data. *Occupancy* can be specified (see below\]) but
defaults to a sensible value if not set.

### Setting the distance

To specify the distance travelled, set the ***distance*** parameter. If
users wish to base their emissions calculation on 'typical' car usage,
they can alternatively set the ***useTypicalDistance*** parameter to
'*true*', which will return a calculation based on the UK average
mileage of 9000 miles per year (equating to 14420 km per year or 1202 km
per month).

### Using established emissions factors

To use established emissions factors (sourced from the
[EPA](http://www.epa.gov/),
[DEFRA](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting),
and the [VCA](http://www.vca.gov.uk/)), users need only set the
***distance*** parameter (although several further specifications *may*
be made in order to establish more accurate results). If the
***distance*** parameter alone is set, the returned amount represents
CO,,2,, emissions associated with *UK-based* car travel according to the
distance specified.

### Setting the country

Emissions factors relating to both the UK and US/Canada are available,
however, and users can switch between each by setting the ***country***
parameter to any of the following valid values:

  - 'United Kingdom'
  - 'UK'
  - 'United States'
  - 'US'
  - 'Canada'
  - 'CA'

As described above, if no ***country*** parameter is specified, the UK
emissions factors are used by default. If calculations are stored using
profiles, the country can be specified within the profile
[metadata](metadata). Users should note, however, that directly
specified ***country*** parameters override any set as profile metadata.
This is useful, for example, for recording car journey's outside the
user's own country.

### Deriving emissions factors from fuel consumption

Instead of using pre-established emissions factors, users can opt to
give a vehicle's fuel consumption. This can either be a user's own
estimate (self-calculated or perhaps obtained from their in-car
computer) or one provided by the manufacturer, and results in a more
accurate estimate of the kg CO,,2,, emitted. The specified fuel
consumption value is used in conjunction with data on the carbon
intensity of the respective fuel type taken from the AMEE category
[/home/energy/quantity](Energy_by_Quantity) to obtain a distance-based
emissions factor according to:

-----

Factor,,(mass CO2 per distance),, = fuel carbon intensity,,(mass CO2 per
volume),, / fuel consumption,,(volume per distance),,

-----

To specify either a manufacturer or self-calculated fuel consumption
rate, set either the ***fuelConsumption*** or ***fuelConsumptionOwn***
parameter. If the former (i.e. manufacturer) is specified, AMEE will
inflate the value by 15% to account for real world usage.

### Emissions factor modifiers

Emissions factors can be further tweaked to provide more accurate
calculations by setting several other parameter which represent factors
affecting vehicle fuel consumption. These can be accessed as follows:

  - set ***tyresUnderinflated*** = '*true*' to specify under-inflated
    tyres (increases emissions by 1%)
  - set ***airconFull*** = '*true*' to specify regular use of air
    conditioning (increases emissions by 20%)
  - set ***airconTypical*** = '*false*' to 'switch off' the
    typical-air-conditioning-usage assumption (decreases emissions by
    5%)
  - set ***ecoDriving*** = '*true*' to specify fuel saving driving
    practices (e.g. avoiding excessive speed, harsh acceleration and
    braking; decreases emissions by 10%)
  - set ***regularlyServiced*** = '*false*' to 'switch off' the
    regular-vehicle-service assumption (increases emissions by 4%)

**Note:** these are *irrelevant* and therefore ignored if the user has
supplied their "own" estimate of fuel consumption, and only apply if
using established, generic emissions factors or an emissions factor
derived from *manufacturer* fuel consumption data.

## Occupancy

Users can set multiple occupancy for car travel, which 'shares' the
vehicular emissions across all passengers. To specify the number of
occupants set the ***occupants*** parameter. If no value is set, the
calculation will be made on the basis of a single occupant (i.e. the
driver) and representing emissions for the entire vehicle journey.
