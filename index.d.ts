/**
 * Runs the jest test function with each of the given theories
 * @param description the description of the test
 * @param theories theories passed to the test
 * @param testFunction the test which takes a single theory parameter for each time it is executed
 */
declare function theoretically<T>(description: string | ((theory: T, index: number) => string), theories: T[], testFunction: (theory: T) => Promise<void> | void): void;
declare namespace theoretically {
    export function only<T>(description: string | ((theory: T, index: number) => string), theories: T[], testFunction: (theory: T) => Promise<void> | void) : void;
}

export default theoretically;
