const Day06 = require('../lib/day06-renos-a-prueba/day06');

describe('Tests for Day06 - Los renos a prueba', () => {
    test('Test 01 - Return type', () => {
        const day06_test1 = Day06.maxDistance("");
        expect(day06_test1).not.toBeUndefined();
        expect(typeof day06_test1).toBe("number");
    });

    test('Test 02', () => {
        const day06_test2 = Day06.maxDistance(">>*<");
        expect(day06_test2).toBe(2);
    });

    test('Test 03', () => {
        const day06_test3 = Day06.maxDistance("<<<<<");
        expect(day06_test3).toBe(5);
    });

    test('Test 04', () => {
        const day06_test4 = Day06.maxDistance(">***>");
        expect(day06_test4).toBe(5);
    });

    test('Test 05', () => {
        const day06_test5 = Day06.maxDistance("**********");
        expect(day06_test5).toBe(10);
    });

    test('Test 06', () => {
        const day06_test6 = Day06.maxDistance("<<**>>");
        expect(day06_test6).toBe(2);
    });
});