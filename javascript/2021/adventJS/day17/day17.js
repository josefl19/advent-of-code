function countPackages(carriers, carrierID) {
    let paquetes = 0
  
    const flota = (flotilla, encargado) => {
      flotilla.forEach((grupo) => {
        if(grupo[0] === encargado) {
          paquetes += grupo[1]
          if(grupo[2] != []) {
            return grupo[2].forEach((subordinado) => flota(flotilla, subordinado))
          }
        }
      })
    }
    
    const organigrama = flota(carriers, carrierID)
    return paquetes
}
   
// Pruebas
const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15