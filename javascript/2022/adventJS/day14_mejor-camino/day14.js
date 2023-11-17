function getOptimalPath(path) {
  const calculatePath = (path, row, column) => {
    if (row === path.length - 1) return path[row][column];
    
    const leftSize = calculatePath(path, row + 1, column);
    const rightSize = calculatePath(path, row + 1, column + 1);

    return path[row][column] + Math.min(leftSize, rightSize);
  }
  
  let shortestPath = calculatePath(path, 0, 0);
  return shortestPath;
}

console.log(getOptimalPath([[0], [2, 3]])) // 2
// 0 -> 2

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5
// 0 -> 4 -> 1

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
// 1 -> 1 -> 5 -> 1