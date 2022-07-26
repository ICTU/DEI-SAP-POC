## Tests
Here we describe the different test cases for natural persons, legal entities and real estate objects that we can query with the various APIs.

Finally, for the carefree real estate use case, we combine those test cases for the different scenarios

## Test subjects

This table contains the social security numbers of test persons for specific situations with which the Personal Records Database API can be tested [code snippet example](https://github.com/ICTU/DEI-SAP-POC/blob/2aac1f969316f7780fed99d85180f4600135d7db/src/rule-spec.js#L11).
social security number | situation
---------------- | :-------
999993847 | parents, partner, children, BAG address, residence under investigation
999992077 | deceased
999993483 | emigrated, residence abroad, secrecy, extensive residence history
999990482 | non-BAG address
000009921 | location description
999993653 | non-Dutch nationality, parents not registered
999995017 | current and historical residence permit
999990408 | authority minor
999994669 | residence history with residence abroad and location description and address correction
999992806 | extensive residence permit history
999993926 | current and multiple ex-partners
999991905 | two ended relationships
999993550 | partner not registered
999990421 | multiple children, registered and not registered

## Test legal entities
Below you will find the KVK numbers (and corresponding legal business form) applicable for our tests [code snippet example](https://github.com/ICTU/DEI-SAP-POC/blob/2aac1f969316f7780fed99d85180f4600135d7db/src/rule-spec.js#L94). Please note that these are not dummy test cases, but existing registrations.
KVK number | trade name | legal form
---------------- | :------- | :-------
27198742 | Stichting ICTU | Stichting
16053535 | SAP Nederland B.V. | BV
78157145 | Digital Ecosystems Institute B.V. | BV

## Test real estate objects
The table below contains the test cases for specific situations with which test scenarios can be performed [code snippet example](https://github.com/ICTU/DEI-SAP-POC/blob/2aac1f969316f7780fed99d85180f4600135d7db/src/rule-spec.js#L138).
test case | object odentification | cadastral designation | postal code | number designation identification | particulars
---------------- | :------- | :------- | :------- | :------- | :-------
1 owner | 76870482670000 | Beekbergen K 4826 | 7361EW 25 | 0200200000003732 | 2x mortgage

## Test scenario's
Of the test cases that we have available for natural persons, legal entities and real estate objects, we formulate test scenarios in the form of user stories.

1. As a buyer **999993926** I want to buy real estate object **Beekbergen K 4826** from seller **999995017**, whereby only the legal capacity for the seller and the buyer are checked [[RULE SPEC] issue #8](https://github.com/ICTU/DEI-SAP-POC/issues/8).
