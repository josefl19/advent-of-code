# Reto #7: Haciendo inventario de regalos

Nivel de dificultad: **`Medio`**

## Instrucciones

Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de respuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida **si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.**

*Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.*

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

``` javascript
checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
```

## Resultados

Archivo `day08.js`:

| Factor | Obtenido | Observación |
| ------ | ------ | ------ |
| Puntos conseguidos | **40** |  |
| Tiempo de ejecución | **1702 ops/s** | Más alto es mejor
| Complejidad cognitiva | **4** | Más bajo es mejor

Archivo `day08.js`:

| Factor | Obtenido | Observación |
| ------ | ------ | ------ |
| Puntos conseguidos | **10** |  |
| Tiempo de ejecución | **2414 ops/s** | Más alto es mejor
| Complejidad cognitiva | **13** | Más bajo es mejor
