//npm install @types/node
import * as fs from 'fs';
import * as rd from 'readline'

function isLineValid(splitted: string[]) {
    var i: number = 0;
    var lineValid = true;
    var direction: string = getDirection(Number(splitted[i]), Number(splitted[i + 1]));
    while (lineValid && i < splitted.length - 1) {
        var lineValid = isValid(Number(splitted[i]), Number(splitted[i + 1]), direction);
        i++;
    }
    return lineValid;
}

function getDirection(firstElement: number, secondElement: number) {
    var direction: string = "increasing";
    if (firstElement > secondElement) {
        direction = "decreasing";
    }
    return direction;
}

function isValid(firstElement: number, secondElement: number, direction: string) {
    let diff = Math.abs(secondElement - firstElement);
    let increasingOrDeacrising = (direction == "increasing" && secondElement > firstElement) || (direction == "decreasing" && secondElement < firstElement) && firstElement != secondElement;
    var result = diff <= 3 && increasingOrDeacrising
    return result;
}

var reader = rd.createInterface(fs.createReadStream('.\\input2.txt'))
console.log("Hello");
var counter: number = 0;
var counterTask2: number = 0;
reader.on("line", (line: string) => {
    var splitted = line.split(" ");
    var lineValid = isLineValid(splitted);
    if (lineValid) {
        counter += 1;
    }
    else {
        var isAnyLineValid = false;
        var currentIndex = 0;
        while (!isAnyLineValid && currentIndex < splitted.length) {
            var newArray: string[] = new Array();
            splitted.forEach((value, index) => {
                if (index != currentIndex) {
                    newArray.push(value);
                }
            });
            isAnyLineValid = isLineValid(newArray);
            currentIndex++;
        }
        if (isAnyLineValid) {
            counterTask2 += 1;
        }
    }
})
reader.on("close", () => {
    var result: string = `result Task1: ${counter}, result Task2: ${counter + counterTask2}`;
    console.log(result);
})