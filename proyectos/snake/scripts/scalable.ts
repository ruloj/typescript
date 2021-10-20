import Vector from './vector'

export default class Scalable {
    private _scale: number;
    private _position: Vector;

    constructor(scale: number, position: Vector){
        this._scale = scale;
        this._position = position;
    }

    get position() {
        return this._position;
    }

    get scale() {
        return this._scale;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillRect(
            this._position.x * this._scale,
            this._position.y * this._scale,
            this._scale,
            this.scale
        );
    }
}