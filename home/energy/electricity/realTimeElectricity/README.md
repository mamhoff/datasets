The carbon intensity of electricity is related to the specific method of
generation used (e.g. coal, gas, nuclear, wind), and therefore the
CO,,2,, emissions associated with national or regional grid electricity
depend on the specific combination of generation methods (the *fuel
mix*) which supply the grid. The fuel mix will change due to variations
in demand and supply.

The fuel mix will vary according to demand because only certain types of
generation methods can be adapted to meet the demand. For example,
fossil fuel generation involving gas and coal can be adjusted relatively
quickly to meet demand whereas most existing nuclear and renewable
generation methods cannot. This means that times of peak demand tend to
be more CO,,2,, intensive (i.e. the kgCO,,2,, per kWh is greater) than
trough times. For this reason, in the UK, electricity is most carbon
intensive during the day and in the winter and least so during the night
and in the summer. Another factor that may affect the fuel mix will be
the maintenance and (de)commissioning of power stations.

## Use of the emission factor

***Note:** Incorrect use of the real time emission factor will lead to
misleading estimates of CO2 savings.*

This emission factor must be used with great care. In particular, it
will almost always give a misleadingly high "face-value" estimate of
potential CO,,2,, savings. For example, let's suppose that the day EF is
0.6 tCO,,2,,/MWh and night EF is 0.4 tCO,,2,,/MWh and that a factory
switches from day to night production so that 1000 MWh of energy
consumption now occurs during the night. The CO2 saving will not be 0.6
x 1000 - 0.4 x 1000 = 200 tCO,,2,, (33%). The reason is that the
appearance of 1000 MWh demand at night will have to be met by increasing
energy generation and this will involve increased gas and coal
generation. The size of the real saving will typically be \<1% and can
in fact be negative.

## Fuel mix

The AMEE category home/energy/electricity/realTimeElectricity contains
*instantaneous* CO,,2,, emissions data for electricity consumption based
on data describing the current grid fuel mix which are updated every
five minutes. At present, AMEE contains such data for the UK national
grid only. AMEE receives data on the instantaneous supply of grid
electricity for the following types of electricity generation:

  - Closed cycle gas turbine (the *CCGT* data item value)

<!-- end list -->

  - Open cycle gass turbine (*OCGT*)

<!-- end list -->

  - Oil (*oil*)

<!-- end list -->

  - Coal (*coal*)

<!-- end list -->

  - Nuclear (*nuclear*)

<!-- end list -->

  - Wind (*wind*)

<!-- end list -->

  - Pump storage (*pumpStorage*)

<!-- end list -->

  - Non-pump storage hydro (*NPSHYD*)

<!-- end list -->

  - Other (*other*)

<!-- end list -->

  - International import: France (*INTFR*)

<!-- end list -->

  - International import: Ireland (*INTIRL*)

AMEE uses this instantaneous fuel mix data, together with specific
CO,,2,, emissions factors associated with each type of generation (by
reference to the category
home/energy/electricity/realTimeElectricity/fuelEmissionFactors), to
calculate a weighted average CO,,2,, emissions factor for each 5 minute
period.

To use this category, create a profile item and set the quantity of
electricity used in the ***energyUsed*** profile item value. The
returned value represents the associated quantity of CO,,2,, emitted
based on the most recent grid fuel mix data.

## UK National Grid Data and RealtimeCarbon.org

The [Balancing Mechanism Reporting System](http://www.bmreports.com)
website is full of information regarding the current state of the
national electricity grid in the UK. A license to use part of this data
has been granted to [Dynamic Demand](http://www.dynamicdemand.co.uk/)
and the [RealtimeCarbon.org](http://RealtimeCarbon.org) project. As part
of this project, this data is stored at regular intervals in the AMEE
API.

The source for the data is a feed which is updated every 5 minutes:
<http://www.bmreports.com/bsp/additional/soapfunctions.php?element=generationbyfueltypetable>.
The feed shows the current mix of the electricity supply, breaking it
down by fuel type. Below is an example of the XML data received:

\<INST AT="2009-07-03 16:35:00" TOTAL="40350"\>

\<FUEL TYPE="CCGT" IC="N" VAL="16415" PCT="40.7"/\>

\<FUEL TYPE="OCGT" IC="N" VAL="0" PCT="0.0"/\>

\<FUEL TYPE="OIL" IC="N" VAL="0" PCT="0.0"/\>

\<FUEL TYPE="COAL" IC="N" VAL="14070" PCT="34.9"/\>

\<FUEL TYPE="NUCLEAR" IC="N" VAL="8365" PCT="20.7"/\>

\<FUEL TYPE="WIND" IC="N" VAL="113" PCT="0.3"/\>

\<FUEL TYPE="PS" IC="N" VAL="298" PCT="0.7"/\>

\<FUEL TYPE="NPSHYD" IC="N" VAL="98" PCT="0.2"/\>

\<FUEL TYPE="OTHER" IC="N" VAL="0" PCT="0.0"/\>

\<FUEL TYPE="INTFR" IC="Y" VAL="991" PCT="2.5"/\>

\<FUEL TYPE="INTIRL" IC="Y" VAL="0" PCT="0.0"/\>

\</INST\>

The INST tag states that the current ‘instantaneous’ profile is produced
for the time 16:35:00 on 3rd July, 2009. It states that the total
generation at this time is 40,350 megawatts.

The FUEL tags show the contribution of each type of fuel to that total.
The less obvious ones include *CCGT* for closed cycle gas turbines,
*OCGT* for open cycle gas turbines, *PS* for pump storage and *NPSHYD*
for non-pump storage hydro. Also listed are imports over the
interconnectors to France (*INTFR*) and Ireland (*INTIRL*). The VAL
attribute is the amount of generation for that fuel type in megawatts,
and PCT gives the percentage of the total.

The Realtimecarbon.org project takes this data and stores it in AMEE
every 5 minutes. AMEE then applies emission factors for each of the
generation methods, and calculates a total CO2 emission for the current
state of the grid. This data is them displayed on the Realtimecarbon.org
website, and is available through their API. It is also stored in the
*massCO2PerEnergy* (kg per kWh) data item value in AMEE, for use as
described above.

## More detail

A technical case study on using this category is available at [the AMEE
API documentation
site](http://my.amee.com/developers/wiki/RealTimeElectricity).

Detailed information on the assumptions and fuel factors can be found in
[this page](UK_electricity_methodology), including how the real time
calculated electricity emission factors relate to the grid average value
published by DEFRA/DECC and available in the Electricity category in
AMEE.
