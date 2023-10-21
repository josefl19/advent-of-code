function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => b.l - a.l).slice(1).every((box, i) =>
        box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
    );
}

const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
];

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
];

console.log(fitsInOneBox(boxes1)) // true
console.log(fitsInOneBox(boxes)) // false