function createCube(size) {
    let cubo = '';

    for (let i = size; i > 0; i--) {
        cubo = ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n' + cubo + ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size) + '\n'
    }

    return cubo.slice(0, -1)    // Delete last \n
}

const cube = createCube(3)
const cubeOfOne = createCube(1)
const cubeOfTwo = createCube(2)

console.log(cube);
console.log(cubeOfOne);
console.log(cubeOfTwo);