The AMEE category at
business/processes/production/lime/production/generic provides a
methodology for calculating greenhouse gas emissions associated with
lime production. The methodology is based upon a generic emissions
factor for CO,,2,, emissions per quantity of lime produced, which
assumes that lime is produced in the following proportion:

  - 85% high calcium lime
  - 15% dolomitic lime

The emissions factor is derived from this combination, together with the
known stoichiometric relationships between CO,,2,, emissions and the
production of these types of lime.

This methodology represents the *Tier 1* approach described by the IPCC
Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)). If
users have more specific data on the types and and properties of lime
produced, they may want to use the *[Tier 2](Lime_production_data)*
methodology.

To use this category, simply create a profile item - there are no drill
choices.

Next, specify the quantity of lime produced using the ***limeQuantity***
profile item value. The returned amount represents CO,,2,, emissions
associated with this quantity, based on the default emissions factor
which assumes a typical mix of lime types.

Users can optionally override this default emissions factor and specify
their own quantity of CO,,2,, emissions *per quantity of lime produced*
by setting the ***massPerMass*** profile item value.
