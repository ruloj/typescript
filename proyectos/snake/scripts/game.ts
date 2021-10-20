import Snake, { Direction } from "./snake";
import Vector from "./vector";
import Food from "./food";
import Random from "./random";
import { EventEmitter } from 'events'

export enum KEYS {
    ARROW_LEFT = 37,
    ARROW_UP,
    ARROW_RIGHT,
    ARROW_DOWN 
}

export interface GameSettings {
    width?: number;
    heigt?: number;
    scale?: number;
    speed?: number;
}

const DefaultSettings: GameSettings = {
    width : 40,
    heigt: 30,
    scale: 40,
    speed: 50,
}

export default class Game extends EventEmitter {
    context: CanvasRenderingContext2D;
    settings: GameSettings;
    snake: Snake;
    food?: Food;
    timestamp?: number;
    nextKey: number | null;
    score: number;

    constructor(canvas: HTMLCanvasElement, settings: GameSettings = {}){
        super();
        this.context = canvas.getContext("2d")!;
        this.settings = {...DefaultSettings, ...settings};

        this.score = 0;
        this.nextKey = null;
        this.snake = new Snake(this.settings.scale!, new Vector(0,0))
    }

    start() {
        this.canvas.width = this.settings.width! * this.settings.scale!;
        this.canvas.height = this.settings.heigt! * this.settings.scale!;

        this.atachKeyboard();
        this.placeFood();
        this.update();
    }

    atachKeyboard(){
        document.addEventListener("keydown", e => {
            if(this.nextKey == null || this.nextKey != e.keyCode){
                this.nextKey = e.keyCode;
            }
        });
    }

    placeFood(){
        const x = Random.generate(0, this.settings.width! - 1);
        const y = Random.generate(0, this.settings.heigt! - 1);

        this.food = new Food(this.settings.scale!, new Vector(x,y));
    }

    update(timestamp?: number) {
        timestamp = timestamp || 0;
        this.context.fillStyle = "black":
        this.context.fillRect(0,0, this.canvas.width, this.canvas.height);
        this.snake.draw(this.context);

        if(timestamp - this.timestamp! >= this.settings.speed!) {
            this.timestamp = timestamp;
            this.checkKey();
            if(this.snake.move(this.settings.width! - 1, this.settings.heigt!)) {
                this.emit("over", this.score);
                return;
            }
            this.checkFoodCollision();
        }

        this.food?.draw(this.context);

        requestAnimationFrame(this.update.bind(this));
    }

    checKey() {
        if(this.nextKey === null) {
            return;
        }
        switch (this.nextKey){
            case KEYS.ARROW_LEFT:
                this.snake.direction = Direction.LEFT;
                break;
            case KEYS.ARROW_UP:
                this.snake.direction = Direction.UP;
                break;
            case KEYS.ARROW_RIGHT:
                this.snake.direction = Direction.RIGHT;
                break;
            case KEYS.ARROW_DOWN:
                this.snake.direction = Direction.DOWN;
                break;
        }
        this.nextKey = null;
    }

    checkFoodCollision(){
        if(this.snake.position.equals(this.food?.position!)) {
            this.snake.eat(this.food!)
            this.emit('score',)
        }
        this.placeFood();
    }

    get canvas() {

    }

}