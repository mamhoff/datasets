The AMEE category business/processes/production/lime/production/iai
provides a methodology for calculating the emissions associated with
lime production. The methodology is sourced from *[The Aluminium Sector
Greenhouse Gas
Protocol](http://www.ghgprotocol.org/downloads/calcs/aluminium.pdf)*
published by the International Aluminium Institute in conjunction with
the WRI Greenhouse Gas Protocol.

The methodology is based on the quantity and purity of 'quick' (calcium
oxide; CaO) and 'slaked' (calcium hydroxide; Ca(OH)<sub>2</sub>) lime produced.
The CO<sub>2</sub> emissions associated with this lime production is based on
the known ratio in which lime and CO<sub>2</sub> are produced during carbonate
calcination.

To use this category, simply create a data item - there are no drill
choices.

Next, specify the quantities of quick and slaked lime produced using the
***massQuickLimePerTime*** and ***massSlakedLimePerTime*** profile item
values. The value returned represents CO<sub>2</sub> emissions associated with
those quantities.

By default, AMEE assumes purities of 95% for each type of lime
production. Users can override these values and set their own purities
if known, by using the ***purityQuickLime*** and ***puritySlakedLime***
profile item values respectively. These should be expressed as decimal
fractions (i.e. 0-1).
