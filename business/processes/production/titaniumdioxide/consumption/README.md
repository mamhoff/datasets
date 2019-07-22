The AMEE category at
business/processes/production/titaniumdioxide/consumption provides a
methodology for calculating greenhouse gas emissions associated with the
production of titanium dioxide. The methodology is based on a
mass-balance approach taking into consideration the carbon content of
process feedstocks. This methodology is sourced from the IPCC Guidelines
for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)) and
represents the *Tier 2* approach.

To use this category, simply create a profile item - there are no drill
choices.

Next, specify the quantity of feedstock consumed using the
***massFeedstock*** profile item value and the carbon content of the
feedstock using the ***feedstockCarbon*** profile item value. Users can
additionally specify the fraction oxidation achieved for the feedstock
is appropriate using the ***feedstockOxidation*** profile item value
(decimal fraction, i.e. 0-1), although this defaults to 1 (i.e. 100%
oxidation) if left unspecified.

The returned value represents CO,,2,, emissions associated with the
consumption and properties of feedstock specified.
