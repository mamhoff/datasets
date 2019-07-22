This methodology contains energy consumption and CO,,2,, emissions data
associated with the use of domestic cooking hobs and ovens in the United
States.

To use this methodology, select the heat source type (i.e. cooktop, oven
or range) using the ***cookerType*** drill choice and the fuel type
using the ***fuelType*** drill choice. Next set the number of people in
the household using the ***numberOfPeople*** parameter. If calculations
are stored using profiles, this value can be set in the profile
[metadata](metadata). If this value is not specified, a default of 1 is
assumed.

By default, emissions for electric and induction hobs are calculated on
the basis on the emissions intensity of the United States electricity
grid. If calculations are stored using profiles, an alternative country
can be specified within the profile [metadata](metadata). The emission
factors for electricity, based on the country supplied in the profile
metadata, can be found in [here](Electricity_by_country) and
[here](Electricity_by_country_ISO_code). The emissions factor for gas
this taken from [this dataset](Energy_by_Quantity).

**Note:** This category uses US emission factors by default, but in the
absence of usage values for US homes, it assumes values typical for the
UK. As such the provenance of this category is *recommended* rather than
*enterprise*.
