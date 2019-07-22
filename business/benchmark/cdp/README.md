**Benchmark dataset. Disclosed emissions and financial intensity metric
for companies reporting to the Carbon Disclosure Project during the
calendar year 2010. Globally applicable.**

## Summary

This dataset describes corporate greenhouse gas emissions and associated
financial intensity metrics as reported to the [Carbon Disclosure
Project](https://www.cdproject.net/en-US/Pages/HomePage.aspx) (CDP). The
data refers specifically to disclosures made during 2010.

-----

## The dataset

This dataset provides a number of metrics which describe the energy and
emissions performance of over 600 companies. The dataset has been
cleansed to normalize all financial metrics to a common set of reference
units (kg/USD) and to remove those companies for which financial metrics
are deemed unreliable (see below). The following types of data are
provided for each company.

1.  Reporting period start date
2.  Reporting period end date
3.  Disclosed emissions for scope 1 activities, *tonnes*
4.  Disclosed emissions for scope 2 activities, *tonnes*
5.  Total energy consumption associated with scope 1 activities,
    *megawatt hours*
6.  Total energy consumption associated with scope 2 activities,
    *megawatt hours*
7.  Scope 2 electricity consumption (scope 2), *megawatt hours*
8.  Scope 2 heat consumption (scope 2), *megawatt hours*
9.  Scope 2 steam consumption (scope 2), *megawatt hours*
10. Scope 2 cooling consumption (scope 2), *megawatt hours*
11. Type of financial metric (e.g. revenue, EBITDA)
12. Emissions intensity per unit financial metric, *kg/USD*
13. Absolute value of financial metric, *USD*

Further explanatory information for some of these data is provided
below.

### Reporting Period

These values - start and end dates - simply represent the precise
calendar year for which the company disclosure is representative.

### Types of financial metric

Under the CDP, companies can choose the basis on which they make a
financial based estimate of emissions intensity. Most companies report
on the basis of revenue (e.g. tonnes of GHGs per unit of *revenue*), but
others use *earnings before tax* (EBITDA), *profit* or other financial
metrics. In some cases, a company will provide multiple intensity
estimates based alternative financial metrics.

### Emissions intensity

All companies for which no estimate of emissions intensity are provided
have been discarded from this dataset. Where estimates of emissions
intensity are present, these have been normalized into a common set of
reference units - kg per USD - to enable easy comparisons between
companies. The original dataset quotes these metrics in a variety of
currencies (USD, GBP, EUR, YEN, etc.), multiples of currencies (e.g.
1000's, 1,000,000's) and a variety of mass units (e.g. kilograms, metric
tonnes).

### Absolute financial intensity values

Since each company provides (1) a total quantity of emissions (in
tonnes), and (2) a measure of emissions per unit of some financial
metric (e.g. revenue, profit), this means that the implied, absolute
value of this metric can be obtained by simply dividing the former by
the latter. This implied value is also availble within this dataset. In
some cases, these implied values do not correspond closely with other
independently available financial data for the respective company,
suggesting that the financial metric has been erroneously calculated. In
these cases, the company's data has been discarded as unreliable.
