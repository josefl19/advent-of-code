function getFilesToBackup(lastBackup, changes) {
    let files = [];
    changes.forEach(c => {
        if( c[1] > lastBackup ) files.push(c[0]);
    });

    return [... new Set(files)].sort((fileOne, fileTwo) => fileOne - fileTwo);
}

const lastBackup = 1546300800
const changes = [
  [ 2, 1546300800 ],
  [ 3, 1546301100 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
]

console.log(getFilesToBackup(lastBackup, changes));