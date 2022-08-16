function decodeNumbers(cadena) {
  const validSymbols = {'.':1, ',':5, ':':10, ';':50, '!':100}
  const symbolsCadena = [...cadena]
  let result = 0
  let hasInvalidSymbol = false
  
  symbolsCadena.forEach((s) => {
    if(!Object.keys(validSymbols).includes(s)) {
      hasInvalidSymbol = true
      result = NaN
    }
  })
  
  if(!hasInvalidSymbol) {
    for(let i = 1; i < symbolsCadena.length; i++) {
      if(validSymbols[symbolsCadena[i]] <= validSymbols[symbolsCadena[i-1]]) {
        result = result + validSymbols[symbolsCadena[i-1]]
      } else {
        result = result - validSymbols[symbolsCadena[i-1]]
      }
    }
    
    result = result + validSymbols[symbolsCadena[symbolsCadena.length-1]]
  }
  
  return result
}
  
console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers('.,')) // 4 (5 - 1)
console.log(decodeNumbers(',.')) // 6 (5 + 1)
console.log(decodeNumbers(',...')) // 8 (5 + 3)
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')) // 49 (50 - 1)
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50
console.log(decodeNumbers(';.W')) // NaN