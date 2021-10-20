import Vector from "./vector";
import Scalable from "./scalable";

export default class Food extends Scalable{
    constructor(scale: number, position: Vector){
        super(scale,position);
    }

    draw(context: CanvasRenderingContext2D){
        context.fillStyle = "#EC0F36";
        super.draw(context);
    }
}