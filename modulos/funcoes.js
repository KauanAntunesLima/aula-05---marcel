/**********************************************************************************************************************
 * Objetivo: Arquivo responsável pelas funções para criar a API de estados e cidades
 * Data: 24/09/2025
 * Autor: Kauan
 * Versão 1.0
 **********************************************************************************************************************/
// Import do arquivo contatos
const dados = require('./contatos.js')
const MESSAGE_ERROR = {status : false, statuscode: 500, development: 'Kauan Antunes Lima'}

const getAllDados = function(){
let message = {status: true, statuscode: 200, development: 'Kauan Antunes Lima', contatos: []}

dados.contatos['whats-users'].forEach(function(item){
    message.contatos.push(item.id)
    message.contatos.push(item.account)
    message.contatos.push(item.nickname)
    message.contatos.push(item['created-since'])
    message.contatos.push(item['profile-image'])
    message.contatos.push(item.number)
    message.contatos.push(item.background)
    message.contatos.push(item.contacts)

})
//console.log(message)
}

const getDadosProfile = function(idUsuario){
let id = !isNaN(idUsuario)

let message = {status: true, statuscode: 200, development: 'Kauan Antunes Lima', contatos: id }

dados.contatos['whats-users'].forEach(function(item){

    if(item.id == idUsuario){
        message.nome = item.account
        message.nick = item.nickname
        message.foto = item['profile-image']
        message.numero = item.number
        message.cor = item.background
        message.criacao = item['created-since']
    }

 // console.log(message)

 })
}

const getDadosContatos = function(idUsuario){
let id = !isNaN(idUsuario)

 let message = {status: true, statuscode: 200, development: 'Kauan Antunes Lima', contatos: id }

 dados.contatos['whats-users'].forEach(function(item){

    if(item.id == idUsuario){
        message.nome = item.account
        message.foto = item['profile-image']
    }
dados.contacts['whats-users'].forEach(function())
 })
//console.log(message)
}

const getMensagens = function(idUsuario){
let id = !isNaN(idUsuario)

let message = {status: true, statuscode: 200, development: 'Kauan Antunes Lima', contatos: id }

dados.contatos['whats-users'].forEach(function(item){

    if(item.id == idUsuario){
        message.contatos = item.contacts

        const mensagens = item.contacts.map(contacts =>{
            
            return typeof contacts === 'string' ?contacts : contacts.messages
        })
  

    }
})
console.log(message.mensagens)
}
//getAllDados()
//getDadosProfile()
//getDadosContatos('3')
getMensagens('1')