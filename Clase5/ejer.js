var comida = {
    nombreComida: "Pozole",
    tipoDeComida: "Mexicana",
    ingredientes: ["Chile, Maiz, Pozole"],
    calificacion: "Buena"
};
var persona = {
    edad: 15,
    nombre: "Raúl",
    genero: "Masculino",
    comer: function (comida) {
        console.log(comida);
        return "excelente servicio";
    }
};
console.log(persona);
persona.comer(comida);
