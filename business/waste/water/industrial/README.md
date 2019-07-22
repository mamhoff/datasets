The AMEE category /business/waste/water/industrial contains data and a
methodology for calculating methane emissions associated with industrial
waste water, sourced from the IPCC [Guidelines for National Greenhouse
Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/5_Volume5/V5_6_Ch6_Wastewater.pdf).

Methane emissions vary depending on the discharge pathway/treatment
system and are calculated based on the concentration of degradable
organic material within the waste water as measured by the chemical
*oxygen demand* (a standard measure of water organic concentration).
Users can specify this quantity in several ways including the use of
data on quantities typical to specific industries.

-----

## How to use this category

### Selecting an emissions scenario

To use this category, choose between 'treated' or 'untreated' modes of
waste water discharge using the *type* drill choice, then specify the
particular system using the *system* drill choices.

### Specifying activity data

Next, a measure of the concentration of degradable organic material
within the waste water must be specified. Users can opt to express this
quantity in three ways, using either 1, 2 or 3 profile item item values.
In each case, measures of degradable organic concentration should
represent *chemical oxygen demand (COD)*.

**By absolute mass:** Waste water degradable organics can be specifed as
an total absolute mass (e.g. kg) of (degradable) organic material. To
specify organic discharge on the basis of a total mass, set the mass
using the ***massOrganicWaste*** profile item value.

**By waste water volume:** Alternatively, the total quantity of waste
water degradable organic material can be specifed using the volume (e.g.
litres) of waste water generated together with the organic concentration
(COD) of a unit volume of water (e.g. mg per litre). To use this method,
set the volume of waste water discharged and the associated organic
concentration using the ***volume*** and
***massOrganicPerVolumeWasteWater*** profile item values.

**By industrial production:** Finally, the quantity of organic material
in waste water discharge can be specified by using a quantity (mass) of
industrial production (e.g. tonnes), together with the volume of waste
water generated for each unit (e.g. tonne) of production and the organic
concentration (oxygen demand) of a unit volume of water (e.g. mg per
litre). In this case, set the quantity of industrial production, the
volume of water per unit of production and the waste water organic
concentration (oxygen demand) using the ***massProduced***,
***volumeWasteWaterPerMassProduction*** and
***massOrganicPerVolumeWasteWater*** profile item values.

**Using industry typical values:** Users can access 'typical' values for
the volume-of-water-per-unit-of-production and the
waste-water-organic-concentration for a variety of industries. To use
these values, set either or both of the ***useTypicalWater*** and
***useTypicalOxygenDemand*** profile item values to 'true', and specify
the name of the industry in the ***industry*** profile item value. AMEE
will look up these values using the category at
[/business/waste/water/industrial/industryfactors](Industry_typical_waste_water)
and populate the ***volumeWasteWaterPerMassProduction*** and
***massOrganicPerVolumeWasteWater*** profile items value accordingly.
Values set in the ***industry*** profile item value must match those in
the ''industry'' drill option [here](Industry_typical_waste_water).
**Note:** users must establish which 'typical' values are available for
each industry as a small number are unavaliable in the IPCC methodology.

**Sludge removal:** Where removal of solid organics (sludge) is
practised, this can be deducted from the emissions calculation. To
specify sludge removal, set the mass of removed sludge using the
***massSludge*** profile item value.

**Methane recovery:** Where methane recovery/capture is practised, this
can be deducted from the emissions calculation. To specify methane
recovery, set the mass of recovered methane in the
***recoveredMethane*** profile item value.

### Results and calculation

The quantities returned represent the methane emissions associated with
waste water discharge into the treatment system specified. The following
quantities are returned:

  - ***CH4***: absolute quantity of CH,,4,, emitted
  - ***CO2e***: emitted CH,,4,, to CO,,2,,e converted using the
    appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials))

-----

## Notes

### Sludge removal

Where removed sludge is incinerated, users are referred to the following
AMEE category

  - [waste combustion](Other_waste_combustion)

### Methane recovery

Where recovered methane is burned for energy production, flared, or fed
into a gas distribution system, users are referred to the following AMEE
categories

  - [stationary fuel combustion](Stationary_Combustion)

<!-- end list -->

  - [methane flaring](Methane_flaring)

<!-- end list -->

  - [oil and gas processing](Oil_and_gas_fugitive_emissions)
