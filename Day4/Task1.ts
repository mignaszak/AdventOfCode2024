import { Direction, Point, isPointOk, Up, Down, Left, Right, UpRight, UpLeft, DownLeft, DownRight } from "./Common";
import { word } from "./Const";

function findNextCharacter1(array:any[],characterIndex: number, dir: Direction, point: Point) {
    let newPoint = dir(point);
    if (isPointOk(newPoint, array)) {
        if (array[newPoint.x][newPoint.y] == word[characterIndex]) {
            if (characterIndex == word.length - 1) {
                return 1;
            }
            else {
                return (findNextCharacter1(array,characterIndex + 1, dir, newPoint));
            }
        }
    }
    return 0;
}
export function readArray1(array:any[]) {
    var counter: number = 0;
    for (var i in array) {
        for (var j in array[i]) {
            if (array[i][j] == word[0]) {
                counter += findNextCharacter1(array,1, Up, { x: Number(i), y: Number(j) });
                counter += findNextCharacter1(array,1, Down, { x: Number(i), y: Number(j) });
                counter += findNextCharacter1(array,1, Left, { x: Number(i), y: Number(j) });
                counter += findNextCharacter1(array,1, Right, { x: Number(i), y: Number(j) });
                counter += findNextCharacter1(array,1, UpRight, { x: Number(i), y: Number(j) });
                counter += findNextCharacter1(array,1, UpLeft, { x: Number(i), y: Number(j) });
                counter += findNextCharacter1(array,1, DownLeft, { x: Number(i), y: Number(j) });
                counter += findNextCharacter1(array,1, DownRight, { x: Number(i), y: Number(j) });
            }
        }
    }
    return counter;
}
