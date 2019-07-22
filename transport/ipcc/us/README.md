This methodology provides data and a calculation methodology for
calculating greenhouse gas emissions associated with US road vehicles -
specifically cars, motorcycles, and light and heavy duty vehicles which
use **'conventional' fuels** (gasoline, diesel). The methodology is
sourced from the 2006 IPCC [Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/).

-----

## The methodology

### Emissions model

Greenhouse gas emissions associated with vehicle transport arise from
the combustion of fuels. According to this methodology, CO,,2,,
emissions are [directly related](Custom_emissions_factors) to the
quantity of carbon which is oxidised during combustion and therefore
directly proportionate to the quantity of fuel burned and the
concentration of carbon within the particular fuel type. Emissions of
CH,,4,, and N,,2,,O, however, are considered to be related to other
factors such as vehicle type, emissions control standards, frequency of
starts, and distance travelled.

The IPCC methodology for ['mobile' fuel
combustion](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf)
advises therefore that, for the most accurate greenhouse gas emissions
inventory, CO,,2,, emissions should be calculated on the basis of **fuel
consumed**, whereas those of CH,,4,, and N,,2,,O should be calculated
according to **vehicle type**, **distance travelled** and the **number
of cold starts**.

Where only fuel data is available, CO,,2,, emissions - which represent
the majority of vehicular emissions - can be calculated alone. If fuel
quantity data is not available a calculation of CO,,2,, emissions (as
well as CH,,4,, and N,,2,,O) can be made on the basis of distance
travelled if fuel economy data (i.e. km per L fuel) can be specified for
the vehicle under consideration.

CH,,4,, and N,,2,,O emissions are multiplied by the appropriate [global
warming factors](Greenhouse_gases_Global_warming_potentials) in order to
express them in the standardised unit of CO,,2,,e.

Emissions calculated using this methodology represent those attributable
to an entire vehicle. Per passenger emissions can nevertheless be
obtained by specifying the vehicle occupancy.

### Model data

The methodology provides emissions factors for converting fuel
quantities and distances/engine starts into CO,,2,,, and CH,,4,, /
N,,2,,O emissions respectively for a broad range of road transport
scenarios.

**CO,,2,, emissions:** According to IPCC methodology, CO,,2,, emissions
are related only to the quantity and type of fuel consumed and not
related to the properties of the vehicle used. The IPCC provides the
following fuel property data for several types of transport fuel (e.g.
petrol/gasoline, diesel):

  - **CO,,2,, emissions factor**: emissions factors expressed in terms
    of quantities of CO,,2,, emitted *per unit of energy* (*kg per TJ*)
  - **Heating value**: 'heating' or 'calorific' values (net) describing
    the energy content of the fuel (*TJ per Gg*)

