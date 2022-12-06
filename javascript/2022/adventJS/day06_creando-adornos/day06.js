function createCube(size) {
    let superior = '';
    let inferior = '';

    for (let i = size; i > 0; i--) {
        superior = ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n' + superior;
        inferior = inferior + ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size) + '\n';
    }

    return (superior + inferior).slice(0, -1);
}

const cube = createCube(3)
const cubeOfOne = createCube(1)
const cubeOfTwo = createCube(2)

console.log(cube);
console.log(cubeOfOne);
console.log(cubeOfTwo);