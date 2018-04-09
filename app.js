/*
 * Requireds: https://nodejs.org/dist/latest-v9.x/docs/api/fs.html
 */
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multliplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        //  console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //    console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado. ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Argumento no perimitido');
        break;

}

//console.log(argv);


//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
// let argv2 = process.argv;
// console.log(argv.base);
// console.log('Limite', argv.limite);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado. ${archivo}`))
//     .catch(e => console.log(e));