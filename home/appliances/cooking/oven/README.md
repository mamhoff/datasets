This methodology contains energy consumption and CO<sub>2</sub> emissions data
associated with the use of domestic ovens. It is based on a hybrid model
drawing on data from both the [MTP](MTP) dataset and the
[BREDEM](http://www.bre.co.uk) model. It uses the former for the typical
energy usages of cooking for a household and the latter to scale this to
the number of people in a household.

To use this methodology, select the fuel type (i.e. electric or gas)
using the ***type*** drill choices. Next set the number of people in the
household using the ***numberOfPeople*** parameter. If calculations are
stored using profiles, this value can be set in the profile
[metadata](metadata). If this value is not specified, a default of 1 is
assumed.

By default, emissions for electric ovens are calculated on the basis on
the emissions intensity of the UK electricity grid. If calculations are
stored using profiles, an alternative country can be specified within
the profile [metadata](metadata). The emission factors for electricity,
based on the country supplied in the profile metadata, can be found in
[here](Electricity_by_country) and
[here](Electricity_by_country_ISO_code). The emissions factor for gas
this taken from [this dataset](Energy_by_Quantity).
