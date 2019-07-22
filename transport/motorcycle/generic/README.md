**This category is now deprecated. All of the functionality of this
category, with more update and comprehensive data, can be found under
the specific [DEFRA category for
motorcycles](Motorcycle_generic_Defra)**

The AMEE category /transport/motorcycle/generic contains data associated
with the greenhouse gas emissions of representative motorcycle types
sourced from UK government agency
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm).
Data and methodologies concerning motorcycle transport sourced
specifically from the latest World Resources Institute [Greenhouse Gas
Protocol (GHGP)](http://www.ghgprotocol.org/about-ghgp) documentation
are available in the appropriate subcategories.

Emissions within this category can be calculated on the basis of fuel
consumed or distance travelled. Specific fuel-based and distance-based
emissions factors are available, although users have the option of
deriving their own distance-based emissions factors based on the fuel
emissions factors and details of their vehicles fuel consumption.

## Selecting motorcycle type

To use this category, specify the vehicle fuel type ('petrol') and size
('small', 'medium', 'large') using the *fuel* and *size* drill options
respectively.

## Calculating by fuel consumed

To make calculations according to the quantity of fuel consumed, users
need only specify the fuel quantity using the ***fuelConsumed*** profile
item value. The returned value represents CO<sub>2</sub> emissions associated
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
consumption data. *Occupancy* can be specified (see below\]\]) but
defaults to a sensible value if not set.

### Setting the distance

To specify the distance travelled, set the **distance** profile item
value. If users wish to base their emissions calculation on 'typical'
motorcycle usage, they can alternatively set the
***useTypicalDistance*** profile item value to *'true'*, which will
return a calculation based on the UK average mileage of 3000 miles per
year (equating to 4827 km per year or 402 km per month).

### Using established emissions factors

To use established emissions factors (sourced from
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm),
users need only set the ***distance*** profile item value. In this case,
the returned amount represents CO<sub>2</sub> emissions associated with
*UK*-based motorcycle travel according to the distance specified.

### Deriving emissions factors from fuel consumption

Instead of using pre-established emissions factors, users can opt to
give a vehicle's fuel consumption. This can either be a user's own
estimate (self-calculated or perhaps obtained from their on-board
computer) or one provided by the manufacturer, and results in a more
accurate estimate of the kg CO<sub>2</sub> emitted. The specified fuel
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

## Occupancy

Users can set multiple occupancy for motorcycle travel, which 'shares'
the vehicular emissions across all passengers. To specify the number of
***occupants*** set the occupants profile item value. If no value is
set, the calculation will be made on the basis of a single occupant
(i.e. the driver) and representing emissions for the entire vehicle
journey.
