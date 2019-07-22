This category handles conversions from a given quantity of fuel or
electricity to kg of CO,,2,,.

## Mass, volume or energy

You have the option of specifying a quantity of fuel combusted as a mass
(e.g. kg or lbs), volume (e.g. litres or gallons) or energy (e.g. kWh or
J). All three options might not be available for all fuels (e.g. litres
of coal) in which case a zero value will be returned. Such cases can be
identified because there will be a zero or missing value for the
emission factor in the data table below.

Notice that conversions between mass, volume and energy can lead to
errors if you misunderstand the data. This is particularly the case for
natural gas. For example, the conversion from mass to volume assumes
[standard temperature and pressure
(STP)](http://en.wikipedia.org/wiki/Standard_conditions_for_temperature_and_pressure).

Another potential pitfall is that combustion results in some energy
being stored in water vapour. In many cases this energy is lost, but
some systems can capture this energy, e.g. a condensing boiler. A
conversion factor from volume (or mass) to energy that *excludes* this
energy (i.e. it is inaccessibly stored in water vapour) is called a net
calorific value (CV) or low heating value (LHV). The case where it is
included is called gross CV or HHV. In the UK, gas consumption quoted in
kWh is almost always calculated on a gross CV basis. The difference
between gross and net CV is typically no more than 10%.

## Electricity

The electricity item in this category reflects the grid intensity of the
United Kingdom by default. If calculations are stored using profiles,
the country can, however, be specified within the profile
[metadata](metadata), in which case the appropriate emission factors are
taken from the [this](Electricity_by_country) dataset.

## Season

Setting the season parameter to one of spring, summer, autumn or winter,
will cause a monthly value to be adjusted according to the factors given
in
[Seasonal\_energy\_adjustment\_factors](Seasonal_energy_adjustment_factors).
