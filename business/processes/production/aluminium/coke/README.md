The AMEE category /business/processes/production/aluminium/coke provides
a methodology for calculating the emissions associated with coke
calcination. The methodology is sourced from *[The Aluminium Sector
Greenhouse Gas
Protocol](http://www.ghgprotocol.org/downloads/calcs/aluminium.pdf)*
published by the International Aluminium Institute in conjunction with
the WRI Greenhouse Gas Protocol. The methodology reflects that specified
in the Greenhouse Gas Protocol
[worksheet](http://www.ghgprotocol.org/calculation-tools/all-tools) for
the aluminium industry.

## Important: A note on input values

Greenhouse gas emissions in this category are calculated using a
*mass-balance* approach in which the carbon contained within the
calcining *products* is subtracted from the initial carbon within the
coke *feedstock*. It is therefore possible - by specifying unrealistic
input values in which the quantity of the products is greater than the
original source material - to generate a negative emissions quantity.

The Aluminium Sector Greenhouse Gas Protocol provides default values for
most of the components involved in this calculation. The use of default
values places a greater emphasis on methodological assumptions and
generalisations and reduces the accuracy of emissions calculations. The
default values provided in the IAI source documentation, when used in
combination, produce a negative greenhouse gas emission, suggesting that
some of the assumptions are incompatible with one another. The GHG
Protocol worksheet suggests an alternative value for one specific
component (the
mass-of-calcined-coke-produced-per-mass-of-green-coke-feedstock; 0.68 t
per t rather than 0.8 t per t), and it is this value which is provided
by default in AMEE. It must be stressed, however, that the use of
facility-specific data is vastly preferable for making accurate and
reliable emissions calculations.

## How to use this category

To use this category, simply create a profile item - there are no drill
choices.

The minimum requirement in order that a calculation be made is the
specification of the quantity of green coke feedstock used during
calcination. This should be specified using the ***massGreenCoke***
profile item value. The returned value represents CO<sub>2</sub> emissions
associated with the calcination of that quantity.

Users can also set values for other process attributes, using the
appropriate profile item values. If left unspecified, default values are
used in accordance with The Aluminium Sector Greenhouse Gas Protocol and
the GHG Protocol worksheet.

### Establishing the initial quantity of carbon

A number of parameters contribute to establishing the initial quantity
of carbon fed into the calcining process. The proportion by weight of
water, volatiles and sulphur within the green coke feedstock can be set
using the ***greenCokeMoistureContent***,
***greenCokeVolatilesContent*** and ***greenCokeSulphurContent***
profile item values respectively. These should be expressed as whole
percentages, i.e. between 0-100.

### Establishing the quantity of carbon retained

Users can also set several parameters which describe the quantity of
carbon which is retained in the calcination products.

To set the quantity of calcined coke produced, users have two options:
(1) the total quantity (i.e. mass) of calcined coke can be set using the
***massCalcinedCokeProduced*** profile item value; (2) the quantity of
calcined coke can be derived from the quantity of green coke feedstock
consumed by specifying the coke production *per unit of feedstock*,
using the ***massCalcinedCokeProducedPerMass*** profile item value. In
addition, users can specify the proportion by weight of sulphur in the
calcined coke, using the ***calcinedCokeSulphur*** profile item value.
This latter value should be expressed as a whole percentage, i.e.
between 0-100.

Users similarly have two options for defining the quantity of coke dust
retained. To specify an absolute quantity (i.e. mass) of coke dust, set
the ***massCokeDust*** profile item value. Alternatively, the quantity
of coke dust produced *per mass of feedstock* can be specified using the
***massCokeDustPerMass*** profile item value.

Finally, users can also specify the mass of under-calcined coke
collected by setting the ***underCalcinedCokeCollected*** profile item
value.
