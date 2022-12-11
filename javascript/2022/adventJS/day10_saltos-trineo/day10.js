function checkJump(heights) {
    let max_heigth = Math.max(...heights);
    let pos_heigth_max = heights.findIndex((e) => e === max_heigth);

    // Sin caida
    if( pos_heigth_max === heights.length - 1 || pos_heigth_max === 0 ) return false;

    // Checar subida
    for (let i = 1; i <= pos_heigth_max; i++) {
        if( heights[i - 1] > heights[i] ) return false;
    }

    // Checar bajada
    for (let i = pos_heigth_max + 1; i < heights.length; i++) {
        if( heights[i - 1] !== heights[i]  ) {
            if( heights[i - 1] <= heights[i] ) return false;
        }
    }
    
    return true;
}

// Test:
const heights = [1, 3, 8, 5, 2]
console.log(checkJump(heights)); // true

const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)); // false

console.log(checkJump([2, 2, 2, 2])); // false
console.log(checkJump([1, 2, 3])); // false
console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])); // true
console.log(checkJump([1, 2, 3, 1, 3, 1])); // false
console.log(checkJump([1, 2, 2, 2, 1])); // true
console.log(checkJump([2, 2, 2, 2])); // false
