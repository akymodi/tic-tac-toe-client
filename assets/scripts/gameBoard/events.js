'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// variable for game start or finish
const gameOver = false

// create a veriable  arrays ofempty strings to use
let gameBoard = ['', '', '', '', '', '', '', '', '']

// golable variable value for the default player
let currentPlayer = 'X'

// wining patterns that determins a winner based on the combination
const winingPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
  [2, 5, 8], [0, 4, 8], [2, 4, 6]]



// function that gets the ID, pass the value and checks the players turn
const onClick = (event) => {
  event.preventDefault()

  // getting the ID of the box clicked
  const id = event.target.id
  console.log(id)

  // this put current player value on the board
  $(event.target).text(currentPlayer)

  // getting the value from the current value and passing it on to the empty arrays
  gameBoard[id] = currentPlayer
  console.log(gameBoard)

  // ternery operator that switches the player turn
  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X'
}

// for (let i=o, i < winingPatterns.length, i++)
// check gameboard for wining patterns and if that make sense declare the winner

const addHandlers = () => {
  $('.box').one('click', onClick)
}

module.exports = {
  addHandlers
}
