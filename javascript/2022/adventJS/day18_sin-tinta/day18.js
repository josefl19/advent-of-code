function dryNumber(dry, numbers) {
    let codes = [];
    for (let i = 1; i <= numbers; i++) {
        if(i.toString().includes(dry)) codes.push(i);
    }

    return codes;
}

console.log(dryNumber(1, 15)); // [1, 10, 11, 12, 13, 14, 15]
console.log(dryNumber(2, 20)); // [2, 12, 20]
