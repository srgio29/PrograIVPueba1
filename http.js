const http = require('http')
const host = localhost
const port = yargs.argv.a
const server = http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'Content-Type':'application'})
    respuesta.write(console.log(yargs.argv))
    respuesta.end

})

server.listen(yargs.argv.a,host,function(error){
    console.log(`Servidor disponigle: http://${host}:${port}`)
})