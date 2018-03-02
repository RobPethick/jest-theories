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



