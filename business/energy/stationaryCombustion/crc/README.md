**Fuel combustion methodology. Calculates direct carbon dioxide
(CO<sub>2</sub>) emissions associated with stationary fuel combustion and
electricity usage. Applicable to the UK government's Carbon Reduction
Commitment initiative.**

## Summary

This methodology represents CO<sub>2</sub>emissions associated with a variety
of fuels and other energy sources (electricity). It is specifically
applicable to the UK government's [Carbon Reduction
Commitment](http://www.decc.gov.uk/en/content/cms/emissions/crc_efficiency/crc_efficiency.aspx)
(CRC) initiative which commenced in April 2010. The data is sourced from
the list of [conversion
factors](http://www.decc.gov.uk/Media/viewfile.ashx?FilePath=What%20we%20do\\A%20low%20carbon%20UK\\crc\\1_20100122101538_e_@@_crcconversiontable.pdf&filetype=4&minwidth=true)
published in conjunction with the CRC scheme.

-----

## The methodology

The emissions calculation methodology is based upon emissions factors
which relate a energy-, mass- or volume-based quantities of fuel or
electricity with the associated quantities of greenhouse gas emissions.
These values vary between fuels, depending on factors such as the
concentration of carbon and moisture within each fuel type, or, in the
case of electricity, with the mix of fuels used in generation.

### Model data

Each fuel/energy type is represented by a single emissions factor
representing the rate at which CO2 is emissions per quantity of
fuel/energy consumed. 28 fuels for stationary combustion are represented
(plus a further 2 from the original CRC proposal documentation - see
below) as well as grid electricity.

### Activity data required

Calculations are based upon the quantity of fuel/electricity described.
The CRC source documentation does not specify fuel densities or heating
(calorific) values and therefore the basis on which fuel quantities are
specified (energy, mass, volume) is not interchangable for each given
fuel. AMEE follows CRC protocol in requiring quantities to be specified
on a basis according to the particular fuel type chosen. The specific
input required (**energy**, **mass**, **volume**) varies between
fuel/energy types, as follows:

<table>
<thead>
<tr class="header">
<th>massUsed</th>
<th>energyUsed</th>
<th>volumeUsed</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>aviation spirit</td>
<td>blast furnace gas</td>
<td>burning oil/kerosene/paraffin</td>
</tr>
<tr class="even">
<td>aviation turbine fuel</td>
<td>coke oven gas</td>
<td>diesel</td>
</tr>
<tr class="odd">
<td>coking coal</td>
<td>colliery methane</td>
<td>gas oil</td>
</tr>
<tr class="even">
<td>fuel oil</td>
<td>natural gas</td>
<td>lpg</td>
</tr>
<tr class="odd">
<td>industrial coal</td>
<td>other petroleum gas</td>
<td>petrol</td>
</tr>
</tbody>
</table>

|lubricants|refinery miscellaneous|| |waste|sour gas||
|naphtha|electricity|| |petroleum coke|network gas|| |scrap tyres|basic
oxygen steel gas|| |solid smokeless fuel||| |waste solvents||| |cement
industry coal||| |commercial/public sector coal||| |lignite||| |peat|||
|waste oils|||

### Calculation and result

The quantity of fuel/energy consumed is multiplied by the appropriate
emissions factor to calculate the assocaited CO<sub>2</sub> emissions. If a
quantity is provided which is incompatible with the emissions factor
(i.e. energy-, mass- or volume-based as required) a calculation cannot
be made.

-----

## Related methodologies

Other methodologies for fuel combustion, similarly published by the UK
government department [DEFRA](DEFRA_DECC) are available with
[energy](Energy_based_fuel_combustion_by_DEFRA),
[mass](Mass_based_fuel_combustion_by_DEFRA) and
[volume](Volume_based_fuel_combustion_by_DEFRA) based calculations.

Fuel properties, such as density and calorific values - for converting
between energy, mass and volume - can be found
[here](Fuel_properties_by_DEFRA).

-----

## Notes

### Simplification proposal

In June 2011, the UK government published tentative proposals for
[simplifying the
CRC](http://www.decc.gov.uk/media/viewfile.ashx?filetype=4&filepath=11/cutting-emissions/crc-efficiency/2088-simplifying-crc-next-steps.pdf&minwidth=true).
Included in these proposals was the reduction of the list of mandatory
fuels/energy types from 29 to 4. These proposals are due for public
consultation in 2012 with a view to full implementation in 2013.

### Data sources

Six new fuel types (*basic oxygen steel gas*, *cement industry coal*,
*commercial/public sector coal*, *lignite*, *peat* and *waste oils*) are
included with respect to those specified in the previous documentation
(the [Consultation on Draft Order to Implement the Carbon Reduction
Commitment](http://www.decc.gov.uk/Media/viewfile.ashx?FilePath=188_20090312092134_e_@@_crccondoc.pdf&filetype=4)).
Two fuels *not* included in the latest documentation but which appeared
in the previous Draft documentation ('*refinery miscellaneous*',
'*lubricants*') are preserved in this category but should not be
considered compliant with current CRC protocol.
