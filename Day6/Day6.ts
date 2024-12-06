
import * as fs from 'fs';
import * as rd from 'readline'
import { Direction, Point, Up, Down, Left, Right} from "./Common";

var array: any[] = [];

var reader = rd.createInterface(fs.createReadStream('.\\input4.txt'))
reader.on("line", (line: string) => {
    array.push(line);
})
// reader.on("close", () => {
// })


console.log("hello")