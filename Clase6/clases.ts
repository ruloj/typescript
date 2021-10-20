function sumar(num1: number, num2?: number){

}

sumar(1);

// ? Indica que es opcional


class Vehiculo {
    protected motor: string;
    protected color: string;

    constructor(color: string, motor: string){
        this.motor = motor;
        this.color = color;
    }

    moverse() {
        console.log("Moviendose.... ");
    }
}


// class Juguete {
//     private _precio?: number;
//     private _color?: string;

//     set precio(_precio: number){
//         this._precio = _precio;
//     }

//     get color(){
//         if(this._color) {
//             return this._color;
//         }
//         return "";
//     }
// }

// let soldadito = new Juguete();
// sol

class Auto extends Vehiculo{
    // Atributos
    private readonly _numLlantas: number;
    private readonly _color: string;
    private _placas?: string;
    private readonly _estado: boolean;

    // Constructores
    constructor(numLLantas: number, color: string, placas?: string) {
        super(color, "Motor V8");
        this._numLlantas = numLLantas;
        this._color = color;
        this._placas = placas;
        this._estado = false;
    }

    // readOnly semejante a const, solo que el valor no se conoce hasta en tiempo de ejecución
    // constructor(readonly numLLantas: number, readonly color: string){}

    //  Métodos
    arrancar(llave: String) {
        console.log("llave: " + llave);
        console.log("Arrancando....");
    }

    // Getters
    get placas(){
        if(this._placas) {
            return this._placas;
        }
        return "";
    }

    set placas(placa: string){
        this._placas = placa;
    }

}

let auto1 = new Auto(4,"Azul");
auto1.arrancar("Llave");

let auto2 = new Auto(4,"Rojo", "1243");
auto2.arrancar("Llave");

auto1.placas; //getter
auto1.placas = "abcd"
