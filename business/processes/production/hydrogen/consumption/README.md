The AMEE category at business/processes/production/hydrogen/consumption
provides a methodology for calculating greenhouse gas emissions
associated with the production of hydrogen. The methodology is based on
a mass-balance approach taking into consideration the carbon content of
process feedstocks and and carbon or CO<sub>2</sub> recovered for use in other
processes. This methodology is sourced from the guidelines published in
conjunction with the EPA's mandatory greenhouse gas reporting
requirements, and follows approaches described by the IPCC Guidelines
for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)) and
the New Mexico Environment Department Air Quality Bureau *Emissions
Quantification Methods*
[publication](http://www.nmenv.state.nm.us/aqb/ghg/documents/NM_GHGEI_quantif_proced2008.pdf).

To use this category, simply create a profile item - there are no drill
choices.

Next, specify the quantity of feedstock consumed. This can be done in
one of two ways:

  - Directly, by setting the quantity using the ***massFeedstock***
    profile item value.

<!-- end list -->

  - By specifying both the total quantity of hydrogen produced and the
    quantity of feedstock required *per unit of production* using the
    ***massHydrogen*** and ***massFeedstockPerMassHydrogen*** profile
    item values.

In either case, the carbon content of the feedstock needs to be
specified using the ***feedstockCarbon*** profile item value. Users can
additionally specify the fraction oxidation achieved for the feedstock
is appropriate using the ***feedstockOxidation*** profile item value
(decimal fraction, i.e. 0-1), although this defaults to 1 (i.e. 100%
oxidation) if left unspecified. The returned value represents CO<sub>2</sub>
emissions associated with the consumption and properties of feedstock
specified.

## Carbon and CO<sub>2</sub> recovery

User have two options for specifying quantities of recovered carbon
which is diverted for use in other processes. These refer to recovered
*carbon* as opposed to recovered *CO<sub>2</sub>*. In both cases, these are
subtracted from the emissions associated with feedstock consumption. To
specify a quantity of *carbon* recovered, set the ***carbonRecovered***
profile item value. To specify a quantity of CO<sub>2</sub> recovered, set the
***CO2Recovered*** profile item value. Users should be careful to
specify the appropriate value for recovered carbon, the two options
differing by a factor of 3.5.

## Time-dependent calculations

Each of the values described above represent data describing the
performance and processes of a single or multiple facilities. Each of
these values can be expressed in terms of a specific period of time, by
using the *-Unit* and *-PerUnit* profile item designations. In
conjunction, users can set the duration for which the facility was in
operation, by setting the ***operatingDuration*** profile item value. In
this case, AMEE automatically takes into account the time basis of each
quantity.

For example, users may wish to specify their feedstock consumption in
terms of a quantity per day, in which case they could specify;

  - *massFeedstock=100*
  - *massFeedstockUnit=t*
  - *massFeedstockPerUnit=day*

This rate of feedstock consumption will be fed into the AMEE algorithm.
If users specify an operating time for the facility in terms of say
hours (*h*), days (*day*) or years (*year*), for example, AMEE will
handle the necessary conversions and return a value for emissions during
the specified operating time. Users can therefore mix the time bases for
the different quantities specified if desirable.

User should note that, in the case where all values use the same basis
for time, the emissions calculation simply reflects the absolute values
for consumption/recovery specified and is effectively independent of
particular timeframe. This is the default condition of the calculation:
all values are specified on an annual basis with the operating time
assumed to be 1 year. As such, if the ***operatingDuration*** is left
unspecified the returned emission simply reflects the absolute inputs.
