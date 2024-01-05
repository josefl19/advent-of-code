class Day23 {
    static organizeChristmasDinner(dishes) {
        let result = [];
        let processed = [];

        for (let i = 0; i < dishes.length; i++) {
            const dish = dishes[i];

            for (let h = 1; h < dish.length; h++) {
                let commonDishes = [];
                const ing_dish01 = dish[h];
            
                for (let j = i + 1; j < dishes.length; j++) {
                    const dishToCompare = dishes[j];

                    for (let k = 1; k < dishToCompare.length; k++) {
                        const ing_dish02 = dishToCompare[k];

                        if(ing_dish01 == ing_dish02) {
                            if(!processed.includes(ing_dish01)) {
                                commonDishes.push(dishToCompare[0]);
                            }
                        }
                    }
                }

                processed.push(ing_dish01);

                if(commonDishes.length > 0) {
                    commonDishes.push(dish[0]);
                    commonDishes.sort();
                    result.push([ing_dish01, commonDishes].flat());
                }
            }
        }
        
        return result.sort();
    }
}

module.exports = Day23;