function shouldBuyFidelity(times) {
    var promo = 250;
    for (let i = 1; i <= times; i++) {
        promo = promo + (12 * Math.pow(0.75, i));
    }

    if ((12 * times) > promo) {
        return true;
    } else {
        return false;
    }
}

console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad