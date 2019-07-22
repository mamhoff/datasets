The data in this category is sourced from the [Energy Star
website](http://www.energystar.gov/index.cfm?fuseaction=find_a_product.showProductGroup&pgw_code=CO).
This gives CO2 emissions for US appliances that have achieved the Energy
Star standard.

There are five drill-downs to be specified in this category:
***productType***, ***brand***, ***modelName***, ***modelNumber*** and
***category***. The ***category*** is chosen according to the following
options.

Category A: \<= 148.0 kWh

Category B: \<= 175.0 kWh

Category C: \<= 209.0 kWh

Category D: \<= 234.0 kWh

The user can then specify a ***quantity*** of items as a profile item
value. This value defaults to 1 if none is entered by the user.

## Algorithm

CO2 = Energy usage of appliance per year \* US electricity emission
factor \* quantity
