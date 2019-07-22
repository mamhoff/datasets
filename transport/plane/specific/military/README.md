The AMEE category transport/plane/specific/military contains data on the
fuel consumption and CO<sub>2</sub> emissions of several aircraft types
associated with the military, sourced from the [EMEP/CORINAIR Emission
Inventory Guidebook
(2007)](http://www.eea.europa.eu/publications/EMEPCORINAIR5/page017.html).

To use this category select the aircraft *type* and *subtype* using
drill downs and set the flying duration by using the
***flightDuration*** profile item value. The returned value represents
CO<sub>2</sub> emissions for the total flight time.

The specific aircraft on which each profile item is based is described
in the *representativeAircraft* data item.

## Radiative Forcing Index

Users can elect to incorporate the effects of radiative forcing by
setting the ***useRFI*** profile item value to "*true*", and entering a
value for RFI in the ***radiativeForcingIndex*** profile item value. If
no value is entered in the ***radiativeForcingIndex*** profile item
value, a default factor of 1.9 will be applied. For more information on
radiative forcing, see the [here](Radiative_Forcing_Index).
