The Inventory for Carbon and Energy, or *ICE*, is a life cycle database
representing a wide range of building and construction materials,
published by the [Sustainable Energy Research Team
(SERT)](http://people.bath.ac.uk/cj219/) at the University of Bath, UK.

In January 2011, **[Version 2.0](http://people.bath.ac.uk/cj219/)** was
published. This version is represented in AMEE.

## The dataset

The dataset represents over 300 individual materials, including metals
(e.g. aluminium, iron, steel), plastics, insulation, mineral-based
materials (e.g. aggregate, cement, concrete, glass, stone), and organic
materials (soil, timber) as well as manufactured composite materials
such as carpets, photovoltaic cells, roads and windows. Each material is
differentiated into a range of specific subtypes, and, in many cases,
distinct representations of *virgin* versus *recycled* variants of
materials are available.

For each type of material, the database provides measures of the
embodied **energy** (i.e. MJ) and **CO,,2,,** emissions (i.e. kg) which
are related to specific unit quantities of the material. The bulk of the
materials in the dataset are represented as **mass** quantities - that
is, the embodied energy and CO,,2,, emissions are represented on a *per
kg* basis. Calculations are made, in these cases, by multiplying a mass
quantity for the material by the appropriate factors. In some cases,
materials are represented on an **area** basis (i.e. m^2), for example,
carpets, roads and paint (kg \[CO,,2,,\] per m^2). In these cases,
calculations are made by providing area quantities.

A number of materials are represented by slightly extended
methodologies. For example, the methodology for concrete enables the
specification of an additional quantity of reinforcing steel, while
double-glazed windows can be specified as having their air spaces filled
with insulating gases. The several types of timber that are represented
additionally support the **biogenic CO,,2,,** which is embodied in the
production life cycle (i.e. the combustion of off-cuts for energy or
waste disposal purposes). Users of the dataset can choose whether to
consider these biogenic emissions together with fossil-derived CO,,2,,
emissions.

### CO,,2,,e factors

For many materials, unit embodied emissions of CO,,2,,e are also
available. This value represents all greenhouse gases associated with
the production cycle, represented in terms of the equivalent quantity of
CO,,2,, which would exert the same atmospheric warming effect.

In cases where no unit CO,,2,, estimate is available in the dataset, the
authors advise that an approximate 'rule of thumb' for calculating
CO,,2,,e is to increase CO,,2,, emissions by 6%. This value represents
on the embodied CO,,2,,e associated with fuel use (not process related
emissions) and is based on the average fuel mix of UK industry.

## Life cycle analysis boundaries

With a few exceptions, the life cycle analysis boundaries represented
within the ICE database are designated as **cradle-to-gate**. The
authors advise that, even within these boundaries there are many
possible variations that affect the absolute boundaries of each material
analysis. This arises predominantly from the use of secondary data
resources which represent variable boundaries. The ideal boundaries are
described by the authors as follows:

<table>
<thead>
<tr class="header">
<th>Item</th>
<th>Boundaries treatment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><em>Delivered energy</em></td>
<td>All delivered energy is converted into primary energy equivalent, see below.</td>
</tr>
<tr class="even">
<td><em>Primary energy</em></td>
<td>Default method, traced back to the ‘cradle’.</td>
</tr>
<tr class="odd">
<td><em>Primary electricity</em></td>
<td>Included, counted as energy content of the electricity (rather than the opportunity cost of energy).</td>
</tr>
<tr class="even">
<td><em>Renewable energy (inc. electricity)</em></td>
<td>Included.</td>
</tr>
<tr class="odd">
<td><em>Calorific Value (CV)/Heating value of fossil fuel energy</em></td>
<td>Default values are Higher Heating Values (HHV) or Gross Calorific Values (GCV), both are equivalent metrics.</td>
</tr>
<tr class="even">
<td><em>Calorific value of organic fuels</em></td>
<td>Included when used as a fuel, excluded when used as a feedstock, e.g. timber offcuts burnt as a fuel include the calorific value of the wood, but timber used in a table excludes the calorific value of the wooden product.</td>
</tr>
<tr class="odd">
<td><em>Feedstock energy</em></td>
<td>Fossil fuel derived feedstocks are included in the assessment, but identified separately. For example, petrochemicals used as feedstocks in the manufacture of plastics are included. See above category for organic feedstock treatment.</td>
</tr>
<tr class="even">
<td><em>Carbon sequestration and biogenic carbon storage</em></td>
<td>Excluded, but ICE users may wish to modify the data themselves to include these effects.</td>
</tr>
<tr class="odd">
<td><em>Fuel related carbon dioxide emissions</em></td>
<td>All fuel related carbon dioxide emissions which are attributable to the product are included.</td>
</tr>
<tr class="even">
<td><em>Process carbon dioxide emissions</em></td>
<td>Included; for example CO2 emissions from the calcination of limestone in cement clinker manufacture are counted.</td>
</tr>
<tr class="odd">
<td><em>Other greenhouse gas emissions</em></td>
<td>The newest version of the ICE database (2.0) has been expanded to include data for GHGs. The main summary table shows the data in CO2 only and for the GHGs in CO2e.</td>
</tr>
<tr class="even">
<td><em>Transport</em></td>
<td>Included within specified boundaries, i.e. typically cradle-to-gate.</td>
</tr>
</tbody>
</table>

## Changes in version 2.0

[Version 1.6](ICE_Building_Materials_LCA) of the ICE database was
superceded by Version 2.0 in January 2011. The main changes/improvements
are summarised below:

<table>
<tbody>
<tr class="odd">
<td><strong>1</strong></td>
<td>The majority of data has been converted to CO,,2,,e which captures more than just CO,,2,, (e.g. CH,,4,,, PFC's)</td>
</tr>
<tr class="even">
<td><strong>2</strong></td>
<td>The CO,,2,, embodied in timber materials are now separated into <em>fossil</em>- and <em>biogenic</em>- CO,,2,,</td>
</tr>
<tr class="odd">
<td><strong>3</strong></td>
<td>The recycled content approach has been revised to a 3-year average recycled content</td>
</tr>
<tr class="even">
<td><strong>4</strong></td>
<td>Data on cement has been brought in line with British Cement Association data</td>
</tr>
<tr class="odd">
<td><strong>5</strong></td>
<td>ICE cement, mortar and concrete model has been revised and consequently the data is much improved</td>
</tr>
<tr class="even">
<td><strong>6</strong></td>
<td>New, UK specific data for precast concrete</td>
</tr>
<tr class="odd">
<td><strong>7</strong></td>
<td>Aggregates and sand are now estimated from recorded UK industrial fuel consumption data</td>
</tr>
<tr class="even">
<td><strong>8</strong></td>
<td>Asphalt mixtures have been modelled from the binder content and the UK recorded mixing energy</td>
</tr>
<tr class="odd">
<td><strong>9</strong></td>
<td>There is now data on recycled glass</td>
</tr>
<tr class="even">
<td><strong>10</strong></td>
<td>There are some notable improvements in the data for copper, carpets, paint, roads, rubber, sealants and adhesives, soil and stone</td>
</tr>
</tbody>
</table>
