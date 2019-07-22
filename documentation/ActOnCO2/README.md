The UK Government's national, consumer-facing campaign is called "Act on
CO<sub>2</sub>". It uses the AMEE platform, and is available
[here](http://actonco2.direct.gov.uk).

Much of the data used in ActOnCO2 is published in DEFRA/DECC's [GHG
conversion factors
documents](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting/).

## ActOnCO2 version 2

Version 2 of ActOnCO2 added more functionality and a number of new data
categories were added or amended in AMEE. An important difference in v2
is that *all* information entered by the user is stored in AMEE; in v1
only information relevant to the calculation of the CO<sub>2</sub> result was
stored in AMEE.

  - [UK heating](Heating_uk) - the /home/heating category used in v1 is
    now deprecated in favour of /home/heating/uk which employs a new
    algorithmic approach, allowing a more flexible calculation including
    various renewable and insulation options and more detailed return
    values. In ActOnCO2 v1 the user's answers for renewables and
    insulation did not affect the calculation.

<!-- end list -->

  - [Cooking](Cooking) - the /home/appliances/cooking category used in
    ActOnCO2 v1 is now deprecated and replaced by the hob and oven
    subcategories. The electric induction hob has been added for v2.

<!-- end list -->

  - [Entertainment appliances](Entertainment_generic) and
    [computers](Computers_generic) now include a standby item that
    calculates a standby contribution.

<!-- end list -->

  - [Train](Generic_train_transport), [bus](Generic_bus_transport) and
    [taxi](Per_passenger_taxi_transport) now allow users to specify
    journeys by these modes of transport (ActOnCO2 v1 only included
    CO<sub>2</sub> from cars and flights).

<!-- end list -->

  - [Flights](Generic_plane_transport) - an option for passenger class
    was added and flights can be specified between any two airports in
    /transport/plane/generic/airports/countries. Note that this list of
    airports represents all major international cities and so does not
    list every airport for every city. For a more complete list of
    airports (all with IATA codes) see
    /transport/plane/generic/airports/all/countries.

<!-- end list -->

  - [Transport metadata](Transport_metadata) - is used to store
    information about transport that does not contribute to the CO<sub>2</sub>
    result of the profile.

<!-- end list -->

  - [People like you](People_like_you) - contains information obtained
    by averaging across over a million profiles collected in ActOnCO2
    v1.

<!-- end list -->

  - [Actions](Actions) - contains information used to generated the tips
    and actions in ActOnCO2 v2.

## Overrides

To avoid double-counting kgCO<sub>2</sub> from bill data and kgCO<sub>2</sub> inferred
from individual items (heating, lighting and appliances), an override
system is used in ActOnCO2. This only concerns heating, lighting and
appliances and does not involve transport at present.

The description that follows is an overview - see [Results
breakdown](Results_breakdown) for further details on how the results are
calculated and presented to the user.

### Home interim result

The home interim result is displayed as soon as the user has completed
the home section, which is the first section in ActOnCO2. The home
interim result might not be the same as the result for the home section
in the final results section.

By the end of the home section the user has provided details of their
home, the heating system and lighting, and they may have chosen to
provide bill data. They will not have provided any information about
their appliances at this point.

There are three possible cases:

(1) No bill information provided - for home interim result use inferred
(calculated) values for heating + inferred values for lighting

(2) Non-electric heating, bill information provided - use actual bill
(gas, oil, other) values for heating + inferred values for lighting

(3) Electric heating - use elec bill x (inferred elec heating CO<sub>2</sub> +
inferred lighting CO<sub>2</sub>)/(inferred elec heating CO<sub>2</sub> + inferred
lighting CO<sub>2</sub> + 0.683 tonnes CO<sub>2</sub> x no. people in household)

**Note**: point 3 takes account of the fact that the electricity bill
CO<sub>2</sub> will not necessarily equal the inferred elec heating CO<sub>2</sub> +
inferred lighting CO<sub>2</sub> + (0.683 tonnes CO<sub>2</sub> x no. people in
household) \[0.683 tCO<sub>2</sub> is the national average per individual for
electrical appliances\]

In each case the value also needs to be divided by the number of people
in the household if the user selects 'Individual' basis for their
footprint.

### Final result

The final total for the home section is calculated as follows in each
case:

(1) Same as interim.

(2) use actual bill (gas, oil, other) values for heating + scaled value
for lighting. The scaled value is elec bill CO<sub>2</sub> \* inferred lighting
value / (inferred lighting + inferred appliances).

(3) Similar to interim calculation except that "0.683 tonnes CO<sub>2</sub> x
no. people in household" is replaced with the inferred appliances value.

See [Results breakdown](Results_breakdown) for further details.
