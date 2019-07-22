The AMEE category business/processes/production/ferroalloy/rawmaterials
is aimed towards industry professionals to enable them to prepare
inventories of greenhouse gas emissions from ferroalloy production.
Ferroalloy is the term used to describe concentrated alloys of iron and
one or more metals such as silicon, manganese, chromium, molybdenum,
vanadium and tungsten. Silicon metal production is usually included in
the ferroalloy group because silicon metal production process is quite
similar to the ferrosilicon process. Ferroalloy production involves a
metallurgical reduction process that results in significant carbon
dioxide emissions.

The methodology provided by AMEE in this category represents the *Tier
2* and *Tier 3* approach described by the IPCC Guidelines for National
Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)) and
calculates on the basis of raw material inputs to the ferroalloy
production process.

## How to use this category

To use this category use the *typeOfReducingAgent* drill-down to select
the reducing agent type being used from the following options:

1.  *coal (for FeSi and Si-metal)*
2.  *coal (for other ferroalloys)*
3.  *coke (for FeMn and SiMn)*
4.  *coke (for Si and FeSi)*
5.  *coke (for other ferroalloys)*
6.  *prebaked electrodes*
7.  *electrode paste*
8.  *petroleum coke*

The following profile item values are required in order to accurately
calculate CO,,2,, emissions:

1.  ***reducingAgentQuantity***
2.  ***oreQuantity***
3.  ***oreCarbonContent***
4.  ***slagQuantity***
5.  ***slagCarbonContent***
6.  ***productQuantity***
7.  ***productCarbonContent***
8.  ***nonProductOutgoingStreamQuantity***
9.  ***nonProductOutgoingStreamCarbonContent***

The CO,,2,, emission factor for the reducing agent has a default value
provided by the AMEE engine, but this can be over-ridden, using the
***massCO2PerMassReducingAgent*** profile item value, by the user if
more precise site or country-specific values are known.

For Tier 3 calculations the following profile item values can also be
specified.

Use either:

1.  ***reducingAgentCarbonContent*** (decimal fraction, 0-1)

Or:

1.  ***percentageAsh***: within reducing agent (decimal fraction, 0-1)
2.  ***percentageVolatiles***: within reducing agent (decimal fraction,
    0-1)
3.  ***carbonContentInVolatiles***: within reducing agent (decimal
    fraction, 0-1)

AMEE converts the carbon content of each source and product into CO,,2,,
emissions using molecular mass ratios, seen in
[Stoichiometries\_ratios](Stoichiometries_ratios). This assumes complete
combustion of carbon into CO,,2,,.
