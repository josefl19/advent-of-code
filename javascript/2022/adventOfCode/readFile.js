// const fs = require('fs');
import * as fs from 'fs';

export function getData(file_name) {
    try {
        return fs.readFileSync('javascript/2022/adventOfCode/inputs/' + file_name, 'utf8').split('\n');
    } catch (err) {
        console.error(err);
    }
}