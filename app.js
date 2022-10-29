


const yargs = require('yargs')
    .option('a',{type:'number'})

    let respuesta =0
    for (b = 1; b<=10; b++){
    let respuesta

        respuesta = yargs.argv.a*b
        console.log("multiplicando:",yargs.argv.a)
        console.log("multiplicador:",b)
        console.log("Producto:",respuesta)
    }

console.log(yargs.argv)

