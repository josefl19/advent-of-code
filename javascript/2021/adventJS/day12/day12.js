function getMinJump(obstacles) {
    for (let i = 1; i <= Math.max(...obstacles); i++) {
        var salto = i;
        var choque = false;

        while (salto <= Math.max(...obstacles)) {
            if (obstacles.includes(salto)) choque = true;
            salto = salto + i;
        }

        if (!choque) return i;
    }
}

const obstacles = [5, 3, 6, 7, 9];
console.log(getMinJump(obstacles)); // -> 4

const obstacles2 = [2, 4, 6, 8, 10];
console.log(getMinJump(obstacles2)); // -> 7