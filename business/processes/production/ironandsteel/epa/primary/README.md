The AMEE category at
business/processes/production/ironandsteel/epa/primary provides a
methodology for calculating greenhouse gas emissions associated with the
production of primary iron and steel. This methodology accounts for the
CO,,2,, emissions due to carbonate calcination and adjusts [stationary
combustion](EPA_stationary_combustion) emissions by accounting for
carbon which remains contained within process products or by-products.
The methodology is sourced from the guidelines published by the [Climate
Leaders](http://www.epa.gov/climateleaders/documents/resources/ironsteel.pdf)
industry-government initiative for reporting and reducing greenhouse gas
emissions.

To use this category, simply create a profile item - there are no drill
choices.

Next, set the quantity of the carbonate flux used by setting the
***fluxQuantity*** profile item value. The returned amount represents
CO,,2,, emissions associated with this quantity of flux, assuming that
the quantity specified represents 100% calcium carbonate (limestone).
The calculation uses a default value for CO,,2,, emissions per unit of
calcium carbonate, based on the known stoichiometric relationship
between the two.

Users can override these assumptions if appropriate, for a more accurate
calculation. The purity (i.e. percent carbonate) of the flux can be
specified using the ***fluxPurity*** profile item value. If a type of
carbonate other than calcium carbonate is used, users can directly
specify the weight fraction of carbon using the ***fluxCarbon*** profile
item value. In both cases, these should be expressed as decimal
fractions, i.e. between 0-1.

### Products and by-products

The quantity of process products and by-products, together with their
carbon contents can also be specified. The carbon retained within these
products is subtracted from the basic calculation of carbonate
flux-associated emissions. Use the following profile item values to
specify these quantities where appropriate:

  - Iron: ***ironQuantity*** (*mass*-based quantity)

<!-- end list -->

  - Steel: ***steelQuantity*** (*mass*-based quantity)

<!-- end list -->

  - Coke: ***cokeQuantity*** (*mass*-based quantity)

<!-- end list -->

  - Residual oil: ***oilQuantity*** (*liquid volume*-based quantity)

<!-- end list -->

  - Tar: ***tarQuantity*** (*liquid volume*-based quantity)

<!-- end list -->

  - Coke oven gas: ***cokeOvenGasQuantity*** (*gaseous volume*-based
    quantity)

<!-- end list -->

  - Blast furnace gas: ***blastFurnaceGasQuantity*** (*gaseous
    volume*-based quantity)

These quantities should only be included when representing transfers
offsite, i.e. quantities sold.

The Climate Leaders documentation provides default carbon content values
for iron and steel products as well as several common by-products. Users
can specify quantities of each of these and override the default carbon
content factors if facility-specific data are available. Use the
following profile item values to specify these quantities where
appropriate:

  - Iron: ***ironCarbon***

<!-- end list -->

  - Steel: ***steelCarbon***

<!-- end list -->

  - Coke: ***cokeCarbon***

<!-- end list -->

  - Residual oil: ***oilCarbon***

<!-- end list -->

  - Tar: ***tarCarbon***

<!-- end list -->

  - Coke oven gas: ***cokeOvenGasCarbon***

<!-- end list -->

  - Blast furnace gas: ***blastFurnaceGasCarbon***

Each of these should be specified as a decimal fraction, i.e. 0-1,
representing the proportion by weight of carbon within the
product/by-product.

**Note**: the default carbon content factors for coke oven gas and blast
furnace gas have been converted from *kg per 1000 ft''3''* used in the
original documentation into *kg per ft''3''*, using a factor of 1/1000.
