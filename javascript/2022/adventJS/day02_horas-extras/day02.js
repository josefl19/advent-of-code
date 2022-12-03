function countHours(year, holidays) {
    let extras = 0;
    holidays.forEach(date => {
        let holiday_date = new Date(date + '/' + year)
        if(holiday_date.getDay() !== 0 && holiday_date.getDay() !== 6) {
            console.log('contando..');
            extras += 2;
        }
    });

    return extras
}

const year = 1985
const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'] // formato MM/DD

console.log(countHours(year, holidays)); // 2 días -> 4 horas extra en el año

