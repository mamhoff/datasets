The AMEE category at /transport/plane/specific/military/ipcc contains
data on fuel consumption on CO,,2,, emissions for military aircraft,
sourced from the IPCC [Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/).

The aircraft types are organised by *code* although the *description*
data item value also provides a description of each aircraft in terms of
size, number of engines, and its military use.

To use this category select the aircraft *type* and *subtype* using
drill downs and set the flying duration by using the
***flightDuration*** profile item value. The returned value represents
CO,,2,, emissions for the total flight time.

## Radiative Forcing Index

Users can elect to incorporate the RFI by setting the ***useRFI***
profile item value to 'true', and entering a value for RFI in the
***radiativeForcingIndex*** profile item value. If no value is entered
in the ***radiativeForcingIndex*** profile item value, a default factor
of 1.9 will be applied.

For more information on RFI, see the [here](Radiative_Forcing_Index).
