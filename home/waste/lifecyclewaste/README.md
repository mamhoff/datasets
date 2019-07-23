This category allows the user to calculate emissions from various forms
of waste disposal, following the latest
[Defra](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data and methodologies. Emissions based on either the full life-cycle of
specific waste materials, including the disposal process and
contributions from carbon dioxide, nitrous oxide and methane.

The emission factors used herein represent net life-cycle emissions of
greenhouse gases resulting from water supply, water treatment and the
use of biofuels/biomass as well as those associated with waste disposal.
On average in the UK 88% of non-recycled waste goes into landfill and
12% goes to energy from waste (power only moving grate). It is important
to note that this calculation includes both the life-cycle emissions for
the material and the emissions from the process of disposal.

Note that the methodology does not currently cater for recycled
textiles.

-----

## How to use this category

### Selecting an emissions scenario

To use this category the user will need all relevant waste information
from waste audits and waste transfer/consignment notes. If a waste
contractor is used then they will be able to advise to which location
wastes have subsequently been delivered (i.e. landfill site, recycling
operation, composting or energy recovery facility).

The total waste sent to landfill, recycled or composted is required
along with the composition of the waste.

To use this category firstly use the drill-down ***wasteType*** to
select which waste fraction is to be calculated from the following
options.

  - *Paper and Card* - no open loop recycling disposal option
  - *Kitchen/food waste* - no closed or open loop recycling disposal
    option, recycled material percentage must be zero
  - *Garden/plant waste* - no closed or open loop recycling disposal
    option, recycled material percentage must be zero
  - *Other organic* - no open loop recycling disposal option
  - *Wood* - no open loop recycling or anaerobic digestion disposal
    options
  - *Textiles* - no open loop recycling, anaerobic digestion or
    composting disposal options
  - *Plastic (dense)* - no open loop recycling, anaerobic digestion or
    composting disposal options
  - *Plastic (film)* - no open loop recycling, anaerobic digestion or
    composting disposal options
  - *Ferrous metal* - no open loop recycling, anaerobic digestion or
    composting disposal options
  - *Non-ferrous metal* - no open loop recycling, anaerobic digestion or
    composting disposal options
  - *Silt/soil* - no open loop recycling, anaerobic digestion or
    composting disposal options
  - *Aggregate materials* - no open loop recycling, anaerobic digestion
    or composting disposal options
  - *Misc combustibles* - no open loop recycling, anaerobic digestion or
    composting disposal options, recycled material percentage must be
    zero
  - *Glass* - no anaerobic digestion or composting disposal options
  - *Batteries* - no emobodied values (virgin or recycled); no open loop
    recycling
  - *Small Waste Electrical and Electronic Equipment (WEEE Cat. 1C)* -
    no emobodied values (virgin or recycled); closed loop recycling and
    landfill disposal only
  - *Large Waste Electrical and Electronic Equipment (WEEE Cat. 1A)* -
    no emobodied values (virgin or recycled); closed loop recycling and
    landfill disposal only
  - *Estimated impact of other materials (municipal and C\*I)* - no open
    loop recycling disposal option

### Specifying activity data

The following profile item values can be specified which state the
quantities of waste which were disposed of using each disposal method
(the list above mentions which of these profile item values are not
appropriate for certain waste fraction types).

  - ***quantityClosedLoop*** - disposed of by closed loop recycling
  - ***quantityOpenLoop*** - disposed of by open loop recycling
  - ***quantityMovingGrate*** - disposed of by energy from waste, power
    only moving grate
  - ***quantityAnaerobicDigestion*** - disposed of by energy from waste,
    anaerobic digestion
  - ***quantityComposted*** - disposed of by composting
  - ***quantityLandfill*** - disposed of by landfill

Any disposal methods not under consideration can be left unspecified
(i.e. they will default to 0).

By default, the calculation assumes that all of the waste products were
originally sourced from virgin materials. Since recycled materials are
often associated with a smaller quantity of embodied emissions, the
Defra methodology offers the ability to specify the fraction of each
waste type which was originally derived from recycled materials. To
specify the fraction represented by recycled materials, simply set the
***percentageRecycled*** profile item value to the appropriate
percentage (expressed between 1-100). The returned value represents
kgCO<sub>2</sub>e emissions associated with the the complete life-cycle of the
chosen waste type (including disposal emissions) taking into account the
quantity which was sourced from recycled materials.

### Results and calculation

The returned values representsgreenhouse gas emissions associated with
the the life-cycle of the chosen waste type, including disposal. The
following discrete **amounts** are returned:

  - ***closedLoopDisposalCO2e***: CO<sub>2</sub>e emissions attributable closed
    loop recycling
  - ***openLoopDisposalCO2e***: CO<sub>2</sub>e emissions attributable open
    loop recycling
  - ***movingGrateDisposalCO2e***: CO<sub>2</sub>e emissions attributable
    moving grate incineration
  - ***anaerobicDigestionDisposalCO2e***: CO<sub>2</sub>e emissions
    attributable to anaerobic digestion
  - ***compostDisposalCO2e***: CO<sub>2</sub>e emissions attributable to
    composting
  - ***landfillDisposalCO2e***: CO<sub>2</sub>e emissions attributable to
    landfill disposal
  - ***totalDisposalCO2e***: CO<sub>2</sub>e emissions attributable all waste
    disposal methods used
  - ***recycledEmbodiedCO2e***: CO<sub>2</sub>e emissions embodied within
    recycled materials
  - ***virginEmbodiedCO2e***: CO<sub>2</sub>e emissions embodied within virgin
    materials
  - ***totalCO2e***: net CO<sub>2</sub>e emissions attributable to entire
    material life cycle

Users should note that **all quantities** are expressed in terms of
**[CO<sub>2</sub>e](Greenhouse_gases_Global_warming_potentials)** - the
quantity of CO<sub>2</sub> which would exert the same atmospheric warming
effect and the emissions quantity.

-----

## Note

The options for *batteries*, *Small Waste Electrical and Electronic
Equipment* and *Large Waste Electrical and Electronic Equipment* contain
no data for embodied (virgin or recycled) emissions. Therefore the
default (i.e. full life cycle) calculations for these types of waste
represent only disposal-specific emissions (see below).

-----
