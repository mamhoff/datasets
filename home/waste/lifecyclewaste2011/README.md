This category allows the user to calculate emissions from various forms
of waste disposal, following the latest
[Defra](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
data and methodologies. Emissions are based on the full life-cycle of
specific waste materials, including the disposal process and
contributions from carbon dioxide, nitrous oxide and methane.

The emission factors used herein represent net life-cycle emissions of
greenhouse gases resulting from waste disposal. On average in the UK 88%
of non-recycled waste goes into landfill and 12% goes to energy from
waste (power only moving grate). It is important to note that this
calculation includes both the life-cycle emissions for the material and
the emissions from the process of disposal.

-----

## How to use this category

### Selecting an emissions scenario

To use this category the user will need all relevant waste information
from waste audits and waste transfer/consignment notes. If a waste
contractor is used then they will be able to advise to which location
wastes have subsequently been delivered (i.e. landfill site, recycling
operation, composting or energy recovery facility).

To use this category firstly use the drill-downs ***wasteType*** and
***wasteSubType*** to select which waste fraction is to be calculated.

### Specifying activity data

The following profile item values can be specified which state the
quantities of waste which were disposed of using each disposal method
(the list above mentions which of these profile item values are not
appropriate for certain waste fraction types).

  - ***quantityReUse*** - amount re-used rather than disposed
  - ***quantityClosedLoop*** - disposed of by closed loop recycling
  - ***quantityOpenLoop*** - disposed of by open loop recycling
  - ***quantityCombustion*** - disposed of by combustion
  - ***quantityAnaerobicDigestion*** - disposed of by energy from waste,
    anaerobic digestion
  - ***quantityComposted*** - disposed of by composting
  - ***quantityLandfill*** - disposed of by landfill

Any disposal methods not under consideration can be left unspecified
(i.e. they will default to 0).

### Results and calculation

The returned values representsgreenhouse gas emissions associated with
the the life-cycle of the chosen waste type, including disposal. The
following discrete **amounts** are returned:

  - ***closedLoopDisposalCO2e***: CO,,2,,e emissions attributable closed
    loop recycling
  - ***openLoopDisposalCO2e***: CO,,2,,e emissions attributable open
    loop recycling
  - ***combustionDisposalCO2e***: CO,,2,,e emissions attributable
    combustion
  - ***anaerobicDigestionDisposalCO2e***: CO,,2,,e emissions
    attributable to anaerobic digestion
  - ***compostDisposalCO2e***: CO,,2,,e emissions attributable to
    composting
  - ***landfillDisposalCO2e***: CO,,2,,e emissions attributable to
    landfill disposal
  - ***totalDisposalCO2e***: CO,,2,,e emissions attributable all waste
    disposal methods used
  - ***reUseEmissions***: CO,,2,,e emissions atrributable to preparation
    for re-use
  - ***totalCO2e***: net CO,,2,,e emissions attributable to entire
    material life cycle

Users should note that **all quantities** are expressed in terms of
**[CO,,2,,e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO,,2,, which would exert the same atmospheric warming
effect and the emissions quantity.

-----
