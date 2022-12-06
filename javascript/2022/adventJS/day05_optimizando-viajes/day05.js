function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let citiesInRange = [...giftsCities].sort(function(a, b){return b-a}).filter(e =>  e <= maxGifts);
    let mayor = 0;

    if( !citiesInRange.length ) {
        return 0;
    } else {
        citiesInRange.forEach((citie, index) => {
            let counter = 1;
            let gifts_counter = citie;
            for (let i = 0; i < citiesInRange.length; i++) {
                if( i === index ) continue;
                counter++;
                if( gifts_counter + citiesInRange[i] <= maxGifts && counter <= maxCities ) {
                    gifts_counter += citiesInRange[i];
                } else {
                    counter--;
                }
            }

            if( gifts_counter > mayor && gifts_counter <= maxGifts ) {
                mayor = gifts_counter;
            }
        })
    }
    
    return mayor
}

// getMaxGifts(giftsCities, maxGifts, maxCities)
console.log(getMaxGifts([12, 3, 11, 24, 5, 7], 20, 3)) // 20
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100
console.log(getMaxGifts([10,15,22,19,33,50,55], 100, 4)) // 98
console.log(getMaxGifts([20,20,20,20,20], 120, 4)) // 80