'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// variable for game start or finish
const gameOver = false

// create a veriable  arrays ofempty strings to use
const gameBoard = ['', '', '', '', '', '', '', '', '']

// golable variable value for the default player
let currentPlayer = 'X'

// wining patterns that determins a winner based on the combination
// const winingPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
//   [2, 5, 8], [0, 4, 8], [2, 4, 6]]

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
  checkWining()
}

// if top row is a win
// else if middle row is a win
// else if bottom row is a win
// else if left column is a win
// else if middle aolumn is a win
// else if right column is a win
// else if right diagonal is a win
// else if left diagonal is a win


// for (let i=o, i < winingPatterns.length, i++)
const checkWining = () => {
  // if top row is a win
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    console.log('You Win')
    // else if middle row is a win
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[2]) {
    console.log('You Win')
  // else if middle row is a win
  } else {
    console.log('You Didnt Win')
}
  // } else if (winingPatterns[1] == 'X') {
  //   console.log('You Win')
  // } else if (winingPatterns[2] == 'X') {
  //   console.log('You Win')
  // } else if (winingPatterns[3] === 'X') {
  //   console.log('You Win')
  // } else if (winingPatterns[4] === 'X') {
  //   console.log('You Win')
  // } else if (winingPatterns[5] === 'X') {
  //   console.log('You Win')
  // } else if (winingPatterns[6] === 'X') {
  //   console.log('You Win')
  // } else if (winingPatterns[7] === 'X') {
  //   console.log('You Win')
  // } else if (winingPatterns[8] === 'X') {
  //   console.log('You Win')
  // }
}

//   for (let i = 0; i < winingPatterns.length; i++) {
//     if (winingPatterns[i] === ['X', 'X', 'X'] )
//     || gameBoard === ['O', 'O', 'O']) {
//       console.log('You Win')
//     } else {
//       console.log('You Less')
//     }
//   }
// }

// check gameboard for wining patterns and if that make sense declare the winner

const addHandlers = () => {
  $('.box').one('click', onClick)
}

module.exports = {
  addHandlers
}
