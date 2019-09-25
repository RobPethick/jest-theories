import format from 'string-format';

const theoretically = (testName, theories, testFunc) => {
    if (!test) {
        throw new Error('Jest test global must be accessible to use jest-theories');
    }
    if (!Array.isArray(theories)) {
        throw new Error('Theories must be an array (was ' + typeof theories + ')');
    }

    theories.forEach((theory, idx) => {
        test(
            format(testName, Object.assign({}, theory, { "$idx": idx, "$no": idx + 1 })),
            testFunc.bind(this, theory)
        );
    });
};

export default theoretically;