function carryGifts(gifts, maxWeight) {
    let saco = "";
    let sizeSaco = 0;

    let sacos = gifts.map((element, index, arr) => {
        if(element.length <= maxWeight) {
            saco = (saco.length == 0) ? element : saco + " " + element;
            sizeSaco = sizeSaco + element.length;

            if(index < (arr.length - 1)) {
                if((sizeSaco + arr[index+1].length) > maxWeight) {
                    let s = saco;
                    saco = "";
                    sizeSaco = 0;
                    return s;
                    
                } 
            } else {
                let s = saco;
                    saco = "";
                    sizeSaco = 0;
                    return s;
            }
        }
    }).filter(x => x !== undefined);

    return sacos;
}

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7));
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4));
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6));
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 9));