The data items in the /metadata/actonco2/actions category contain
information used to generate actions and in tips in ActOnCO2 v2. This
information is used by client-side code (sometimes referred to as
middleware) to decide when a particular tip/action should be triggered
and what information should be displayed to the user.

## Profile item values

If an action is triggered then the client-side code will create a
profile item in AMEE. The user can then select a subset of these actions
which they wish to carry out, in which case ***isSelected*** is set to
true on these profile items. Once a user has carried out an action
''isDone'' should be set to true.

## Conditions

An action will be displayed if three conditions are met:
***condition1***, ***condition2*** and ***condition3***. The three
conditions should be combined with a boolean AND operator (i.e. they all
have to be met) or, if ***useOr*** is set to true, with a boolean OR
operator (i.e. only one condition needs to be met).

Conditions are specified in either two or three colon-delimited parts of
the form:

category:drill condition:profile item value condition

though the third part is optional.

### Condition examples

/home/heating/uk:type=\*old\*

means that the condition is met if a profile item exists in the
/home/heating category with the drill down option ''type'' set to a
value containing the word old.

\!/home/energy/uk/price:EMPTY

means the condition is met if the /home/energy/uk/price category is not
empty, i.e. it contains one or profile items. The exclamation mark (\!)
indicates the NOT boolean operator should be applied.

/metadata::greenTariff=yes

means that the condition is met if any profile item in /metadata has the
''greenTariff' profile item set to yes.

/home/heating/uk:type=\*house\*|\*bungalow\*|\*maisonette\*

means that the condition is met if a profile item in /home/heating
exists with the drill down option ''type'' is set to value that contains
house or bungalow or maisonette.
