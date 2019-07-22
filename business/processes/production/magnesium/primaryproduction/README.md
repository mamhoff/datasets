The AMEE category
business/processes/production/magnesium/primaryproduction/ is aimed
towards industry professionals to enable them to prepare inventories of
greenhouse gas emissions from primary magnesium production. The
magnesium-containing ores which release CO<sub>2</sub> during calcination are
dolomite (MgCa(CO<sub>3</sub>)<sub>2</sub>) and magnesite (MgCO<sub>3</sub>). AMEE provides
theoretical emission factors for use in situations where facility or
site-specific data is not available. The actual CO<sub>2</sub> emissions per
kilogram magnesium produced will be higher than the theoretical
emissions due to losses of magnesium in the process chain. The
methodology provided by AMEE in this category represents the *Tier 1*
(default values) and *Tier 2* (facility- or country-specific values)
approaches described by the IPCC Guidelines for National Greenhouse Gas
Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

## How to use this category

AMEE allows the user to caculate emissions from the primary magnesium
production from dolomite or from magnesite. Each of these exists as a
drill-down option in this AMEE category, so can be calculated
individually. To use this category use the
***magnesiumProductionByRawMaterial*** drill-down to select the raw
material for magnesium production from the following options:

1.  *magnesite*
2.  *dolomite*

The only required profile item value is the quantity of magnesium
produced, ***productQuantity***. The emission factor for raw material
has a default value provided by the AMEE engine, but this can be
over-ridden, using the ***massCO2PerMassProduct*** profile item value,
by the user if more precise site or country-specific values are known.
Over-riding the default values represents the *Tier 2* approach
described by the IPCC Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)) and
should be used where users have facility-specific data.
