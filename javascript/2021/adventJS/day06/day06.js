function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    var par = []
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j <= numbers.length; j++) {
            if ((numbers[i] + numbers[j]) == result) {
                par.push(numbers[i], numbers[j])
                break
            }
        }

        if (par.length > 0) { break }
    }

    (par.length == 0) ? par = null: par
    return par
}

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]