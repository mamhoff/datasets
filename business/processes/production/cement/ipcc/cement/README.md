The AMEE category business/processes/production/cement/ipcc/cement
provides a methodology for calculating the emissions associated with
cement production. The methodology is based on the quantity of cement
produced and represents the *Tier 1* approach described by the IPCC
Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

This methodology should be used where no information on clinker
production or the consumption of raw carbonate materials are available.
The methodology estimates emissions from the production of clinker based
on data describing production of cement together with default values
representing typical cement properties.

### Default methodology

The IPCC *Tier 1* methodology represented herein uses a default
emissions factor for converting the quantity of clinker produced
(derived from the quantity of cement produced) into an emission of
CO,,2,,. This default value is 0.52 tonnes CO,,2,, per tonne of clinker.
This value is based on a number of assumptions regarding the typical
properties of clinker together with information about the the process
dynamics of clinker production.

The derivation of the emissions factor assumes that 65% of clinker
comprises calcium oxide (CaO) and that this has been entirely sourced
from the calcining of limestone (CaCO,,3,,). The calcining of 1 tonne of
CaCO,,3,, produces 0.5603 tonnes of CaO and 0.4397 tonnes of CO,,2,,. It
follows that the quantity of CO,,2,, emitted per tonne of CaO produced
is 0.7848 tonnes. This equates to 0.5101 tonnes of CO,,2,, for each
tonne of 65%-CaO clinker. The IPCC methodology inflates this estimate to
0.52 tonnes CO,,2,, per tonne of clinker, by applying a 1.02 correction
factor to account for emissions associated with cement kiln dust.

### Using this category

To use this category, simply create a data item - there are no drill
choices.

Next, specify the quantity of cement produced and the fraction of
clinker within the cement using the ***massCement*** and
***clinkerFaction*** profile item values. The latter value should be
expressed as a decimal fraction, i.e. between 0-1. The value returned
represents CO,,2,, emissions associated with cement production according
to the quantities specified.

### Imports and exports of clinker

In addition, users can specify quantities of clinker which were imported
and exported. Imported clinker is not included in the calculation as it
are considered to be the responsibility of the entity (e.g. facility,
country) in which it was produced. Exported clinker, which was produced
by the entity under consideration but not used in cement production, is
included in the estimate of emissions. To specify quantities of imported
and/or exported clinker, set the ***clinkerImports*** and
***clinkerExports*** profile item values respectively.
