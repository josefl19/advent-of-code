function decorateTree(base) {
    const RULES = {
        'P P': 'P',
        'B P': 'R',
        'R P': 'B',
        'B R': 'P',
        'P B': 'R',
        'P R': 'B',
        'R B': 'P',
    };
    
    let tree = [base];

    while( tree[0].length > 1 ) {
        let row = ''

        for (let i = 0; i < tree[0].length-1; i += 2) {
            const element = tree[0].slice(i, i+3)
            row = row + ' ' + (RULES[element] || element[0]);
        }

        tree.unshift(row.trim());
    }

    return tree;
}

console.log(decorateTree('B P R P'))
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B')) // ['B', 'B B']