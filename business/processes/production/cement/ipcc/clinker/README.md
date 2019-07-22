The AMEE category business/processes/production/cement/ipcc/clinker
provides a methodology for calculating the emissions associated with
cement production. The methodology is based on the quantity of clinker
produced and represents the *Tier 2* approach described by the IPCC
Guidelines for National Greenhouse Gas Inventories
([NGGIP](http://www.ipcc-nggip.iges.or.jp/public/2006gl/vol3.html)).
This methodology should be used where no information on the consumption
of raw carbonate materials are available, but data on clinker production
is available.

The IPCC *Tier 2* methodology represented herein calculates emissions
based on the quantity and properties of the clinker produced, as well as
an estimate of the emissions associated with the production of cement
kiln dust.

This approach is based on the following assumptions about the cement
industry and clinker production:

1.  The majority of hydraulic cement is either portland cement or a
    similar cement, which requires portland cement clinker
2.  There is a very limited range in the CaO composition of clinker and
    the MgO content is kept very low
3.  Plants are generally able to control the CaO content of the raw
    material inputs and of the clinker within close tolerances
4.  Even where the output of clinker is calculated by a plant rather
    than directly measured, there is generally close agreement between
    the two determination methods when audits are performed
5.  The CaO content of clinker from a given plant tends not to change
    significantly over the years
6.  The main source of the CaO for most plants is CaCO<sub>3</sub> and, at
    least at the plant level, any major non-carbonate sources of CaO are
    readily quantified (see Section 2.2.1.2 below)
7.  A 100 percent (or very close to it) calcination factor is achieved
    for the carbonate inputs for clinker manufacture, including
    (commonly to a lesser degree) material lost to the system as
    non-recycled CKD
8.  Dust collectors at plants capture essentially all of the CKD,
    although this material is not necessarily recycled to the kiln

To use this category, simply create a profile item - there are no drill
choices.

Next, specify the quantity of clinker produced using the
***massClinker*** profile item value. The quantity returned represents
the CO<sub>2</sub> emissions associated with the specified production, assuming
default values for a number of clinker properties and no production of
cement kiln dust.

### Overriding default emissions factor

Users can override the default values for clinker calcium oxide (CaO)
content and the proportion of this CaO which is sourced from carbonates,
which are used to derive the emissions per unit of clinker produced.

The calcining of 1 tonne of limestone (CaCO<sub>3</sub>) produces 0.5603 tonnes
of CaO and 0.4397 tonnes of CO<sub>2</sub>. It follows that the quantity of
CO<sub>2</sub> emitted per tonne of CaO produced is 0.7848 tonnes. By
specifying the proportion of CaO within the clinker, and the proportion
of this CaO which was originally sourced from CaCO<sub>3</sub>, the CO<sub>2</sub>
emissions per unit mass of clinker can be derived.

To set the clinker CaO content, specify a decimal fraction (i.e. 0-1)
using the ***clinkerCaOFraction*** profile item value. If left
unspecified, this value defaults to 0.65 following IPCC guidelines. To
specify the proportion of CaO derived from carbonate minerals, users can
similarly specify a decimal fraction (i.e. 0-1) using the
***carbonateCaOFraction*** profile item value. The latter value defaults
to 1 - i.e. 100% of CaO is assumed to be sourced directly from
carbonates - if left unspecified.

### Cement kiln dust

Users can also specify the some information relating to cement kiln dust
which was not recycled to the kiln. Such dust represents feedstock
'lost' from the basic calculation, and so the emissions associated with
this incompletely calcined dust are accounted for by deriving a
correction factor which is applied to the primary emissions factor.

To incorporate the emissions associated with cement kiln dust, set the
quantity of cement kiln dust not recycled to the kiln using the
***massCementKilnDust*** profile item value. Next, set the fraction
calcination of the dust using the ***cementKilnDustCalcinedFraction***
profile item value. The calculation assumes that the proportion of
original carbonate in the cement kiln dust is the same as in the raw
kiln feed.
