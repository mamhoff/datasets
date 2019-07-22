This category provides a simple screening method to allow users to
estimate their greenhouse gas emissions from the **operation** of
refrigeration and air conditioning equipment. This methodology follows
that from the latest
[Defra](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting)
data and advice and is originally based on the methodologies published
in association with the [IPCC National Greenhouse Gas Inventory
Programme](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_7_Ch7_ODS_Substitutes.pdf)
and EPA [Climate
Leaders](http://www.epa.gov/climateleaders/documents/resources/mfgrfg.pdf)
initiative.

The calculation method is based on assumptions relating to the type of
unit being used, so requires minimal understanding of the complexities
of the system being used. The user should enter information on any units
running during the time period under consideration. These emissions
include contributions from estimated equipment leaks and service losses
over the life time of the unit.

Refrigerants differ in their specific physical (particularly thermal)
properties and therefore exert a variable effect on atmospheric warming.
As such, the absolute quantity of emissions for a given refrigerant type
is converted into a standard measure of environmental impact - CO,,2,,e:
the equivalent quantity of carbon dioxide (CO,,2,,) which would produce
the same atmospheric warming effect. This conversion is made by
multiplying the absolute emissions quantity by the ['global warming
potential'](Greenhouse_gases_Global_warming_potentials) (GWP) of the
respective refrigerant - a value unique to the gas which represents its
warming effect relative to CO,,2,,.

-----

## How to use this category

### Selecting an emissions scenario

Firstly use the drill-down ***type*** to select the type of equipment
under assessment. This is chosen from the following options.

  - domestic refrigeration

<!-- end list -->

  - stand-alone commercial applications

<!-- end list -->

  - medium and large commercial applications

<!-- end list -->

  - transport refrigeration

<!-- end list -->

  - industrial refrigeration (inc. food processing and cold storage)

<!-- end list -->

  - chillers

<!-- end list -->

  - residential and commercial a/c including heat pumps

<!-- end list -->

  - mobile air conditioning

### Specifying activity data

The user must then enter the ***equipmentChargeCapacity*** (see the
[Refrigeration](Refrigeration) category for more guide values), the
***numberOfUnits***, the ***timeUsed*** (years) during the reporting
period and the ***refrigerantType*** as profile item values. The
***refrigerantType*** profile item value calls the relevant global
warming potential for that refrigerant from the
[GWP](Greenhouse_gases_Global_warming_potentials) category. This must be
selected from the following list.

  - CO2

<!-- end list -->

  - HFC-23

<!-- end list -->

  - HFC-32

<!-- end list -->

  - HFC-41

<!-- end list -->

  - HFC-125

<!-- end list -->

  - HFC-134

<!-- end list -->

  - HFC-134a

<!-- end list -->

  - HFC-143

<!-- end list -->

  - HFC-143a

<!-- end list -->

  - HFC-152a

<!-- end list -->

  - HFC-227ea

<!-- end list -->

  - HFC-236fa

<!-- end list -->

  - HFC-245fa

<!-- end list -->

  - HFC-4310mee

<!-- end list -->

  - CF4

<!-- end list -->

  - C2F6

<!-- end list -->

  - C3F8

<!-- end list -->

  - C4F8

<!-- end list -->

  - C4F10

<!-- end list -->

  - C5F12

<!-- end list -->

  - C6F14

<!-- end list -->

  - R404a

<!-- end list -->

  - R407c

<!-- end list -->

  - R408a

<!-- end list -->

  - R410a

<!-- end list -->

  - R507

<!-- end list -->

  - R508b

<!-- end list -->

  - CFC-11

<!-- end list -->

  - CFC-12

<!-- end list -->

  - CFC-13

<!-- end list -->

  - CFC-113

<!-- end list -->

  - CFC-114

<!-- end list -->

  - CFC-115

<!-- end list -->

  - HCFC-22

<!-- end list -->

  - HCFC-123

<!-- end list -->

  - HCFC-124

<!-- end list -->

  - HCFC-141b

<!-- end list -->

  - HCFC-142b

<!-- end list -->

  - HCFC-225ca

<!-- end list -->

  - HCFC-225cb

<!-- end list -->

  - R290

<!-- end list -->

  - R600a

<!-- end list -->

  - R406a

<!-- end list -->

  - R409a

<!-- end list -->

  - R502

### Results and calculation

The quantities returned represent the greenhouse gas emissions
associated with the quantities and refrigerant type specified. The
following quantities are returned:

  - ***absoluteEmissions***: absolute quantity of refrigerant emissions
  - ***CO2e***: CO,,2,,e emissions (absolute emissions converted using
    the appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))

If no ***refrigerantType*** is specified then only the absolute quantity
of emissions can be calculated and the value for ***CO2e*** will be
zero.
