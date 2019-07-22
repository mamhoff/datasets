# 1. Have a single repo, but separate installable datasets

Date: 2019-07-22

## Status

Accepted

## Context

Right now, the datasets from AMEE, exist largely as combinations of:

- an `item_definitions.csv` file, listing what each column means in the data.csv file
- an actual `data.csv` file, listing the data that is referred to in `default.js`
- the `documentation.creole` file, featuring the documentation for the calculation model
- `default.js` the file that is executed to carry out a calculation, using the

This has a few problems:

The `item_definitions.csv` isn't a real csv file, meaning it's a pain to see what's in it
The `creole` format is supported by github, but it's otherwise not very well known, and we assume would be a barrier to contributions
The `data.csv` file, as a csv file, which requires a library that can handle csv files to get data out easily.

Moroever, they need to be run in the AMEE platform. We want to be able require models individually, and re-use the package.json package management infrastructure for tracking dependencies, between datasets, so you only need to `npm install` the model you care about, then make the code as much like working with javascript, and convenient js datastructures as possible, liks JSON.

## Decision

The plan is to take to:

- convert `item_definitions.csv` to an actual csv file
- use this and `data.csv` to generate a `data.json` file
- make a separate `package.json` for individual datasets
- publish the datasets to npm so they can be installed separately, with an predictable API.

## Consequences

We no longer need CSV parsing files. Code relying on the current `item_definitions.csv` format will not be able to consume new datasets.
