/**
 * Runs the jest test function with each of the given theories
 * @param description the description of the test
 * @param theories theories passed to the test
 * @param testFunction the test which takes a single theory parameter for each time it is executed
 */
declare function theoretically(description: string, theories: any[], testFunction: (theory: any) => void): void
export default theoretically
