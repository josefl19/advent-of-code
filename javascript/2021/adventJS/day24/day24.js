function checkIsSameTree(treeA, treeB) {
    const decoraciones = (ramaA, ramaB) => {
        if(!ramaA && !ramaB ) {
            return true
        } else if(!ramaA || !ramaB ) {
            return false
        } else {
            return (ramaA.value == ramaB.value && 
                    decoraciones(ramaA.right, ramaA.right) && 
                    decoraciones(ramaA.left, ramaB.left))
        }
    }
     
    return decoraciones(treeA, treeB)
}

// Pruebas
const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}
  
console.log(checkIsSameTree(tree, tree)) // true
  
const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}
  
console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree2)) // true