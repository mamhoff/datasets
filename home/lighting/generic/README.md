This methodology enables the calculation of greenhouse gas emissions
associated with the use of internal lighting. This category is based on
typical energy consumption *per year* of light bulbs, together with
emissions data associated with grid electricity production and
consumption. Currently, this category contains data applicable to the
United Kingdom.

To make a calculation, select a location and a type of light bulb
('standard' or 'low energy') using the ***location*** and ***type***
drill choice. Next, specify the number of light bulbs using the
***number*** parameter. The returned value represents annual CO<sub>2</sub>
emissions associated with this number of bulbs, based on typical annual
energy consumption per bulb and the emissions factors for electricity
generation and consumption in the specified location (i.e. the
*location* drill choice).

## Overriding the location

This category uses two location-dependent values for calculating
greenhouse gas emissions: (1) a value for 'typical' annual energy
consumption per light bulb; and (2) an emissions factor for grid
electricity generation to convert this energy consumption into a
quantity of greenhouse gas emissions. Both values correspond with the
location indicated by the *location* drill choice. In the case of the
location-specific grid electricity emissions factor, users can override
the default location and specify an alternative country, with AMEE
applying the appropriate emissions factor. It should be understood,
however, that this approach involves combining the 'typical' energy
consumption habits of one location with the electricity generation and
consumption properties of another.

To set a different location, set the country name or ISO code in the
***country*** parameter. In this case, AMEE will lookup the appropriate
grid electricity emissions factor from the [this
dataset](Electricity_by_country). If calculations are stored using
profiles, the country can be specified within the profile
[metadata](metadata). Users should note, however, that directly
specified ***country*** parameters override any set as profile metadata.
