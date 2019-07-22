The AMEE category at
business/processes/production/petrochemical/massbalance provides a
methodology for calculating greenhouse gas emissions associated with the
production of petrochemicals. The methodology is based on a mass-balance
approach which accounts for all of the carbon contained within process
feedstocks, products and by-products. This methodology represents the
*Tier 2* approach described by the IPCC Guidelines for National
Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).

To use this category, specify the type of petrochemical production using
the *product* drill choice.

Next, specify the quantity of feedstock and petrochemical product using
the ***primaryFeedstockMass*** and ***productMass*** profile item
values. The returned value represents CO,,2,, emissions based on these
quantities, using default information regarding the type of feedstock
used and the carbon contents of both the feedstock and product. The
default type of feedstock follows IPCC guidelines and is represented by
the *primaryFeedstock* data item value. The calculation assumes that all
feedstock carbon unaccounted for in the process products is emitted as
CO,,2,,.

Users can override the default carbon content value for both feedstock
and product by using the ***primaryFeedstockCarbon*** and
***productCarbon*** profile item values.

## Specifying multiple feedstocks and products

Users can additionally specify up to three feedstock types as well as
three process by-products. In each case, the calculation uses the
repsective quantities and carbon contents in the balance of carbon
entering and leaving the manufacture process. To specify the quantities
of each feedstock set the appropriate values using the following profile
item values:

  - ***secondaryFeedstockMass*** and ***secondaryFeedstockCarbon***
  - ***tertiaryFeedstockMass*** and ***tertiaryFeedstockCarbon***
  - ***primaryByProductMass*** and ***primaryByProductCarbon***
  - ***secondaryByProductMass*** and ***secondaryByProductCarbon***
  - ***tertiaryByProductMass*** and ***tertiaryByProductCarbon***

### Using default carbon contents

If the carbon contents of the feedstocks or by-products are not known,
users can use default values which follow the IPCC guidelines. In this
case, users can omit the associated carbon-related profile item values
(but must still specify the mass-related values) and must instead
specify the name of the feedstock/by-product using the appropriate
profile item value:

  - ***secondaryFeedstock***
  - ***tertiaryFeedstock***
  - ***primaryByProduct***
  - ***secondaryByProduct***
  - ***tertiaryByProduct***

The value specified must match one of the drill options in the AMEE
subcategory
/business/processes/production/petrochemical/massbalance/carboncontent,
from which AMEE looks up the appropriate value for carbon content. This
category lists a number of petrochemical products and feedstocks as well
as oil- and petroleum-derived fuels which are used as feedstocks in the
petrochemical industry.

**Note**: IPCC suggests two default feedstock types for *ethylene*
production - ethane (for North America, South America and Australia) and
and naphtha (all other continents). AMEE uses ethane by default, but
users can override this and specify naphtha - or another feedstock - if
appropriate.
