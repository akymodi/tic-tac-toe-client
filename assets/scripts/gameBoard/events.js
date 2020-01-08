'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// golable variable for the gameboard
// let gameboard;

// golable variable value for the default player
let currentPlayer = 'X'

// wining patterns that determins a winner based on the combination
const winingPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
  [2, 5, 8], [0, 4, 8], [2, 4, 6]]

// this variable will store and element with all box class in HTML
// const boxClickable = document.getElementById('box').innerHTML = ''

// const boxClickable = $.get('/index.html', function(data) {
//   $('.box').html(data)
// }
// const boxClickable = document.getElementsByClassName('box').innerHTML

const onClick = (event) => {
  // turn(event.taget.id, playerOne)
  const id = event.target.id
  console.log(id)
  // if (document.getElementsByClassName('box').innerHTML === '') {
  $(event.target).text(currentPlayer)
  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X'
}
// }

// function turn(eventId, player)
// origBoard[eventId] = playerOne
// document.getElementById(eventId).innerText = player;

const addHandlers = () => {
  $('.box').on('click', onClick)
}

module.exports = {
  addHandlers
}
