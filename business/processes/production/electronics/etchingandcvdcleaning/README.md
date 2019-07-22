The AMEE category
/business/processes/production/electronics/etchingandcvdcleaning
contains data and methodologies for calculating greenhouse gas emissions
associated with the plasma etching of silicon-containing-materials and
cleaning of the chamber-walls of chemical vapour deposition (CVD) tools
in the semiconductor, LCD and photovoltaic industries.

This category represents tiers 2a and 2b of the IPCC methodology
outlined in [2006 Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_6_Ch6_Electronics_Industry.pdf).

-----

## How to use this category

### Selecting an emissions scenario

To use this category, select the industry sector and process via the
*sector* and *process* drill down choices. The following choices of
process are available:

  - 'etching only' - specifies plasma etching of silicon containing
    materials (*Tier 2b*)

<!-- end list -->

  - 'cvd cleaning only' - specifies cleaning of chemical vapour
    deposition (CVD) tools (*Tier 2b*)

<!-- end list -->

  - 'aggregated' - specifies weighted average emissions from both
    *etching* and *cleaning* processes (*Tier 2a*)

Next, select the gas type using the *gas* drill down choice.

### Specifying activity data

Users can specify four parameters relating to these processes:

  - the quantity of gas used

<!-- end list -->

  - the fraction fed into destructive emissions control technologies

<!-- end list -->

  - the fraction fed into capture/recovery emissions control
    technologies

<!-- end list -->

  - the fraction remaining in the shipping container (the 'heel
    fraction').

Only the quantity used is required in order to return an emissions
calculation. To specify the quantity of gas used, set the ***massUsed***
profile item value.

Calculations within this category also consider a fraction of the
specified gas quantity which remains within the shipping container (the
'heel fraction'). By default, AMEE assumes a heel fraction of 10%. In
order to override this assumption users can specify a different fraction
by setting the ***heelFraction*** profile item value, which should be
expressed as a decimal between 0-1.

In addition, users can incorporate the effects of emissions control
technologies into the greenhouse gas calculation. This is done by
specifying the fraction of the total gas quantity which was used in
conjunction with capture/recovery and destructive emissions control
technologies. To specify destructive emissions control set the
appropriate fraction using ***destroyedFraction*** profile item value.
To specify capture/recovery technologies use the ***capturedFraction***
profile item value similarly (expressed as a decimal between 0-1). AMEE
uses emissions control efficiency factors specific to each technology
and gas type (using [this](Electronics_emissions_control_factors) IPCC
data) to calculate the reduction in emissions and thus the remaining
quantity of emissions.

### Results and calculation

The returned amounts represent the greenhouse gas emissions associated
with the quantity specified. Emissions quantities are returned for both
the primary gas used *and* an number of by-product gas where
appropriate. Six quantities are returned, as follows:

  - ***primaryGas***: the absolute quantity of emissions associated with
    the primary gas
  - ***byProductCF4***: quantity of CF,,4,, emitted as a by-product
    (where appropriate)
  - ***byProductC2F6***: quantity of C,,2,,F,,6,, emitted as a
    by-product (where appropriate)
  - ***byProductC3F8***: quantity of C,,3,,F,,8,, emitted as a
    by-product (where appropriate)
  - ***byProductCHF3***: quantity of CHF,,3,, emitted as a by-product
    (where appropriate)
  - ***CO2e***: CO,,2,,e emissions (all gases converted using the
    appropriate [global warming
    potential](Greenhouse_gases_Global_warming_potentials) and combined
    into a single quantity)

-----

## Notes

### N,,2,,O emissions from CVD cleaning

The US Environmental Protection Agency's guidelines for mandatory
greenhouse gas reporting include an additional methodology for the use
of nitrous oxide (N,,2,,O) in chemical vapour deposition (CVD) cleaning.
This methodology simply assumes that all N,,2,,O used emitted during
this process.

This methodology is available within this category, and can accessed by
specifying 'N2O' as the *gas* drill choice. This choice is only
available in conjunction with the 'cvd cleaning only' *process* drill
choice. There are no emissions control options available with this gas,
but users can use the ***heelFraction*** profile item value to specify
the quantity of N,,2,,O remaining within the shipping container.
