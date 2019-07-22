The AMEE category at
business/processes/production/fluorinatedcompounds/production provides a
methodology for calculating emissions of fluorinated compounds (FC)
associated with their production. This methodology represents the *Tier
1* approach described by the IPCC Guidelines for National Greenhouse Gas
Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

The methodology is based on default emissions factors relating to the
production of HFC's, PFC's and SF,,6,,. Users have the option of
returning absolute quantity of emissions, or - by specifying the
particular type of FC fluid used - returning the emissions expressed as
CO,,2,,e.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, select the type of FC using the *type* drill
choice.

### Specifying activity data

Next, specify the quantity FC's produced using the ***mass*** profile
item value.

Users can override the default emissions factors if the have
facility-specific data on the quantity of emissions associated with each
unit of production. To specify this value, set the ***massPerMass***
profile item value.

Users can also convert their emissions into CO,,2,,e - i.e. the quantity
of CO,,2,, which would produce the same global warming effect as the
absolute FC emissions. In the case of the drill down choices which
represent SF,,6,, production, no further specification is required since
the compound is implicit (SF,,6,,). If using the the 'HFC' or 'PFC'
drill choices, the specific compound must be specified since the
['global warming potential'](Greenhouse_gases_Global_warming_potentials)
of each of these compounds differs. The compound type is specified using
the ***compound*** profile item value. This value must match one of the
drill options found in [this AMEE
category](Greenhouse_gases_Global_warming_potentials) - AMEE uses this
category as a lookup resource for converting absolute emissions into the
appropriate quantity of CO,,2,,e for the respective compound.

### Results and calculation

The returned amounts represent the greenhouse gas emissions associated
with the quantity specified. Two quantities are returned, as follows:

  - ***rawEmissions***: absolute quantity of emissions for the quantity
    specified
  - ***CO2e***: CO,,2,,e emissions (absolute emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))
