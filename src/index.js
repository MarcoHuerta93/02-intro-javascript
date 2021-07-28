

const nombre = 'Marco ';
const apellido = 'Huerta';


//const nombre completo = nombre + ' ' + apellido:

const nombreCompleto = `
${nombre} 
${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola Saludo ' +  nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`);