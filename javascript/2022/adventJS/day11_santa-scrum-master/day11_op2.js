function getCompleted(part, total) {
    const mcm = (a, b) => {
        if (!b) return a;
        return mcm(b, a % b);
    };

    const conv_to_sec = (time) => {
        let time_split = time.split(':');

        return parseInt(time_split[0]) * 3600 +
                parseInt(time_split[1]) * 60 +
                parseInt(time_split[2]);
    }

    let part_to_sec = conv_to_sec(part);
    let total_to_sec = conv_to_sec(total)
    let comm_mult = mcm(part_to_sec, total_to_sec);

    return (part_to_sec / comm_mult).toString() 
            + '/' + (total_to_sec / comm_mult).toString();
}

// Test
console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5
console.log(getCompleted('03:30:30', '01:10:10')) // '2/3'