export type Point = {
    x: number;
    y: number;
};
export type Direction = (a: Point) => Point;

export function Up(point: Point): Point {
    return { x: point.x - 1, y: point.y };
}
export function Down(point: Point): Point {
    return { x: point.x + 1, y: point.y };
}
export function Left(point: Point): Point {
    return { x: point.x, y: point.y - 1 };
}
export function Right(point: Point): Point {
    return { x: point.x, y: point.y + 1 };
}