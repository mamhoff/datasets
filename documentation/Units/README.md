Please read [Introduction to
AMEEdiscover](Introduction_to_AMEE_Discover) before reading this so that
you understand the concepts of profile items and profile item values.

See [this page](http://my.amee.com/developers/wiki/Units) for a quick
reference on common units available in AMEE.

## Amounts returned by AMEE

Amounts returned by AMEE are usually in units of kilograms of carbon
dioxide, but it is important to consult the documentation on a category
to understand exactly what the returned value represents.

## Profile item values

When setting a profile item value, it is important to specify your units
explicitly. For example, to represent 100 kilometres travelled per
month, you should set distance=100, distanceUnit=km and
distancePerUnit=month. AMEE supports all units present in
[JScience](http://jscience.org).

## Data item values

It is not usually necessary to be concerned with the units used in data
items as AMEE handles unit conversion transparently with profile items,
i.e. AMEE will ensure that the units specified by the user are converted
to match those needed in the algorithm.

All values, units and perUnits are available for inspection via the API
under /data. In most cases, to reduce the possibility of mistranslation,
the units used in AMEE data items are the same as that in the specified
source.

## Supported Units

Many units are supported in AMEE. This list shows the common name for
each unit we support, and in brackets, the name used when sending data
to AMEE. As well as those listed below, many more obscure units are
supported. See the JScience lists of
[SI](http://jscience.org/api/javax/measure/unit/SI.html) and
[Non-SI](http://jscience.org/api/javax/measure/unit/NonSI.html) units
for the complete set.

In addition, the SI prefixes such as Mega (M), Micro (m), Kilo (k), and
so on, are supported.

Note that unit names are case sensitive.

### Mass

  - Grams (g)
  - Kilograms (kg)
  - Metric Tons / Tonnes (t)
  - Ounces (oz)
  - Pounds (lb)
  - Tons (UK imperial) (ton\_uk)
  - Tons (US imperial) (ton\_us)

### Distance

  - Metres (m)
  - Kilometres (km)
  - Feet (ft)
  - Yards (yd)
  - Miles (mi)
  - Nautical Miles (nmi)

### Volume

  - Litres (L)
  - Cubic Metres (m³)
  - Fluid Ounces (UK imperial) (oz\_fl\_uk)
  - Fluid Ounces (US imperial) (oz\_fl)
  - Gallons (UK imperial) (gal\_uk or gallon\_uk)
  - Gallons (US imperial) (gal)

### Energy

  - Kilowatt-Hours (kWh)
  - Joules (J)

### Energy - BTU

  - 39 °F (BTU\_ThirtyNineF)
  - Mean (BTU\_Mean)
  - IT (BTU\_IT)
  - ISO (BTU\_ISO)
  - 59 °F (BTU\_FiftyNineF)
  - 60 °F (BTU\_SixtyF)
  - 63 °F (BTU\_SixtyThreeF)
  - Thermochemical (BTU\_Thermochemical)

Note: These units are based on those defined
[here](http://en.wikipedia.org/wiki/British_thermal_unit). See [this
page](British_thermal_units) for more details on prefixes.

### Energy - Therm

  - 39 °F (thm\_ThirtyNineF)
  - Mean (thm\_Mean)
  - IT (thm\_IT)
  - EC (thm\_ec, alias of thm\_IT)
  - ISO (thm\_ISO)
  - 59 °F (thm\_FiftyNineF)
  - US (thm\_us, alias of thm\_FiftyNineF)
  - 60 °F (thm\_SixtyF)
  - 63 °F (thm\_SixtyThreeF)
  - Thermochemical (thm\_Thermochemical)

Note: These units are based on the BTU units defined above and simply
multiplied by 100,000.

### Time

  - Second (s)
  - Minute (min)
  - Hour (h)
  - Day (day)
  - Week (week)
  - Month (month)
  - Year (year)
