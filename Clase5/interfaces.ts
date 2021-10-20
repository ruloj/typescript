
interface Humano {
    edad: number;
    nombre: string;

    comer: (comida: string) => boolean;
}

interface Profesor extends Humano {
    id: string;
    materiasAsignadas: string[];
}

let profe: Profesor = {
    edad: 15,
    nombre: 'Raul',
    comer: (comida: string) => {
        return true;
    },

}

interface Alumno extends Humano {
    boleta: string;
    materias: string[];
}

const juan: Alumno = {
    boleta: "12121212",
    materias: ['mat1','mat2'],
}

// class EstudianteEscom implements Alumno {
//     //readonly, similar a final (Java)
//     constructor(readonly edad: number, readonly nombre: string, readonly materias: string[], boleta: string);
//     comer(comida: string){
//         return true;
//     }
// }