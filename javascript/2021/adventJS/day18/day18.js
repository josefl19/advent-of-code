function fixFiles(files) {
    const uniqueFiles = [...new Set(files)]
    
    uniqueFiles.forEach((name) => {
      let k = 0
      for(let i = 0; i < files.length; i++) {
        if(files[i] === name) {
          if(k != 0) {
            let strK = "(" + k + ")"
            files[i] = name.concat(strK)
          }
          k++
        }
      }
    })
    
    return files
}

// Pruebas
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']