export default class Random {
    generate(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()* (max-min))
    }
}


