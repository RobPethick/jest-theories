import format from 'string-format';

const _theoretically = (test) => (testNameCreator, theories, testFunc) => {

    if (!test) {
        throw new Error('Jest test global must be accessible to use jest-theories');
    }
    if (!Array.isArray(theories)) {
        throw new Error('Theories must be an array (was ' + typeof theories + ')');
    }

    const isFunctionTestNameCreator = typeof testNameCreator === 'function';

    if (!isFunctionTestNameCreator && typeof testNameCreator !== 'string') {
        throw new Error('Test name creator must be a string or a function')
    }

    for (let idx = 0; idx < theories.length; idx++) {
        const theory = theories[idx]
        const testName = isFunctionTestNameCreator
            ? testNameCreator(theory, idx)
            : format(testNameCreator, Object.assign({}, theory, { "$idx": idx, "$no": idx + 1 }));

        test(
            testName,
            testFunc.bind(this, theory)
        );
    }
};

const theoretically = _theoretically(test);
const only = test.only;
theoretically.only = _theoretically(only);

export default theoretically;