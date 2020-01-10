'use strict'

// const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store')

// variable for game start or finish
let gameOver = false

// create a veriable  arrays ofempty strings to use
const gameBoard = ['', '', '', '', '', '', '', '', '']

// golable variable value for the default player
let currentPlayer = 'X'

// wining patterns that determins a winner based on the combination
// const winingPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
//   [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const startGame = () => {
  event.preventDefault()
//   if (checkWining === true)  {
//   $('#game-message').text(`${currentPlayer} wins`)
// } else {
//   $('#game-message').text(`X its your turn`)
}

// function that gets the ID, pass the value and checks the players turn
const onClick = (event) => {
  event.preventDefault()

  // $('#game-message').text('X its your turn')

  if (!gameOver) {
    // $(event.target).text('X its your turn')
    // getting the ID of the box clicked
    const id = event.target.id
    console.log(id)

    // getting the value from the current value and passing it on to the empty arrays
    gameBoard[id] = currentPlayer
    console.log(gameBoard)

    // ternery operator that switches the player turn
    currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X'

    // this put current player value on the board
    $(event.target).text(currentPlayer)

    // logging message for the next player
    $('#game-message').text(`Next Player its your turn`)

    if (checkWining()) {
      ui.gameResult(store.currentPlayer)
    }
  }
  // if (checkWining() === true) {
  //   $('.game-result').text('Please reset the game to star')
  // }
  // callback checkWinning function to see if the game is over or not
  checkWining()
  // gameStatus()
}

const checkWining = () => {
  // if top row is a win
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    gameOver = true
    console.log('You Win')
    // else if middle row is a win
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    gameOver = true
    console.log('You Win')
  // else if bottom row is a win
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    gameOver = true
    console.log('You Win')
  // else if left column is a win
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    gameOver = true
    console.log('You Win')
  // else if middle aolumn is a win
  } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    gameOver = true
    console.log('You Win')
  // else if right column is a win
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    gameOver = true
    console.log('You Win')
  // else if right diagonal is a win
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    gameOver = true
    console.log('You Win')
  // else if left diagonal is a win
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    gameOver = true
    console.log('You Win')
  // default statement
  } else {
    gameOver = false
    console.log('Game not over yet')
  }
}

// const gameStatus = () => {
//   if (checkWining === true) {
//     $('.game-result').text('Please reset the game to star')
//   } else {
//     $('.game-result').text('game over')
//   }
// }

const addHandlers = () => {
  $('.box').one('click', onClick)
  $('#start-game').on('submit', startGame)
  // $('.game-header h3').html('X its your turn')
  // $('.game-header').on('result', gameResult)
}
module.exports = {
  addHandlers,
  startGame
}
