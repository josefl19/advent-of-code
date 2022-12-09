function checkPart(part) {
    const palindromo = ( word ) => {
        return word === word.split('').reverse().join('');
    }

    if(palindromo(part)) return true;

    for (let i = 0; i <= part.length; i++) {
        let newPieza = part.substring(0, i) + part.substring(i+1);
        if( palindromo(newPieza) ) return true;
    }

    return false;
}

/* Test */
console.log(checkPart("uwu")) // true
console.log(checkPart("ojo")) // true
console.log(checkPart("radar")) // true
console.log(checkPart("orejero")) // true
console.log(checkPart("reconocer")) // true
console.log(checkPart("miidim")) // true
console.log(checkPart("yolooloy")) // true
console.log(checkPart("zzzoonzzz")) // true
console.log(checkPart("midu")) // false