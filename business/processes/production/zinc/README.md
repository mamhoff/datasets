The AMEE category business/processes/production/zinc/ is for industry
professionals to calculate and report on their their greenhouse gas
emissions associated with the primary production of zinc. This
methodology represents the *Tier 1* (default values) and *Tier 2*
(facility- or country-specific values) approaches described by the IPCC
Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

There are three different types of primary zinc production. The first
method is a metallurgical process called electro-thermic distillation.
The process is uses to combine roasted concentrate and secondary zinc
products into a sinter feed that is burned to remove zinc, halides,
cadmium and other impurities. The resulting zinc oxide-rich sinter is
combines with metallurgical coke in an electric retort furnace that
reduces the zinc oxides and produces vaporized zinc which is captured in
a vacuum condenser. The reduction results in the release of non-energy
carbon dioxide (CO2) emissions. The electro-thermic distillation process
is used in the United State and in Japan.

The second method of zinc production is a pyrometallurgical process
involving the use of an Imperial Smelting Furnace, which allows for the
simultaneous treatment of lead and zinc concentrates. The process
results in the simultaneous production of lead and zinc and the release
of non-energy CO2 emissions. The metallurgical coke/coal reductant used
in this process must be allocated to lead and zinc production in order
to perform an emission calculation without double counting. A mass based
allocation results in a factor of 0.74 tonnes coke/tonne zinc.

The third zinc production method is the electrolytic process, which is a
hydrometallurgical technique. In this process, zinc sulphide is
calcined, resulting in the production of zinc oxide. The zinc oxide is
then leached in sulphuric acid and purified to remove iron impurities,
copper, and cadmium. The zinc is then drawn out of the solution using
electrolysis. The electrolytic process does not result in non-energy CO2
emissions.

## How to use this category

To use this category use the ***zincProductionBySource*** drill-down to
select the zinc production process from the following options:

1.  *default*
2.  *waelz kiln production*
3.  *pyrometallurgical (imperial smelting furnace) production*
4.  *electro-thermic distillation production*

There is the option of using a default emission factor, using the
*default* drill-down option. This option is based on weighting of known
emission factors using 60% Imperial Smelting and 40% Waelz Kiln process.

The only required profile item value is the quantity of lead produced,
***productQuantity***. The emission factor for each production process
has a default value provided by the AMEE engine, but this can be
over-ridden, using the ***massCO2PerMassProduct*** profile item value,
by the user if more precise site or country-specific values are known.
Over-riding the default values represents the *Tier 2* approach
described by the IPCC Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)) and
should be used where users have facility-specific data.
