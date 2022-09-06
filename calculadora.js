const process = require('process');
const operacion = process.argv[2];
const n1 = +process.argv[3];
const n2 = +process.argv[4];

const sumar = require('./sumar')
const restar = require('./restar')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')


if(operacion === 'sumar'){
    console.log(sumar(n1,n2))
} else if (operacion === 'restar'){
    console.log(restar(n1,n2))
} else if (operacion === 'multiplicar'){
    console.log(multiplicar(n1,n2))
} else if (operacion === 'dividir') {
    console.log(dividir(n1,n2))
};