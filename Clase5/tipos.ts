type mitipo = number;
let edad: mitipo;

type edad = number | string;
let edadx: edad;
edadx = 10;
edadx = "10";

type Dimension = {size: number};
type DM = { color:string };
type Altura = Dimension & DM;
let ejemplo: Altura;
ejemplo = {
    color: "red",
    size: 12,
}

type TipoDeComida = "Mexicana" | "China" | "Japonesa";

type Comer = (comida: TipoDeComida) => boolean;

interface  funcion {
    comer: Comer;
}

let fun = {
    comer: (comida: TipoDeComida) => {
        return true;
    }
}

//Types para definir
// Alias
// definicion de funciones

// interfaces
// definiciones anidadas

type PersonaNullable = Persona[] | null;

interface Persona {
    edad: number;
    nombre: string;
    hijos: PersonaNullable;
}

const persona1: Persona = {
    edad: 40,
    nombre: "Juan",
    hijos: [
        {edad: 40, nombre: "Juan", hijos: null}
    ],
}

type MultiArray1 = (string | boolean | number)[];
type MultiArray2 = (string[] | boolean[] | number[]);

let arr1: MultiArray1 = ["hola",true,1];
let arr2: MultiArray2 = ["hola","hola1"];
let arr21: MultiArray2 = [true,true];