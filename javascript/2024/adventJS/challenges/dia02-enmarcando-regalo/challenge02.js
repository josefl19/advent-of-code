function createFrame(names) {
    let longestWord = names.reduce((longest, current) => { return current.length > longest.length ? current : longest; }, "");
    let sizeWord = longestWord.length;

    return sizeWord;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']));

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']));

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));