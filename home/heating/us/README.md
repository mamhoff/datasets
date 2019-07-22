This category contains data items for describing home heating and air
conditioning in the US based on survey data for 2001. Profile items
return kgCO<sub>2</sub> emission figures for various combinations of the
following:

  - state or region in the US
  - type of home: attached, detached, apartment
  - number of bedrooms
  - heating fuel

## US RECS

The US Residential Energy Consumption Survey
[RECS](http://www.eia.doe.gov/emeu/recs/contents.html) publishes data
based on questionnaires returned by residents in the USA. The most
recently published survey was conducted in 2001 (though 2005 data has
recently become available) and contains data on 4,822 homes. In what
follows, each home in the survey is referred to as an *entry*.

The number of entries limits the options we can offer in AMEE whilst
maintaining reliable statistics. For example, if state, home type,
bedrooms and fuel each have 5 options, then there are 5x5x5x5=625
possible selections, giving an average of 4,822/625 = 7.7 entries per
selection.

The most recent RECS survey was in 2005, but this data is still being
processed and has not yet been published.

### Survey data

The survey data is split up into several data files. The ones used here
are:

  - household characteristics
  - housing unit characteristics
  - space heating
  - energy consumption

For each of these, there is a data file and a codebook text file which
explains the meaning of the codes and abbreviations used in the data
file. The abbreviations in upper case referred to below are those used
in the survey data files.

### State or region

Survey data is available for the four largest states (LRGSTATE):

  - New York State
  - California
  - Texas
  - Florida

For other states, data is only available grouped into 9 larger regions,
referred to as DIVISIONs in the survey.

### Home type, size and age

The home type used in AMEE closely follows the survey's house types
(TYPEHUQ), except that the survey's two types of apartment (based on
size of apartment block) are combined in AMEE.

The number of bedrooms (BEDROOMS) is collapsed into 4 options in AMEE:

  - 0 or 1
  - 2
  - 3
  - 4 or more

The survey does contain details on the age of the homes (YEARMADE), but
the survey doesn't contain enough entries to obtain reliable statistics
on house age in addition to subdivisions of state, size and fuel.

### Fuel

The FUELHEAT column in the "space heating" data file specifies the fuel
used for space heating of the home. There are only sufficient entries to
obtain reliable statistics for natural gas, electricity and fuel oil.
Availability of these options is state dependent, for example, fuel oil
only appears for apartments in New York state.

**Note**: The equivalent of FUELHEAT for water heating is not used in
the AMEE processing just now. It is assumed the fuel for water heating
is the same as for space heating - probably OK in most cases, but not
all. The survey contains details on the heating system used, but there
was insufficient data to obtain reliable statistics on this given the
subdivisions of state, size and fuel.

## Data processing for AMEE

Java classes are used to load, process and output the results into CSV
files. For each possible selection of home options - e.g. texas,
detached, 3 bedrooms, natural gas - the survey data was searched for
matching entries in the survey. Selections with less than 5 matching
entries are deemed to have insufficient data and so will not be used in
AMEE.

For options with sufficient entries, a mean is calculated over all the
matching entries for the amount of fuel used. The mean is weighted using
the survey's weight factors that indicate how common each entry is in US
housing stock. Separate means are calculated for the amount of fuel used
for space heating, water heating and air conditioning.

If a value is zero, then it is not used to calculate the mean and is
classed as a "bad" value.

**Note**: This seems to occur in cases where a different type of fuel is
used for space and water heating, or where a house has no air
conditioning. This will be accounted for properly in future versions of
the processing code.
