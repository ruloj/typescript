function sumar(num1, num2) {
}
sumar(1);
// ? Indica que es opcional
var Auto = /** @class */ (function () {
    // Constructores
    function Auto(numLLantas, color, placas) {
        this.numLlantas = numLLantas;
        this.color = color;
        this.placas = placas;
        this.estado = false;
    }
    // readOnly semejante a const, solo que el valor no se conoce hasta en tiempo de ejecución
    // constructor(readonly numLLantas: number, readonly color: string){}
    //  Métodos
    Auto.prototype.arrancar = function (llave) {
        console.log("llave: " + llave);
        console.log("Arrancando....");
    };
    return Auto;
}());
var auto1 = new Auto(4, "Azul");
auto1.arrancar("Llave");
var auto2 = new Auto(4, "Rojo", "1243");
auto1.arrancar("Llave");
