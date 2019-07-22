The term minibus refers to a vehicle designed to carry between 7 to 15
passengers. Small minibuses are sometimes called people carriers and
many minibuses are variants on models of small vans.

The AMEE category /transport/minibus/generic contains data associated
with the greenhouse gas emissions of minibus vehicles sourced from the
[VCA](http://www.vcacarfueldata.org.uk/downloads/).

Emissions calculations within this category use distance-based emissions
factors, although users have the option of using either established
generic emissions factors or deriving their own from details of their
vehicles fuel consumption together with generic fuel-based emissions
factors. (This category functions similarly to the [Generic car
transport](Generic_car_transport) category).

## Selecting vehicle type

To use this category, specify the vehicle fuel type and size using the
*fuel* and *size* drill options. The category contains the following
four representative vehicle types:

  - *diesel*, *mpv* - Multi-purpose diesel vehicle based on Ford Tourneo
    Connect
  - *petrol*, *mpv* - Multi-purpose petrol vehicle based on Vauxhal
    Zafira
  - *diesel*, *minibus* - Diesel minibus based on Ford Transit Connect
  - *petrol*, *minibus* - Petrol minibus based on Mercedes Benz Viano

## Calculating by fuel consumed

To make calculations according to the quantity of fuel consumed, users
need only specify the fuel quantity using the ***fuelConsumed*** profile
item value. The returned value represents CO,,2,, emissions associated
with the quantity specified. This is the most accurate method for
determining emissions since it makes no assumptions or generalisations
regarding the performance, context or efficiency of the vehicle. This
calculation method takes precedence over distance-based calculations
(see below) - i.e. this calculation will be performed whenever the
***fuelConsumed*** profile item value is specified.

## Calculating by distance

To calculate according to distance, users need to specify at least a
*distance* value, and select between calculations based on either
established, generic emissions factors or those derived from fuel
consumption data. *Occupancy* can be specified (see below) but defaults
to a sensible value if not set.

### Using established emissions factors

To use established emissions factors (sourced from
[VCA](http://www.vcacarfueldata.org.uk/downloads/), users need only set
the ***distance*** profile item value (although several further
specifications *may* be made in order to establish more accurate
results). If the ***distance*** profile item value alone is set, the
returned amount represents CO,,2,, emissions associated with minibus
travel according to the distance specified.

### Deriving emissions factors from fuel consumption

Instead of using pre-established emissions factors, users can opt to
give a vehicle's fuel consumption. This can either be a user's own
estimate (self-calculated or perhaps obtained from their on-board
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
profile item values. If the former (i.e. manufacturer) is specified,
AMEE will inflate the value by 15% to account for real world usage.
Next, specify the distance travelled using the ***distance*** profile
item value.

### Emissions factor modifiers

Emissions factors can be further tweaked to provide more accurate
calculations by setting several other profile item values which
represent factors affecting vehicle fuel consumption. These can be
accessed as follows:

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

Users can set multiple occupancy for large goods vehicle travel, which
'shares' the vehicular emissions across all passengers. To specify the
number of occupants set the ***occupants*** profile item value. If no
value is set, the calculation will be made on the basis of a single
occupant (i.e. the driver) and simply represents emissions for the
entire vehicle journey(s).
