// Enumeraciones
enum TiposDeComida{
    Mexicana,
    China,
    Italiana
}

let comida: TiposDeComida = TiposDeComida.Mexicana;


// Opciones
function guardar(objeto?: string){
    objeto?.split("");  // Checa si es nulo y contionua la ejecución
    objeto!.split("");  // Asegura que no va a ser nulo
}

// Casteo

function casteo(numero?: string){
    let num = numero as unknown as number;
}