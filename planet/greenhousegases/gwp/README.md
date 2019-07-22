This AMEE category contains data concerning the 'global warming
potential' (GWP) of various greenhouse gases.

Global warming potentials (GWP's) are factors which describe the
relative warming effect of greenhouse gases compared with the benchmark
warming effect of CO2 (i.e. CO2 has, by definition, a GWP of 1). These
factors enable emissions from one or several distinct greenhouse gases
to be expressed in terms of single, standardised unit of warming, i.e.
*the quantity of CO2 which would produce the same effect (CO2e)*:

mass of gas \* GWP = mass of CO2e

For example, methane (CH4) is considered to have a GWP of 21, which is
to say that it has an influence on global warming which is 21 times that
of CO2. An annual CH4 emission of, say, 2000 kg would be equivalent to
42000 kg CO2 (i.e. 2000 x 21 = 42000), and could be expressed as 42000
kg *CO2e*. These types of calculations are used frequently within AMEE
in order to express the emissions of one or several greenhouse gases as
a single quantity.

### GWP's in AMEE

The AMEE category global warming potentials provides reference data for
over 80 greenhouse gases.

As well as providing a lookup reference for users, this category is used
during calculations in many other AMEE categories (i.e. all those which
include non-CO2 emissions calculations) for converting absolute
greenhouse gas emissions into CO2-equivalent emissions.

As can be seen from the data table below, there are several choices of
GWP for each gas. This reflects the fact that different greenhouse gases
remain in the atmosphere for different periods of time, meaning that the
warming effect of each gas - relative to CO2 - changes depending on the
timescale under consideration. The IPCC therefore publishes three
versions of GWP for each gas, representing their relative warming effect
over 20-, 100- and 500-year time horizons. These data, from the 2007
[Fourth Assessment Report
(4AR)](http://www.ipcc.ch/pdf/assessment-report/ar4/wg1/ar4-wg1-chapter2.pdf),
are represented by the ***gwp\_4AR\_20***, ***gwp\_4AR\_100*** and
***gwp\_4AR\_500*** data item values in this category.

AMEE also provides GWP's based upon a *100-year* time horizon published
in the [IPCC Second Assessment Report
(SAR)(1995)](http://unfccc.int/ghg_data/items/3825.php), represented by
the ***gwp\_SAR\_100*** data item value. The use of these values for
calculating CO2e emissions for many gases has become accepted practice
following protocol developed by the [United Nations Framework Convention
on Climate Change](http://unfccc.int/2860.php).

When using GWP's for emissions calculations, AMEE uses a default choice
for each specific gas, represented in this category by the ***GWP***
data item value. The default choices follow [accepted
practice](http://www.ipcc-nggip.iges.or.jp/faq/faq.html#CollapsiblePanelGroup5)
and are consistent with the guidelines published by the UK government
agency
[DEFRA](http://www.defra.gov.uk/environment/business/reporting/conversion-factors.htm)
and the [The World Resources Institute Greenhouse Gas
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools).
Typically, GWP's defined in the SAR represent the default choice, with
those gases only defined subsequently being represented by default
values published in the 4AR.
