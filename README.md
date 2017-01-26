Mini project to help get build & test infrastructure in place for javascript libraries. Using ES6, karma, babel-loader, istanbul, and babel-plugin-rewire.

Trying to understand why code coverage calcuation is incorrect. To try this out:

```bash
$ npm install
$ KARMA_SPECS=test/calculator-spec.js,test/ops-spec.js,test/square-spec.js NODE_ENV=test ./node_modules/.bin/karma start
$ KARMA_SPECS=test/calculator-spec.js,test/square-spec.js,test/ops-spec.js NODE_ENV=test ./node_modules/.bin/karma start
```

The first test has 100% code coverage; but the second test only achieves 75% code coverage. I think this has to do with the fact that there are three classes being tested: Operations, Square, and Calculator. Rewiring is being used to substitute mock classes in for testing. In this situation, it is largely unneeded; but the actual problem domain I'm working with has some difficult corner cases and I'm using the mocks to get to those.

Sources:
* `src/calculator.js`: has some math operations
* `src/square.js`: imports calculator to calculate squares
* `src/operations.js`: imports squares to manage collections of operations

Tests:

* `test/calculator-spec.js` doesn't perform any rewiring and just tests `calculator.js`
* `test/square-spec.js` tests `square.js`; using a mock and rewiring `calculator`
* `test/operations-spec.js` tests `operations.js`; rewiring square

