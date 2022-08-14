const pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)

function maxProfit(prices) {
    // Obteniendo directamente los valores ideales para la compra y venta.
    let venta = prices.indexOf(Math.max(...prices));
    let compra = prices.indexOf(Math.min(...prices));
    
    if (compra < venta) {
        return prices[venta] - prices[compra];
    } else {
        var beneficio = -1;
        for (let i = 0; i < prices.length; i++) { // i --> compra
            for (let j = i + 1; j < prices.length; j++) { // j --> venta
                if (prices[j] > prices[i]) {
                    beneficio = beneficio < (prices[j] - prices[i]) ? (prices[j] - prices[i]) : beneficio;
                }
            }
        }
        return beneficio;
    }
}