
function getGiftsToRefill(a1, a2, a3) {
    const gifts = [... new Set([...a1, ...a2, ...a3])];
    let gifts_to_complete = [];

    gifts.forEach(g => {
        let almacenes_sin_regalo = 0;
        if( !a1.includes(g) ) almacenes_sin_regalo++;
        if( !a2.includes(g) ) almacenes_sin_regalo++;
        if( !a3.includes(g) ) almacenes_sin_regalo++;

        if( almacenes_sin_regalo > 1 ) gifts_to_complete.push(g);
    });

    return gifts_to_complete;
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

console.log(gifts);
