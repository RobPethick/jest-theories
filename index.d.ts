/**
 * Runs the jest test function with each of the given theories
 * @param description the description of the test
 * @param theories theories passed to the test
 * @param testFunction the test which takes a single theory parameter for each time it is executed
 */
declare function theoretically<T>(description: string, theories: T[], testFunction: (theory: T) => void): void;
export default theoretically;
