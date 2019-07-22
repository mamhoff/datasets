The AMEE category /transport/lgv/ contains data associated with the
greenhouse gas emissions of large goods vehicle transport.

## The basis for large goods emissions calculations

Since large goods vehicles are typically used for the freighting of
goods, an important distinction can be made between the calculation
methodologies available within this category.

### Emissions by distance

Some methodologies estimate emissions on the basis of distance travelled
*only*. In this case, calculations are made on the basis of
distance-based emissions factors (e.g. kg CO<sub>2</sub> per km), and users are
therefore only required to specify a distance value. The returned value
implicitly represents emissions for an entire vehicle journey(s), i.e.
on a *per vehicle* basis. In these cases, large goods vehicles are
treated similarly to other vehicles such as cars or motorcycles.

### Emissions by distance and mass

Other methodologies use data relating to the fuel consumption of
freighting vehicles together with assumptions regarding their typical
freight loading to establish emissions factors which describe emissions
according to a *specific unit of freight transported*. These emissions
factors are of the form *mass CO<sub>2</sub> per distance per mass* (e.g. kg
CO<sub>2</sub> per km per tonne) and therefore require both a distance and a
value for the mass of the freight transported to be specified in order
for a calculation to be made. In these cases, the value returned
represents only the emissions attributable to the quantity of freight
specified, rather than the full vehicle journey.

## Large goods methodologies available through AMEE

### Heavy goods - DEFRA

The AMEE [DEFRA heavy goods vehicles](Heavy_Goods_Defra) category
contains the most recently published
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data on greenhouse gas emissions associated with representative lorry
types in UK. The methodology uses distance-based, *per vehicle*
emissions factors, requiring the user to specify the distance travelled.
This category includes CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O emissions as part of
each calculation users may also specify the percentage loading of
lorries for a more accurate emissions calculation.

### Generic car transport - IPCC

The AMEE [IPCC large goods transport](Generic_large_goods_IPCC) category
contains data on lorry-associated emissions sourced from the IPCC
[Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/). This category contains
data and methodologies for European and US contexts and calculates
emissions on per vehicle basis, using fuel consumption or a combination
of fuel consumption, fuel efficiency and distance. Vehicle types are
organised according to fuel type and emissions control technology.

### Generic car transport - GHG Protocol

The AMEE [GHGP large goods vehicle](Generic_large_goods_vehicle_GHGP)
category contains data on lorry-associated emissions sourced from the
latest World Resources Institute [Greenhouse Gas Protocol
(GHGP)](http://www.ghgprotocol.org/about-ghgp) documentation. This
category includes emissions methodologies for transport in several
geographic contexts, with vehicle types organised according to fuel
type.

### Road freighting

Several freight-based emissions methodologies (i.e. based on distance
and mass) can be accessed via the [Road freighting](Road_freighting)
subcategory, which includes data and methodologies sourced from the
World Resources Institute [Greenhouse Gas Protocol
(GHGP)](http://www.ghgprotocol.org/about-ghgp) and
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
the UK government agency.