These values enable the calculation of CO,,2,, emissions on the basis of
fuel quantities specified in terms of either mass (e.g. kg, tonnes) or
energy (e.g. kWh, TJ). If this type of calculation is required, the
specific data and associated methodology can be found
[here](Transport_fuels_by_IPCC). The present methodology uses these
values together with values for fuel *density* in order to derive
CO,,2,, emissions factors for volumetric fuel quantities (e.g. litres,
gallons). IPCC does not explicitly provide fuel density information, and
therefore this can be specified by the user or otherwise AMEE uses
[density values](Fuel_properties_by_DEFRA) published by the UK
government department [DEFRA](http://ww2.defra.gov.uk/).

CO,,2,, emissions factors are calculated thus:

*Mass CO,,2,, per volume fuel = CO,,2,, per energy quantity,,IPCC,, x
energy quantity per mass fuel,,IPCC,, x fuel density,,user/DEFRA,,*

**Non-CO,,2,, emissions:** CH,,4,, and N,,2,,O emissions are related
primarily to vehicle type, fuel type, emissions control technology,
distance travelled and the number of vehicle starts. IPCC methodology
provides distinct emissions factors for CH,,4,, and N,,2,,O for cars,
light and heavy duty vehicles and motorcycles differentiated by fuel
type (e.g. petrol/gasoline, diesel, CNG, LNG, LPG) and emissions control
technology (e.g. low emission vehicle (LEV), advanced three-way
catalyst, oxidation catalyst). These data are applicable to US road
vehicles. For each vehicle type, CH,,4,, and N,,2,,O emissions factors
are provided in two contexts:

  - **per distance travelled**: mass of emissions associated with each
    unit of distance travelled (e.g. *mg per km*)
  - **per start**: mass of emissions associated with each vehicle start
    (e.g. *mg per start*)

By multipying these emissions factors by the distance travelled and
number of engine starts respectively, an estimate of emissions for each
gas is made.

### Related methodologies

Other IPCC transport categories are available which represent [basic
fuel consumption CO,,2,,](Transport_fuels_by_IPCC) and vehicular
emissions for [European road vehicles](European_road_transport_by_IPCC)
and '[alternatively](US_road_transport_with_alternative_fuels_by_IPCC)'
(cng, lpg, lng, ethanol) fuelled vehicles in the US.

-----

## Using this methodology

### Choosing a specific activity type

To use this methodology, the particular type of vehicle which best
represents the users emissions scenario must be specified by making
selections from each of the ***type***, ***fuel***, ***technology***
drill down choices.

### Activity data required

Calculations can be made in three ways: (1) by specifying *fuel
consumption only*; (2) by specifying *fuel consumed*, *distance
travelled* and the *number of cold engine starts*; or (3) by specifying
*distance* travelled, the *number of cold engine starts* and *vehicular
fuel efficiency* (CO,,2,,, CH,,4,, and N,,2,,O).

**Specifying fuel used only:** Set the volume of fuel consumed using the
***fuelConsumed*** profile item value. This method calculates *CO,,2,,
emissions only*.

**Specifying fuel, distance and starts:** Set the volume of fuel
consumed using the ***fuelConsumed*** profile item value, the distance
travelled using the ***distance*** profile item value, and the number of
cold engine starts using the ***coldStarts*** profile item value. This
method calculates *CO,,2,,, CH,,4,, and N,,2,,O emissions*.

**Specifying distance and fuel efficiency:** Set the distance travelled
using the ***distance*** profile item value, the number of cold engine
starts using the ***coldStarts*** profile item value, and the fuel
efficiency (or fuel 'economy'; e.g. km per L) using the
***fuelEfficiency*** profile item value. This method calculates
*CO,,2,,, CH,,4,, and N,,2,,O emissions*.

**Optional values:** A number of optional parameters can also be
specified which may reflect the required transport scenario more
accurately.

Emissions are implicitly calculated as those attributable to the *entire
vehicle*. If *per passenger* emissions are required, the ***occupancy***
profile item value can be specified, representing the number of
passengers for which emissions are accountable. If no occupancy is
specified, AMEE assumes an occupancy of 1 (equal to total vehicular
emissions).

In order to obtain a volumetric CO,,2,, emissions factor (e.g. mass
CO,,2,, per *volume* fuel) from the IPCC mass-based emissions factors
(i.e. mass CO,,2,, per *mass* fuel) a value for fuel density is
required. This can be specified on a case-by-case basis using the
***density*** profile item value. If left unspecified, the appropriate
value is taken from the latest DEFRA [fuel
properties](Fuel_properties_by_DEFRA) data.

### Calculation and result

The returned emissions quantities for this methodology represent CO,,2,,
only in those cases where only fuel consumption is specified. Otherwise
emissions of CO,,2,,, CH,,4,, and N,,2,,O are returned. The following
discrete **amounts** are returned:

  - ***CO2***: CO,,2,, emissions
  - ***CH4***: CH,,4,, (methane) emissions
  - ***N2O***: N,,2,,O (nitrous oxide) emissions
  - ***CO2e***: CO,,2,,e emissions (all three gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantities for CH,,4,, and N,,2,,O represent *absolute
quantities* rather than CO,,2,,e quantities.

This methodology represents per vehicle emissions and therefore the
returned emissions should be considered - by default - to represent
those attributable to an entire single vehicle, or its sole occupant
depending on the viewpoint of the user (the default value for vehicle
occupancy is 1). If multiple vehicle occupancy is specified - by setting
the occupancy profile item value to a positive value other than 1 -
total vehicular emissions are shared between all occupants and therefore
the returned emissions quantity represents the emissions attributable to
each occupant.

-----
