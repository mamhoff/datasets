## Grouping elementary flows

The ecoinvent data is provided in three different forms. These loosely
follow the first three phases defined according to the *ISO
Environmental management (LCA) Requirements and guidelines* - [ISO 14040
and 14044](http://www.iso.org/). They are

  - UPR: Unit Process Raw data
  - LCI: Life Cycle Inventory
  - LCIA: Life Cycle Impact Assessment

All of the above forms of the ecoinvent data are provided in [ecospold
format](http://www.ecoinvent.org/database/ecospold-data-format/)

### Unit Process Raw data (UPR)

The ecoinvent database generally contains unit process, non-aggregated
data (i.e. the process data does not consist of sub-processes). However,
inputs and outputs of several distinct unit processes are aggregated if
individual data are not available, individual data are confidential, or
where only cumulative LCI results data is available. Also averaged data
for a country or a region which has been calculated with the available
data from different suppliers are used if they use comparable processes.

### LCI: Life Cycle Inventory

The ecoinvent database offers life cycle inventory (LCI) and life cycle
impact assessment (LCIA) results.

LCI results encompasses data related to environmental (e.g., CO<sub>2</sub> )
and technical (e.g., intermediate chemicals) quantities for all relevant
unit processes within the study boundaries that compose the product
(system). Examples of input and output quantities include inputs of
materials, energy, chemicals and 'other' – and outputs of air emissions,
water emissions or solid waste. Other types of exchanges or
interventions such as radiation or land use can also be included.

### LCIA: Life Cycle Impact Assessment

LCIA assesses the contribution to *impact categories*. These are
environmental areas of concern such as climate change, acidification,
ozone depletion, human toxicity, ecotoxicity, etc.

The *ecoinvent Centre* characterises these in terms of the *Elementary
flow factors* above however, in essence, *Characterisation* calculates
impact potentials based on the LCI results, *Normalisation* provides a
basis for comparing different types of environmental impact categories
(all impacts get the same unit) and *Weighting* implies assigning a
weighting factor to each impact category depending on the relative
importance.

*Life Cycle Impact Assessment methods* provide impact factors for
elementary flows in order to evaluate the environmental effects of a
product or a process, throughout its whole life cycle. These methods
include environmental impact assessment, mid-point and also end-point
effects.

The following LCIA methods are implemented in the *ecoinvent database*
v2.2:

  - CML 2001
  - Cumulative energy demand
  - Cumulative exergy demand
  - Eco-indicator 99
  - Ecological footprint
  - Ecological scarcity 1997 and 2006
  - Ecosystem damage potential - EDP
  - EDIP’97 and 2003 - Environmental Design of Industrial Products
  - EPS 2000 - environmental priority strategies in product development
  - IMPACT 2002+
  - IPCC 2001 (climate change) and IPCC 2007 (climate change)
  - ReCiPe (Midpoint and Endpoint approach)
  - TRACI
  - USEtox
  - Selected Life Cycle Inventory indicators

The ecoinvent Centre emphasise that there is a range of methodological
problems and questions while linking the LCIA methods with the
elementary flows of a database.

To avoid potential confusion ecoinvent have produced a document
describing the implementation of LCIA within the ecoinvent database. The
aim of this document is to provide clear guidelines for the use of LCIA
factors with cumulative results from the ecoinvent database. It also
specifies the general rules for the assignment of factors to the
elementary flows reported in the ecoinvent database.

Further information on the ecoinvent implementation of LCIA methods can
be found within [Implementation of Life Cycle Impact Assessment
Methods](http://www.ecoinvent.org/fileadmin/documents/en/03_LCIA-Implementation-v2.2.pdf)
available from the *ecoinvent Centre* website.

-----

**Ecoinvent in AMEE is a proprietary dataset and is accessed under
subscription. To subscribe, contact sales@amee.com.**
