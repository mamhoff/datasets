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

The `item_definitions.csv` isn't a real csv file, meaning it's a pain to see what's in it, using a number of lightweight CSV viewing tools
The `creole` format is supported by github, but it's otherwise not very well known, and we assume would be a barrier to contributions
The `data.csv` file, as a csv file requires a library that can handle csv files to get information out easily - most languages have this, but some runtimes don't, like javascript in the browser and on the server.

Moroever, they need to be run in the AMEE platform, which while open source, requires you to understand a whole separate code base, just to run some relatively simple calculations.

We want to be able require models individually, and re-use the `package.json` package management infrastructure for tracking dependencies between datasets, so you only need to `npm install` the model you care about.

The goal is to make the code as much like working with common javascript objects, with the minimum number of API methods to learn.

## Decision

The plan is to take to:

- convert `item_definitions.csv` to an actual csv file
- use this and `data.csv` to generate a `data.json` file
- make a separate `package.json` for individual datasets
- publish the datasets to npm so they can be installed separately, with an predictable API.

## Consequences

We no longer need CSV parsing code for look up data in the datasets (although, we keep the original csv files in the datasets, do they can be easily consumed if can _can_ read csv easily)

Code relying on the current `item_definitions.csv` format will not be able to consume new datasets.
