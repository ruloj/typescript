//Escoge los tipos de datos de las siguientes variables:
let edad1 = 20;
let nombre = "Juanito";
let p = {
    id: 20,
    nombre: "Camiseta",
    categorias: ["Primavera", "Verano"],
    precio: 1202.23,
};
//Crea la clase para esta instancia:
class Juguete {
    set precio(_precio) {
        this._precio = _precio;
    }
    get color() {
        if (this._color) {
            return this._color;
        }
        return "";
    }
}
let soldadito = new Juguete();
soldadito.precio = 20;
console.log(soldadito.color);
class MiClase {
    deletrear(palabra) {
        return palabra.split(" ");
    }
    contar(palabra) {
        return palabra.length;
    }
    imprimir(mensaje) {
        return `${mensaje}`;
    }
}
class LenguajeIngles {
    constructor(caracteres) {
        this.cantidadCaracteres = caracteres.length;
        this.caracteres = caracteres;
    }
    printNCaracteres(n) {
        for (let caracter in this.caracteres) {
            console.log(caracter);
        }
    }
}
//Crea UNA función que te permita obtener la longitud de una cadena de caracteres o
//de algún arreglo que se le pase, solo admite arreglos o strings,usando Generics
function longitud(value) {
    return value.length;
}
let x = longitud("hola");
let y = longitud([1, 2, 3]);
//Crea UNA función que reciba un dato de tipo boolean o string o number y
//dependiendo del tipo imprima en consola "booleano" "cadena de caracteres" o "número"
//Respectivamente, usando generics;
//Nota: typeof nos regresa el tipo de dato de una variable
function tipo(value) {
    if (typeof value === "boolean") {
        console.log("booleano");
    }
    else if (typeof value === "string") {
        console.log("cadena de caracteres");
    }
    else {
        console.log("numero");
    }
}
class Contenedor {
    constructor() {
        this.items = [];
    }
    guardar(item) {
        this.items.push(item);
        return "insertado";
    }
    leer(indice) {
        if (indice >= 0 && indice < this.items.length) {
            return this.items[indice];
        }
        return "No existe ese elemeto";
    }
    imprimir() {
        console.log(this.items);
    }
}
let caja = new Contenedor();
caja.guardar({ id: "JU01", nombre: "spiderman", marca: "Mattel", precio: 20 });
caja.guardar({ id: "RO01", tipo: "pantalon", talla: "M", precio: 150 });
caja.guardar({ id: "BO01", nombre: "Indio", tipoBebida: "cerveza", capacidad: 355 });
caja.guardar({ id: "LI01", nombre: "Norwegian Wood", autor: "Haruki Murakami", existencia: true, precio: 20 });
caja.guardar({ id: "RO02", tipo: "playera", talla: "32", precio: 120 });
caja.guardar({ id: "BO02", nombre: "Pepsi", tipoBebida: "Refresco", capacidad: 1000 });
caja.imprimir();
console.log(caja.leer(4));
console.log(caja.leer(-1));
console.log(caja.leer(6));
console.log(caja.leer(5));
// pull request:
// local
// *cd clase;
// *git add .
// *git commit -m "msg"
// *git push origin mainz
// Github
// code
// contribiut
// open pull request
