/**
 * Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.
 * 
 * Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
 * 
 * El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que
 * todavía falta un día.
 * 
 * ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el
 * número de días en negativo -):
 * 
 * Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021.
 */

function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const date_end = new Date('Dec 25, 2021')

    const dif_time = date_end.getTime() - date.getTime()
    const dif_days = dif_time / (24 * 60 * 60 * 1000)

    return Math.ceil(dif_days)
}

const date = new Date('Dec 25, 2021')
console.log(daysToXmas(date)) // 0

const date1 = new Date('Dec 26, 2021')
console.log(daysToXmas(date1)) // -1

const date2 = new Date('Dec 31, 2021')
console.log(daysToXmas(date2)) // -6

const date3 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date3)) // -7

const date4 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date4)) // -7