The AMEE category business/processes/production/lead/ is for industry
professionals to calculate and report on their their greenhouse gas
emissions associated with the primary production of rough lead bullion
from lead concentrates. This methodology represents the *Tier 1*
(default values) and *Tier 2* (facility- or country-specific values)
approaches described by the IPCC Guidelines for National Greenhouse Gas
Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

AMEE allows the user to calculate emissions from lead produced by Direct
Smelting (DS), from the Imperial Smelting Furnace (ISF) and from
secondary materials. Each of these exists as a drill-down option in this
AMEE category, so can be calculated individually. To use this category
use the ***leadProductionBySource*** drill-down to select the lead
source or furnace type from the following options:

1.  default
2.  imperial smelt furnace (ISF) production
3.  direct smelting (DS) production
4.  treatment of secondary raw materials

There is the option of using a default emission factor, using the
*default* drill-down option. This default assumes 80% lead produced from
ISF and 20% lead produced from DS.

The only required profile item value is the quantity of lead produced,
***productQuantity***. The emission factor for each source and furnace
type has a default value provided by the AMEE engine, but this can be
over-ridden, using the ***massCO2PerMassProduct*** profile item value,
by the user if more precise, site or country-specific values are known.
Over-riding the default values represents the *Tier 2* approach
described by the IPCC Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)) and
should be used where users have facility-specific data.
