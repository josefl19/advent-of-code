/**
 * Puntos conseguidos: 130
 * 3603 ops/s (Más alto es mejor)
 * Complejidad ciclomática: 1 (Más bajo es mejor)
 * Mantenibilidad: 135% (Más alto es mejor)
 */

function wrapping(gifts) {
    let gifts_env = [];
    gifts.forEach(element => {
        let envoltura = '*'.repeat(element.length + 2);
        gifts_env.push(envoltura + '\n*' + element + '*\n' + envoltura);
    });

    return gifts_env;
}