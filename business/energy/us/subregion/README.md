**Grid electricity methodology. Calculates carbon dioxide (CO<sub>2</sub>),
methane (CH<sub>4</sub>), nitrous oxide (N<sub>2</sub>O) and CO<sub>2</sub>e emissions
associated with the generation of grid electricity. Choices include
eGRID and NERC subregions. United States.**

## Summary

This methodology represents carbon dioxide (CO<sub>2</sub>), methane (CH<sub>4</sub>),
nitrous oxide (N<sub>2</sub>O) and CO<sub>2</sub>e emissions associated with
subregions of the United States electricity grid. The data is based upon
the Greenhouse Gas Protocol [spreadsheet
tool](http://www.ghgprotocol.org/calculation-tools/all-tools) for
purchased electricity, version 4.2. It represents data from the year
2005.

## The methodology

### Emissions model

This methodology is based upon emissions factors which represent the
rate at which emissions occur in relation to quantities of electricity
consumed. Multiplying a quantity of electricity consumed by these
emissions factors results in an estimate of the emissions associated
with that quantity.

Two regional aggregation schemes are represented:

  - *eGRID* containing 26 subregions
  - *NERC (North American Electric Reliability Corporation)* containing
    8 subregions

These regions are not mutually exclusive but overlap - typically one
NERC region may cover several eGrid regions. See the 'gallery' for maps
of the respective regions.

### Model data

The emissions intensity of grid electricity varies according to specfic
grid sub-regions. Each grid sub-region is represented by it's own
characteristic emissions intensity related to the specific mix of
generating technologies employed wihtin each region. 26 eGRID and 8 NERC
regions are represented which are, in-turn, represented by a
characteristic CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O emissions intensities.

### Activity data required

The quantity of electricity generated is required to make a calculation.

The Greenhouse Gas Protocol worksheets additionally provide
functionality for the accounting of electricity usage in shared
facilities. This calculation is based on the proportion of floor area
which is under consideration (e.g. square feet of office space). In this
case the 'responsible' and 'total' areas should also be provided.

### Calculation and result

By default, the quantities returned represent the CO<sub>2</sub>, CH<sub>4</sub>,
N<sub>2</sub>O and CO<sub>2</sub>e emissions associated with the subregion and the
total quantity of energy specified. If values for the 'responsible' and
'total' areas are provided the returned value represents just the
emissions attributable to the area under consdsideration.

-----

## Related methodologies

The direct representation of the US Environmental Protection Agency
eGRID dataset is available. Emissons methodologies are based on various
geographic breakdowns of the United States: [eGRID
region](EPA_eGRID_by_eGRID_region), [NERC
region](EPA_eGRID_by_NERC_region), [state](EPA_eGRID_by_state) and
[Power Control Area](EPA_eGRID_by_Power_Control_Area). These datasets
are up to date with respect to the EPA publications, and include
additional pollutants and transmisson losses.
