export function DownLeft(point: Point): Point {
    let retPoint: Point = Down(point);
    return Left(retPoint);
}export function Up(point: Point): Point {
    return { x: point.x - 1, y: point.y };
}
export type Point = {
    x: number;
    y: number;
};
export function isPointOk(point: Point, array: any[]) {
    return point.x < array.length && point.y < array[0].length && point.x > -1 && point.y > -1;
}
export type Direction = (a: Point) => Point;
export function Down(point: Point): Point {
    return { x: point.x + 1, y: point.y };
}
export function Left(point: Point): Point {
    return { x: point.x, y: point.y - 1 };
}
export function Right(point: Point): Point {
    return { x: point.x, y: point.y + 1 };
}
export function UpLeft(point: Point): Point {
    let retPoint: Point = Up(point);
    return Left(retPoint);
}
export function UpRight(point: Point): Point {
    let retPoint: Point = Up(point);
    return Right(retPoint);
}
export function DownRight(point: Point): Point {
    let retPoint: Point = Down(point);
    return Right(retPoint);
}

