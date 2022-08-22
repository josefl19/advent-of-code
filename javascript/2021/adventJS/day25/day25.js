function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    let mouse = [0,0]
    
    for(let i = 0; i < game.length; i++) {
      for(let j = 0; j < game[i].length; j++) {
        if(game[i][j] == 'm') {
          mouse = [i,j]
        }
      }
    }
    
    if(direction == 'up') {
      mouse[0]--
    } else if (direction == 'down') {
      mouse[0]++
    } else if (direction == 'right') {
      mouse[1]++
    } else {
      mouse[1]--
    }
  
    if((mouse[0] < 0 || mouse[0] > game.length-1) || mouse[1] > game[mouse[0]].length) {
      return false
    } else {
      if(game[mouse[0]][mouse[1]] == '*') {
        return true
      } else {
        return false
      }
    }
}