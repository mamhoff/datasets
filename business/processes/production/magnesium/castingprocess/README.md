The AMEE category
business/processes/production/magnesium/castingprocess/ is aimed towards
industry professionals to enable them to prepare inventories of
greenhouse gas emissions from magnesium casting processes. This category
should be used alongside the [primary
production](Magnesium_primary_production) category. The emissions
detailed here are SF<sub>6</sub> emissions from the magnesium casting process
segment. As in the [primary production](Magnesium_primary_production)
category, the methodology provided by this category represents the *Tier
1* (default values) and *Tier 2* (facility- or country-specific values)
approaches described by the IPCC Guidelines for National Greenhouse Gas
Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

There are other compounds emitting during magnesium production. Both
HFC-134a and FK 5-1-12 are less thermodynamically stable (and thus have
much lower GWP) than SF<sub>6</sub>. Therefore, it is expected that these gases
will decompose/react extensively in the contact with liquid/gaseous
magnesium, leading to the production of various fluorinated gases (e.g.,
PFCs). Unfortunately there is little historic data upon which to base
emission factors for these products. However, if the GHG emission from
the use of magnesium cover gases is a national key category, it is good
practice, for inventory preparation purposes, to collect direct
measurements and or reliable indirect measures of GHG emissions
(fugitive emissions of HFC134-a and FK 5-1-12 as well as emissions of
PFCs as decomposition products) from magnesium foundries using HFC-134a
or FK 5-1-12 as cover gases. This may be considered a Tier 3 approach.
Over time, it may be possible to use Tier 3 measurements as a means of
developing emission factors that could be used for Tier 2.

-----

## How to use this category

### Selecting an emissions scenario

To use this category use the ***magnesiumCastingProcess*** drill-down to
select the process for magnesium casting from the following options:

1.  *all casting processes*

### Specifying activity data

The only required profile item value is the quantity of magnesium
casting, ***mgQuantity***. The emission factor for the casting process
has a default value provided by the AMEE engine, but this can be
over-ridden, using the ***massSF6PerMassProduct*** profile item value,
by the user if more precise site or country-specific values are known.
Over-riding the default values represents the *Tier 2* approach
described by the IPCC Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)) and
should be used where users have facility-specific data.

### Results and calculation

The quantities returned represent the greenhouse gas emissions
associated with the quantity of casting specified. The following
quantities are returned:

  - ***SF6***: absolute quantity of SF<sub>6</sub> emissions for the quantity
    specified
  - ***CO2e***: CO<sub>2</sub>e emissions (SF<sub>6</sub> emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
