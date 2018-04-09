/*
 *  Logica de Modelo
 */

const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    let data = '';

    for (let i = 0; i <= limite; i++) {

        data += `${base} * ${i} = ${base*i}\n`;

    }
    console.log(data.blue);


};

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La Base No es un numero, ${base}`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-de-multiplicar-${base}-and-limit-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-de-multiplicar-${base}-and-limit-${limite}.txt`);

        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};