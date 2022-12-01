/**
 * Puntos conseguidos: 131
 * 3615 ops/s (Más alto es mejor)
 * Complejidad ciclomática: 1 (Más bajo es mejor)
 * Mantenibilidad: 159% (Más alto es mejor)
 */
function wrapping(gifts) {
    return gifts.map((element) => {
        let envoltura = '*'.repeat(element.length + 2);
        return envoltura + '\n*' + element + '*\n' + envoltura;
    });
}

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */

