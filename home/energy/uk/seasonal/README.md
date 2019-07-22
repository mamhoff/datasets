## Note

It most cases it is preferable to create a profile item in
[/home/energy/quantity](Energy_by_Quantity) and set its season value
rather than a creating a profile item in this category.

## Explanation

Profile items in this category convert a quarterly value for a season to
a seasonally adjusted annual equivalent. For example, the algorithm
multiplies a gas value for the summer quarter by a factor of 8.33 to
obtain the annual figure. Simply multiplying a summer quarterly value by
4 would lead to an underestimate of the annual usage because energy
consumption is lowest in the summer.

Note that no units for the fuel type is assumed. This means you can give
the profile item a quarterly figure in any units, e.g. usage in litres
or kWh or currency or even a quarterly CO,,2,, figure, and it will
return a monthly value in the same units.

## Example

If you use 1000 kWh of gas during autumn and want to know an equivalent
annual total which includes seasonal weighting, you would create an item
name=autumn\&energy=gas, with usagePerQuarter=1000. The return value
will be 8196 meaning that the annual equivalent is 8196 kWh.

## Seasons and months

The mapping of months to seasons in this category reflects the
assumptions made in the source data, but is not intuitive. As such, this
category's authority is set to recommended. An alternative assignment
(with identical data) is available in this
[category](UK_Seasonal_Alternative).
