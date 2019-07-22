This category provides an 'alternative method' for calculating
aluminium-related CO<sub>2</sub> emissions, based on the carbon content of
materials consumed. This methodology is sourced from the WRI Greenhouse
Gas protocol
[worksheets](http://www.ghgprotocol.org/calculation-tools/all-tools) but
ultimately derives from the *[Aluminum Sector Greenhouse Gas
Protocol](http://www.world-aluminium.org/cache/fl0000127.pdf)* published
by the International Aluminium Institute.

To use this category, create a profile item (there are no drill choices)
and specify the required profile items (shown below). The returned value
represents CO<sub>2</sub> emissions related to the process data provided.

## Algorithm

The carbon content of each material is calculated by multiplying the
quantity of material by the fraction of carbon which is represented by
carbon. These quantities are then added together along with the carbon
content of the purchased anodes. The carbon content of sold anodes and
the quantity of carbon by-products and waste are then subtracted to give
the total carbon content of the whole process. The factor 44/12 (the
mass ration of carbon and CO<sub>2</sub>) is then used to convert this quantity
of carbon into a quantity for CO<sub>2</sub> emitted.
