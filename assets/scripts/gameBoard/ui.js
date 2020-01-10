'use strict'

const store = require('./../store')
//
const gameResult = function (response) {
  $('#game-result').text('💻Youwon👍')
  console.log(response)
}

const signUpFailure = function (error) {
  $('#message').text('🔴sign up failed!❌')
  console.log(error)
}

const signInSuccess = function (response) {
  $('#message').text('💻Successfully signed in!👍')
  $('#game-message').text('X its your turn')
  store.user = response.user
  $('#pwd-change').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.gameboard').show()
  $('#or-text').hide()
  $('#game-message').show()

  console.log(response)
}

const signInFailure = function (error) {
  $('#message').text('sign up failed!😩')
  console.log(error)
}
const pWdChangeSuccess = function (response) {
  $('#message').text('PWD Changed✓👌')
  console.log(response)
}

const pWdChangeFailure = function (error) {
  $('#message').text('😌Cant change your password🤯')
  console.log(error)
}

const signOutSuccess = function (response) {
  $('#message').text('Signed Out Success🏃')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#pwd-change').hide()
  $('#sign-out').hide()
  $('.gameboard').hide()
  console.log(response)
}

const signOutFailure = function (error) {
  $('#message').text('Signed Out Failed 😥')
  console.log(error)
}

// const playerClicks = function (click) {
//   $('#box-0').text('X')
//   console.log(click)
// }

module.exports = {
  gameResult,
  signUpFailure,
  signInSuccess,
  signInFailure,
  pWdChangeSuccess,
  pWdChangeFailure,
  signOutSuccess,
  signOutFailure
}
