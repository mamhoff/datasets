The AMEE category /transport/train contains several subcategories which
provide emissions methodologies in relation to train transport. All
current train-associated methodologies concern representative train
scenarios and are thus found within the /transport/train/generic
subcategory. Details of each generic subcategory are as follows.

## Specific train types

The AMEE category [Specific train transport](Specific_train_transport)
contains data on greenhouse gas emissions associated with specific types
of passenger train, sourced from the [Rail Safety and Standards
Board](http://www.rssb.co.uk/index.asp). Two subcategories are
available, representing [electric](Specific_electric_trains) and
[diesel](Specific_diesel_trains) trains respectively. The methodology
uses distance-based energy consumption factors, expressed on a
per-passenger basis, together with CO<sub>2</sub> emissions factors for diesel
combustion and electricity consumption. The user is required to specify
the distance travelled as well as other optional parameters.

## Generic train transport

The AMEE [Generic train](Generic_train_transport) category contains data
on greenhouse gas emissions associated with representative passenger
train types in UK, Republic of Ireland and Spain. Sources include the UK
government agency
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm).
The methodology uses distance-based, *per passenger* emissions factors,
requiring the user to specify the distance travelled. Users may
calculate according to single 'one-off' journeys, or by repeated
journeys. This category measures CO<sub>2</sub> emissions only, and should be
considered to represent a useful first point of entry to train-related
emissions. The category is used by the UK Goverment [Act On
CO<sub>2</sub>](http://actonco2.direct.gov.uk/actonco2/home.html) website.

## Generic train transport - DEFRA

The AMEE [DEFRA Generic train transport](Train_generic_Defra) category
contains the most recently published
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
data on greenhouse gas emissions associated with representative
passenger train types in UK. The methodology uses distance-based, *per
passenger* emissions factors, requiring the user to specify the distance
travelled. This category includes CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O emissions
as part of each calculation.

## Generic train transport - GHG Protocol

The AMEE [GHG Protocol generic train](Generic_train_GHGP) category
contains data on greenhouse gas emissions associated with train
transport sourced from the [WRI Greenhouse Gas
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools).
Current subcategories include emissions associated with representative
passenger train types in the specific context of the United States. The
methodology uses distance-based, *per passenger* emissions factors,
requiring the user to specify the distance travelled and number of
passenger. The returned value representing greenhouse gas emissions
attributable to all passengers, inclusive of the greenhouse gases
CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O (expressed as CO<sub>2</sub> equivalent).

## Train freight

The AMEE [Train freight](Train_freight) contains data on the greenhouse
gas emissions associated with the train transportation of freight. The
category currently contains data from the [WRI Greenhouse Gas
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools) in a
number of subcategories. Users are required to specify a distance and
mass for the freight transported, with the returned value representing
greenhouse gas emissions attributable to that quantity, inclusive of the
greenhouse gases CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O (expressed as CO<sub>2</sub>
equivalent).

## Train route

The AMEE category [Train route](Train_Route) contains a methodology for
calculating CO<sub>2</sub> emissions for travel between any two UK train
stations. Users must specify travel departure and destination locations,
as well as a train type which can include a number of specific options.
Emissions are returned on a per-passenger basis, with the distance
calculated according to valid routes on the UK rail network.
