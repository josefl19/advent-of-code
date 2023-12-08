class Day03 {
    static findNaughtyStep(original, modified) {
        const getExtraStep = (secMayor, secMenor) => {
            let mayorArray = secMayor.split("");
            let menorArray = secMenor.split("");
    
            for (let i = 0; i < mayorArray.length; i++) {
                if( mayorArray[i] != menorArray[i] ) return mayorArray[i];
            }
        }
    
        let extraStep = '';
        if( original == modified ) return extraStep;
    
        if( original.length > modified.length ) {
            extraStep = getExtraStep(original, modified);
        } else {
            extraStep = getExtraStep(modified, original);
        }

        return extraStep;
    }
}

module.exports = Day03;