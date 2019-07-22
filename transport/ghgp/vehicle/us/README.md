**Road vehicle emissions methodology. Calculates direct fossil and/or
biogenic carbon dioxide (CO<sub>2</sub>), methane (CH<sub>4</sub>), nitrous oxide
(N<sub>2</sub>O) and carbon dioxide equivalent (CO<sub>2</sub>e) emissions associated
with distance travelled or fuel consumed. Choices include vehicle type,
fuel type and emissions standard. United States.**

## Summary

This methodology represents greenhouse gas emissions associated with the
road transport in the US. The data and calculation methodology is based
on those provided in the Greenhouse Gas Protocol worksheet *GHG
emissions from transport or mobile sources* (version 2.2), published in
June 2011.

-----

## The methodology

### Emissions model

The emissions methodology is based upon emissions factors which describe
the rate at which greenhouse gas emissions are produced during
road-based travel.

As with other leading greenhouse gas data and calculation methodology
sources (e.g. IPCC, EPA), this methodology assumes that CO<sub>2</sub>
emissions are [directly related](Custom_emissions_factors) to the
quantity of carbon which is oxidised during combustion and therefore
directly proportional to the *quantity of fuel* consumed, whereas
emissions of CH<sub>4</sub> and N<sub>2</sub>O are more closely related to other
factors, including distance travelled.

Therefore, in the best case scenario - where both fuel consumption and
distance travelled can be specified - CO<sub>2</sub> emissions are calculated
on the basis of fuel consumption and CH<sub>4</sub> and N<sub>2</sub>O emissions on
the basis of distance travelled. In those cases where only one of fuel
consumption and distance travelled can be specified, however, the
Greenhouse Gas Protocol methodology converts the original (EPA)
emissions factors into the required basis (distance, fuel volume) using
'typical' fuel efficiency data for the vehicles types represented. As
such, calculations of CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O can be made on the
basis of either fuel consumed, distance travelled or - ideally - both.

Since the CO<sub>2</sub> produced during the burning of biofuels in not a net
contributor to atmospheric warming (see
[here](Carbon_dioxide_emissions)), fossil- and biofuel-associated
CO<sub>2</sub> are explicitly defined.

All emissions factors represent emissions associated with *entire
vehicles* (e.g. car, motorcycle), which can be contrasted with similar
transport-related emissions factors which describe emissions on the
basis of *[individual
passengers](Passenger_transport_by_Greenhouse_Gas_Protocol)*. Emissions
for individual passengers can nevertheless be derived by 'sharing'
vehicular emissions across all vehicle occupants, if the occupancy of
the vehicle is known.

Emissions - expressed in terms of mass (e.g. kg) - are calculated by
multiplying these rates (mass emitted per distance or volume \[fuel\];
e.g. kg CO2 per mile or gallon) by a distance (e.g km) travelled or fuel
(e.g. gallon) consumed.

### Model data

The rate at which road transportation produces greenhouse gas emissions
varies with the type of vehicle, depending on factors such as the type
of fuel used (e.g. gasoline/petrol, diesel), and emissions control
standards. Therefore, emissions factors for a broad range of generalised
US road transport scenarios are provided.

A total of 75 specific types of road transport are represented and are
differentiated by vehicle type (i.e. bus, car, light and heavy goods
vehicles, motorcycles), fuel type (gasoline/petrol, diesel, ethanol,
LPG, LNG) and emissions standard. For each vehicle represented, specific
emissions factors are used to calculate greenhouse gas emissions
according to the activity data provided. In total, the following
emissions factors are provided for each vehicle type:

  - *Fossil CO<sub>2</sub>* emissions per unit *distance travelled*
  - *Biogenic CO<sub>2</sub>* emissions per unit *distance travelled*
  - *CH<sub>4</sub>* emissions per unit *distance travelled*
  - *N<sub>2</sub>O* emissions per unit *distance travelled*
  - *CH<sub>4</sub>* emissions per unit *fuel consumed*
  - *N<sub>2</sub>O* emissions per unit *fuel consumed*

CO<sub>2</sub> emissions per unit *fuel consumed* are referenced from
[this](Transport_fuels_by_Greenhouse_Gas_Protocol) related Greenhouse
Gas Protocol methodology. Both fossil- and biogenic-CO<sub>2</sub> emissions
factors are provided although the latter is applicable only to ethanol.

### Activity data required

According to this methodology, greenhouse gas emissions can be
calculated on the basis of *fuel consumed*, *distance travelled* or -
for most accurate results - *both*. Therefore either or both of these
values must be specified in order to make an emissions calculation.

If multiple passengers are under consideration, this number can be
specified, in which case vehicle emissions are shared amongst all
passengers.

### Calculation and result

The returned quantities for this methodology represent CO<sub>2</sub>, biogenic
CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O and CO<sub>2</sub>e emissions associated with the
activity data (distance/fuel) specified. In most cases CO<sub>2</sub> emissions
are entirely represented by fossil CO<sub>2</sub> as only biofuels (in this
case, ethanol) or biofuel blends contain biogenic carbon. CO<sub>2</sub>e
emissions represent all three gases (fossil CO<sub>2</sub> only), converted
using [these](Greenhouse_gases_Global_warming_potentials) global warming
potential)

-----

### Similar methodologies

Other Greenhouse Gas Protocol transport methodologies are available
representing general [transport
fuel](Transport_fuels_by_Greenhouse_Gas_Protocol) consumption, fuels
consumed in [specific transport
contexts](Transport_fuels_with_context_by_Greenhouse_Gas_Protocol),
[freight transport](Freight_transport_by_Greenhouse_Gas_Protocol),
[passenger/public
transport](Passenger_transport_by_Greenhouse_Gas_Protocol), road
transportation in the [UK](UK_road_transport_by_Greenhouse_Gas_Protocol)
(with [heavy
goods](UK_heavy_goods_transport_by_Greenhouse_Gas_Protocol)) and [other
regions](Other_regional_road_transport_by_Greenhouse_Gas_Protocol).
