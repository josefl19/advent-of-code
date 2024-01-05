const Day23 = require('../lib/day23-comida-navidad/day23');

describe('Tests for Day23 - La comida de navidad', () => {
    test('Test 1 - Return type', () => {
        const day23_test01 = Day23.organizeChristmasDinner([]);
        expect(day23_test01).not.toBeUndefined();
        expect(typeof day23_test01).toBe('object');
    });

    test('Test 2', () => {
        const day23_test02 = Day23.organizeChristmasDinner([
            ["christmas turkey", "turkey", "sauce", "herbs"],
            ["cake", "flour", "sugar", "egg"],
            ["hot chocolate", "chocolate", "milk", "sugar"],
            ["pizza", "sauce", "tomato", "cheese", "ham"]
        ]);
        
        expect(day23_test02).not.toBeUndefined();
        expect(day23_test02).toStrictEqual([
            [
                "sauce",
                "christmas turkey",
                "pizza"
            ],
            [
                "sugar",
                "cake",
                "hot chocolate"
            ]
        ]);
    });

    test('Test 3', () => {
        const day23_test03 = Day23.organizeChristmasDinner([
            ["fruit salad", "apple", "banana", "orange"],
            ["berry smoothie", "blueberry", "banana", "milk"],
            ["apple pie", "apple", "sugar", "flour"]
        ]);

        expect(day23_test03).not.toBeUndefined();
        expect(day23_test03).toStrictEqual([
            [
                "apple",
                "apple pie",
                "fruit salad"
            ],
            [
                "banana",
                "berry smoothie",
                "fruit salad"
            ]
        ]);
    });

    test('Test 4', () => {
        const day23_test04 = Day23.organizeChristmasDinner([
            ["gingerbread", "flour", "ginger", "sugar"],
            ["glazed ham", "ham", "honey", "sugar", "vinegar"],
            ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
            ["vegetable soup", "carrot", "potato", "onion", "garlic"],
            ["fruit punch", "apple juice", "orange juice", "sugar"]
        ]);

        expect(day23_test04).not.toBeUndefined();
        expect(day23_test04).toStrictEqual([
            [
              "garlic",
              "roast chicken",
              "vegetable soup"
            ],
            [
              "sugar",
              "fruit punch",
              "gingerbread",
              "glazed ham"
            ]
        ]);
    });

    test('Test 5', () => {
        const day23_test05 = Day23.organizeChristmasDinner([
            ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
            ["mashed potatoes", "potatoes", "butter", "milk"],
            ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
            ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]
        ]);

        expect(day23_test05).not.toBeUndefined();
        expect(day23_test05).toStrictEqual([
            [
              "butter",
              "cinnamon rolls",
              "mashed potatoes",
              "turkey stuffing"
            ],
            [
              "cinnamon",
              "cinnamon rolls",
              "pumpkin pie"
            ],
            [
              "flour",
              "cinnamon rolls",
              "pumpkin pie"
            ],
            [
              "sugar",
              "cinnamon rolls",
              "pumpkin pie"
            ]
        ]);
    });

    test('Test 6', () => {
        const day23_test06 = Day23.organizeChristmasDinner([
            ["chicken alfredo", "chicken", "pasta", "parmesan"],
            ["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
            ["pasta salad", "pasta", "olive oil", "tomato"],
            ["tomato soup", "tomato", "basil", "cream"]
        ]);

        expect(day23_test06).not.toBeUndefined();
        expect(day23_test06).toStrictEqual([
            [
              "chicken",
              "chicken alfredo",
              "parmesan chicken"
            ],
            [
              "parmesan",
              "chicken alfredo",
              "parmesan chicken"
            ],
            [
              "pasta",
              "chicken alfredo",
              "pasta salad"
            ],
            [
              "tomato",
              "pasta salad",
              "tomato soup"
            ]
        ]);
    });

    test('Test 7', () => {
        const day23_test07 = Day23.organizeChristmasDinner([
            ["snowflake cookies", "flour", "sugar", "vanilla"],
            ["winter stew", "beef", "carrots", "potatoes"],
            ["holiday punch", "cranberry juice", "orange juice", "sparkling water"],
            ["festive salad", "lettuce", "cranberries", "walnuts"]
        ]);

        expect(day23_test07).not.toBeUndefined();
        expect(day23_test07).toStrictEqual([]);
    });
});