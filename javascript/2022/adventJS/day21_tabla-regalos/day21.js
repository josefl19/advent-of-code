function printTable(gifts) {
    let maxName = Math.max(...gifts.map((g) => g.name.length));
    let maxQty = Math.max(...gifts.map((g) => g.quantity.toString().length));

    let spaceName = maxName > 4 ? maxName : 4;
    let spaceQty = maxQty > 8 ? maxQty : 8;
    
    let borderTop = '+'.repeat(3 + (spaceName  + 2) + (spaceQty + 2));
    let borderBtm = '*'.repeat(3 + (spaceName  + 2) + (spaceQty + 2));
    let header = "| Gift" + ' '.repeat(spaceName - 4) + " | Quantity" + ' '.repeat(spaceQty - 8) + ' |';
    let headerTwo = "| " + '-'.repeat(spaceName) + " | " + '-'.repeat(spaceQty) + ' |';
    let body = "";
    
    gifts.forEach(g => {
        body = body + "| " + g.name + ' '.repeat(spaceName - g.name.length) + " | " + g.quantity + ' '.repeat(spaceQty - g.quantity.toString().length) + " |\n";
    });
    
    return borderTop + '\n' + header + '\n' + headerTwo + '\n' + body + borderBtm;
}

// Tests:
console.log(printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ])
);

/*
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
*/

console.log(printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
  ])
);

console.log(printTable([
    { name: 'Game', quantity: 10000 }
  ])
);

console.log(printTable([
    { name: 'Game', quantity: 1234567890 }
  ])
);

console.log(printTable([
    { name: 'Toy', quantity: 12 },
    { name: 'Mic', quantity: 123 }
  ])  
);