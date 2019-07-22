The AMEE category at /transport/plane/generic/distance allows users to
specify their own **landing-take-off cycle** (a fixed amount per flight)
and **cruise phase** (proportional to distance travelled) emissions
factors for air transport, following a methodology proposed by the GHG
Protocol (worksheet ''CO,,2,, emissions from transport or mobile
sources'', (v1.3)).

Default emissions factors are included reflecting those derived by the
GHG Protocol from [earlier DEFRA
data](http://www.defra.gov.uk/environment/economy/business-efficiency/reporting).

To use this category, use a drill-down to specify the *type* of plane is
*normal* and specify the following profile values for your item:

  - ***distance*** (distance travelled)
  - ***passengers*** (number of passengers you are accounting for)

If you enter only these values, the default takeoff and cruising
emissions factors proposed by the GHGP will be used. You may, however,
override these by specifying your own values using the following profile
items:

  - ***cruising*** (CO,,2,, emissions ''per passenger, per unit
    distance'' for the cruise phase)
  - ***takeOffAndLanding*** (CO,,2,, emissions ''per passenger'' for the
    LTO cycle'')
