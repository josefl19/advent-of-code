function checkPart(part) {
    let palindromo = true;
    // Palindromo sin eliminar ningun caracter
    for (let i = 0; i <= part.length/2; i++) {
        if( part[i] !== part[(part.length - 1) - i] ) palindromo = false;
    }

    if(palindromo) {
        return true;
    }
    
    for (let i = 0; i <= part.length; i++) {
        let newPieza = part.substring(0, i) + part.substring(i+1, part.length);
        for (let i = 0; i <= newPieza.length; i++) {
            if( newPieza[i] !== newPieza[(newPieza.length - 1) - i] ) {
                palindromo = false;
                break;
            } else {
                palindromo = true;
            }
        }

        if(palindromo) {
            return true;
        }
    }

    return palindromo
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
console.log(checkPart("midu")) // true
