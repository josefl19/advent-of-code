function dryNumber(dry, numbers) {
    return [...Array(numbers+1).keys()].map((n) => {
        if(n.toString().includes(dry)) return n
    }).filter(Number);
}

console.log(dryNumber(1, 15)); // [1, 10, 11, 12, 13, 14, 15]
console.log(dryNumber(2, 20)); // [2, 12, 20]
