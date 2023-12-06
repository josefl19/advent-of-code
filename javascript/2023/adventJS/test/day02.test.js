const Day02 = require("./../lib/day02-fabrica-en-marcha/day02")

describe("Tests Day02 - Ponemos en marcha la fábrica", () => {
    test("Test #01 - Return type", () => {
        const day02_type = Day02.manufacture([], []);
        expect(typeof day02_type).toBe("object");
    });

    test("Test #02", () => {
        const day02_test02 = Day02.manufacture(['tren', 'oso', 'pelota'], 'tronesa');
        expect(typeof day02_test02).toBe("object");
        expect(day02_test02).toEqual(["tren", "oso"]);
    });

    test("Test #03", () => {
        const day02_test03 = Day02.manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb');
        expect(typeof day02_test03).toBe("object");
        expect(day02_test03).toEqual([]);
    });

    test("Test #04", () => {
        const day02_test04 = Day02.manufacture(['patineta', 'robot', 'libro'], 'nopor');
        expect(typeof day02_test04).toBe("object");
        expect(day02_test04).toEqual([]);
    });

    test("Test #05", () => {
        const day02_test05 = Day02.manufacture([], 'letras');
        expect(typeof day02_test05).toBe("object");
        expect(day02_test05).toEqual([]);
    });

    test("Test #06 - Test in description problem", () => {
        const day02_test06 = Day02.manufacture(['juego', 'puzzle'], 'jlepuz');
        expect(typeof day02_test06).toBe("object");
        expect(day02_test06).toEqual(['puzzle']);
    });

    test("Test #07 - Test in description problem", () => {
        const day02_test07 = Day02.manufacture(['libro', 'ps5'], 'psli');
        expect(typeof day02_test07).toBe("object");
        expect(day02_test07).toEqual([]);
    });
});
