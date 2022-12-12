function getCompleted(part, total) {
    const mcm = (a, b) => {
        if (!b) return a;
        return mcm(b, a % b);
    };

    const conv_to_seconds = (time) => {
        return time.split(':').reduce((acc, element, index) => {
            if( index === 0 ) element = element * 3600
            if( index === 1 ) element = element * 60
            return acc + parseInt(element)
        }, 0)
    }

    let comm_mult = mcm(conv_to_seconds(part), conv_to_seconds(total));
    let numerador = (conv_to_seconds(part) / comm_mult).toString();
    let denominador = (conv_to_seconds(total) / comm_mult).toString();

    return numerador + '/' + denominador;
}

// Test
console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5
console.log(getCompleted('03:30:30', '01:10:10')) // '2/3'