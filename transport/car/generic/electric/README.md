Calculations for electric cars have their kg CO<sub>2</sub> calculated using
generic energy consumption rates together with the grid
electricity-generation emission factor for the country specified
(defaulting to the UK if not specified). The electricity emission
factors for all countries and regions are itemised in the
[/home/energy/electricity](Electricity_by_country) dataset.

To use this methodology, select the vehicle size using the *size* drill
option. Next, specify either the electricity consumed by setting the
***energyConsumption*** parameter or the distance travelled by setting
the ***distance*** parameter. If a distance is specified, it is
converted into a corresponding quantity of electricity by reference to a
generic distance-based energy consumption factor (e.g. *kWh per km*)
which is provided for each of the vehicle (i.e. drill) options. In
either case, the quantity of electricity consumed is then converted into
a quantity of CO<sub>2</sub> emitted by multiplying by an emissions factor
associated with the generation of grid electricity.

The returned value represents greenhouse gas emissions associated with
electric car travel according to the energy or distance specified.

## Setting the country

By default, the emissions factor for UK grid electricity generation is
used to convert vehicle energy consumption into a quantity of greenhouse
gas emissions. However, users can specify an alternative country by
setting the country name or ISO code in the ***country*** parameter. In
this case, AMEE will lookup the appropriate grid electricity emissions
factor from the [/home/energy/electricity](Electricity_by_country)
dataset. If calculations are stored using profiles, the country can be
specified within the profile [metadata](metadata). Users should note,
however, that directly specified ***country*** parameters override any
set as profile metadata. This is useful, for example, for recording car
journey's outside the user's own country.

## Occupancy

Users can also set multiple occupancy for car travel, which 'shares' the
vehicular emissions across all passengers. To specify the number of
occupants set the ***occupants*** parameter. If no value is set, the
calculation will be made on the basis of a single occupant (i.e. the
driver).
