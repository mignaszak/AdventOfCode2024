import { Point, isPointOk, UpRight, UpLeft, DownLeft, DownRight } from "./Common";

function isPairOk(pair: string[]) {
    pair.sort();
    return pair[0] == 'M' && pair[1] == 'S';
}

function getValue(array:any[],point: Point) {
    return array[point.x][point.y];
}

function validateCharacter(array:any[],point: Point) {
    if (isPointOk(UpLeft(point), array) && isPointOk(DownRight(point), array) && isPointOk(UpRight(point), array) && isPointOk(DownLeft(point), array)) {
        return Number(isPairOk([getValue(array,UpLeft(point)), getValue(array,DownRight(point))]) && isPairOk([getValue(array,UpRight(point)), getValue(array,DownLeft(point))]));
    }
    return 0;
}

export function readArray2(array:any[]) {
    var counter: number = 0;
    for (var i in array) {
        for (var j in array[i]) {
            if (array[i][j] == 'A') {
                counter+=validateCharacter(array,{ x: Number(i), y: Number(j) })
            }
        }
    }
    return counter;
}
