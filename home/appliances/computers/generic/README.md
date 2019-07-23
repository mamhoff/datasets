## Description

The items in this dataset represent domestic computing equipment. All
items include energy consumed on sleep, suspend and active modes and are
[stock-averaged](Stock_averaged) over recent years given in the
[MTP](MTP) data set. The usage figures are scaled from MTP figures
(6.257 hours/day for desktops and only 2 hours for laptops) to 5.5
hours/day.

Calculations assume a typical usage so you are not required to set any
consumption data but you can provide the ***numberOwned*** parameter
which otherwise defaults to 1.

The conversion from kWh to kgCO<sub>2</sub> uses the kgCO<sub>2</sub> per kWh figure
for UK grid electricity. If calculations are stored using profiles, an
alternative country can be specified within the profile
[metadata](metadata).

## Standby

Also in the case that calculations are stored using profiles, the
contribution due to standby can be calculated by creating a profile item
with drill down ***device***=*standby* and setting the ***onStandby***
parameter to one of never,sometimes,mostly,always.

The standby calculation works by summing the kgCO<sub>2</sub> values for all
other profile items in the category and then multiplying it by a factor
determined by the value of the ***onStandby*** parameter:

<table>
<thead>
<tr class="header">
<th>onStandby</th>
<th>factor</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>never</td>
<td>-0.05</td>
</tr>
<tr class="even">
<td>sometimes</td>
<td>0</td>
</tr>
<tr class="odd">
<td>mostly</td>
<td>0.05</td>
</tr>
<tr class="even">
<td>always</td>
<td>0.08</td>
</tr>
</tbody>
</table>

The standby amount is added to the returned total for that category. The
kgCO<sub>2</sub> values for the individual profile items are not altered.

**Note:** Standby calculations are only valid when storing calculations
within profiles.
