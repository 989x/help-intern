/*
    --- 目录 ---

    DOCS_JEST 
        Using Matchers
            Common Matchers
            Truthiness
            Numbers
            Strings
            Arrays and iterables
            Exceptions
    DOCS_WORK
        Example
        Doing
    DOCS_THINK
*/



  

/*  
    DOCS_JEST
*/

//  --- Common Matchers ----

// The simplest way to test a value is with exact equality.
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// You can also test for the opposite of a matcher:
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

//  --- Truthiness ---

// For example:
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//  --- Numbers ---

// Most ways of comparing numbers have matcher equivalents.
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

// For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});





/*  
    DOCS_WORK
*/

// __Example
    describe("main destail", () => {
        test(
            "[1 section detail]",
            () => {
                let num = 0
                const _sumthing = generateStrumthing(sum)
                for (let i = 0; i < _sumthing.length; i++ ) {
                    totalSum += _sumthing[i].length
                }
                expect(totalSum).toBe(10)
            },
            timeout,
        )

        test(
            "[2 section detail]",
            ...x
        )
    })

// __Doing

// The simplest way to test a value is with exact equality.
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});