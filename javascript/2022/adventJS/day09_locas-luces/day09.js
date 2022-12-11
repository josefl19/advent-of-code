function countTime(leds) {
    let cambios = 0;
    while( leds.includes(0) ) {
        let leds_turn_on = [];
        cambios++;

        for (let i = 0; i < leds.length; i++) {
            if( leds[i] === 0 ) {
                // Primer foco (depende del ultimo)
                if( i === 0 ) {
                    if( leds[leds.length - 1] === 1 ) {
                        leds_turn_on.push(i)
                    }
                } else {
                    if( leds[i - 1] === 1 ) {
                        leds_turn_on.push(i)
                    }
                }
            }
        }

        if (leds_turn_on.length > 0) {
            leds_turn_on.forEach(e => {
                leds[e] = 1;
            });
        }

        console.log(leds);
    }
    
    return cambios * 7;
}

/* Test */
const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds)); // 7
console.log(countTime([0, 0, 0, 1])); // 21
console.log(countTime([0, 0, 1, 0, 0])); // 28
