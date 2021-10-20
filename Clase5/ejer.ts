// type msg = string | number;

// type deletrear = (palabra: string) => string[];
// type contar = (palabra: string) => number;
// type imprimir = (mensaje: msg) => msg;

// interface MisFunciones{
//     deletrar: deletrear;
//     contar: contar;
//     imprimir:imprimir;
// }


// class MiClase implements MisFuciones {
//     deletrear(palabra: string) {
//       return palabra.split(" ");
//     }
  
//     contar(palabra: string) {
//       return palabra.length;
//     }
  
//     imprimir(mensaje: string | number) {
//       return ${mensaje};
//     }
//   }


type Genero = "Femenino" | "Masculino" | "Otro";
type Opinion = String | null;

type TipoComida = "Mexicana" | "China";
type Calificacion = "Buena" | "Mas o menos" | "Mala" | number;

interface Comida {
    nombreComida: string;
    tipoDeComida: TipoComida;
    ingredientes: string[];
    calificacion: Calificacion;
}

type comer = (comida: Comida) =>  Opinion;

interface Humano {
    edad: number;
    nombre: string;
    genero: Genero;
    comer: comer;
}

let comida: Comida = {
    nombreComida: "Pozole",
    tipoDeComida: "Mexicana",
    ingredientes: ["Chile, Maiz, Pozole"],
    calificacion: "Buena"
}

let persona: Humano = {
    edad: 15,
    nombre: "Raúl",
    genero: "Masculino",
    comer: (comida) => {
        console.log(comida);
        return "excelente servicio";
    }
}
console.log(persona);
persona.comer(comida);

