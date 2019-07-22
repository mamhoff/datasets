The AMEE category
business/processes/production/electronics/etchingandcvdcleaning/production
provides a methodology for calculating the fluorinated compound (FC)
emissions associated with the plasma etching of
silicon-containing-materials and cleaning of the chamber-walls of
chemical vapour deposition (CVD) tools in the semiconductor, LCD and
photovoltaic industries. The methodology uses typical emissions factors
for several greenhouse gases based on the quantity of electronics
substrate produced and represents the *Tier 1* approach described by the
IPCC Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, specify the electronics industry sector using the
*sector* drill choice.

### Specifying activity data

Next, the user must specify the annual manufacturing design *capacity*
of substrate processes, and the annual capacity *utilisation* using the
***capacity*** and ***fractionCapacityUtilised*** profile item values.

Since the use of FC's is variable in the photovoltaic (PV) industry,
users can also specify the proportion of PV manufacture under
consideration that employs FC's. This should be set as a decimal
fraction (i.e. 0-1) using the ***fractionFluorinatedCompounds*** profile
item value. The returned emissions quantity is scaled according to the
fraction which uses FC's. Note: this option is only valid when
specifying the 'PV-cells' option in the *sector* drill choice.

### Results and calculation

The returned amounts represent the greenhouse gas emissions associated
with the quantity specified. Two quantities are returned, as follows:

  - ***CF4***: quantity of CF<sub>4</sub> emissions (where appropriate)
  - ***C2F6***: quantity of C<sub>2</sub>F<sub>6</sub> emissions (where appropriate)
  - ***C3F8***: quantity of C<sub>3</sub>F<sub>8</sub> emissions (where appropriate)
  - ***CHF3***: quantity of CHF<sub>3</sub> emissions (where appropriate)
  - ***NF3***: quantity of NF<sub>3</sub> emissions (where appropriate)
  - ***SF6***: quantity of SF<sub>6</sub> emissions (where appropriate)
  - ***CO2e***: CO<sub>2</sub>e emissions (all gases converted using the
    appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials) and combined
    into a single quantity)

-----

## Notes

### Emissions factors

The IPCC stresses that the emissions factors used in this methodology
are designed to give an aggregated estimate of FC emissions. These
emissions factors should not be used separately or in combination with
any other data, but are appropriate only in the use specified within
this methodology and reported as a complete set.
