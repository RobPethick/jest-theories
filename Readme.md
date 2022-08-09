# jest-theories

Run one test code with varying inputs to minimise on repition, and maximise on ease of test creation. More tests mean better coverage.

## Installation
npm install jest-theories

## Example 
```
import theoretically from 'jest-theories';

describe('NumberToLongString', () => {
    const theories = [
        {input: 100, expected: 'One hundred'},
        {input: 1000, expected: 'One thousand'},
        {input: 10000, expected: 'Ten thousand'},
        {input: 100000, expected: 'One hundred thousand'},
    ]

    theoretically('the number {input} is correctly translated to string', theories, theory => {
        const output = NumberToLongString(theory.input);
        expect(output).toBe(theory.expected);
    })
});
```

The input string uses [string-format](https://www.npmjs.com/package/string-format) for formatting.

Additionally to the fields available in your theory you can also use `$idx` for the index of the theory and `$no` for the number of the theory.

If you want to do more complex test name creation you can supply a function which takes the parameters of the theory and the index

```
import theoretically from 'jest-theories';

describe('Bigger than 1000', () => {
    const theories = [
        {input: 100, expected: false},
        {input: 1000, expected: false},
        {input: 10000, expected: true},
        {input: 100000, expected: true},
    ]

    theoretically(({input, expected}) => `the number ${input} is ${expected ? '' : 'not'} bigger than 1000`, theories, theory => {
        const output = IsBiggerThan1000(theory.input);
        expect(output).toBe(theory.expected);
    })
});
```

## Eslint
If using `plugin:jest/recommended`, add the following to your eslint config to avoid "jest/no-standalone-expect" errors:

```JavaScript
module.exports = {
  // other stuff
  rules: {
     "jest/no-standalone-expect": [
          "error",
          { additionalTestBlockFunctions: ["theoretically"] },
     ],
  }
}
```


## Inspiration

Inspiration from [jasmine-theories](https://github.com/hypesystem/jasmine-theories) and XUnit.
