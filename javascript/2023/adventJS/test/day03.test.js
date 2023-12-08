const Day03 = require("./../lib/day03-el-elfo-travieso/day03");

describe("Tests Day03 - El elfo travieso", () => {
    test("Test #01 - Return string as type", () => {
        const day03_type = Day03.findNaughtyStep('', '');
        expect(typeof day03_type).toBe("string");
    });

    test("Test #02", () => {
        const day02_test02 = Day03.findNaughtyStep('abcd', 'abcde');
        expect(typeof day02_test02).toBe("string");
        expect(day02_test02).toEqual('e');
    });

    test("Test #03", () => {
        const day02_test02 = Day03.findNaughtyStep('abcde', 'abcd');
        expect(typeof day02_test02).toBe("string");
        expect(day02_test02).toEqual('e');
    });

    test("Test #04", () => {
        const day02_test02 = Day03.findNaughtyStep('xxxx', 'xxoxx');
        expect(typeof day02_test02).toBe("string");
        expect(day02_test02).toEqual('o');
    });

    test("Test #05", () => {
        const day02_test03 = Day03.findNaughtyStep('stepfor', 'stepor');
        expect(typeof day02_test03).toBe("string");
        expect(day02_test03).toEqual('f');
    });

    test("Test #06", () => {
        const day02_test03 = Day03.findNaughtyStep('iiiii', 'iiiii');
        expect(typeof day02_test03).toBe("string");
        expect(day02_test03).toEqual('');
    });

    test("Test #04 - Test in description problem", () => {
        const day02_test04 = Day03.findNaughtyStep('abcde', 'abcde');
        expect(typeof day02_test04).toBe("string");
        expect(day02_test04).toEqual('');
    });
});
