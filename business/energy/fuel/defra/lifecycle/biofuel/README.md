**This category is now deprecated. The latest DEFRA methodology for
biomass-associated greenhouse gas emissions can be found
[here](Biofuels_by_DEFRA).**

This category allows the user to calculate life-cycle emissions from
various biofuels. The methodology follows that from the latest
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and advice. Full life-cycle emissions are calculated including
contributions from carbon dioxide, nitrous oxide and methane.

Note that this category does not enable the user to calculate the direct
emissions of carbon dioxide for the combustion of biofuels. This is a
full life-cycle calculation only.

## How to use this category

To use this category firstly use the drill-down ***type*** to select the
type of biofuel to be included in the calculation from the following
options.

  - Biodiesel (ME) - Methyl Ester, biodiesel produced from oils using
    conventional esterification processes

<!-- end list -->

  - Biodiesel (HVO) - Hydrotreated Vegetable Oil, biodiesel produced
    from vegetable oils using hydroprocessing

<!-- end list -->

  - Bioethanol

<!-- end list -->

  - BioETBE (refinery)

<!-- end list -->

  - BioETBE (non-refinery)

<!-- end list -->

  - Biomethane

The quantity of biofuel must then be set as using the ***mass*** or
***volume*** profile item value. The ***volume*** profile item value is
required for all biofuels except Biomethane. Biomethane is measured by
mass, rather than volume so the ***mass*** profile item value should be
used in this case. If the wrong profile item value is used then the
algorithm will return a value of '0'. The algorithm multiplies this
quantity by the appropriate emission factor and returns a value of
kgCO<sub>2</sub>e, which includes contributions from CO<sub>2</sub>, N<sub>2</sub>O and
CH<sub>4</sub> emissions.
