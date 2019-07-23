## What does AMEE do?

AMEE provides a web API for storing, processing and transacting data and
information related to [greenhouse gas
emissions](Carbon_dioxide_emissions).

The idea is that you create a front end web page or application which
takes data from your user - a client, a part of your business, an
individual - and you send that data to AMEE. AMEE serves two main
purposes: it **stores** the data for you and it performs
**calculations** to return the amount of greenhouse gas emissions
associated with that activity. You can then display this information to
your user.

For example, a user might tell you that they drive 1000 km in a large,
diesel car every month. AMEE would store this information and then
return a value telling you that this emits 264.5 kgCO,,2,, per month.
More advanced usage might involve specifying the fuel consumption, the
model of the car, the style of driving, modeling of the emission control
system (catalytic convertor) and profiling changes in usage over time.

## Why use AMEE?

The aim of AMEE is to provide a **common platform** for the aggregation
and measurement of all forms of greenhouse gas emissions. Data and
methodologies for a huge variety of emissions and sources are available
through AMEE, including domestic and commercial heating and appliances,
industrial processes, power generation, transport, construction,
agriculture and waste. This means that virtually any type of energy
consumption or greenhouse gas emitting practice can be modeled in one
place.

The data contained in AMEE represents the net result of an enormous
effort in **research and development** to ensure that it is correct and
the assumptions behind it have been thought through and documented.

Another reason to use AMEE is that the data will be kept **up to date**.
Data such as gas and electricity prices can change from month to month.
Also, the data for consumer goods, such as computers and cars, will
change as technologies advance. If you were to hard code such data into
your application, you would need to keep track of these changes and
update your application regularly. Using AMEE, this will all be taken
care of automatically.

## A simple example

Burning diesel produces 2.6391 kg CO,,2,, for every litre burned. If 20
litres are burned then 2.6391 x 20 = 52.782 kg CO,,2,, will be emitted.

This very simple example illustrates the three basic components of most
emissions calculations:

  - 20 litres - usage information - part of an AMEE profile item.

<!-- end list -->

  - 2.6391 kg CO,,2,,/litre - the emission factor - part of an AMEE data
    item.

<!-- end list -->

  - the calculation - performed by an AMEE algorithm.

The algorithm here is very simple, but most items in AMEE involve much
more complex algorithms, such as calculation of great circle distances,
route finding across a train network or modeling heat flow within a
building.

The AMEE platform not only contains data and calculation methods
covering a huge variety of emissions producing activities, but also
provides a structure for organizing and storing consumption data. These
two components are easily and conveniently brought together enabling the
calculation and aggregation of many types greenhouse gas emissions.

## Where does the data come from?

AMEE contains data and calculating methodologies from numerous sources
including the [IPCC](http://www.ipcc-nggip.iges.or.jp/), the US
[Environmental Protection Agency](http://www.epa.gov/) and [Energy
Information Administration](http://www.eia.doe.gov/) and the UK
government agency [DEFRA](http://www.defra.gov.uk/), as well as the
World Resources Institute (WRI) [Greenhouse Gas
Protocol](http://www.ghgprotocol.org/about-ghgp) which aggregates data
from these and other primary sources. Adherence to the calculating
**methodologies** and established **data standards** specified in these
sources means that AMEE provides support to greenhouse gas emissions
**reporting protocols** such as the WRI Greenhouse Gas Protocol, the
[Global Reporting Initiative](http://www.globalreporting.org/Home) and
the [Carbon Disclosure
Project](https://www.cdproject.net/en-US/Pages/HomePage.aspx).

Other data sources are also used within AMEE to provide for more
specific requirements. For example, AMEE collects updates on the UK
electricity grid fuel-mix every 5 mins from the [Balancing Mechanism
Reporting System](http://www.bmreports.com) in order to calculate the
instantaneous carbon intensity of electricity consumption in the UK.
AMEE also contains data on specific types of vehicles, including models
of car, train and aircraft, and provides energy consumption data for
appliances which can be used as a basis for emissions calculations.

**To learn about the structure of data and calculation methodologies in
AMEE, visit the [Introduction to
AMEEdiscover](Introduction_to_AMEE_Discover) page.**
