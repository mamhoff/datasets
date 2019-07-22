This methodology models the emissions produced by a home in the UK. It
is based on a cut-down version of
[RdSAP](http://projects.bre.co.uk/sap2005/) and was developed for the UK
government's ActOnCO2 calculator. Information on insulation and
renewable savings was provided by [EST](http://www.est.org.uk).

To make a calculation, the following parameters must be set:

  - ***age*** must be one of "pre 1930", "post 1995" or "1930-1995"

<!-- end list -->

  - ***numberOfBedrooms*** must a number from 0 to 6

<!-- end list -->

  - ***heatingType*** must be set to one of the valid ***heatingType***
    parameters for the specified ***fuel*** in the dataset at
    [/home/heating/uk/heatingTypes](heating_UK_types).

All other parameters do not have to set explicitly. The
***hasNoRenewables*** parameter defaults to true and all other
parameters relating to renewables will be ignored unless it is set to
false. The same is true of the ***hasNoInsulation*** parameter and other
insulation-related parameters.

If calculations are stored using profiles, the number of people in the
household can be specified using the profile [metadata](Metadata)
parameter ***peopleInHousehold***. If so, this value will be used to
determine the energy used for water heating, otherwise water heating
will be determined the ***numberOfBedrooms*** value.

Also in the case of calculations stored using profiles, in addition to
the returned kgCO,,2,, value, the algorithm sets
***spaceHeatingCO,,2,,*** and ***waterHeatingCO,,2,,*** parameters in
units of kgCO,,2,, per year. In some cases (e.g. coal open fires), the
algorithm will assume that the water heating is electric and it will set
***isWaterHeatingElectric*** to true. The algorithm will set
***solarHotWaterEnergySaved*** and
***renewableElectricitySavedCO,,2,,*** in units of kWh per year if the
relevant parameters are set to true.
