/**
 * Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina 
 * que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.
 * 
 * Las monedas para cambio que puedes usar son estas:
 *      coins[0] = 1 céntimo
 *      coins[1] = 2 céntimos
 *      coins[2] = 5 céntimos
 *      coins[3] = 10 céntimos
 *      coins[4] = 20 céntimos
 *      coins[5] = 50 céntimos
 * 
 * Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función 
 * nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
 * 
 * La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas 
 * que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible.
 */

console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

function getCoins(change) {
    let cambio = change;
    let monedas = [0, 0, 0, 0, 0, 0];
    while (cambio > 0) {
        if (cambio >= 50) {
            monedas[5]++;
            cambio = cambio - 50;
        } else if (cambio >= 20) {
            monedas[4]++;
            cambio = cambio - 20;
        } else if (cambio >= 10) {
            monedas[3]++;
            cambio = cambio - 10;
        } else if (cambio >= 5) {
            monedas[2]++;
            cambio = cambio - 5;
        } else if (cambio >= 2) {
            monedas[1]++;
            cambio = cambio - 2;
        } else {
            monedas[0]++;
            cambio = cambio - 1;
        }
    }

    return monedas;
}