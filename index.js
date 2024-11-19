const { registrar, leer } = require('./operaciones');

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log("Por favor, proporciona todos los datos: nombre, edad, tipo, color, enfermedad.");
    } else {
        registrar(nombre, edad, tipo, color, enfermedad);
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.log("Operación no reconocida. Usa 'registrar' o 'leer'.");
}
