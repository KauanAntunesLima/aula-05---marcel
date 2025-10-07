/******************************************************************************************
 * Objetivo: API responsavel em criar endPoints referente estados e cidades
 * Data: 15/09/2025
 * Autor: Kauan 
 * Versão 1.0
 * ****************************************************************************************/
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Import do arquivo de funções  
const dadosWhatts = require('./modulos/funcoes.js')

//Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta
//em execução local podemos falar definir uma porta livre
const PORT = process.PORT || 8080

//Instancia na classe do express
const app = express()

app.use((request, response, next)=>{
    response.header('Acess-Control-Allow-Origin', '*')//IP de Origem
    response.header('Acess-Control-Allow-Methods', 'GET')//Métodos (Vebos) do protocolo HTTP

    app.use(cors())
    next()//Proximo
})
//EndPoints
app.get('/v1/whatts/informacoes', function(request, response){
    let informacoes = dadosWhatts.getAllDados()

    response.status(informacoes.statuscode)
    response.json(informacoes)

})

app.get('/v1/whatts/perfil/:number', function(request, response){
    let numero = request.params.number
    let usuarioDados = dadosWhatts.getDadosProfile(numero)

    response.status(usuarioDados.statuscode)
    response.json(usuarioDados)
})

app.get('/v1/whatts/perfil/contatos/:number', function(request, response){
    let numero = request.params.number
    let contatosUsuarios = dadosWhatts.getDadosContatos(numero)

    response.status(contatosUsuarios.statuscode)
    response.json(contatosUsuarios)
})

app.get('/v1/whatts/perfil/mensagens/:number', function(request, response){
    let numero = request.params.number
    let mensagensUsuario = dadosWhatts.getMensagens(numero)

    response.status(mensagensUsuario.statuscode)
    response.json(mensagensUsuario)
})

app.get('/v1/whatts/conversas/:number1/:number2', function(request, response){
    let number1 = request.params.number1
    let number2 = request.params.number2
    
    let conversas  = dadosWhatts.getConversas(number1, number2)

    response.status(conversas.statuscode)
    response.json(conversas)
})



app.listen(PORT, function(){
    console.log('api aguardando...')
})