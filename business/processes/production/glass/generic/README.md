The AMEE category /business/processes/production/glass/generic contains
data and a methodology for calculating the greenhouse gas emissions
associated with the production of generic, representative type of glass,
sourced from the IPCC [Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/).

Only glass manufactured from primary raw materials is considered as a
net contributor to atmospheric CO<sub>2</sub>, and therefore there is an option
for specifying the proportion of the furnace charge represented by
recycled scrap glass (termed 'cullet'). AMEE assumes a typical value for
the 'cullet ratio' unless otherwise specified. In the case that no
cullet is used, then the cullet ratio should be specifically set to 0 in
order to override the default value.

To use this category, select the type of glass using the *type* drill
option, then specify the quantity of glass produced using the
***massProduced*** profile item value. The returned value represents
CO<sub>2</sub> emissions associated with this production - discounting a
proportion typically represented by cullet (this typical value differs
between glass types). To specify a different cullet ratio, enter the
value, as a percentage between 1-100, using the ***culletRatio***
profile item value.

The data item represented by the 'unknown' drill option is an average
value to be used when the glass type is not known. The assumed cullet
ratio for this data item is 0.
