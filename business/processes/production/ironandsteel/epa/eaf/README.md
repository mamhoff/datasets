The AMEE category at business/processes/production/ironandsteel/epa/eaf
provides a methodology for calculating greenhouse gas emissions
associated with Electron Arc Furnace (EAF) steel facilities. This
methodology accounts for the CO,,2,, emissions due to carbonate flux and
the use of carbon electrodes. Any emissions from coke and/or coal
consumption should be calculated using a methodology for [stationary
combustion](EPA_stationary_combustion). The methodology is sourced from
the guidelines published by the [Climate
Leaders](http://www.epa.gov/climateleaders/documents/resources/ironsteel.pdf)
industry-government initiative for reporting and reducing greenhouse gas
emissions.

To use this category, simply create a profile item - there are no drill
choices.

The calculation takes into account emissions from both the carbonate
flux and carbon electrodes used. Users must specify data relating to
each.

## Carbonate flux emissions

To set the quantity of the carbonate flux used, set the
***fluxQuantity*** profile item value. The calculation of emissions
assumes that the quantity specified represents 100% calcium carbonate
(limestone). The calculation uses a default value for CO,,2,, emissions
per unit of calcium carbonate, based on the known stoichiometric
relationship between the two.

Users can override these assumptions if appropriate, for a more accurate
calculation. The purity (i.e. percent carbonate) of the flux can be
specified using the ***fluxPurity*** profile item value. If a type of
carbonate other than calcium carbonate is used, users can directly
specify the weight fraction of carbon using the ***fluxCarbon*** profile
item value. In both cases, these should be expressed as decimal
fractions, i.e. between 0-1.

## Carbon electrode emissions

Users of this methodology have two options for calculating the emissions
due to carbon electrodes based on either: (1) the quantity and carbon
content of electrodes used; and (2) the quantity of steel produced.

To calculate using the electrode-based methodology, simply specify the
quantity and carbon content of electrodes using the
***electrodeQuantity*** and ***electrodeCarbon*** profile item values.
There is no default value provide for electrode carbon content in the
Climate Leaders methodology.

If these electrode data are not available, users can alternatively
calculate the emissions due to electrode consumption by using a generic
carbon factor based on the the quantity of steel produced. In this case,
users must specify the quantity of steel using the ***steelQuantity***
profile item value. The quantity of electrode carbon consumed is
calculated using a default factor according to Climate Leaders
methodology.

## Final calculation

Each of the aforementioned steps establish the absolute quantity of
carbon oxidised during the EAF steel manufacturing process. The final
step is to convert this quantity into a quantity of CO,,2,, emitted.
This is done by multiplying by the stoichiometric ratio of atomic C to
CO,,2,,.
