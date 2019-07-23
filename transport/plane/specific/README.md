The [Specific plane transport](Specific_plane_transport) category
contains data on the greenhouse gas emissions associated with over 140
specific jet, turboprop and military aircraft types. The data and
calculation methodology are sourced from the [EMEP/CORINAIR Emission
Inventory Guidebook
(2007)](http://www.eea.europa.eu/publications/EMEPCORINAIR5/page017.html)
and provides a calculation of CO,,2,, emissions on a *per aircraft*
basis, dependent on flight distance.

## The CORINAIR dataset

The [EMEP/CORINAIR Emission Inventory Guidebook
(2007)](http://www.eea.europa.eu/publications/EMEPCORINAIR5/page017.html)
provides detailed fuel consumption data for numerous specific aircraft
types. This data is broken down by fuel consumption associated with
landing and take off (LTO) phases (taxiing, take off, climb out,
landing) and cruising at altitude. LTO fuel consumption is effectively
constant for each individual flight, but cruise fuel consumption varies
with distance flown and is specified for each aircraft type at specific
flight distance intervals (e.g. 250 km, 500 km, ... 6000 km).

The CORINAIR data shows that, while the total fuel consumed during a
flight is a function of the flight distance, the *rate* at which fuel is
consumed (per km) during the cruise phase is not constant but also
varies with the distance flown. This reflects the additional initial
fuel loading required for longer flights. As such, CORINAIR methodology
recommends that users interpolate between the distance-fuel consumption
datapoints in order to estimate the specific quantity of fuel burned for
a given flight distance.

According to CORINAIR methodology, this fuel consumption is converted
into CO,,2,, emissions by using a CO,,2,, emissions factor of 3.15 (kg
CO,,2,, per kg fuel). This value corresponds to the CO,,2,, emissions
factor for 'jet fuel' specified by the IPCC (1999). This data and
methodology therefore provides a calculation of CO,,2,, emissions on a
*per aircraft* basis, as a function of flight distance.

## Radiative Forcing

Uncertainty over the environmental impact of aircraft emissions arises
from the complexity of atmospheric chemistry, particularly in relation
to the emission of non-CO,,2,, products (e.g. water vapour, contrails,
NO,,x,,) at high altitudes, which is argued to exert a greater global
warming effect compared with similar emissions at ground level. These
effects can be accounted for by using a multiplicative factor called the
Radiative Forcing Index (RFI), which represents the ratio of all
radiative forcing (CO,,2,, + non-CO,,2,, emissions) to that arising from
CO,,2,, emissions only. Estimates for RFI range between 1 and 4 with a
value of 2.7 recommended by the IPCC in 1999. No specific recommended
value was quoted in the most recent IPCC report (2007), and the current
best estimate for RFI is 1.9 ([Sausen et al.
(2005)](http://www.ingentaconnect.com/content/schweiz/mz/2005/00000014/00000004/art00013)).
Following the CORINAIR methodology, AMEE returns values for CO,,2,,
emissions only - i.e. with no RFI applied. Users can elect to
incorporate the RFI in their calculations however - see specific
categories for further details.

**See the relevant subcategories for further details on how to use these
data and methodologies.**
