class Day06 {
    static maxDistance(movements) {
        const movsLeft = [movements.match(/</gm)]
                            .filter(x => x != null)
                            .flat().length;
        const movsRight = [movements.match(/>/gm)]
                            .filter(x => x != null)
                            .flat().length;
        const movsTBD = [movements.match(/\*/gm)]
                            .filter(x => x != null)
                            .flat().length;

        if(movsLeft > movsRight) return movsLeft + movsTBD - movsRight;
        if(movsRight > movsLeft) return movsRight + movsTBD - movsLeft;

        return movsTBD;
    }
}

module.exports = Day06;
