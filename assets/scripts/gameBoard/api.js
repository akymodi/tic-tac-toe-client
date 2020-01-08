'use strict'

const config = require('../config')

const store = require('../store')

const getGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    data: data
  })
}

const addGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getGameByID = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'GET',
    data: data
  })
}

const watchGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id/watch',
    method: 'GET',
    data: data
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  getGame,
  addGame,
  getGameByID,
  updateGame,
  watchGame
}
