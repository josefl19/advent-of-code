function distributeGifts(packOfGifts, reindeers) {
    let weightPack = 0;
    let maxWeightReindeers = 0;

    packOfGifts.forEach(gift => {
        weightPack += gift.length;
    });

    reindeers.forEach(r => {
        maxWeightReindeers += ( 2 * r.length );
    });

    // Redondear hacia abajo
    return Math.floor(maxWeightReindeers / weightPack);
}

const packOfGifts = ['game', 'videoconsole', 'computer'] 
const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']

console.log(distributeGifts(packOfGifts, reindeers));    // 2