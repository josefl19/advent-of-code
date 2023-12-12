const Day01 = require("./../lib/day01-primer-regalo-repetido/day01")

describe("Test Day01 - Primer regalo repedito", () => {
    test("Test 01 - Return type", () => {
        const day01 = Day01.findFirstRepeated([2, 1, 3, 5, 3, 2]);
        expect(typeof day01).not.toBeUndefined();
        expect(typeof day01).toBe("number");
    });

    test("Test 02", () => {
        const day01 = Day01.findFirstRepeated([2, 1, 3, 5, 3, 2]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(3);
    });

    test("Test 03", () => {
        const day01 = Day01.findFirstRepeated([2, 2]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(2);
    });

    test("Test 04", () => {
        const day01 = Day01.findFirstRepeated([2, 4, 3, 5, 1]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(-1);
    });

    test("Test 05", () => {
        const day01 = Day01.findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(1);
    });

    test("Test 06", () => {
        const day01 = Day01.findFirstRepeated([]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(-1);
    });

    test("Test 07", () => {
        const day01 = Day01.findFirstRepeated([10, 20, 30]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(-1);
    });

    test("Test 08", () => {
        const day01 = Day01.findFirstRepeated([5, 1, 2, 3, 2, 5, 1]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(2);
    });

    test("Test 09", () => {
        const day01 = Day01.findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(10);
    });

    test("Test 10 - Test in description", () => {
        const day01 = Day01.findFirstRepeated([1, 2, 3, 4]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(-1);
    });

    test("Test 11 - Test in description", () => {
        const day01 = Day01.findFirstRepeated([5, 1, 5, 1]);
        expect(day01).not.toBeUndefined();
        expect(day01).toBe(5);
    });
});
