## Description

The items in this dataset represent domestic kitchen equipment.

Items for "wet" appliances represent energy expenditure in kWh per
cycle. A "cycle" is one load of washing in a washing machine or running
a dishwasher once. Calculations for wet appliances require a
***cycleRate*** value to be set - this is the number of cycles in a
given period of time, e.g. per month.

Items for "cold" appliances represent energy expenditure in kWh per
year, because these appliances are assumed to be left switched on
continuously. ***cyclesPerMonth*** does *not* need to be set for cold
appliances.

Items representing microwaves and kettles represent energy expenditure
in kWh for typical annual usage, and therefore ***cyclesPerMonth*** also
does *not* need to be set. Annual usage is based on the number of
persons in the household, which is considered to be an average of 2.4 by
default.

By default, emissions are calculated on the basis on the emissions
intensity of the UK electricity grid. If calculations are stored using
profiles, an alternative country can be specified within the profile
[metadata](metadata) as can the number of people in the household (with
which kettle and microwave CO<sub>2</sub> emissions will scale accordingly).
