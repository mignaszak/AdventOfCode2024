//npm install @types/node
import * as fs from 'fs';
import * as rd from 'readline'
import { readArray1 } from './Task1';
import { readArray2 } from './Task2';

var array: any[] = [];

var reader = rd.createInterface(fs.createReadStream('.\\input4.txt'))
reader.on("line", (line: string) => {
    array.push(line);
})
reader.on("close", () => {
    var task1 = readArray1(array);
    var task2 = readArray2(array);
    var result: string = `result Task1: ${task1}, result Task2: ${task2}`;
    console.log(result);
})