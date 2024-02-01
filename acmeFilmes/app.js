const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const funcoes = require('./model/mani_array_json')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')
    app.use(cors)
    next()
})


app.get('/clientes/', cors(), async(request, response, next) => {

    response.json(funcoes.getClientes())
    response.status(200)

})

app.get('/comentarios/', cors(), async(request, response, next) => {

    response.json(funcoes.getComentarios())
    response.status(200)

})


app.get('/produtos', cors(), async(request, response, next) => {

    let produto = require('./model/mani_array_json')
    let produtos = produto.mostrarProdutos();

    response.json(produtos)
    response.status(200)

})

app.listen(8080, function() {
    console.log('API funcionando e aguardando requisições')
})