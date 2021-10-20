import Vector from "./vector";
import Scalable from "./scalable";
import Food from "./food";

export enum Direction {
    LEFT,
    UP,
    RIGHT,
    DOWN
}

export default class Snake extends Scalable{
    direction: Direction;
    tail: Scalable[];

    constructor(scale: number, position: Vector) {
        super(scale,position);
        this.direction = Direction.RIGHT;
        this.tail = [];
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = "#0FD24F";
        super.draw(context);

        context.fillStyle = "#29A050";
        this.tail.forEach( part => {
            part.draw(context);
        });
    }

    move(maxX: number, maxY: number): boolean {
        let x = this.position.x;
        let y = this.position.y;

        switch(this.direction){
            case Direction.LEFT:
                this.position.x--;
                break;
            case Direction.UP:
                this.position.y--;
                break;
            case Direction.RIGHT:
                this.position.x++;
                break;
            case Direction.DOWN:
                this.position.y++;
                break;
        };

        if (this.position.x < 0){
            this.position.x = maxX;
        }
        if (this.position.y < 0){
            this.position.y = maxY;
        }
        if (this.position.x > maxX){
            this.position.x = 0;
        }
        if (this.position.y > maxY){
            this.position.y = 0;
        }

        for (let tpart of this.tail) {
            if(this.position.equals(tpart.position)){
                return true;
            }
            const xtemp = tpart.position.x;
            const ytemp = tpart.position.y;

            tpart.position.x = x;
            tpart.position.y = y;
            x = xtemp;
            y = ytemp;
        }
        return false;
    }

    eat(food: Food) {
        this.tail.push(new Scalable(this.scale, food.position));
    }
}

