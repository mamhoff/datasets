In order to allow open and transparent exchange of LCA data the
*[ecoinvent Centre](Ecoinvent_database)* has developed an open source
data format - **EcoSpold**. This has become one of the standard data
exchange formats for LCI data, and is used within many or most of the
current LCA or eco-design software tools. **EcoSpold** was originally
released in 2000 (version 1) and is currently at version 2
([ecospold-v2](http://www.ecoinvent.org/ecoinvent-v3/ecospold-v2/)).

## EcoSpold data within AMEE

AMEEdiscover provides a human readable form of the ecoinvent data for
subscribed users. Each ecoinvent process, product or service is
represented by three pages in AMEEdiscover: the *unit process raw data*
(UPR), the *life cycle inventory data* (LCI) and the *life cycle impact
assessment methods* (LCIA).

Each AMEEdiscover page contains all of the information contained in each
**EcoSpold** file with the exception of some technical details. The
complete information is available via the AMEE API using the *path*
element shown on each AMEEdiscover page. This means that ecoinvent data
in AMEE can now be accessed through the API in **EcoSpold** format using
a simple http request.

**EcoSpold version 2 is supported by AMEE**.

The structure of each EcoSpold file is shown below:

## Meta information

### Process

  - Reference Function - defines the product or service output to which
    all emissions and requirements are referred
  - Time Period - defines the temporal validity of the dataset
  - Geography - defines the geographical validity of the dataset
  - Technology - describes the technology(ies) of the process
  - Data Set Information - defines the kind of product or process
    system, and the version number of the dataset

### Modelling and validation

  - Representativeness - defines the representativeness of the data used
  - Sources - lists the literature and publications used
  - Validations - lists the reviewers and their comments

### Administrative information

  - Data Entry By - documents the person in charge of implementing the
    dataset in the database
  - Data Generator and Publication - documents the originator and the
    published source of the dataset
  - Persons - lists complete address of all persons mentioned in a
    dataset

## Flow data

### Exchanges

  - Quantifies all flows from technical systems and nature to the
    process and from the process to nature and to other technical
    systems

### Allocations

  - Describes allocation procedures and quantifies allocation factors,
    required for multi-function processes

-----

For further information on the EcoSpold format, please see the
[ecoinvent
website](http://www.ecoinvent.org/database/ecospold-data-format/)
