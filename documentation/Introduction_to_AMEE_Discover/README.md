AMEE *Discover* is designed to help you discover the range of
functionality offered by the [AMEE platform](AMEE_Overview), and to
describe how AMEE can be used most effectively for storing data and
making emissions calculations.

Each page in AMEE *Discover* describes an individual AMEE **category** -
a collection of items representing energy consuming or other activities
which share a common way to calculate their associated greenhouse gas
emissions. AMEE categories contain, for example, different types of car
or train transport, types of fuel or country-specific grid electricity,
electrical appliances, and agricultural or industrial processes.

Since AMEE provides all of the data and models necessary for calculating
emissions in each of these cases (and more\!), you only need to choose
the **data item** of interest (this might represent a car, a building, a
flight or an electrical appliance), then use this as the blueprint for
creating a **profile item** in which you can set **profile item values**
to store usage information (e.g. the number of km travelled, or litres
of fuel used).

So, in summary, *by selecting a category, making drill down choices and
setting profile item values, you can use AMEE to store and process
almost any form of activity that is associated with greenhouse gas
emission*. AMEE *Discover* describes in detail all of the categories
available within the AMEE platform, and lists all drill down choices and
profile item values which can or must be specified.

## Important AMEE concepts

### Algorithms

Algorithms describe how data items and profile items in a category are
used together to produce an emissions calculation.

Most algorithms involve multiplying a user supplied value, e.g. km
travelled, by a data item value, e.g. kgCO<sub>2</sub> per km. However, some
algorithms are more complex and can reference other data items.

### Categories

A category in AMEE is a collection of items representing energy
consuming or other activities which share a common way to calculate
their associated greenhouse gas emissions. AMEE categories contain, for
example, different types of car or train transport, types of fuel or
country-specific grid electricity, electrical appliances, and
agricultural or industrial processes.

Categories are organised in a tree-like structure based around the
primary parent categories business, home, embodied, metadata, planet and
transport. When interacting with AMEE, the full path is used to specify
the use of a particular category (e.g.
/business/energy/stationaryCombustion).

Where similar data exists, perhaps from different sources or
representative of different geographic contexts, alternative categories
are available for the same type of emissions activity.

Every category within AMEE is individually documented in AMEE
*Discover*. This documentation describes the functionality of each
category, the source of any data or calculating methodologies,
relationships with other AMEE categories, and provides instructions for
how to use the category to store relevant data and make emissions
calculations.

### Data items

Data items are the fundamental unit of data organisation and emissions
calculations in AMEE. Data items are organised into categories and
represent distinct types of activity, such as consumption of a
particular type of fuel, a short-haul flight, or the use of an
electrical appliance.

Data items contain two types of information: drill down choices are used
for uniquely specifying a particular item, and **data item values** are
used to store emissions factors and other information relevant to that
item.

When developing an application that uses AMEE, you will usually only
need to work with profile items. However, it is useful to look at data
items if you want to understand what the data means, what assumptions
lie behind it and what you need to ask your user. In fact, documenting
these aspects is the main purpose of AMEE *Discover*.

### Drill down

Drill down choices represent unique identifiers for individual data
items. Drill down choices are used together with category paths to
specify the individual data items with which users wish to work. The
process of making such a choice is termed a 'drill down'.

### Emissions factor

**Emissions factors** are conversion factors used to convert specific
quantities of some activity into associated greenhouse gas emissions.
Emissions factors may be formulated in a number of ways depending on the
requirements of the calculation, and may, for example, calculate
emissions on the basis of an amount of fuel burned, a distance
travelled, or a quantity of manufactured goods processed. Each emissions
factor incorporates specific information regarding the activity it
describes, such as fuel properties (e.g. carbon contents), vehicle fuel
efficiency, or occupancy of passenger vehicles (e.g. buses, planes,
trains)

### Item definition

Every AMEE category contains an **item definition** which defines all
the data and profile item values and algorithm required to make an
emissions calculation for the associated activity. An item definition
comprises a list of **item value definitions** which define the nature
and role of each item value.

Each page in AMEE *Discover* corresponds to a single AMEE category, and
provides a breakdown of the associated item definition in tabular form.

### Item value definition

An **item value definition** is a description of the name, nature and
role of individual components within an item definition. For example,
the item value definition defines whether a particular component is a
drill down choice, a data item value or a profile item value, and
specifies the name, units and default values with which it is to be
associated.

### Profile items

A profile item is always based on a particular data item. A profile item
contains information on a particular aspect of usage or ownership which
can be **stored** and used to **calculate** the associated greenhouse
gas emissions. Once a profile item is created in this way, you can
retrieve the kg CO<sub>2</sub> (or CO<sub>2</sub>e) value at any time in the future.
You can also retrieve the choices and values stored in the profile item
- which represent a **record of consumption** - so you can display this
information to your user when they return to the page at some time in
the future.

### Profile item values

Profile item values are user-supplied consumption on usage or ownership
which is stored in AMEE and used for emissions calculations. For
example, a profile item value may represent the distance driven in in a
single journey, or the electricity used in one year.

AMEE allows you to **track the history** of a profile item. So, for
example, one month a user might tell you they drove 1000 km, then after
being alarmed/ashamed/embarrassed at that month's profile, they might
take the bus more next month and so tell you that they only drove 300
km. The profile history lets you display this information back to the
user, along with consequent reductions (or increases) in carbon dioxide
emission.

### Units

AMEE allows the user to use any dimensionally compatible units when
specifying quantities such as profile item values. For example, when
specifying a volume, users may choose between litres, cubic metres, US
gallons, etc., or switch between metres, kilometers or miles if
describing a distance. AMEE performs all necessary unit conversions in
order to return the correct value for emissions of greenhouse gases.
