// Reutilizar componentes

// Sintaxis
    // function myFunction(value: number | string){
    //     //Instrucciones
    //     return value;
    // }

    // let miValor = myFunction(10);
    // miValor.

function myFunction<T extends number | string>(value:T){
    //Instrucciones
    return value;
}

let miValor = myFunction<number>(10);
miValor.toExponential(1);

let miValor2 = myFunction<string>("hola");
miValor2.charAt(3);

function  longitud<T extends string | Array<any>>(valor:T){
    return valor.length;
}

function tipo<T extends boolean | string | number>(valor: T){
    if(typeof valor === "boolean"){
        return "Booleano";
    }
    else if(typeof valor === "string"){
        return "Cadena de caracteres";
    }
    else{
        return "numero";
    }
}



//Arreglos
let miArr: string[];
let miArreglo: Array<String> = [];  // Interface Generic

miArreglo.push("hola");


interface Juguete {
    id: string;
    nombre: string;
}

//Promesas
let promesas = new Promise<Juguete>((resolve, rejected) => {
    //Algo
    resolve({ id: "1", nombre: "Juguete1" });

    // Si falla
    rejected("Error");
});


// Interfaces y clases

interface Lenguage<T extends number, U extends string> {
    cantidadCaracteres: T;
    caracteres: U[];

    printNCaracteres(n: T): void;
}


interface Producto<T> {
    productos: T[];
    obtenerProducto(index: number): T;
    guardarProducto(Producto: T): string;
}

interface Lacteos {
    id: string;
    nombre: string;
    precio: number;
}


interface Comidas {
    id: string;
    nombre: string;
    precio: number;
}

// class Producto implements Producto<Lacteos>{
class Producto<T>{
    productos:T[] = [];
    obtenerProducto(index: number) {
        return this.productos[index];
    }
    guardarProducto(producto: T){
        this.productos.push(producto);
        return "Insertado!";
    }
}

let myEcommerce = new Producto<Lacteos>();
myEcommerce.obtenerProducto(5);

let myEcommerc1e = new Producto<Comidas>();
myEcommerc1e.guardarProducto({id:"12", nombre:"tacos", precio: 12});


