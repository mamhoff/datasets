The AMEE category /business/waste/water/domestic contains data and a
methodology for calculating methane emissions associated with domestic
waste water, sourced from the IPCC [Guidelines for National Greenhouse
Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/5_Volume5/V5_6_Ch6_Wastewater.pdf).

Methane emissions vary depending on the discharge pathway/treatment
system and are calculated based on the concentration of degradable
organic material within the waste water as measured by the biological or
chemical *oxygen demand* (standard measures of water organic
concentration).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, choose between 'treated' or 'untreated' modes of
waste water discharge using the *type* drill choice, then specify the
particular system using the *system* and *context* drill choices.

### Specifying activity data

**Waste quantity:** Next, a measure of the concentration of degradable
organic material within the waste water must be specified. Users can opt
to express this quantity as an absolute mass (e.g. kg) of (degradable)
organic material, or alternatively by using a known volume (e.g. litres)
of waste water generation together with the oxygen demand of a unit
volume of water (e.g. mg per litre). These measures should represent
either biological or chemical oxygen demand. To specify organic
discharge on the basis of a total mass, set the mass using the
***totalOrganicWaste*** profile item value. Otherwise, set the volume of
waste water discharged and the associated organic concentration (oxygen
demand) using the ***volume*** and ***massOrganicPerVolume*** profile
item values.

**Sludge removal:** Where removal of solid organics (sludge) is
practised, this can be deducted from the emissions calculation. To
specify sludge removal, set the mass of removed sludge using the
***massSludge*** profile item value. The value returned in this case
represents methane emissions associated with the waste quantity
specified minus the removed sludge. If no value for sludge removal is
specified, AMEE assumes an absense of sludge removal.

**Methane recovery:** Where methane recovery/capture is practised, this
can be deducted from the emissions calculation. To specify methane
recovery, set the mass of recovered methane in the
***recoveredMethane*** profile item value. The value returned in this
case represents methane/N,,2,,O emissions associated with the waste
quantity specified minus the methane recovered. If a quantity of
recovered methane is specified which is greater than the emitted
quantity, AMEE returns a value of 0, and posts an error message into the
***comment*** profile item value.

**Biological or chemical oxygen demand?** In calculating methane
emissions associated with this category, AMEE assumes that quantities of
organic material (either *total mass* or *mass per volume* - see above)
are specified in terms of the *biological oxygen demand* of waste water.
Users can instruct AMEE that their specified quantities alternatively
represent *chemical oxygen demand* by setting the ***isCOD*** profile
item value to 'true'.

### Results and calculation

The quantities returned represent the methane emissions associated with
waste water discharge into the treatment system specified. The following
quantities are returned:

  - ***CH4***: absolute quantity of CH,,4,, emitted
  - ***CO2e***: emitted CH,,4,, to CO,,2,,e converted using the
    appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials)) ---

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
