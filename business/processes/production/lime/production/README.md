This category provides data and a methodology for calculating the
greenhouse gas emissions from lime manufacturing using *production*
data. Emissions are disaggregated on the bases of the types of lime
produced and corrected for the production of any hydrated lime and any
uncalcined lime kiln dust (LKD) that is not recycled to the kiln.

This methodology and associated data is sourced from the WRI Greenhouse
Gas protocol
[worksheets](http://www.ghgprotocol.org/calculation-tools/all-tools) but
ultimately follows the IPCC 2006 [Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/index.html).
This cateogry represents the IPCC's *Tier 2* approach.

Use the drill-down ***limeType*** to select the type of lime being used
and enter the required profile item values listed below.

## Algorithm

LKD correction factor = 1+ (lkdWeight / limeQuantity) \* fracLkd \*
calcinationLKD

CO<sub>2</sub> emissions = caoMgoRatio \* stoicRatio \* limeQuantity \* (1 -
(hydLime \* waterLLime)) \* LKD correction factor
